import Button from 'components/Button'
import InputText from 'components/InputText'
import colors from 'constants/colors'
import HeaderUserLayout from 'layouts/UserLayout/HeaderUserLayout/HeaderUserLayout'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${colors.white};
  padding: 0 3rem 5rem 3rem;
  border-radius: 2px;
  min-height: 40rem;
`
const Content = styled.div`
  padding: 5rem 0;
`
const Label = styled.div`
  white-space: nowrap;
  margin-bottom: 2rem;
  font-size: 1.6rem;
  font-weight: 500;
`

const UserAddress = () => {
  return (
    <Container>
      <HeaderUserLayout title='Địa chỉ của tôi' />
      <Content>
        <Label>Địa chỉ</Label>

        <InputText value='133/2 Nguyễn Văn Trỗi Hà Đông Hà Nội Phường Mộ Lao, Quận Hà Đông, Hà Nội' />

        <div style={{ marginTop: '3rem' }}>
          <Button typeBtn='primary'>Cập nhật</Button>
        </div>
      </Content>
    </Container>
  )
}

export default UserAddress
