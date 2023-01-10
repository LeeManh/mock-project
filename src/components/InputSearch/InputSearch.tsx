import { ButtonSearch, Container, Input, SearchIcon } from './InputSearch.styled'

const InputSearch = () => {
  return (
    <Container>
      <Input type='text' placeholder='#shopxuhuong ĐỒ TẾT SALE 50%' aria-label='#shopxuhuong ĐỒ TẾT SALE 50%' />

      <ButtonSearch>
        <SearchIcon />
      </ButtonSearch>
    </Container>
  )
}

export default InputSearch
