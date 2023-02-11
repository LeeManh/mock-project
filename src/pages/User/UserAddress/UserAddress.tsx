import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@tanstack/react-query'
import userApi, { BodyUpdateProfile } from 'apis/user.api'
import Button from 'components/Button'
import InputText from 'components/InputText'
import colors from 'constants/colors'
import HeaderUserLayout from 'layouts/UserLayout/HeaderUserLayout/HeaderUserLayout'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { userSchema, UserSchema } from 'utils/rules'
import { useForm } from 'react-hook-form'
import { saveUserLS } from 'utils/auth'
import { updateUser } from 'features/auth/authSlice'
import { useAppDispatch } from 'hooks/useApp'

const Container = styled.div`
  background-color: ${colors.white};
  padding: 0 3rem 5rem 3rem;
  border-radius: 2px;
  min-height: 40rem;
`
const Content = styled.div`
  padding: 5rem 0;
`
const Label = styled.div`
  white-space: nowrap;
  margin-bottom: 2rem;
  font-size: 1.6rem;
  font-weight: 500;
`

type ProfileFromData = Pick<UserSchema, 'address'>
const profileSchema = userSchema.pick(['address'])

const UserAddress = () => {
  const dispatch = useAppDispatch()

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors }
  } = useForm<ProfileFromData>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      address: ''
    }
  })

  const { data: profileData, refetch } = useQuery({
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
      toast.success('Cập nhật địa chỉ thành công 🎉.', { autoClose: 1500, position: 'top-center' })
      refetch()
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const onSubmit = (data: ProfileFromData) => {
    if (data.address === profile!.address) {
      return
    }

    updateProfileMutation.mutate(data)
  }

  useEffect(() => {
    if (profile) {
      setValue('address', profile.address)
    }
  }, [profile, setValue])

  return (
    <Container>
      <HeaderUserLayout title='Địa chỉ của tôi' />
      <Content as={'form'} onSubmit={handleSubmit(onSubmit)}>
        <Label>Địa chỉ</Label>

        <InputText register={register} name='address' errorMessage={errors.address?.message} />

        <div style={{ marginTop: '3rem' }}>
          <Button typeBtn='primary' type='submit' isLoading={updateProfileMutation.isLoading}>
            Cập nhật
          </Button>
        </div>
      </Content>
    </Container>
  )
}

export default UserAddress
