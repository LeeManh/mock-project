import styled from 'styled-components'
import { Breadcrumb, Rate } from 'antd'
import { Link } from 'react-router-dom'

import { Wrapper } from 'globalStyle.styled'
import colors from 'constants/colors'

const Container = styled.div`
  margin: 11.9rem auto 0;
`
const BreadcrumbCustom = styled(Breadcrumb)`
  padding: 2rem 0;
  color: ${colors.black};

  a {
    color: #05a;

    &:hover {
      background-color: transparent;
      color: #05a;
    }
  }
`

const DetailsProduct = () => {
  return (
    <Container>
      <Wrapper>
        <BreadcrumbCustom separator='>'>
          <Breadcrumb.Item>
            <Link to='/'> Shopee</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to='/'>Thời Trang Nam</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Áo khoác nam, áo khoác da lộn lót lông, chất liệu da lộn mềm mịn, lớp lông giữ ấm cực tốt, dáng áo trẻ đẹp
          </Breadcrumb.Item>
        </BreadcrumbCustom>

        <div>
          <div></div>
          <div>
            <div>
              Áo khoác gió nam nữ 2 lớp lót lông cừu cao cấp siêu ấm, áo gió nam nữ phủ nano chống gió chống thấm nước
            </div>
            <div>
              <span>4.7</span>
              <Rate disabled defaultValue={2} />
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  )
}

export default DetailsProduct
