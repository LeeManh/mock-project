import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import colors from 'constants/colors'

const Container = styled.div`
  width: 100%;
`
const Input = styled.input`
  height: 100%;
  width: 100%;
  height: 3.2rem;
  width: 100%;
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
  haveOnBlur?: boolean
  onChangeInput?: (val: string) => void
  styleContainer?: React.CSSProperties
}

const InputNumber = ({ maxValue, value, onChangeInput, haveOnBlur = false, styleContainer, ...rest }: Props) => {
  const [localValue, setLocalValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // remove all non-digit characters.
    let val = e.target.value.replace(/\D/g, '')

    if (val === '0') return

    if (maxValue && +val > +maxValue) {
      val = String(maxValue)
    }

    setLocalValue(val)

    onChangeInput?.(val)
  }

  const handleBlur = () => {
    if (!Number(localValue)) {
      setLocalValue('1')
    }
  }

  useEffect(() => {
    if (value) {
      setLocalValue(value)
    }
  }, [value])

  return (
    <Container style={styleContainer}>
      <Input
        type='text'
        value={value || localValue}
        onChange={handleChange}
        onBlur={haveOnBlur ? handleBlur : () => {}}
        {...rest}
      />
    </Container>
  )
}

export default InputNumber
