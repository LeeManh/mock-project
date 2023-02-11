import colors from 'constants/colors'
import styled, { css } from 'styled-components'
import { CheckOutlined } from '@ant-design/icons'

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
  text-transform: capitalize;
  position: relative;

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
export const IconWrap = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  right: 0;
  bottom: 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    border: 1.5rem solid transparent;
    border-bottom: 1.5rem solid ${colors.orange};
    right: -1.5rem;
    bottom: 0;
  }
`
export const CustomCheckOutlined = styled(CheckOutlined)`
  color: ${colors.white};
  font-size: 0.8rem;
  z-index: 1;
  position: absolute;
  right: 0;
  bottom: 0;
`
