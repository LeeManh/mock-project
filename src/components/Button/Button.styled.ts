import colors from 'constants/colors'
import styled, { css } from 'styled-components'
import type { Props } from './Button'

export const ButtonContainer = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
  gap: 5px;
  font: inherit;
  display: flex;
  justify-content: center;
  border: none;
  outline: none;
  white-space: nowrap;
  cursor: pointer;

  ${(props: { typeBtn: Props['typeBtn']; size?: Props['size']; active?: Props['active'] }) => {
    switch (props.typeBtn) {
      case 'default':
        return css`
          color: ${colors.orange};
          border: 1px solid ${colors.orange};
          background-color: ${colors['orange-light-2']};

          &:hover,
          &:active {
            background: rgba(128, 44, 17, 0.145);
            box-shadow: inset 0 2px 1px 0 rgb(0 0 0 / 5%);
          }
        `
      case 'primary':
        if (!props.active) {
          return css`
            background-color: ${colors.white};
            color: ${colors.black};
          `
        }

        return css`
          background-color: ${colors.orange};
          color: ${colors.white};
        `
    }
  }}

  ${(props: { size?: Props['size'] }) => {
    switch (props.size) {
      case 'default':
        return css`
          height: 3.4rem;
          font-size: 1.4rem;
        `
      case 'large':
        return css`
          height: 4.8rem;
          font-size: 1.6rem;
        `
    }
  }}
`
