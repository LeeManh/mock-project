import { RightOutlined } from '@ant-design/icons'
import images from 'assets/images'
import ProductCard from 'components/ProductCard'
import Slide from 'components/Slide'
import colors from 'constants/colors'
import {
  BannerWrap,
  CategoryWrap,
  Container,
  HomeWrap,
  SideBannerWrap,
  BannerSlideWrap,
  CategoryItem,
  CategoryList,
  TopSearchWrap,
  HeaderSection,
  TopSellList,
  TopSearchCard,
  TopSearchCardImage,
  TopSearchCardNumber,
  TopSearchCardTitle,
  IconTop,
  SeeAllLink,
  DiscoveryWrap,
  Title,
  ListDiscoveryProduct,
  ButtonSeeMore,
  ButtonSeeMoreWrap
} from './Home.styled'

const bannerSlides = [
  {
    label: images.banner.slide1,
    alt: ''
  },
  {
    label: images.banner.slide3,
    alt: ''
  },
  {
    label: images.banner.slide4,
    alt: ''
  }
]

const Home = () => {
  return (
    <Container>
      <HomeWrap>
        <BannerWrap>
          <BannerSlideWrap>
            <Slide datas={bannerSlides} />
          </BannerSlideWrap>
          <SideBannerWrap>
            <img src={images.banner.sideBanner} alt='' />
            <img src={images.banner.sideBanner} alt='' />
          </SideBannerWrap>
        </BannerWrap>

        <CategoryWrap>
          <HeaderSection>
            <Title>DANH MỤC</Title>
          </HeaderSection>

          <CategoryList>
            {Array.from({ length: 9 }, (_, index) => (
              <div key={index}>
                <CategoryItem>
                  <img src='https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn' alt='' />
                  <span>Thời trang nam</span>
                </CategoryItem>
                <CategoryItem>
                  <img src='https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn' alt='' />
                  <span>Thời trang nam</span>
                </CategoryItem>
              </div>
            ))}
          </CategoryList>
        </CategoryWrap>

        <TopSearchWrap>
          <HeaderSection>
            <Title bold={true} color={colors.orange}>
              Sản phẩm bán chạy
            </Title>
            <SeeAllLink>
              <span>Xem tất cả</span>
              <RightOutlined />
            </SeeAllLink>
          </HeaderSection>
          <TopSellList>
            {Array.from({ length: 6 }, (_, index) => (
              <TopSearchCard key={index}>
                <TopSearchCardImage src='https://cf.shopee.vn/file/7540a616926ca518ec580864eb364fbf' alt='' />
                <IconTop />
                <TopSearchCardNumber>Bán 30k+ / tháng </TopSearchCardNumber>

                <TopSearchCardTitle>Áo khoác nam</TopSearchCardTitle>
              </TopSearchCard>
            ))}
          </TopSellList>
        </TopSearchWrap>

        <DiscoveryWrap>
          <HeaderSection>
            <Title bold={true} color={colors.orange}>
              Gợi ý hôm nay
            </Title>
            <SeeAllLink>
              <span>Xem tất cả</span>
              <RightOutlined />
            </SeeAllLink>
          </HeaderSection>

          <ListDiscoveryProduct>
            {Array.from({ length: 14 }, (_, index) => (
              <ProductCard key={index}></ProductCard>
            ))}
          </ListDiscoveryProduct>

          <ButtonSeeMoreWrap>
            <ButtonSeeMore>Xem Thêm</ButtonSeeMore>
          </ButtonSeeMoreWrap>
        </DiscoveryWrap>
      </HomeWrap>
    </Container>
  )
}

export default Home
