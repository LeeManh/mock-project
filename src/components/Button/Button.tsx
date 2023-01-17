import React from 'react'
import { ButtonContainer } from './Button.styled'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  typeBtn?: 'primary' | 'default'
  active?: boolean
  size?: 'default' | 'large'
  children?: React.ReactNode
}
const Button = ({ typeBtn = 'default', size = 'default', active = true, children, ...rest }: Props) => {
  return (
    <ButtonContainer typeBtn={typeBtn} size={size} active={active} {...rest}>
      {children}
    </ButtonContainer>
  )
}

export default Button
