import { Tabs as TabsAntd } from 'antd'
import styled from 'styled-components'

import colors from 'constants/colors'

export const Tabs = styled(TabsAntd)`
  .ant-tabs-tab {
    padding: 1.5rem 2rem;
    font-size: 1.6rem;
    min-width: 10rem;
    justify-content: center;

    & + .ant-tabs-tab {
      margin: 0;
    }

    &:hover {
      color: ${colors.orange};
    }
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${colors.orange};
  }

  .ant-tabs-ink-bar {
    background: ${colors.orange};
  }
`
export const tabBarStyle: React.CSSProperties = {
  background: `${colors.white}`
}
