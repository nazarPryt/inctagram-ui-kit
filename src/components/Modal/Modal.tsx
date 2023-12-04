import {ReactNode, useEffect} from 'react'
import {CloseIcon} from '../../assets/icons/CloseIcon'
import {IconButton} from '../IconButton/IconButton'
import {ModalContent, ModalWrapper} from './Modal.styled'
import {ReactPortal} from './ReactPortal'

export type BaseModalProps = {
    children?: ReactNode
    isOpen: boolean
    handleClose: () => void
    title: string
}

export const Modal = ({children, isOpen, handleClose, title}: BaseModalProps) => {
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

    if (!isOpen) return null

    return (
        <ReactPortal wrapperId='react-portal-modal-container'>
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
