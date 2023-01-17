import { Wrapper } from 'globalStyle.styled'
import images from 'assets/images'
import {
  AppsWrap,
  Container,
  DownLoadWrap,
  FooterItem,
  FooterItemList,
  FooterItemTitle,
  FooterTop,
  QrDownLoad
} from './Footer.styled'
import { abouts, customerCareList, payments, socials } from './data'

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterTop>
          <FooterItem>
            <FooterItemTitle>CHĂM SÓC KHÁCH HÀNG</FooterItemTitle>
            <FooterItemList>
              {customerCareList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </FooterItemList>
          </FooterItem>

          <FooterItem>
            <FooterItemTitle>VỀ SHOPEE</FooterItemTitle>
            <FooterItemList>
              {abouts.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </FooterItemList>
          </FooterItem>

          <FooterItem>
            <FooterItemTitle>THANH TOÁN</FooterItemTitle>
            <FooterItemList type='imgList'>
              {payments.map((item, index) => (
                <li key={index}>
                  <div className='img-wrap'>
                    <img src={item.image} alt='' />
                  </div>
                </li>
              ))}
            </FooterItemList>
            <FooterItemTitle mt='3rem'>ĐƠN VỊ VẬN CHUYỂN</FooterItemTitle>
            <FooterItemList type='imgList'>
              {payments.map((item, index) => (
                <li key={index}>
                  <div className='img-wrap'>
                    <img src={item.image} alt='' />
                  </div>
                </li>
              ))}
            </FooterItemList>
          </FooterItem>

          <FooterItem>
            <FooterItemTitle>THEO DÕI CHÚNG TÔI TRÊN</FooterItemTitle>
            <FooterItemList>
              {socials.map((item, index) => (
                <li key={index}>
                  <img src={item.icon} alt='' />
                  <span>{item.title}</span>
                </li>
              ))}
            </FooterItemList>
          </FooterItem>

          <FooterItem>
            <FooterItemTitle>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</FooterItemTitle>
            <DownLoadWrap>
              <QrDownLoad src={images.qrDownLoad} alt='qrDownLoad' />
              <AppsWrap>
                <img src={images.apple} alt='apple' />
                <img src={images.ggPlay} alt='ggPlay' />
                <img src={images.appGallery} alt='appGallery' />
              </AppsWrap>
            </DownLoadWrap>
          </FooterItem>
        </FooterTop>
      </Wrapper>
    </Container>
  )
}

export default Footer
