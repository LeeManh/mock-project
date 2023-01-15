import React, { useState } from 'react'
import styled from 'styled-components'

import colors from 'constants/colors'

const Container = styled.div``
const Input = styled.input`
  height: 100%;
  width: 100%;
  height: 3.2rem;
  width: 8rem;
  text-align: center;
  outline: none;
  border: 1px solid ${colors.gray};
  padding: 0 1rem;

  &:focus {
    border: ${(props: { isError?: boolean }) =>
      props.isError ? `1px solid ${colors.orange}` : '1px solid rgba(0, 0, 0, 0.54)'};

    box-shadow: 0 0 4px rgb(0 0 0 / 14%);
  }
`

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  maxValue?: string
  value?: string
}

const InputNumber = ({ maxValue, value, onChange, ...rest }: Props) => {
  const [localValue, setLocalValue] = useState<string>(value || '1')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // remove all non-digit characters.
    let val = e.target.value.replace(/\D/g, '')

    if (val === '0') return

    if (maxValue && +val > +maxValue) {
      val = String(maxValue)
    }

    setLocalValue(val)

    onChange?.(e)
  }

  const handleBlur = () => {
    if (!Number(localValue)) {
      setLocalValue('1')
    }
  }

  return (
    <Container>
      <Input type='text' value={value || localValue} onChange={handleChange} onBlur={handleBlur} {...rest} />
    </Container>
  )
}

export default InputNumber
