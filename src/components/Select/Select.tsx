import styled from 'styled-components'

import type { DropDownProps, MenuProps } from 'antd'
import { Dropdown } from 'antd'

const Container = styled.div``

interface Props extends DropDownProps {
  styleContainer?: React.CSSProperties
  children: React.ReactNode
  items?: MenuProps['items']
}

const Select = ({ styleContainer, children, items, ...rest }: Props) => {
  const onClick: MenuProps['onClick'] = (e) => {
    // console.log('click ', e)
  }

  return (
    <Container style={styleContainer}>
      <Dropdown
        {...rest}
        menu={{
          items,
          onClick,
          selectable: true,
          defaultSelectedKeys: ['1'],
          style: {
            borderRadius: '2px'
          },
          className: 'custom-dropdown'
        }}
        placement='bottomRight'
      >
        {children}
      </Dropdown>
    </Container>
  )
}

export default Select
