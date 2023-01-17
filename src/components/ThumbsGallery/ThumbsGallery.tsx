import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import useSlide from 'hooks/useSlide'
import {
  BorderThumbnailsImage,
  ButtonSlide,
  Container,
  ThumbMainImage,
  ThumbMainImageWrap,
  ThumbnailsImage,
  ThumbnailsImageWrap,
  ThumbnailsWrap
} from './ThumbsGallery.styled'

const numberMaxImage = 5

interface Props {
  images: string[]
}

const ThumbsGallery = ({ images }: Props) => {
  const { indexImages, activeImage, setActiveImage, currentImages, handlePre, handleNext } = useSlide(
    images,
    numberMaxImage
  )

  return (
    <Container>
      <ThumbMainImageWrap>
        <ThumbMainImage src={activeImage} alt='' />
      </ThumbMainImageWrap>
      <ThumbnailsWrap>
        {currentImages.map((imageUrl, index) => (
          <ThumbnailsImageWrap key={index} onMouseEnter={() => setActiveImage(currentImages[index])}>
            <ThumbnailsImage imageUrl={imageUrl} />
            <BorderThumbnailsImage isActive={activeImage === currentImages[index]} />
          </ThumbnailsImageWrap>
        ))}
        <ButtonSlide typeBtn='pre' onClick={handlePre} disabled={indexImages[0] === 0}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </ButtonSlide>
        <ButtonSlide typeBtn='next' onClick={handleNext} disabled={indexImages[1] === images.length - 1}>
          <FontAwesomeIcon icon={faChevronRight} />
        </ButtonSlide>
      </ThumbnailsWrap>
    </Container>
  )
}

export default ThumbsGallery
