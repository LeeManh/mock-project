import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import omit from 'lodash/omit'

import type { ErrorResponse } from 'types/utils.type'
import type { AuthSchema } from 'utils/rules'
import InputText from 'components/InputText'
import routePaths from 'constants/routePaths'
import authApis from 'apis/auth.api'
import { authShema } from 'utils/rules'
import { isAxiosUnprocessableEntityError, objectKeys } from 'utils/utils'
import { Container, Form, FormContent, TitleForm, Wrap, FormFooter, RulesWrap } from './Register.styled'
import { useAppDispatch } from 'hooks/useApp'
import { loginOrRegisterSuccess } from 'features/auth/authSlice'
import Button from 'components/Button'
import CustomHelmet from 'components/CustomHelmet'

type FormInputs = Pick<AuthSchema, 'email' | 'password' | 'confirm_password'>

const Register = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormInputs>({
    resolver: yupResolver(authShema)
  })

  const registerMutation = useMutation({
    onSuccess: (data) => {
      const { user } = data.data.data
      dispatch(loginOrRegisterSuccess(user))
    },
    onError(error) {
      // check error status = 422
      if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormInputs, 'confirm_password'>>>(error)) {
        const dataError = error.response?.data.data

        if (dataError) {
          objectKeys(dataError).forEach((key) => {
            setError(key, { message: dataError[key], type: 'Server' })
          })
        }
      }
    },
    mutationFn: (body: Omit<FormInputs, 'confirm_password'>) => authApis.registerAccount(body)
  })

  const onSubmit = (data: FormInputs) => {
    const body = omit(data, 'confirm_password')

    registerMutation.mutate(body)
  }

  return (
    <>
      <CustomHelmet>
        <title>Đăng ký ngay | Shopee Việt Nam</title>
      </CustomHelmet>
      <Container>
        <Wrap>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TitleForm>Đăng ký</TitleForm>

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
              <InputText
                register={register}
                name='confirm_password'
                type='password'
                placeholder='Xác nhận mật khẩu'
                isHaveEyeIcon={true}
                errorMessage={errors.confirm_password?.message}
              />
              <Button
                typeBtn='primary'
                isLoading={registerMutation.isLoading}
                disabled={registerMutation.isLoading}
                style={{ height: '4rem', textTransform: 'uppercase', gap: '1rem' }}
              >
                Đăng ký
              </Button>

              <RulesWrap>
                <div>Bằng việc đăng kí, bạn đã đồng ý với Shopee về</div>
                <div>
                  <span className='link'>Điều khoản dịch vụ</span>
                  <span> & </span>
                  <span className='link'>Chính sách bảo mật</span>
                </div>
              </RulesWrap>
            </FormContent>

            <FormFooter>
              <span>Bạn đã có tài khoản?</span>
              <Link to={routePaths.login}>Đăng nhập</Link>
            </FormFooter>
          </Form>
        </Wrap>
      </Container>
    </>
  )
}

export default Register
