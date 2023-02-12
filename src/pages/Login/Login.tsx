import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'

import type { AuthSchema } from 'utils/rules'
import type { ErrorResponse } from 'types/utils.type'
import InputText from 'components/InputText'
import routePaths from 'constants/routePaths'
import { Container, Form, FormActions, FormContent, TitleForm, Wrap, FormFooter } from './Login.styled'
import { authShema } from 'utils/rules'
import authApis from 'apis/auth.api'
import { isAxiosUnprocessableEntityError, objectKeys } from 'utils/utils'
import { useAppDispatch } from 'hooks/useApp'
import { loginOrRegisterSuccess } from 'features/auth/authSlice'
import Button from 'components/Button'
import CustomHelmet from 'components/CustomHelmet'

type FormInputs = Pick<AuthSchema, 'email' | 'password'>

const loginSchema = authShema.pick(['email', 'password'])

const Login = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormInputs>({
    resolver: yupResolver(loginSchema)
  })

  const loginMutation = useMutation({
    onSuccess: (data) => {
      const { user } = data.data.data
      dispatch(loginOrRegisterSuccess(user))
    },
    onError: (error) => {
      // check error status = 422
      if (isAxiosUnprocessableEntityError<ErrorResponse<FormInputs>>(error)) {
        const dataError = error.response?.data.data

        if (dataError) {
          objectKeys(dataError).forEach((key) => {
            setError(key, { message: dataError[key], type: 'Server' })
          })
        }
      }
    },
    mutationFn: (body: FormInputs) => authApis.loginAccount(body)
  })

  const onSubmit = (data: FormInputs) => {
    loginMutation.mutate(data)
  }

  return (
    <>
      <CustomHelmet>
        <title>Đăng nhập tài khoản - Mua sắm Online | Shopee Việt Nam</title>
      </CustomHelmet>
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

              <Button
                typeBtn='primary'
                isLoading={loginMutation.isLoading}
                disabled={loginMutation.isLoading}
                style={{ height: '4rem', textTransform: 'uppercase', gap: '1rem' }}
              >
                Đăng nhập
              </Button>

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
    </>
  )
}

export default Login
