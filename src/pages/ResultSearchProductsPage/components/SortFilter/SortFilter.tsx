import styled from 'styled-components'
import Select from 'components/Select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Button from 'components/Button'
import breakPonits from 'constants/breakPoints'

const Container = styled.div`
  padding: 1.5rem 2rem;
  background-color: #ededed;
  border-radius: 2px;

  @media screen and (max-width: ${breakPonits.md}) {
    display: none;
  }
`
const ListSortButton = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const SortFilter = () => {
  return (
    <Container>
      <ListSortButton>
        <div>Sắp xếp theo</div>
        <Button typeBtn='primary' size='default'>
          Phổ biến
        </Button>
        <Button typeBtn='primary' size='default' active={false}>
          Mới nhất
        </Button>
        <Button typeBtn='primary' size='default' active={false}>
          Bán chạy
        </Button>
        <Select>
          <Button typeBtn='primary' active={false} style={{ width: '20rem', justifyContent: 'space-between' }}>
            Giá
            <FontAwesomeIcon icon={faChevronDown} />
          </Button>
        </Select>
      </ListSortButton>
    </Container>
  )
}

export default SortFilter
