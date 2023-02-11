import styled from 'styled-components'
import breakPonits from 'constants/breakPoints'

export const Container = styled.div`
  padding: 1.5rem 2rem;
  background-color: #ededed;
  border-radius: 2px;

  @media screen and (max-width: ${breakPonits.md}) {
    display: none;
  }
`
export const ListSortButton = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
