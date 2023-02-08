import { Container, CustomCheckOutlined, IconWrap } from './ButtonSelect.styled'

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  active: boolean
}

const ButtonSelect = ({ children, active, ...rest }: Props) => {
  return (
    <Container {...rest} active={active}>
      {children}

      {active && (
        <IconWrap>
          <CustomCheckOutlined />
        </IconWrap>
      )}
    </Container>
  )
}

export default ButtonSelect
