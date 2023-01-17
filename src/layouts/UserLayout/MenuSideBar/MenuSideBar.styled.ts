import { Menu } from 'antd'
import styled from 'styled-components'
import colors from 'constants/colors'

export const MenuCustom = styled(Menu)`
  background-color: transparent;
  border-inline-end: none !important;
  font-size: 1.4rem !important;

  .ant-menu-submenu-title,
  .ant-menu-item {
    padding-left: 0 !important;
  }

  .ant-menu-item.ant-menu-item-only-child {
    padding-left: 30px !important;
  }

  :where(.css-dev-only-do-not-override-sk7ap8).ant-menu-light:not(.ant-menu-horizontal) .ant-menu-submenu-title:hover,
  :where(.css-dev-only-do-not-override-sk7ap8).ant-menu-light:not(.ant-menu-horizontal)
    .ant-menu-item:not(.ant-menu-item-selected):hover {
    background-color: transparent;
    color: ${colors.orange};
  }

  :where(.css-dev-only-do-not-override-sk7ap8).ant-menu-light.ant-menu-inline .ant-menu-sub.ant-menu-inline {
    background-color: transparent;
  }

  :where(.css-dev-only-do-not-override-sk7ap8).ant-menu-light .ant-menu-item-selected,
  :where(.css-dev-only-do-not-override-sk7ap8).ant-menu-light .ant-menu-submenu-selected > .ant-menu-submenu-title {
    color: ${colors.orange};
    background-color: transparent;
  }
`
