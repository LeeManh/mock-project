import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
// import DOMPurify from 'dompurify'

import { Wrapper } from 'globalStyle.styled'
import ThumbsGallery from 'components/ThumbsGallery'
import Breadcrumb from 'components/Breadcrumb'

import TransportInfor from './components/TransportInfor/TransportInfor'
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
  TitleInfor,
  TransportInforWrap,
  TransportWrap
} from './DetailsProduct.styled'
import PriceProduct from './components/PriceProduct'
import HeaderInfor from './components/HeaderInfor'
import SimilarProduct from './components/SimilarProduct'
import Description from './components/Description'
import { useState } from 'react'
import Button from 'components/Button'

const images = [
  'https://cf.shopee.vn/file/21d36c7f2cbfb403debe58553d70c09a',
  'https://cf.shopee.vn/file/sg-11134201-22100-wtyxcke4toiv3e',
  'https://cf.shopee.vn/file/fe44487da9b21ccf832528cb257cfc87',
  'https://cf.shopee.vn/file/95bbb6de23c72b0fade23bc230aeef88',
  'https://cf.shopee.vn/file/8b1db52008f3b7f94dbad4a97571e6ce',
  'https://cf.shopee.vn/file/d2cede28523244f41fa111c7b43a6a18',
  'https://cf.shopee.vn/file/64f850c79bed81d227fd825a7f5fe78b',
  'https://cf.shopee.vn/file/5f56d5f3c4594b4d3e9ef3ad3de86eb3'
]
const colorsSelect = ['Xám xanh', 'Đen trắng', 'WP xanh', 'WP xanh lá', 'WP kaki']

const sizesSelect = [39, 40, 41, 42, 43]

const DetailsProduct = () => {
  const [quantity, setQuantity] = useState('1')

  return (
    <Container>
      <Wrapper>
        <Breadcrumb />

        <Content>
          <ThumbsGalleryWrap>
            <ThumbsGallery images={images} />
          </ThumbsGalleryWrap>

          <InforWrap>
            <Title>
              Áo khoác da lộn nam lót lông cừu cổ cao bomber đẹp cao cấp hàng hiệu mặc thu đông siêu ấm áp T&T
            </Title>
            <HeaderInfor ratings={4.7} numberRatings={1723} numberSold={5600} />
            <PriceProduct priceBefore={300000} percentSale={35} />

            <MainInforWrap>
              <TransportWrap>
                <TitleInfor>Vận Chuyển</TitleInfor>

                <TransportInforWrap>
                  <TransportInfor type='charge' />
                </TransportInforWrap>
              </TransportWrap>

              <ColorSelectWrap>
                <TitleInfor>Màu sắc</TitleInfor>

                <ListSelectButton>
                  {colorsSelect.map((color, index) => (
                    <ButtonSelect key={index}>{color}</ButtonSelect>
                  ))}
                </ListSelectButton>
              </ColorSelectWrap>

              <SizeSelectWrap>
                <TitleInfor>Size</TitleInfor>

                <ListSelectButton>
                  {sizesSelect.map((color, index) => (
                    <ButtonSelect key={index}>{color}</ButtonSelect>
                  ))}
                </ListSelectButton>
              </SizeSelectWrap>

              <SelectQuantityWrap>
                <TitleInfor>Số Lượng</TitleInfor>
                <QuantityWrap>
                  <InputNumber
                    maxValue='19632'
                    value={quantity}
                    onChangeInput={(val) => setQuantity(val)}
                    styleContainer={{ width: '8rem', height: '3.2rem' }}
                    haveOnBlur={true}
                  />
                  <LimitQuantityNumber>19632 sản phẩm có sẵn</LimitQuantityNumber>
                </QuantityWrap>
              </SelectQuantityWrap>
            </MainInforWrap>

            <ListButtonAction>
              <Button typeBtn='default' size='large'>
                <FontAwesomeIcon icon={faCartPlus} />
                Thêm vào giỏ hàng
              </Button>
              <Button typeBtn='primary' size='large'>
                Mua ngay
              </Button>
            </ListButtonAction>
          </InforWrap>
        </Content>

        <Description />

        <SimilarProduct />
      </Wrapper>
    </Container>
  )
}

export default DetailsProduct