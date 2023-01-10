import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import InputText from "components/InputText";
import images from "assets/images";
import routePaths from "constants/routePaths";
import {
  ButtonLogin,
  Container,
  Form,
  FormActions,
  FormContent,
  TitleForm,
  Wrap,
  Divider,
  DividerLine,
  DividerText,
  SocialButtonList,
  FormFooter,
  SocialButton,
  SocialIcon,
} from "./Login.styled";
import { authShema } from "utils/rules";
import type { AuthSchema } from "utils/rules";

const socialIcons = [
  {
    src: images.icons.fbIcon,
    alt: "facebook-icon",
    title: "Facebook",
  },
  {
    src: images.icons.googleIcon,
    alt: "googleIcon",
    title: "Google",
  },
  {
    src: images.icons.appleIcon,
    alt: "appleIcon",
    title: "Apple",
  },
];

type FormInputs = Pick<AuthSchema, "email" | "password">;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(authShema),
  });

  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <Container>
      <Wrap>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TitleForm>Đăng nhập</TitleForm>

          <FormContent>
            <InputText
              register={register}
              name="email"
              placeholder="Email/Số điện thoại/Tên đăng nhập"
              errorMessage={errors.email?.message}
            />
            <InputText
              register={register}
              name="password"
              type="password"
              placeholder="Mật khẩu"
              isHaveEyeIcon={true}
              errorMessage={errors.password?.message}
            />
            <ButtonLogin>Đăng nhập</ButtonLogin>

            <FormActions>
              <div>Quên mật khẩu</div>
              <div>Đăng nhập với SMS</div>
            </FormActions>

            <Divider>
              <DividerLine></DividerLine>
              <DividerText>Hoặc</DividerText>
              <DividerLine></DividerLine>
            </Divider>

            <SocialButtonList>
              {socialIcons.map((item, index) => (
                <SocialButton key={index}>
                  <SocialIcon src={item.src} alt={item.alt} />
                  <div>{item.title}</div>
                </SocialButton>
              ))}
            </SocialButtonList>
          </FormContent>

          <FormFooter>
            <span>Bạn mới biết đến Shopee?</span>
            <Link to={routePaths.register}>Đăng ký</Link>
          </FormFooter>
        </Form>
      </Wrap>
    </Container>
  );
};

export default Login;
