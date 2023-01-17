import styled from 'styled-components'

import type { DropDownProps, MenuProps } from 'antd'
import { Dropdown } from 'antd'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: <div>Giá : Thấp đến Cao</div>
  },
  {
    key: '2',
    label: <div>Giá : Cao đến Thấp</div>
  }
]

interface Props extends DropDownProps {
  styleContainer?: React.CSSProperties
  children: React.ReactNode
}

const Container = styled.div``

const Select = ({ styleContainer, children, ...rest }: Props) => {
  return (
    <Container style={styleContainer}>
      <Dropdown
        menu={{
          items: items,
          selectable: true,
          defaultSelectedKeys: ['1'],
          style: {
            borderRadius: '2px'
          },
          className: 'custom-dropdown'
        }}
        placement='bottomRight'
        {...rest}
      >
        {children}
      </Dropdown>
    </Container>
  )
}

export default Select
