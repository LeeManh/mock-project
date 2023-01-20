import colors from 'constants/colors'
import { Wrapper } from 'globalStyle.styled'
import styled from 'styled-components'
import images from 'assets/images'
import breakPonits from 'constants/breakPoints'

export const Container = styled.div`
  height: 60rem;
  background-color: ${colors.orange};
`
export const Wrap = styled(Wrapper)`
  display: flex;
  align-items: center;
  background-image: url(${images.background.bgAuth});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  max-width: 1040px;

  @media screen and (max-width: ${breakPonits.md}) {
    background-image: none;
    background-color: ${colors.orange};
  }
`
export const Form = styled.form`
  background-color: ${colors.white};
  width: 40rem;
  min-height: 38rem;
  border-radius: 4px;
  padding: 3rem;
  margin-left: auto;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);

  @media screen and (max-width: ${breakPonits.md}) {
    margin: 0 auto;
    max-width: 40rem;
    width: 100%;
  }
`
export const TitleForm = styled.div`
  font-size: 2rem;
  color: ${colors.black};
  margin-bottom: 3rem;
`
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const FormActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.blue};
  font-size: 1.2rem;

  div {
    cursor: pointer;
  }
`

export const FormFooter = styled.div`
  text-align: center;
  color: ${colors.gray};
  margin-top: 2rem;

  a {
    text-decoration: none;
    color: ${colors.orange};
    margin-left: 4px;
  }
`
