import { useState } from "react";
import type { UseFormRegister, FieldValues } from "react-hook-form";
import { Path } from "react-hook-form/dist/types";
import {
  Container,
  ErrorMessage,
  IconEyeClose,
  IconEyeOpen,
  IconEyeWrap,
  Input,
  InputWrap,
} from "./InputText.styled";

interface Props<Data extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  isHaveEyeIcon?: boolean;
  register?: UseFormRegister<Data>;
}

export default function InputText<Data extends FieldValues>(
  props: Props<Data>
) {
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

  const registerResult = register && name ? register(name as Path<Data>) : {};

  return (
    <Container>
      <InputWrap isError={Boolean(errorMessage)}>
        <Input
          type={typeInput}
          name={name}
          {...rest}
          {...registerResult}
          autoComplete="off"
        />
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
}

// export default InputText;
