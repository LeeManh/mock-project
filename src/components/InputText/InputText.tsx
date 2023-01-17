import React, { useState } from 'react'
import type { UseFormRegister, FieldPath, FieldValues } from 'react-hook-form'

import { Container, ErrorMessage, IconEyeClose, IconEyeOpen, IconEyeWrap, Input, InputWrap } from './InputText.styled'

interface Props<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  isHaveEyeIcon?: boolean
  register?: UseFormRegister<TFieldValues>
  name?: TFieldName
  styleContainer?: React.CSSProperties
}

export default function InputText<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: Props<TFieldValues, TFieldName>) {
  const { register, errorMessage, type = 'text', isHaveEyeIcon, name, styleContainer, ...rest } = props

  const [showPassword, setShowPassword] = useState(false)

  const typeInput = type === 'password' && showPassword ? 'text' : type

  const registerResult = register && name ? register(name) : {}

  return (
    <Container style={styleContainer}>
      <InputWrap isError={Boolean(errorMessage)}>
        <Input type={typeInput} name={name} {...rest} {...registerResult} autoComplete='off' />
        {type === 'password' && isHaveEyeIcon && (
          <IconEyeWrap>
            {!showPassword && <IconEyeClose onClick={() => setShowPassword(true)} />}
            {showPassword && <IconEyeOpen onClick={() => setShowPassword(false)} />}
          </IconEyeWrap>
        )}
      </InputWrap>
      {register && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  )
}
