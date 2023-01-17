import colors from 'constants/colors'
import styled from 'styled-components'

export const MoreInformation = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`
export const MoreInformationLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .text-orange {
    color: ${colors.orange};
  }
  .text-gray {
    color: ${colors['gray-3']};
  }
`
export const PercentSaleTag = styled.div`
  background-color: ${colors.orange};
  color: ${colors.white};
  text-transform: uppercases;
  padding: 2px 4px;
  border-radius: 2px;
  font-size: 1.2rem;
  font-weight: 600;
`
export const PriceAfterSale = styled.div`
  font-size: 3rem;
  font-weight: 500;
  color: ${colors.orange};
`
export const PriceBeforeSale = styled.div`
  font-size: 1.6rem;
  color: ${colors['gray-text']};
  text-decoration: line-through;
`
export const PriceSection = styled.div`
  padding: 1.5rem 2rem;
  background-color: ${colors['white-2']};
  margin-top: 1.5rem;
  border-radius: 2px;
`

export const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`
