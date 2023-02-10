import { ModalProps } from 'antd'
import { Modal } from './CustomModal.styled'

interface Props extends ModalProps {}

const CustomModal = ({ children, ...rest }: Props) => {
  return <Modal {...rest}>{children}</Modal>
}

export default CustomModal
