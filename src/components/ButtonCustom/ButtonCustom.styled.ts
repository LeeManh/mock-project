import colors from 'constants/colors'
import styled, { css } from 'styled-components'
import { Button } from 'antd'
import type { ButtonProps } from 'antd'

export const Container = styled(Button)`
  min-height: 4.8rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
  gap: 5px;
  font: inherit;
  font-size: 1.6rem;

  ${(props: { type: ButtonProps['type'] }) => {
    switch (props.type) {
      case 'default':
        return css`
          color: ${colors.orange};
          border: 1px solid ${colors.orange};
          background-color: ${colors['orange-light-2']};

          &:hover,
          &:active {
            color: ${colors.orange} !important;
            border: 1px solid ${colors.orange} !important;
            background: rgba(128, 44, 17, 0.145);
            box-shadow: inset 0 2px 1px 0 rgb(0 0 0 / 5%);
          }
        `
      case 'primary':
        return css`
          background-color: ${colors.orange};
          color: ${colors.white};

          &:hover,
          &:active {
            background-color: ${colors.orange} !important;
            color: ${colors.white} !important;
            opacity: 0.9;
          }
        `
    }
  }}
`
