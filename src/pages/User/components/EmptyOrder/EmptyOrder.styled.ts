import colors from 'constants/colors'
import styled from 'styled-components'

export const Container = styled.div`
  height: 40rem;
  display: grid;
  place-items: center;
  background-color: ${colors.white};
`
export const Image = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
`
