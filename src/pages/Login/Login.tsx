import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import InputText from 'components/InputText'
import routePaths from 'constants/routePaths'
import { ButtonLogin, Container, Form, FormActions, FormContent, TitleForm, Wrap, FormFooter } from './Login.styled'
import { authShema } from 'utils/rules'
import type { AuthSchema } from 'utils/rules'

type FormInputs = Pick<AuthSchema, 'email' | 'password'>

const loginSchema = authShema.pick(['email', 'password'])

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = (data: FormInputs) => console.log(data)

  return (
    <Container>
      <Wrap>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TitleForm>Đăng nhập</TitleForm>

          <FormContent>
            <InputText
              register={register}
              name='email'
              placeholder='Email/Số điện thoại/Tên đăng nhập'
              errorMessage={errors.email?.message}
            />
            <InputText
              register={register}
              name='password'
              type='password'
              placeholder='Mật khẩu'
              isHaveEyeIcon={true}
              errorMessage={errors.password?.message}
            />
            <ButtonLogin>Đăng nhập</ButtonLogin>

            <FormActions>
              <div>Quên mật khẩu</div>
            </FormActions>
          </FormContent>

          <FormFooter>
            <span>Bạn mới biết đến Shopee?</span>
            <Link to={routePaths.register}>Đăng ký</Link>
          </FormFooter>
        </Form>
      </Wrap>
    </Container>
  )
}

export default Login
