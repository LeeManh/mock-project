import colors from 'constants/colors'
import styled from 'styled-components'

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
  gap: 2px;
  text-align: center;
`
