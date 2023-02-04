import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Button from 'components/Button'
import InputText from 'components/InputText'
import HeaderUserLayout from 'layouts/UserLayout/HeaderUserLayout/HeaderUserLayout'
import { userSchema } from 'utils/rules'
import { Container, Content, FormChangePassword, ItemForm, LabelForm } from './ChangePassword.styled'
import userApi, { BodyUpdatePassword } from 'apis/user.api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

const updatePasswordSchema = userSchema.pick(['old_password', 'new_password', 'confirm_new_password'])

const ChangePassword = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<BodyUpdatePassword>({
    resolver: yupResolver(updatePasswordSchema),
    defaultValues: {
      old_password: '',
      new_password: '',
      confirm_new_password: ''
    }
  })
  const queryClient = useQueryClient()

  const updatePasswordMutaion = useMutation({
    mutationFn: (body: BodyUpdatePassword) => userApi.upadtePassword(body),
    onSuccess: () => {
      toast.success('Cập nhật mật khẩu thành công 🎉.', { autoClose: 1500, position: 'top-center' })
      reset()
      queryClient.invalidateQueries({ queryKey: ['user-profile'] })
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const onSubmit = (data: BodyUpdatePassword) => {
    console.log(data)
    updatePasswordMutaion.mutate(data)
  }

  return (
    <Container>
      <HeaderUserLayout
        title='Thêm Mật Khẩu'
        describe='Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác'
      />
      <Content onSubmit={handleSubmit(onSubmit)}>
        <FormChangePassword>
          <ItemForm>
            <LabelForm>Mật Khẩu Cũ</LabelForm>
            <InputText
              type='password'
              isHaveEyeIcon
              styleContainer={{ maxWidth: '50rem' }}
              register={register}
              name='old_password'
              errorMessage={errors.old_password?.message}
            />
          </ItemForm>
          <ItemForm>
            <LabelForm>Mật Khẩu Mới</LabelForm>
            <InputText
              type='password'
              isHaveEyeIcon
              styleContainer={{ maxWidth: '50rem' }}
              register={register}
              name='new_password'
              errorMessage={errors.new_password?.message}
            />
          </ItemForm>
          <ItemForm>
            <LabelForm>Xác Nhận Mật Khẩu</LabelForm>
            <InputText
              type='password'
              isHaveEyeIcon
              styleContainer={{ maxWidth: '50rem' }}
              register={register}
              name='confirm_new_password'
              errorMessage={errors.confirm_new_password?.message}
            />
          </ItemForm>

          <ItemForm>
            <LabelForm></LabelForm>
            <Button typeBtn='primary'>Xác nhận</Button>
          </ItemForm>
        </FormChangePassword>
      </Content>
    </Container>
  )
}

export default ChangePassword
