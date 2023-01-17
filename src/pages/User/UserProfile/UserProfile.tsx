import { Avatar } from 'antd'
import Button from 'components/Button'
import InputNumber from 'components/InputNumber'
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
const ContentUser = styled.div`
  display: flex;
  margin-top: 5rem;
`
const FormUser = styled.div`
  flex: 1;
  padding-right: 5rem;
`
const ItemFormUser = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
`
const LabelForm = styled.div`
  width: 20%;
  text-align: right;
  color: ${colors['gray-text']};
`
const DescribeUpDate = styled.div`
  color: ${colors['gray-text']};
  margin-top: 2rem;
`

const UpdateAvatart = styled.div`
  width: 28rem;
  border-left: 1px solid ${colors['gray-light-2']};
  display: flex;
  flex-direction: column;
  align-items: center;
`
const InputFile = styled.input`
  opacity: 0;
  width: 1px;
  height: 1px;
`

const UserProfile = () => {
  return (
    <Container>
      <HeaderUserLayout title='Hồ Sơ Của Tôi' describe='Quản lý thông tin hồ sơ để bảo mật tài khoản' />

      <ContentUser>
        <FormUser>
          <ItemFormUser>
            <LabelForm>Email</LabelForm>
            <div style={{ width: '100%' }}>lemanhddt@gmail.com</div>
          </ItemFormUser>

          <ItemFormUser>
            <LabelForm>Tên</LabelForm>
            <InputText />
          </ItemFormUser>

          <ItemFormUser>
            <LabelForm>Số điện thoại</LabelForm>
            <InputNumber style={{ height: '4rem', textAlign: 'left' }} />
          </ItemFormUser>

          <Button type='submit' typeBtn='primary' style={{ marginLeft: '20%', width: '10rem' }}>
            Lưu
          </Button>
        </FormUser>
        <UpdateAvatart>
          <Avatar src='https://cf.shopee.vn/file/2d7d51ffc7af8cdc00d086c882d5e020' size={102} />

          <Button typeBtn='primary' style={{ marginTop: '2rem', width: '10rem' }}>
            Chọn Ảnh
          </Button>
          <DescribeUpDate>
            <div>Dụng lượng file tối đa 1 MB</div>
            <div>Định dạng:.JPEG, .PNG</div>
          </DescribeUpDate>
          <InputFile type='file' accept='image/png, image/jpeg' />
        </UpdateAvatart>
      </ContentUser>
    </Container>
  )
}

export default UserProfile
