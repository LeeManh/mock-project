import styled from 'styled-components'
import { Swiper, SwiperProps } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper'

import colors from 'constants/colors'

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`
const CustomSwiper = styled(Swiper)`
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-pagination-bullet {
    width: 1rem;
    height: 1rem;
    background: #ffffff66;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: ${colors.orange};
    opacity: 1;
  }
`

interface Props extends SwiperProps {
  children?: React.ReactNode
}

const Slide = ({ children, navigation = true, ...rest }: Props) => {
  return (
    <Container>
      <CustomSwiper navigation={navigation} modules={[Navigation, Pagination, Autoplay]} {...rest}>
        {children}
      </CustomSwiper>
    </Container>
  )
}

export default Slide
