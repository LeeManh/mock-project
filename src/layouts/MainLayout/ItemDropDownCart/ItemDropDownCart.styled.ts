import colors from 'constants/colors'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 38rem;
  padding: 0.5rem 0;
`
export const Image = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  object-fit: cover;
`
export const NameProduct = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 1rem;
`
export const Price = styled.div`
  margin-left: 2.5rem;
  color: ${colors.orange};
`
