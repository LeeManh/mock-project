import Button from 'components/Button'
import styled from 'styled-components'
import colors from 'constants/colors'
import breakPonits from 'constants/breakPoints'

export const Container = styled.div`
  background-color: ${colors.white};
  padding: 0 3rem 5rem 3rem;
  border-radius: 2px;
  min-height: 40rem;
`
export const ContentUser = styled.div`
  display: flex;
  margin-top: 5rem;

  @media screen and (max-width: ${breakPonits.md}) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`
export const FormUser = styled.div`
  flex: 1;
  padding-right: 5rem;
  @media screen and (max-width: ${breakPonits.md}) {
    width: 100%;
    padding-right: 0;
  }
`
export const ItemFormUser = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
`
export const LabelForm = styled.div`
  width: 20%;
  text-align: right;
  color: ${colors['gray-text']};
`
export const DescribeUpDate = styled.div`
  color: ${colors['gray-text']};
  margin-top: 2rem;
`

export const UpdateAvatart = styled.div`
  width: 28rem;
  border-left: 1px solid ${colors['gray-light-2']};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${breakPonits.md}) {
    order: -1;
    border: 0;
  }
`

export const ButtonSave = styled(Button)`
  margin-left: 20%;
  width: 10rem;

  @media screen and (max-width: ${breakPonits.md}) {
    margin: 0 auto;
  }
`
