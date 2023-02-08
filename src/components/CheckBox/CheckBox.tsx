import { CheckBoxShow, Container, InputCheckBox } from './CheckBox.styled'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  styleContainer?: React.CSSProperties
  label?: string
}

const CheckBox = ({ styleContainer, label, checked, ...rest }: Props) => {
  return (
    <Container style={styleContainer}>
      <InputCheckBox type='checkbox' checked={checked} {...rest} />
      <CheckBoxShow isChecked={checked} />
      {label}
    </Container>
  )
}

export default CheckBox
