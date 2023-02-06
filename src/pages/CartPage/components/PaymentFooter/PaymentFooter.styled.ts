import colors from 'constants/colors'
import styled from 'styled-components'

export const SectionWrap = styled.div`
  padding: 1.5rem 2rem;
  background-color: ${colors.white};
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 5%) 0px 1px 1px 0px;
`
export const PaymentWrap = styled(SectionWrap)`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const RightPayment = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex: 1;
  justify-content: flex-end;
`
export const RemoveAll = styled.div`
  cursor: pointer;
`
export const PriceTotal = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: ${colors.orange};
`
