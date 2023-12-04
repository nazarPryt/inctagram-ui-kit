import { ReactNode, useEffect } from 'react'

import { IconButton } from '../IconButton'
import { ModalContent, ModalWrapper } from './Modal.styled'
import { ReactPortal } from './ReactPortal'
import { CloseIcon } from './icons/CloseIcon'

export type BaseModalProps = {
  children?: ReactNode
  handleClose: () => void
  isOpen: boolean

  title: string
}

export const Modal = ({ children, handleClose, isOpen, title }: BaseModalProps) => {
  const handleCloseModal = () => {
    document.body.classList.remove('isModalOpen')
    handleClose()
  }
  const onModalClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
  }

  useEffect(() => {
    isOpen && document.body.classList.add('isModalOpen')
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? handleClose() : null)

    document.body.addEventListener('keydown', closeOnEscapeKey)
    document.body.style.pointerEvents = ''

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
      document.body.style.pointerEvents = 'auto'
      document.body.classList.remove('isModalOpen')
    }
  }, [handleClose])

  if (!isOpen) {
    return null
  }

  return (
    <ReactPortal wrapperId={'react-portal-modal-container'}>
      <ModalWrapper className={isOpen && 'open'} onClick={onModalClick}>
        <ModalContent className={isOpen && 'open'}>
          <div>
            <div className={'header'}>
              {title}
              <IconButton onClick={handleCloseModal}>
                <CloseIcon />
              </IconButton>
            </div>
          </div>
          {children}
        </ModalContent>
      </ModalWrapper>
    </ReactPortal>
  )
}
