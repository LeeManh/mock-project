import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { ErrorMessage, Wrapper } from 'globalStyle.styled'
import ThumbsGallery from 'components/ThumbsGallery'
import CustomBreadcrumb from 'components/CustomBreadcrumb'
import ButtonSelect from './components/ButtonSelect/ButtonSelect'
import InputNumber from 'components/InputNumber'
import {
  ColorSelectWrap,
  Container,
  Content,
  InforWrap,
  LimitQuantityNumber,
  ListButtonAction,
  ListSelectButton,
  MainInforWrap,
  QuantityWrap,
  SelectQuantityWrap,
  SizeSelectWrap,
  ThumbsGalleryWrap,
  Title,
  TitleInfor
} from './DetailsProduct.styled'
import PriceProduct from './components/PriceProduct'
import HeaderInfor from './components/HeaderInfor'
import SimilarProduct from './components/SimilarProduct'
import Description from './components/Description'
import Button from 'components/Button'
import productApis from 'apis/product.api'
import LoadingDots from 'components/LoadingDots/LoadingDots'
import { getIdFromNameId } from 'utils/utils'
import routePaths from 'constants/routePaths'
import { detailsProductSchema, DetailsProductSchema } from 'utils/rules'

const colors = ['Xanh', 'Đen', 'Nâu']
const sizes = ['38', '39', '40', '41']

const DetailsProduct = () => {
  const params = useParams()

  const idProduct = getIdFromNameId(params.idProduct as string)

  const { data: dataDetailsProduct, isLoading: isLoadingDetailsProduct } = useQuery({
    queryKey: ['details-product', idProduct],
    queryFn: () => productApis.fetchDetailsProduct(idProduct as string)
  })
  const detailsProduct = dataDetailsProduct?.data.data

  const { data: dataSimilarProducts, isLoading: isLoadingSimilarProducts } = useQuery({
    queryKey: ['similar-product', detailsProduct?.category_id],
    queryFn: () => productApis.fetchListProduct({ category: String(detailsProduct!.category_id) }),
    enabled: Boolean(detailsProduct?.id)
  })
  const similarProducts = dataSimilarProducts?.data.data.data

  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    trigger,
    formState: { errors }
  } = useForm<DetailsProductSchema>({
    resolver: yupResolver(detailsProductSchema),
    defaultValues: {
      color: '',
      size: '',
      quantity: '1'
    }
  })

  const onSumbitAddToCart = (data: DetailsProductSchema) => {
    console.log(data)
  }

  const isActiveButton = (name: keyof DetailsProductSchema, value: string) => {
    const currentValue = getValues(name)
    return currentValue === value
  }
  const onClickSelectButton = (name: keyof DetailsProductSchema, value: string) => {
    const currentValue = getValues(name)

    if (currentValue === value) {
      setValue(name, '')
    } else {
      setValue(name, value)
    }
    trigger(name)
  }

  if (isLoadingDetailsProduct || isLoadingSimilarProducts) return <LoadingDots />

  if (!detailsProduct) return null

  const itemsBreadcrumb: { path: string; title: string }[] = [
    { path: `${routePaths.home}`, title: 'Shoppe' },
    { path: `${routePaths.categoryProduct}/${detailsProduct.category_id}`, title: `${detailsProduct.category_id}` },
    { path: '', title: `${detailsProduct.name}` }
  ]

  return (
    <Container>
      <Wrapper>
        <CustomBreadcrumb items={itemsBreadcrumb} />

        <Content>
          <ThumbsGalleryWrap>
            <ThumbsGallery images={[detailsProduct.image, detailsProduct.image]} />
          </ThumbsGalleryWrap>

          <InforWrap as={'form'} onSubmit={handleSubmit(onSumbitAddToCart)}>
            <Title>{detailsProduct.name}</Title>
            <HeaderInfor ratings={detailsProduct.rating} numberRatings={1723} numberSold={detailsProduct.numberSell} />

            <PriceProduct
              priceBefore={detailsProduct.price}
              percentSale={detailsProduct.percent_sale}
              isSale={detailsProduct.is_sale}
            />

            <MainInforWrap>
              <ColorSelectWrap>
                <TitleInfor>Màu sắc</TitleInfor>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <ListSelectButton>
                    {colors.map((color, index) => (
                      <ButtonSelect
                        key={index}
                        onClick={() => onClickSelectButton('color', color)}
                        active={isActiveButton('color', color)}
                      >
                        {color}
                      </ButtonSelect>
                    ))}
                  </ListSelectButton>
                  <ErrorMessage>{errors.color?.message}</ErrorMessage>
                </div>
              </ColorSelectWrap>

              <SizeSelectWrap>
                <TitleInfor>Size</TitleInfor>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <ListSelectButton>
                    {sizes.map((size, index) => (
                      <ButtonSelect
                        key={index}
                        onClick={() => onClickSelectButton('size', size)}
                        active={isActiveButton('size', size)}
                      >
                        {size}
                      </ButtonSelect>
                    ))}
                  </ListSelectButton>
                  <ErrorMessage>{errors.size?.message}</ErrorMessage>
                </div>
              </SizeSelectWrap>

              <SelectQuantityWrap>
                <TitleInfor>Số Lượng</TitleInfor>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.05rem' }}>
                  <QuantityWrap>
                    <Controller
                      control={control}
                      name='quantity'
                      render={({ field }) => {
                        return (
                          <InputNumber
                            {...field}
                            maxValue={String(detailsProduct.quantity)}
                            styleContainer={{ width: '8rem', height: '3.2rem' }}
                            allowStartWithZezo={false}
                          />
                        )
                      }}
                    />
                    <LimitQuantityNumber>{detailsProduct.quantity} sản phẩm có sẵn</LimitQuantityNumber>
                  </QuantityWrap>
                  <ErrorMessage>{errors.quantity?.message}</ErrorMessage>
                </div>
              </SelectQuantityWrap>
            </MainInforWrap>

            <ListButtonAction>
              <Button typeBtn='default' size='large' type='submit'>
                <FontAwesomeIcon icon={faCartPlus} />
                Thêm vào giỏ hàng
              </Button>
              <Button typeBtn='primary' size='large'>
                Mua ngay
              </Button>
            </ListButtonAction>
          </InforWrap>
        </Content>

        {detailsProduct?.description && <Description description={detailsProduct.description} />}

        <SimilarProduct similarProducts={similarProducts} categoryId={detailsProduct.category_id} />
      </Wrapper>
    </Container>
  )
}

export default DetailsProduct
