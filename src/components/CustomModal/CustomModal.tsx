import { Modal } from 'antd'
import { ModalProps } from 'antd'
import styled from 'styled-components'

const ModalCus = styled(Modal)`
  .ant-modal-content {
    border-radius: 2px;
  }
`

interface Props extends ModalProps {}

const CustomModal = ({ children, centered = true, ...props }: Props) => {
  return (
    <ModalCus
      {...props}
      maskStyle={{ background: 'rgba(0,0,0,0.5)' }}
      bodyStyle={{ marginTop: '10px' }}
      centered={centered}
      maskClosable={true}
    >
      {children}
    </ModalCus>
  )
}

export default CustomModal
