import { BadgeProps, Badge } from 'antd'
import colors from 'constants/colors'
import styled from 'styled-components'

const BadgeContainer = styled(Badge)`
  .ant-scroll-number.ant-badge-count {
    background-color: ${colors.white};
    color: ${colors.orange};
    box-shadow: 0 0 0 2px ${colors.orange};
    font-weight: 600;
    font-size: 1.2rem;
  }
`

interface Props extends BadgeProps {}

const CustomBadge = ({ ...rest }: Props) => {
  return <BadgeContainer {...rest} />
}

export default CustomBadge
