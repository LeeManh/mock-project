import { Avatar } from 'antd'
import Button from 'components/Button'
import InputNumber from 'components/InputNumber'
import InputText from 'components/InputText'
import HeaderUserLayout from 'layouts/UserLayout/HeaderUserLayout/HeaderUserLayout'
import {
  Container,
  ContentUser,
  DescribeUpDate,
  FormUser,
  ItemFormUser,
  LabelForm,
  UpdateAvatart
} from './UserProfile.styled'
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
      toast.success('Cập nhật thông tin thành công 🎉.', { autoClose: 1500, position: 'top-center' })
      refetch()
    },
    onError: (error) => {}
  })

  const uploadAvartarMutation = useMutation({
    mutationFn: (body: FormData) => userApi.uploadAvatar(body),
    onSuccess: (response) => {
      toast.success('Cập nhật thông tin thành công 🎉.', { autoClose: 1500, position: 'top-center' })

      refetch()
    },
    onError: (error) => {
      console.log(error)
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
      const formData = new FormData()
      formData.append('image', file)

      uploadAvartarMutation.mutate(formData)
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
    <Container>
      <HeaderUserLayout title='Hồ Sơ Của Tôi' describe='Quản lý thông tin hồ sơ để bảo mật tài khoản' />

      <ContentUser as={'form'} onSubmit={handleSubmit(onSubmit)}>
        <FormUser>
          <ItemFormUser>
            <LabelForm>Email</LabelForm>
            <div style={{ width: '100%' }}>{profile?.email}</div>
          </ItemFormUser>

          <ItemFormUser>
            <LabelForm>
              <div style={{ marginTop: '1.5rem' }}>Tên</div>
            </LabelForm>
            <InputText register={register} name='name' errorMessage={errors.name?.message} />
          </ItemFormUser>

          <ItemFormUser>
            <LabelForm>
              <div style={{ marginTop: '1.5rem' }}>Số điện thoại</div>
            </LabelForm>

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
          </ItemFormUser>

          <Button
            type='submit'
            typeBtn='primary'
            style={{ marginLeft: '20%', width: '10rem' }}
            isLoading={updateProfileMutation.isLoading || uploadAvartarMutation.isLoading}
          >
            Lưu
          </Button>
        </FormUser>

        <UpdateAvatart>
          <Avatar src={previewImage || (profile?.avatar ? getImageUrl(profile.avatar) : null)} size={102} />

          <InputFile onChange={onChangeAvatar} />

          <DescribeUpDate>
            <div>Dụng lượng file tối đa 1 MB</div>
            <div>Định dạng:.JPEG, .PNG</div>
          </DescribeUpDate>
        </UpdateAvatart>
      </ContentUser>
    </Container>
  )
}

export default UserProfile
