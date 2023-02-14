import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useParams, useNavigate } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import omit from 'lodash/omit'
import omitBy from 'lodash/omitBy'
import isEmpty from 'lodash/isEmpty'
import { useEffect, useState } from 'react'

import { ErrorMessage, Wrapper } from 'globalStyle.styled'
import ThumbsGallery from 'components/ThumbsGallery'
import CustomBreadcrumb from 'components/CustomBreadcrumb'
import ButtonSelect from './components/ButtonSelect'
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
import { genarateNameId, getIdFromNameId } from 'utils/utils'
import routePaths from 'constants/routePaths'
import { detailsProductSchema, DetailsProductSchema } from 'utils/rules'
import cartApis, { BodyAddToCart } from 'apis/cart.api'
import { useAppSelector } from 'hooks/useApp'
import { selectAuth } from 'features/auth/authSlice'
import Message from 'components/Message'
import CustomHelmet from 'components/CustomHelmet'

const DetailsProduct = () => {
  const params = useParams()
  const { isAuthenticated } = useAppSelector(selectAuth)
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const idProduct = getIdFromNameId(params.idProduct as string)

  const { data: dataDetailsProduct, isLoading: isLoadingDetailsProduct } = useQuery({
    queryKey: ['details-product', idProduct],
    queryFn: () => productApis.fetchDetailsProduct(idProduct as string)
  })
  const detailsProduct = dataDetailsProduct?.data.data.data
  const category = dataDetailsProduct?.data.data.category

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
      isHaveColor: false,
      isHaveSize: false,
      color: '',
      size: '',
      quantity: '1'
    }
  })

  const [showMessage, setShowMessage] = useState(false)
  useEffect(() => {
    detailsProduct?.colors && setValue('isHaveColor', true)
    detailsProduct?.colors && setValue('isHaveSize', true)
  }, [detailsProduct, setValue])

  const addToCartMutation = useMutation({
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['list-cart'] })
      setShowMessage(true)
    },
    mutationFn: (body: BodyAddToCart) => cartApis.addToCart(body)
  })

  const onSumbitAddToCart = (data: DetailsProductSchema) => {
    const _data = omitBy(omit(data, ['isHaveColor', 'isHaveSize']), isEmpty)

    addToCartMutation.mutate({ ..._data, id_product: +detailsProduct!.id })
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
  const onBuyNow = handleSubmit((data: DetailsProductSchema) => {
    const _data = omitBy(omit(data, ['isHaveColor', 'isHaveSize']), isEmpty)

    addToCartMutation.mutate(
      { ..._data, id_product: +detailsProduct!.id },
      {
        onSuccess: (response) => {
          queryClient.invalidateQueries({ queryKey: ['list-cart'] })

          navigate(`${routePaths.cart}`, { state: { idItemCart: response.data.id } })
        }
      }
    )
  })

  if (isLoadingDetailsProduct || isLoadingSimilarProducts) return <LoadingDots />

  if (!detailsProduct) return null

  const itemsBreadcrumb: { path: string; title: string }[] = [
    { path: `${routePaths.home}`, title: 'Shoppe' },
    {
      path: `${routePaths.categoryProduct}/${genarateNameId({
        name: category!.name,
        id: String(detailsProduct.category_id)
      })}`,
      title: `${category?.name}`
    },
    { path: '', title: `${detailsProduct.name}` }
  ]
  const images = detailsProduct.image ? JSON.parse(detailsProduct.image) : ''

  return (
    <>
      <CustomHelmet>
        <title>{detailsProduct.name} | Shopee Việt Nam</title>
      </CustomHelmet>
      <Container>
        <Wrapper>
          <CustomBreadcrumb items={itemsBreadcrumb} />

          <Content>
            {images && (
              <ThumbsGalleryWrap>
                <ThumbsGallery images={images} />
              </ThumbsGalleryWrap>
            )}

            <InforWrap as={'form'} onSubmit={handleSubmit(onSumbitAddToCart)}>
              <Title>{detailsProduct.name}</Title>
              <HeaderInfor
                ratings={detailsProduct.rating}
                numberRatings={1723}
                numberSold={detailsProduct.numberSell}
              />

              <PriceProduct
                priceBefore={detailsProduct.price}
                percentSale={detailsProduct.percent_sale}
                isSale={detailsProduct.is_sale}
              />

              <MainInforWrap>
                {detailsProduct.colors && (
                  <ColorSelectWrap>
                    <TitleInfor>Màu sắc</TitleInfor>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      <ListSelectButton>
                        {JSON.parse(detailsProduct.colors).map((color: string, index: number) => (
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
                )}

                {detailsProduct?.sizes && (
                  <SizeSelectWrap>
                    <TitleInfor>Size</TitleInfor>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      <ListSelectButton>
                        {JSON.parse(detailsProduct.sizes).map((size: string, index: number) => (
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
                )}

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
                              style={{ textAlign: 'center', width: '8rem', height: '3.4rem' }}
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
                <Button
                  typeBtn='default'
                  size='large'
                  type='submit'
                  onClick={() => {
                    !isAuthenticated && navigate(routePaths.login)
                  }}
                  disabled={addToCartMutation.isLoading}
                >
                  <FontAwesomeIcon icon={faCartPlus} />
                  Thêm vào giỏ hàng
                </Button>
                <Button
                  type='button'
                  typeBtn='primary'
                  size='large'
                  onClick={() => {
                    !isAuthenticated && navigate(routePaths.login)
                    onBuyNow()
                  }}
                >
                  Mua ngay
                </Button>
              </ListButtonAction>
            </InforWrap>
          </Content>

          {detailsProduct?.description && <Description description={detailsProduct.description} />}

          <SimilarProduct similarProducts={similarProducts} categoryId={detailsProduct.category_id} />
        </Wrapper>
        <Message show={showMessage} setShow={setShowMessage} message='Thêm sản phẩm thành công' />
      </Container>
    </>
  )
}

export default DetailsProduct
