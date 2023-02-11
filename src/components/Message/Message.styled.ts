import colors from 'constants/colors'
import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
`
export const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 34rem;
  height: 18rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TextMessage = styled.div`
  color: ${colors.white};
  font-size: 1.6rem;
  text-transform: capitalize;
`

export const IconWrap = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: #63b5f6;
  border-radius: 50%;
  display: grid;
  place-items: center;
`
