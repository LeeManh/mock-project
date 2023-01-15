import { Container } from './ButtonSelect.styled'

interface Props {
  children?: React.ReactNode
}

const ButtonSelect = ({ children }: Props) => {
  return <Container>{children}</Container>
}

export default ButtonSelect
