import { Rate } from 'antd'
import colors from 'constants/colors'
import styled from 'styled-components'

export const HeaderInforWrap = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: stretch;
`
export const HeaderInforItem = styled.div`
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.4rem;
  border-left: 1px solid ${colors['gray-light-2']};

  &:first-child {
    padding-left: 0;
    border-left: 0;
  }
`
export const TextBigHeaderInforItem = styled.div`
  font-size: 1.6rem;
  color: ${(props: any) => (props.color ? props.color : 'inherit')};
  border-bottom: ${(props: { colorBorder?: string }) =>
    props.colorBorder ? `1px solid ${props.colorBorder}` : 'none'};
  font-weight: 500;
`
export const TextSmallHeaderInforItem = styled.div`
  color: ${colors['gray-3']};
`
export const RateCustom = styled(Rate)`
  font-size: 1.6rem;
  color: ${colors.orange};
  padding-bottom: 4px;

  li.ant-rate-star {
    margin-inline-end: 1px !important;
  }
`
