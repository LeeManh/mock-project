import { useState } from 'react'
import { CheckBoxShow, Container, InputCheckBox } from './CheckBox.styled'

interface Props {
  styleContainer?: React.CSSProperties
  label?: string
}

const CheckBox = ({ styleContainer, label }: Props) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Container style={styleContainer}>
      <InputCheckBox type='checkbox' checked={isChecked} onChange={() => setIsChecked((pre) => !pre)} />
      <CheckBoxShow isChecked={isChecked} />
      {label}
    </Container>
  )
}

export default CheckBox
