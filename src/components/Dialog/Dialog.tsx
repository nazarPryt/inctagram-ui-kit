import { clsx } from 'clsx'

import s from './dialog.module.scss'

import { Button } from '../Button'
import { Modal, ModalProps } from '../Modal'

export type DialogProps = {
  cancelButtonText?: string

  confirmButtonText: string
  /** If true, confirm button will be secondary and cancel button will be primary
   * defaults to true
   * */
  invertButtons?: boolean

  /** If not provided, onClose will be executed on Cancel click*/
  onCancelButtonClick?: () => void
  onConfirmButtonClick: () => void
} & ModalProps

export const Dialog = ({
  cancelButtonText,
  children,
  confirmButtonText,
  invertButtons = true,
  onCancelButtonClick,
  onConfirmButtonClick,
  ...rest
}: DialogProps) => {
  const { onClose } = rest
  const showCancelButton = !!cancelButtonText

  function handleConfirmButtonClicked() {
    onConfirmButtonClick()
  }

  function handleCancelButtonClicked() {
    onCancelButtonClick ? onCancelButtonClick() : onClose?.()
  }

  const classNames = {
    buttonsBox: clsx(s.buttonsBox, showCancelButton && s.hasCancelButton),
  }

  return (
    <Modal {...rest}>
      {children}
      <div className={classNames.buttonsBox}>
        {showCancelButton && (
          <Button onClick={handleCancelButtonClicked} variant={'primary'}>
            {cancelButtonText}
          </Button>
        )}
        <Button onClick={handleConfirmButtonClicked} variant={'outlined'}>
          {confirmButtonText}
        </Button>
      </div>
    </Modal>
  )
}
