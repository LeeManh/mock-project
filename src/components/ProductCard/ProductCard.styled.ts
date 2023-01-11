import styled from 'styled-components'

import colors from 'constants/colors'
import { ReactComponent as FreeShip } from 'assets/svgs/free-ship.svg'

export const Container = styled.div`
  border: 1px solid transparent;
  box-shadow: 0 0.0625rem 0.125rem 0 rgb(0 0 0 / 10%);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
    border: 1px solid ${colors.orange};
  }
`
export const ImageProductWrap = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
  position: relative;
`
export const ImageProduct = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const Content = styled.div`
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
`
export const TitleProduct = styled.div`
  min-height: 2.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.3rem;
`
export const FooterProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
  margin-top: auto;
`
export const PriceProductWrap = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
  color: ${colors.orange};
`
export const Currency = styled.span``
export const PriceProduct = styled.span`
  font-size: 1.6rem;
  max-width: 75%;
  flex-grow: 1;
`
export const NumberSold = styled.div`
  color: ${colors['gray-3']};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.3rem;
`
export const SalesTag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.2rem;
  color: ${colors.white};
  background-color: ${colors.yellow};
  padding: 4px 2px;
  width: 3.6rem;
  height: 3.2rem;

  &::after {
    content: '';
    width: 0;
    height: 0;
    left: 0;
    bottom: -4px;
    position: absolute;
    border-color: transparent ${colors.yellow};
    border-style: solid;
    border-width: 0 18px 4px;
  }
`
export const SalesPercentTag = styled.span`
  color: ${colors.orange};
`

export const FreeShipIcon = styled(FreeShip)``
