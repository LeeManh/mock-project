import colors from 'constants/colors'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  background-color: ${colors.white};
  padding: 2rem;
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 5%) 0px 1px 1px 0px;
`
export const ImageProduct = styled.img`
  min-width: 8rem;
  max-width: 8rem;
  height: 8rem;
  border: 1px solid ${colors['gray-light-2']};
`
export const Name = styled.div``

export const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`
export const TypeProduct = styled.div`
  color: ${colors['gray-text']};
  margin-bottom: 0.5rem;
  text-transform: capitalize;
`
