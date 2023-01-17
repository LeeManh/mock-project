import type { RateProps } from 'antd'
import { Rate as RateAntd } from 'antd'
import colors from 'constants/colors'
import styled from 'styled-components'

interface Props extends RateProps {
  gap?: string
}

const RateCustom = styled(RateAntd)`
  font-size: 1.4rem;
  margin-bottom: 3px;
  color: ${colors.yellow};

  :where(.css-dev-only-do-not-override-sk7ap8).ant-rate .ant-rate-star:not(:last-child) {
    margin-inline-end: ${(props: { gap: Props['gap'] }) => props.gap};
  }
`

const Rate = ({ gap = '4px', ...rest }: Props) => {
  return <RateCustom gap={gap} {...rest} />
}

export default Rate
