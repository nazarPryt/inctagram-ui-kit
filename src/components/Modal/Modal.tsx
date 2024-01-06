import { ComponentProps } from 'react'

import { Dialog, DialogPortal, DialogTitle } from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'

import { CloseIcon } from '../../icons'
import {
  DialogCloseButton,
  DialogContent,
  DialogContentBox,
  DialogHeader,
  DialogOverlay,
} from './Modal.styled'

export type ModalProps = {
  onClose?: () => void
  open: boolean
  showCloseButton?: boolean
  showTitle?: boolean
  title?: string
} & ComponentProps<'div'>

const dropIn = {
  exit: {
    opacity: 0,
    y: '100vh',
  },
  hidden: {
    opacity: 0,
    x: '-50%',
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    transition: {
      damping: 25,
      duration: 0.2,
      stiffness: 500,
      type: 'spring',
    },
    x: '-50%',
    y: '-50%',
  },
}

export const Modal = ({
  children,
  className,
  onClose,
  open = false,
  showCloseButton = true,
  showTitle = true,
  title,
}: ModalProps) => {
  function handleModalClosed() {
    onClose?.()
  }

  return (
    <Dialog onOpenChange={handleModalClosed} open={open}>
      <AnimatePresence>
        {open && (
          <DialogPortal forceMount>
            <DialogOverlay asChild>
              <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }} />
            </DialogOverlay>
            <DialogContent asChild className={className} forceMount>
              <motion.div animate={'visible'} exit={'exit'} initial={'hidden'} variants={dropIn}>
                {showTitle && (
                  <DialogHeader>
                    <DialogTitle asChild>
                      <h2 className={'title'}>{title}</h2>
                    </DialogTitle>

                    {showCloseButton && (
                      <DialogCloseButton>
                        <CloseIcon />
                      </DialogCloseButton>
                    )}
                  </DialogHeader>
                )}
                <DialogContentBox>{children}</DialogContentBox>
              </motion.div>
            </DialogContent>
          </DialogPortal>
        )}
      </AnimatePresence>
    </Dialog>
  )
}
