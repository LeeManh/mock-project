import { Avatar } from 'antd'
import Button from 'components/Button'
import InputNumber from 'components/InputNumber'
import InputText from 'components/InputText'
import HeaderUserLayout from 'layouts/UserLayout/HeaderUserLayout/HeaderUserLayout'
import * as S from './UserProfile.styled'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { UserSchema, userSchema } from 'utils/rules'
import { useMutation, useQuery } from '@tanstack/react-query'
import userApi, { BodyUpdateProfile } from 'apis/user.api'
import { useEffect, useMemo, useState } from 'react'
import { getImageUrl, objectEntries } from 'utils/utils'
import { toast } from 'react-toastify'
import InputFile from 'components/InputFile'
import { saveUserLS } from 'utils/auth'
import { useAppDispatch } from 'hooks/useApp'
import { updateUser } from 'features/auth/authSlice'

type ProfileFromData = Pick<UserSchema, 'name' | 'phone' | 'avatar'>
const profileSchema = userSchema.pick(['name', 'phone', 'avatar'])

const UserProfile = () => {
  const dispatch = useAppDispatch()

  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors }
  } = useForm<ProfileFromData>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: '',
      phone: '',
      avatar: ''
    }
  })

  const {
    data: profileData,
    refetch,
    isLoading: isLoadingProfile
  } = useQuery({
    queryKey: ['user-profile'],
    queryFn: userApi.getProfile
  })
  const profile = profileData?.data.data

  const updateProfileMutation = useMutation({
    mutationFn: (body: BodyUpdateProfile) => userApi.updateProfile(body),
    onSuccess: (response) => {
      const userResponse = response.data.data.user
      saveUserLS(userResponse)
      dispatch(updateUser(userResponse))
      toast.success('Cập nhật thông tin thành công 🎉.', { autoClose: 1000 })
      refetch()
    },
    onError: (error) => {
      toast.success('Cập nhật thất bại .', { autoClose: 1000 })
    }
  })

  const uploadAvartarMutation = useMutation({
    mutationFn: (avatar: FormData) => userApi.uploadAvatar(avatar),
    onSuccess: (response) => {
      const userResponse = response.data.data.user
      saveUserLS(userResponse)
      dispatch(updateUser(userResponse))
      toast.success('Cập nhật avartar thành công 🎉.', { autoClose: 1000 })
      refetch()
    },
    onError: (error) => {
      toast.success('Cập nhật thất bại .', { autoClose: 1000 })
    }
  })

  const [file, setFile] = useState<File>()
  const previewImage = useMemo(() => (file ? URL.createObjectURL(file) : ''), [file])

  const onChangeAvatar = (file?: File) => {
    if (file) {
      setFile(file)
    }
  }

  const onSubmit = (data: ProfileFromData) => {
    let _data: Partial<ProfileFromData> = {}

    if (file) {
      uploadAvartarMutation.mutate(file as any)
    }
    for (const [key, value] of objectEntries(data)) {
      if (profile![key] !== value) {
        _data[key] = value
      }
    }
    if (Object.keys(_data).length === 0) return
    updateProfileMutation.mutate(_data)
  }

  useEffect(() => {
    if (profile) {
      setValue('name', profile.name)
      setValue('phone', profile.phone)
      setValue('avatar', profile.avatar)
    }
  }, [profile, setValue])

  if (isLoadingProfile) return null

  return (
    <S.Container>
      <HeaderUserLayout title='Hồ Sơ Của Tôi' describe='Quản lý thông tin hồ sơ để bảo mật tài khoản' />

      <S.ContentUser as={'form'} onSubmit={handleSubmit(onSubmit)}>
        <S.FormUser>
          <S.ItemFormUser>
            <S.LabelForm>Email</S.LabelForm>
            <div style={{ width: '100%' }}>{profile?.email}</div>
          </S.ItemFormUser>

          <S.ItemFormUser>
            <S.LabelForm>
              <div style={{ marginTop: '1.5rem' }}>Tên</div>
            </S.LabelForm>
            <InputText register={register} name='name' errorMessage={errors.name?.message} />
          </S.ItemFormUser>

          <S.ItemFormUser>
            <S.LabelForm>
              <div style={{ marginTop: '1.5rem' }}>Số điện thoại</div>
            </S.LabelForm>

            <Controller
              control={control}
              name='phone'
              render={({ field }) => (
                <InputNumber
                  {...field}
                  onChange={field.onChange}
                  errorMessage={errors.phone?.message}
                  style={{ height: '4rem', textAlign: 'left' }}
                />
              )}
            />
          </S.ItemFormUser>

          <S.ButtonSave
            type='submit'
            typeBtn='primary'
            isLoading={updateProfileMutation.isLoading || uploadAvartarMutation.isLoading}
          >
            Lưu
          </S.ButtonSave>
        </S.FormUser>

        <S.UpdateAvatart>
          <Avatar src={previewImage || (profile?.avatar ? getImageUrl(profile.avatar) : null)} size={102} />

          <InputFile onChange={onChangeAvatar} />

          <S.DescribeUpDate>
            <div>Dụng lượng file tối đa 1 MB</div>
            <div>Định dạng:.JPEG, .PNG</div>
          </S.DescribeUpDate>
        </S.UpdateAvatart>
      </S.ContentUser>
    </S.Container>
  )
}

export default UserProfile
