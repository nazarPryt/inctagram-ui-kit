import { Button } from '../Button'
import { Modal, ModalProps } from '../Modal'
import { DialogButtonsBox } from './Dialog.styled'

export type DialogProps = {
  cancelButtonText?: string
  confirmButtonText: string
  disabled?: boolean
  invertButtons?: boolean
  onCancelButtonClick?: () => void
  onConfirmButtonClick: () => void
} & ModalProps

export const Dialog = ({
  cancelButtonText,
  children,
  confirmButtonText,
  disabled = false,
  invertButtons = false,
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
  const getConfirmButtonVariant = (
    invertButtons: boolean,
    showCancelButton: boolean
  ): 'outlined' | 'primary' => {
    if (showCancelButton) {
      return invertButtons ? 'outlined' : 'primary'
    }

    return 'primary'
  }
  const confirmButtonVariant = getConfirmButtonVariant(invertButtons, showCancelButton)
  const cancelButtonVariant = invertButtons ? 'primary' : 'outlined'

  return (
    <Modal {...rest}>
      {children}
      <DialogButtonsBox $showCancelButton={showCancelButton}>
        {showCancelButton && (
          <Button
            disabled={disabled}
            onClick={handleCancelButtonClicked}
            variant={cancelButtonVariant}
          >
            {cancelButtonText}
          </Button>
        )}
        <Button
          disabled={disabled}
          onClick={handleConfirmButtonClicked}
          variant={confirmButtonVariant}
        >
          {confirmButtonText}
        </Button>
      </DialogButtonsBox>
    </Modal>
  )
}
