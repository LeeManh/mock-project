import colors from 'constants/colors'
import styled from 'styled-components'

export const Container = styled.div``

export const SectionWrap = styled.div`
  padding: 1.5rem 2rem;
  background-color: ${colors.white};
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 5%) 0px 1px 1px 0px;
`
export const HeaderTabel = styled(SectionWrap)`
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`
export const ProductTabel = styled.div`
  width: 40%;
  display: flex;
  gap: 1rem;
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
  overflow-x: auto;
`
