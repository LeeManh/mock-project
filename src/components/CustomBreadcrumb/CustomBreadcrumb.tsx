import { BreadcrumbCustom } from './CustomBreadcrumb.styled'
import { Breadcrumb, BreadcrumbProps } from 'antd'
import { Link } from 'react-router-dom'

interface Props extends BreadcrumbProps {
  items: { path: string; title: string }[]
}

const CustomBreadcrumb = ({ items }: Props) => {
  return (
    <BreadcrumbCustom separator='>'>
      {items.map((item) => {
        if (!item.path) {
          return <Breadcrumb.Item key={item.path}>{item.title}</Breadcrumb.Item>
        }

        return (
          <Breadcrumb.Item key={item.path}>
            <Link to={item.path}>{item.title}</Link>
          </Breadcrumb.Item>
        )
      })}
    </BreadcrumbCustom>
  )
}

export default CustomBreadcrumb
