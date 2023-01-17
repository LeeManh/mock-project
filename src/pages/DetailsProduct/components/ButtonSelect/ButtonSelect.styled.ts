import colors from 'constants/colors'
import styled from 'styled-components'

export const Container = styled.button`
  outline: none;
  border: 1px solid ${colors['gray-light-2']};
  border-radius: 2px;
  padding: 4px 1.2rem;
  background-color: ${colors.white};
  color: ${colors.black};
  cursor: pointer;
  min-width: 8rem;
  min-height: 3.4rem;
  white-space: nowrap;

  &:hover {
    color: ${colors.orange};
    border-color: ${colors.orange};
  }
`
