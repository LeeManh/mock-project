import Button from 'components/Button'
import colors from 'constants/colors'
import styled from 'styled-components'

export const ItemOrder = styled.div`
  background-color: ${colors.white};
  margin-bottom: 2rem;
`
export const FooterItem = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
`
export const WrapTotalMoney = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`
export const LabelTotalMoney = styled.div`
  font-size: 1.6rem;
`
export const TotalMoney = styled.div`
  color: ${colors.orange};
  font-size: 2rem;
`
export const ButtonsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`
export const ButtonAction = styled(Button)`
  min-width: 14rem;
`
