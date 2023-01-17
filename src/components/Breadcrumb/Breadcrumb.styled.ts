import colors from 'constants/colors'
import { Breadcrumb as BreadcrumbAntd } from 'antd'
import styled from 'styled-components'

export const BreadcrumbCustom = styled(BreadcrumbAntd)`
  color: ${colors.black};
  margin-bottom: 2rem;

  a {
    color: #05a;

    &:hover {
      background-color: transparent;
      color: #05a;
    }
  }
`
