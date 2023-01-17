import colors from 'constants/colors'
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 3rem;
`
export const SectionWrap = styled.div`
  padding: 1.5rem 2rem;
  background-color: ${colors.white};
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 5%) 0px 1px 1px 0px;
`

export const HeaderTabel = styled(SectionWrap)`
  display: flex;
  align-items: center;
`
export const ProductTabel = styled.div`
  width: 40%;
`
export const PriceTabel = styled.div`
  text-align: center;
  width: 20%;
`
export const QuantityTabel = styled.div`
  text-align: center;
  width: 15%;
`
export const TotalTabel = styled.div`
  text-align: center;
  width: 10%;
`
export const ActionsTabel = styled.div`
  text-align: center;
  width: 10%;
`
export const BodyTabel = styled(SectionWrap)`
  margin-top: 1rem;
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
