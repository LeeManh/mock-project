import React, { forwardRef, useState } from 'react'

import { Container, Input } from './InputNumber.styled'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  maxValue?: string
  value?: string
  styleContainer?: React.CSSProperties
}

const InputNumber = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { maxValue, value, styleContainer, onChange, ...rest } = props

  const [localValue, setLocalValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let val = event.target.value

    if (val === '0') return

    if (maxValue && +val > +maxValue) {
      val = maxValue
    }

    //check is number true || ''
    if (/^\d+$/.test(val) || val === '') {
      setLocalValue(val)
      onChange?.(event)
    }
  }

  return (
    <Container style={styleContainer}>
      <Input {...rest} ref={ref} onChange={handleChange} value={value || localValue} />
    </Container>
  )
})

export default InputNumber
