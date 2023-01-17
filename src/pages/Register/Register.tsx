import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import InputText from 'components/InputText'
import routePaths from 'constants/routePaths'
import { ButtonLogin, Container, Form, FormContent, TitleForm, Wrap, FormFooter, RulesWrap } from './Register.styled'
import { authShema } from 'utils/rules'
import type { AuthSchema } from 'utils/rules'

type FormInputs = Pick<AuthSchema, 'email' | 'password' | 'confirm_password'>

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>({
    resolver: yupResolver(authShema)
  })

  const onSubmit = (data: FormInputs) => console.log(data)

  return (
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

            <ButtonLogin>Đăng ký</ButtonLogin>

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
  )
}

export default Register
