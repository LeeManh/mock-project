import styled from 'styled-components'
import ItemPurchase from '../components/ItemPurchase'

const Container = styled.div``
const ListPurchase = styled.div`
  padding: 2rem 0;
`

const UserPurchase = () => {
  return (
    <Container>
      <ListPurchase>
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <ItemPurchase key={index} />
          ))}
      </ListPurchase>
    </Container>
  )
}

export default UserPurchase
