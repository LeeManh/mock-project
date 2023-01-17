import { ButtonSearch, Container, Input, SearchIcon } from './InputSearch.styled'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  typeInput?: 'default' | 'primary'
  styleContainer?: React.CSSProperties
}

const InputSearch = ({ typeInput = 'default', styleContainer, type = 'text', ...rest }: Props) => {
  return (
    <Container style={styleContainer} typeInput={typeInput}>
      <Input type={type} {...rest} />

      <ButtonSearch typeInput={typeInput}>
        <SearchIcon />
      </ButtonSearch>
    </Container>
  )
}

export default InputSearch
