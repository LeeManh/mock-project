import colors from 'constants/colors'
import styled from 'styled-components'
import { Grid } from '../ListProducts/ListProducts.styled'

export const Container = styled(Grid)`
  padding: 2rem 3rem;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  background-color: ${colors.white};
  min-width: 90rem;
`
export const InforProduct = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  display: grid;
  grid-template-columns: 4rem 2fr 1fr;
  gap: 2rem;
`

export const ImageProduct = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
`

export const NameProduct = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const TypeProduct = styled.div`
  text-align: left;
  text-transform: capitalize;
  color: ${colors['gray-text']};
`
export const Price = styled.div`
  text-align: center;
`
export const Quantity = styled.div`
  text-align: center;
`
export const Total = styled.div`
  text-align: right;
`
