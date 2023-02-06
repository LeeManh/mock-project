import styled from 'styled-components'
import colors from 'constants/colors'
import { ContainerGlobal } from 'globalStyle.styled'
import breakPonits from 'constants/breakPoints'

export const Container = styled(ContainerGlobal)``

export const Wrap = styled.div`
  display: flex;
  background-color: ${colors.white};
  border-radius: 2px;
`

export const Content = styled(Wrap)`
  @media screen and (max-width: ${breakPonits.lg}) {
    display: flex;
    flex-direction: column;
  }
`

export const ThumbsGalleryWrap = styled.div`
  width: 45rem;
  padding: 1.5rem;
  flex-shrink: 0;

  @media screen and (max-width: ${breakPonits.lg}) {
    width: 100%;
    max-width: 45rem;
    margin-left: auto;
    margin-right: auto;
  }
`
export const InforWrap = styled.div`
  flex-grow: 1;
  padding: 1.5rem;
`
export const Title = styled.div`
  font-size: 2rem;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
export const MainInforWrap = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const TransportWrap = styled.div`
  display: flex;
`
export const TitleInfor = styled.div`
  width: 11rem;
  flex-shrink: 0;
  color: ${colors['gray-text-2']};
  text-transform: capitalize;
`
export const TransportInforWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const ColorSelectWrap = styled.div`
  display: flex;
`
export const SizeSelectWrap = styled.div`
  display: flex;
`
export const ListSelectButton = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`
export const ListButtonAction = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
`
export const SelectQuantityWrap = styled.div`
  display: flex;
`
export const QuantityWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const LimitQuantityNumber = styled.div`
  color: ${colors['gray-text-2']};
`
