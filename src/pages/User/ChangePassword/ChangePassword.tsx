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
const FormChangePassword = styled.form``
const ItemForm = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`
const LabelForm = styled.div`
  text-align: right;
  width: 20%;
  margin-right: 2rem;
`

const ChangePassword = () => {
  return (
    <Container>
      <HeaderUserLayout
        title='Thêm Mật Khẩu'
        describe='Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác'
      />
      <Content>
        <FormChangePassword>
          <ItemForm>
            <LabelForm>Mật Khẩu Cũ</LabelForm>
            <InputText type='password' isHaveEyeIcon styleContainer={{ maxWidth: '50rem' }} />
          </ItemForm>
          <ItemForm>
            <LabelForm>Mật Khẩu Mới</LabelForm>
            <InputText type='password' isHaveEyeIcon styleContainer={{ maxWidth: '50rem' }} />
          </ItemForm>
          <ItemForm>
            <LabelForm>Xác Nhận Mật Khẩu</LabelForm>
            <InputText type='password' isHaveEyeIcon styleContainer={{ maxWidth: '50rem' }} />
          </ItemForm>

          <ItemForm>
            <LabelForm></LabelForm>
            <Button typeBtn='primary'>Xác nhận</Button>
          </ItemForm>
        </FormChangePassword>
      </Content>
    </Container>
  )
}

export default ChangePassword
