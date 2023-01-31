import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { ButtonContainer } from './Button.styled'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  typeBtn?: 'primary' | 'default'
  active?: boolean
  size?: 'default' | 'large'
  children?: React.ReactNode
  isLoading?: boolean
}
const Button = ({ typeBtn = 'default', size = 'default', active = true, children, isLoading, ...rest }: Props) => {
  return (
    <ButtonContainer typeBtn={typeBtn} size={size} active={active} {...rest}>
      {isLoading && <LoadingOutlined />}
      {isLoading ? 'Loading' : children}
    </ButtonContainer>
  )
}

export default Button
