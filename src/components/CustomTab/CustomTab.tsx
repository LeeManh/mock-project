import type { TabsProps } from 'antd'
import React from 'react'

import * as S from './CustomTab.styled'

interface Props extends TabsProps {}

const CustomTab = ({ items, onChange, ...rest }: Props) => {
  const handleChange = (key: string) => {
    onChange?.(key)
  }

  return <S.Tabs {...rest} items={items} onChange={handleChange} tabBarStyle={S.tabBarStyle} />
}

export default CustomTab
