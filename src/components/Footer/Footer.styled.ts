import breakPonits from 'constants/breakPoints'
import styled, { css } from 'styled-components'
import colors from 'constants/colors'

export const ImageStyles = css`
  cursor: pointer;
  box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
  padding: 4px;
  background-color: white;
  object-fit: contain;
  flex-shrink: 0;
`

export const Container = styled.footer`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: ${colors.background};
  margin-top: 5rem;
`

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;

  @media screen and (max-width: ${breakPonits.xl}) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 3rem;
  }
  @media screen and (max-width: ${breakPonits.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: ${breakPonits.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const FooterItem = styled.div``
export const FooterItemTitle = styled.div`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  margin-top: ${(props: { mt?: string }) => props.mt};
`
export const FooterItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${(props: { type?: string }) => {
    if (props.type === 'imgList') {
      return css`
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;

        .img-wrap {
          width: 6rem;
          height: 3rem;
          ${ImageStyles}
        }
      `
    }
  }}

  li {
    width: fit-content;
    cursor: pointer;
    font-size: 1.2rem;
    color: ${colors['gray-2']};
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
      color: ${colors.orange};
    }
  }
`

export const DownLoadWrap = styled.div`
  display: flex;
  gap: 5px;
`
export const QrDownLoad = styled.img`
  width: 10rem;
  height: 10rem;
  ${ImageStyles}
`
export const AppsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;

  img {
    width: 6.8rem;
    height: 3rem;
    ${ImageStyles}
  }
`
