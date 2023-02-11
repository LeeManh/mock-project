import styled from 'styled-components'
import colors from 'constants/colors'
import breakPonits from 'constants/breakPoints'

export const Container = styled.div`
  background-color: ${colors.white};
  padding: 0 3rem 5rem 3rem;
  border-radius: 2px;
  min-height: 40rem;
`
export const Content = styled.div`
  padding: 5rem 0;
`
export const FormChangePassword = styled.form``
export const ItemForm = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media screen and (max-width: ${breakPonits.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const LabelForm = styled.div`
  text-align: right;
  width: 20%;
  margin-right: 2rem;
  margin-top: 1.5rem;
  @media screen and (max-width: ${breakPonits.md}) {
    width: 100%;
    text-align: left;
    margin-bottom: 1rem;
  }
`
