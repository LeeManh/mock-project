import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import type { MenuProps } from 'antd'
import routePaths from 'constants/routePaths'
import { MenuCustom } from './MenuSideBar.styled'
import useWindowSize from 'hooks/useWindowSize'
import breakPonits from 'constants/breakPoints'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const items: MenuProps['items'] = [
  getItem(
    'Tài khoản của tôi',
    `${routePaths.user}/${routePaths.userAccount}`,
    <img src='https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4' alt='' style={{ width: '1.6rem' }} />,
    [getItem('Hồ sơ', 'profile'), getItem('Địa chỉ', 'address'), getItem('Đổi mật khẩu', 'change_password')]
  ),

  getItem(
    ' Đơn mua',
    `${routePaths.user}/${routePaths.userPurChase}`,
    <img src='https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078' alt='' style={{ width: '1.6rem' }} />
  )
]

interface Props extends MenuProps {}

const MenuSideBar = ({ ...rest }: Props) => {
  const navigate = useNavigate()
  const [width] = useWindowSize()

  const [mode, setMode] = useState<MenuProps['mode']>('inline')

  const onClick: MenuProps['onClick'] = (e) => {
    const path = e.keyPath.reverse().join('/')

    navigate(path)
  }

  useEffect(() => {
    const breakPoint = +breakPonits.md.replace('px', '')

    if (!!width && width <= breakPoint) {
      setMode('horizontal')
    } else {
      setMode('inline')
    }
  }, [width])

  return (
    <MenuCustom
      onClick={onClick}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode={mode}
      items={items}
      {...rest}
    />
  )
}

export default MenuSideBar
