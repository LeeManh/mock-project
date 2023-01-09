import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import images from "assets/images";
import colors from "constants/colors";

const Container = styled.div`
  width: 100%;
  background-color: red;
`;

const CustomSwiper = styled(Swiper)`
  position: relative;

  .swiper-slide {
    cursor: pointer;
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
`;

const Slide = () => {
  return (
    <Container>
      <CustomSwiper
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
      >
        <SwiperSlide>
          <img src={images.slides.slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.slides.slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.slides.slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.slides.slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.slides.slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.slides.slide1} alt="" />
        </SwiperSlide>
      </CustomSwiper>
    </Container>
  );
};

export default Slide;
