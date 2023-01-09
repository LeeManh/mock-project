import styled from "styled-components";

import { Wrapper } from "globalStyle.styled";
import images from "assets/images";
import Slide from "components/Slide";

const Container = styled.div`
  background: url(${images.background.backgroundMain}) center top / 100%
    no-repeat;
  min-width: 1200px;
  margin: 11.9rem auto 0;
  min-height: 50rem;
`;
const HomeWrap = styled(Wrapper)``;
const BannerWrap = styled.div`
  display: flex;
  align-items: center;
  min-height: 23.5rem;
  max-height: 23.5rem;
  gap: 5px;
  padding-top: 6rem;
`;
const SlideWrap = styled.div`
  flex: 2;
  border-radius: 2px;
  overflow: hidden;
  height: 100%;
`;
const SlideBannerWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;

  img {
    height: 50%;
    cursor: pointer;
    border-radius: 2px;
  }
`;

const Home = () => {
  return (
    <Container>
      <HomeWrap>
        <BannerWrap>
          <SlideWrap>
            <Slide />
          </SlideWrap>
          <SlideBannerWrap>
            <img src={images.slides.slide2} alt="" />
            <img src={images.slides.slide2} alt="" />
          </SlideBannerWrap>
        </BannerWrap>
      </HomeWrap>
    </Container>
  );
};

export default Home;
