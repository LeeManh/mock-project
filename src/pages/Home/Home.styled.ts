import colors from 'constants/colors'
import styled, { css } from 'styled-components'
import { Wrapper, ContainerGlobal } from 'globalStyle.styled'
import images from 'assets/images'
import breakPonits from 'constants/breakPoints'

export const Container = styled(ContainerGlobal)`
  background: url(${images.background.backgroundMain}) center top / 100% no-repeat;
  min-height: 50rem;
`
export const HomeWrap = styled(Wrapper)``
export const BannerWrap = styled.div`
  display: flex;
  gap: 5px;
`
export const BannerSlideWrap = styled.div`
  flex: 2;
  border-radius: 2px;
  overflow: hidden;
  height: 24rem;
  height: 100%;

  @media screen and (max-width: ${breakPonits.sm}) {
    display: none;
  }
`
export const SideBannerWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 24rem;

  img {
    height: calc(50% - 2.5px);
    cursor: pointer;
    border-radius: 2px;
    flex-shrink: 0;
  }

  @media screen and (max-width: ${breakPonits.md}) {
    display: none;
  }
`
const WrapStyles = css`
  background-color: ${colors.white};
  margin-top: 3rem;
`
export const CategoryWrap = styled.div`
  ${WrapStyles}
`
export const Title = styled.div`
  text-transform: uppercase;

  ${(props: { bold?: boolean; color?: string }) => {
    return css`
      font-weight: ${props.bold && 'bold'};
      color: ${props.color && props.color};
    `
  }}
`

export const CategoryItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 1rem;
  cursor: pointer;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  text-transform: capitalize;
  text-align: center;
  font-size: 1.3rem;

  img {
    height: 8rem;
    width: 8rem;
  }
`

export const TopSearchWrap = styled.div`
  ${WrapStyles}
`

export const HeaderSection = styled.div`
  padding: 0 2rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background-color: white;
`

export const TopSearchCard = styled.div`
  cursor: pointer;
  position: relative;
  padding-bottom: 2rem;
`
export const TopSearchCardImageWrap = styled.div`
  position: relative;
`
export const TopSearchCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const TopSearchCardNumber = styled.div`
  position: absolute;
  bottom: 1rem;
  color: ${colors.white};
  text-align: center;
  background-color: rgba(0, 0, 0, 0.26);
  padding: 5px 0;
  margin: 0 auto;
  width: calc(100% - 1rem);
`
export const TopSearchCardTitle = styled.div`
  padding: 1rem;
  font-weight: 500;
  text-align: center;
`
export const IconTop = styled.div`
  background: url(${images.icons.topIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
`

export const ListProductWrap = styled.div`
  ${WrapStyles}

  background-color: transparent;
`
export const ListDiscoveryProduct = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

  @media screen and (max-width: ${breakPonits.xl}) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (max-width: ${breakPonits.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: ${breakPonits.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: ${breakPonits.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: ${breakPonits.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ButtonSeeMore = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.09);
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
  outline: none;
  background: ${colors.white};
  color: ${colors['gray-drak']};
  height: 4rem;
  min-width: 39rem;
  cursor: pointer;

  &:hover {
    background-color: ${colors['gray-light']};
  }
`
