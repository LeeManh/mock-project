import { BreadcrumbCustom } from './Breadcrumb.styled'
import { Breadcrumb as BreadcrumbAntd } from 'antd'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <BreadcrumbCustom separator='>'>
      <BreadcrumbAntd.Item>
        <Link to='/'>Shopee</Link>
      </BreadcrumbAntd.Item>
      <BreadcrumbAntd.Item>
        <Link to='/'>Thời Trang Nam</Link>
      </BreadcrumbAntd.Item>
      <BreadcrumbAntd.Item>
        Áo khoác nam, áo khoác da lộn lót lông, chất liệu da lộn mềm mịn, lớp lông giữ ấm cực tốt, dáng áo trẻ đẹp
      </BreadcrumbAntd.Item>
    </BreadcrumbCustom>
  )
}

export default Breadcrumb
