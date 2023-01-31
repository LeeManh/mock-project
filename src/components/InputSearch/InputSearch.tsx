import { ButtonSearch, Container, Input, SearchIcon } from './InputSearch.styled'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  typeInput?: 'default' | 'primary'
  styleContainer?: React.CSSProperties
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearch?: (e: React.FormEvent<HTMLFormElement>) => void
}

const InputSearch = (props: Props) => {
  const { typeInput = 'default', styleContainer, type = 'text', value, onChange, onSearch, ...rest } = props

  return (
    <Container as={'form'} style={styleContainer} typeInput={typeInput} onSubmit={onSearch}>
      <Input type={type} {...rest} value={value} onChange={onChange} />

      <ButtonSearch typeInput={typeInput}>
        <SearchIcon />
      </ButtonSearch>
    </Container>
  )
}

export default InputSearch
