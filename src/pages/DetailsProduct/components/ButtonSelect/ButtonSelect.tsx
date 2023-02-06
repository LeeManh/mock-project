import { Container } from './ButtonSelect.styled'

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  active: boolean
}

const ButtonSelect = ({ children, active, ...rest }: Props) => {
  return (
    <Container {...rest} active={active}>
      {children}
    </Container>
  )
}

export default ButtonSelect
