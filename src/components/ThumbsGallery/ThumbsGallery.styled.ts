import breakPonits from 'constants/breakPoints'
import colors from 'constants/colors'
import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
  /* overflow: hidden; */
`
export const ThumbMainImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  margin-bottom: 5px;
`
export const ThumbMainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
`
export const ThumbnailsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  overflow: hidden;
  gap: 5px;
  position: relative;

  @media screen and (max-width: ${breakPonits.xs}) {
    grid-template-columns: repeat(4, 1fr);
  }
`
export const ThumbnailsImageWrap = styled.div`
  position: relative;
  cursor: pointer;
`
export const ThumbnailsImage = styled.div`
  background-image: ${(props: { imageUrl: string }) => props.imageUrl && `url(${props.imageUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  aspect-ratio: 1 / 1;
`
export const BorderThumbnailsImage = styled.div`
  position: absolute;
  inset: 0;
  border: ${({ isActive }: { isActive: boolean }) =>
    isActive ? `2px solid ${colors.orange}` : '2px solid transparent'};
`
export const ButtonSlide = styled.button`
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background-color: transparent;
  color: ${colors.white};
  font-size: 2rem;
  z-index: 10;
  opacity: ${(props: { typeBtn: string; disabled: boolean }) => (props.disabled ? 0.4 : 1)};
  right: ${(props: { typeBtn: string; disabled: boolean }) => props.typeBtn === 'next' && '3px'};
  left: ${(props: { typeBtn: string; disabled: boolean }) => props.typeBtn === 'pre' && '3px'};
`
