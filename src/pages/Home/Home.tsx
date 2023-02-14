import { RightOutlined } from '@ant-design/icons'
import ProductCard from 'components/ProductCard'
import Slide from 'components/Slide'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import colors from 'constants/colors'
import { SeeAllLink } from 'globalStyle.styled'
import { SwiperSlide } from 'swiper/react'
import * as S from './Home.styled'
import routePaths from 'constants/routePaths'
import Button from 'components/Button'
import useQueryConfig from 'hooks/useQueryConfig'
import productApis from 'apis/product.api'
import { getImageUrl, formatNumberToSocialStyle, genarateNameId } from 'utils/utils'
import LoadingDots from 'components/LoadingDots/LoadingDots'
import CustomHelmet from 'components/CustomHelmet'
import { isArray } from 'lodash'

const Home = () => {
  const navigate = useNavigate()
  const queryConfig = useQueryConfig()

  const { data: dataListCategory, isLoading: isLoadingListCategory } = useQuery({
    queryKey: ['list-category', queryConfig],
    queryFn: () => productApis.fetchListCategory(),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000
  })
  const listCategory = dataListCategory?.data.data

  const { data: dataListBanner, isLoading: isLoadingListBanner } = useQuery({
    queryKey: ['list-banner'],
    queryFn: () => productApis.fetchListBanner(),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000
  })
  const listBanner = dataListBanner?.data.data

  const { data: dataListTopSellProduct, isLoading: isLoadingListTopSellProduct } = useQuery({
    queryKey: ['list-top-sell-products'],
    queryFn: () => productApis.fetchListTopSellProducts(),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000
  })
  const listTopSellProduct = dataListTopSellProduct?.data.data

  const { data: dataListProducts, isLoading: isLoadingListProducts } = useQuery({
    queryKey: ['list-products', queryConfig],
    queryFn: () => productApis.fetchListProduct(),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000
  })
  const listProducts = dataListProducts?.data.data.data

  if (
    [isLoadingListCategory, isLoadingListBanner, isLoadingListTopSellProduct, isLoadingListProducts].some(
      (item) => item
    )
  ) {
    return <LoadingDots />
  }

  // console.log(dataListProducts)

  return (
    <>
      <CustomHelmet>
        <title>Shopee Việt Nam | Mua và Bán Trên Ứng Dụng Di Động Hoặc Website</title>
      </CustomHelmet>
      <S.Container>
        <S.HomeWrap>
          <S.BannerWrap>
            <S.BannerSlideWrap>
              <Slide
                navigation={true}
                pagination={{
                  clickable: true
                }}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
              >
                {listBanner &&
                  listBanner.map((banner) => (
                    <SwiperSlide key={banner.id}>
                      <img src={getImageUrl(banner.image)} alt={banner.image} style={{ userSelect: 'none' }} />
                    </SwiperSlide>
                  ))}
              </Slide>
            </S.BannerSlideWrap>
            <S.SideBannerWrap>
              <img src={listBanner && getImageUrl(listBanner[0].image)} alt='' />
              <img src={listBanner && getImageUrl(listBanner[1].image)} alt='' />
            </S.SideBannerWrap>
          </S.BannerWrap>

          <S.CategoryWrap>
            <S.HeaderSection>
              <S.Title>DANH MỤC</S.Title>
            </S.HeaderSection>

            <Slide
              slidesPerView={2}
              breakpoints={{
                320: {
                  slidesPerView: 3
                },
                567: {
                  slidesPerView: 4
                },
                768: {
                  slidesPerView: 8
                },
                1024: {
                  slidesPerView: 10
                }
              }}
            >
              {listCategory &&
                listCategory.map((category) => {
                  return (
                    <SwiperSlide key={category.id}>
                      <Link
                        to={{
                          pathname: `${routePaths.categoryProduct}/${genarateNameId({
                            name: category.name,
                            id: String(category.id)
                          })}`
                        }}
                      >
                        <S.CategoryItem>
                          <img src={getImageUrl(category.image)} alt={category.name} />
                          <span>{category.name}</span>
                        </S.CategoryItem>
                      </Link>
                    </SwiperSlide>
                  )
                })}
            </Slide>
          </S.CategoryWrap>

          <S.TopSearchWrap>
            <S.HeaderSection>
              <S.Title bold={true} color={colors.orange}>
                Sản phẩm bán chạy
              </S.Title>
              <Link to={routePaths.topProducts}>
                <SeeAllLink>
                  <span>Xem tất cả</span>
                  <RightOutlined />
                </SeeAllLink>
              </Link>
            </S.HeaderSection>

            <Slide
              slidesPerView={2}
              spaceBetween={10}
              breakpoints={{
                320: {
                  slidesPerView: 2
                },
                567: {
                  slidesPerView: 3
                },
                768: {
                  slidesPerView: 4
                },
                1024: {
                  slidesPerView: 6
                }
              }}
            >
              {listTopSellProduct &&
                listTopSellProduct.map((topProduct) => {
                  const images = JSON.parse(topProduct.image)

                  const nameId = genarateNameId({ name: topProduct.name, id: topProduct.id })

                  return (
                    <SwiperSlide key={topProduct.id}>
                      <Link to={`${routePaths.detailsProduct}/${nameId}})}`}>
                        <S.TopSearchCard>
                          <S.TopSearchCardImageWrap>
                            <S.TopSearchCardImage src={images ? getImageUrl(images[0]) : ''} alt={topProduct.name} />
                            <S.IconTop />
                            <S.TopSearchCardNumber>
                              Bán {formatNumberToSocialStyle(topProduct.numberSell)} + / tháng
                            </S.TopSearchCardNumber>
                          </S.TopSearchCardImageWrap>

                          <S.TopSearchCardTitle>{topProduct.name}</S.TopSearchCardTitle>
                        </S.TopSearchCard>
                      </Link>
                    </SwiperSlide>
                  )
                })}
            </Slide>
          </S.TopSearchWrap>

          <S.ListProductWrap>
            <S.HeaderSection>
              <S.Title bold={true} color={colors.orange}>
                Danh sách sản phẩm
              </S.Title>
            </S.HeaderSection>

            <S.ListDiscoveryProduct>
              {listProducts && listProducts.map((product) => <ProductCard key={product.id} product={product} />)}
            </S.ListDiscoveryProduct>

            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
              <Button
                typeBtn='primary'
                style={{ maxWidth: '20rem', width: '100%' }}
                onClick={() => navigate(routePaths.allProducts)}
              >
                Xem Thêm
              </Button>
            </div>
          </S.ListProductWrap>
        </S.HomeWrap>
      </S.Container>
    </>
  )
}

export default Home
