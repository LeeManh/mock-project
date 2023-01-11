import styled from 'styled-components'
import { Swiper, SwiperProps } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

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
`

interface Props extends SwiperProps {
  children?: React.ReactNode
}

const Slide = ({ children, ...rest }: Props) => {
  return (
    <Container>
      <CustomSwiper navigation={true} modules={[Navigation]} {...rest}>
        {children}
      </CustomSwiper>
    </Container>
  )
}

export default Slide
