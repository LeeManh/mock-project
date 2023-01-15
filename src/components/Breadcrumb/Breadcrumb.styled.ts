import colors from 'constants/colors'
import { Breadcrumb as BreadcrumbAntd } from 'antd'
import styled from 'styled-components'

export const BreadcrumbCustom = styled(BreadcrumbAntd)`
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
