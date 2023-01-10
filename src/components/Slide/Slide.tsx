import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import colors from 'constants/colors'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const CustomSwiper = styled(Swiper)`
  position: relative;

  .swiper-slide {
    cursor: pointer;
    user-select: none;
  }

  img {
    display: flex;
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

interface Props {
  datas: { label: string; alt?: string }[]
}

const Slide = ({ datas }: Props) => {
  return (
    <Container>
      <CustomSwiper
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          clickable: true
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
      >
        {datas.map((data) => (
          <SwiperSlide>
            <img src={data.label} alt={data.alt} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </Container>
  )
}

export default Slide
