import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import {
  Container,
  ErrorMessage,
  IconEyeClose,
  IconEyeOpen,
  IconEyeWrap,
  Input,
  InputWrap,
} from "./InputText.styled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  isHaveEyeIcon?: boolean;
  register?: UseFormRegister<any>;
}

const InputText = (props: Props) => {
  const {
    register,
    errorMessage,
    type = "text",
    isHaveEyeIcon,
    name,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const typeInput = type === "password" && showPassword ? "text" : type;

  const registerResult = register && name ? register(name) : {};

  return (
    <Container>
      <InputWrap>
        <Input type={typeInput} name={name} {...rest} {...registerResult} />
        <IconEyeWrap>
          {isHaveEyeIcon && type === "password" && !showPassword && (
            <IconEyeClose onClick={() => setShowPassword(true)} />
          )}
          {isHaveEyeIcon && type === "password" && showPassword && (
            <IconEyeOpen onClick={() => setShowPassword(false)} />
          )}
        </IconEyeWrap>
      </InputWrap>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
};

export default InputText;
