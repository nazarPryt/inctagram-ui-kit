import * as Dialog from '@radix-ui/react-dialog'
import { DialogContentProps } from '@radix-ui/react-dialog'
import { css, styled } from 'styled-components'

import { IconColor, typography } from '../../styles'
import { ModalSize } from './Modal'

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  z-index: 100;
  inset: 0;
  background-color: rgb(0 0 0 / 50%);
`

export const DialogContent = styled(Dialog.Content)<DialogContentProps & { $size: ModalSize }>`
  position: fixed;
  z-index: 101;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.textColor[100]};
  background-color: ${props => props.theme.bodyColor['300']};

  ${props => {
    switch (props.$size) {
      case 'sm':
        return css`
          width: 367px;
        `
      case 'full':
        return css``
      case 'lg':
        return css`
          width: 764px;
        `
      case 'md':
        return css`
          width: 532px;
        `
    }
  }}
`
export const DialogHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14px 24px;

  border-bottom: 1px solid ${props => props.theme.bodyColor['100']};

  .title {
    margin: 0;
    ${typography.H1}
  }
`

export const DialogContentBox = styled.div<{ $size: ModalSize }>`
  position: relative;
  padding: 23px 24px 36px;
  ${typography.Bold_text_16}

  ${props => {
    if (props.$size === 'full') {
      return css`
        padding: 0;
      `
    }
  }}
`
export const DialogCloseButton = styled(Dialog.DialogClose)`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;
  padding: 0;

  background: transparent;
  border: none;
  border-radius: 50%;

  transition: 200ms background-color;

  ${IconColor}

  &:hover,
  &:focus-visible {
    background-color: ${props => props.theme.bodyColor['100']};
    outline: none;
  }
`
