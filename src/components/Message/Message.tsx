import { Container, Content, IconWrap, TextMessage } from './Message.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import useClickOutSide from 'hooks/useClickOutSide'
import { createPortal } from 'react-dom'
import useKeyPress from 'hooks/useKeyPress'

interface Props {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
  message?: string
}

const Message = ({ show, setShow, message }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickOutSide = () => setShow(false)

  useClickOutSide(modalRef, handleClickOutSide)
  useKeyPress('Escape', handleClickOutSide)

  //auto close
  useEffect(() => {
    const id = setTimeout(() => setShow(false), 2000)

    return () => clearTimeout(id)
  }, [setShow, show])

  return (
    <>
      {show &&
        createPortal(
          <Container>
            <Content ref={modalRef}>
              <IconWrap>
                <FontAwesomeIcon icon={faCheck} style={{ fontSize: '4rem', color: 'white' }} />
              </IconWrap>
              <TextMessage>{message}</TextMessage>
            </Content>
          </Container>,
          document.body
        )}
    </>
  )
}

export default Message
