import styled from 'styled-components'
import { Modal as ModalAntd } from 'antd'

import Button from 'components/Button'

export const Modal = styled(ModalAntd)`
  .ant-modal-content {
    border-radius: 2px;
    padding: 2rem;
  }
  .ant-modal-footer {
    margin-top: 3.5rem;
  }
`
export const ModalFooter = styled.div`
  display: flex;
  justify-content: end;
  gap: 2rem;
`
export const ModalButton = styled(Button)`
  min-width: 10rem;
  text-transform: uppercase;
`
