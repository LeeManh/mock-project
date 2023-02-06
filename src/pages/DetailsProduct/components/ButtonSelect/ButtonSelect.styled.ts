import colors from 'constants/colors'
import styled, { css } from 'styled-components'

export const Container = styled.div`
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
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${colors.orange};
    border-color: ${colors.orange};
  }

  ${(props: { active: boolean }) =>
    props.active &&
    css`
      color: ${colors.orange};
      border-color: ${colors.orange};
    `}
`
