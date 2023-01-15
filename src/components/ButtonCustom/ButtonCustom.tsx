import type { ButtonProps } from 'antd'
import { Container } from './ButtonCustom.styled'

interface Props extends ButtonProps {
  children?: string
}

const ButtonCustom = ({ children, type = 'default', ...rest }: Props) => {
  return (
    <Container type={type} {...rest}>
      {children}
    </Container>
  )
}

export default ButtonCustom
