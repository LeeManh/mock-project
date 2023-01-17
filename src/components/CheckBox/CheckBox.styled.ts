import styled, { css } from 'styled-components'
import colors from 'constants/colors'

export const Container = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  user-select: none;
`
export const InputCheckBox = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 1px;
  height: 1px;
`
export const CheckBoxShow = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 2px;
  border: 1px solid ${colors['gray-light-2']};
  cursor: pointer;
  position: relative;

  ${(props: { isChecked: boolean }) => {
    if (props.isChecked) {
      return css`
        background-color: ${colors['orange']};
        border-color: ${colors['orange']};

        &::after {
          position: absolute;
          content: '';
          height: 6px;
          width: 11px;
          border-left: 2px solid ${colors.white};
          border-bottom: 2px solid ${colors.white};
          top: 3px;
          left: 3px;
          transform: rotate(-45deg);
          border-color: ${colors.white};
        }
      `
    }
  }}
`
