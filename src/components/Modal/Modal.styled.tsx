import * as Dialog from '@radix-ui/react-dialog'
import { DialogContentProps } from '@radix-ui/react-dialog'
import { styled } from 'styled-components'

import { IconColor } from '../../styles/mixins/IconColor'

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  z-index: 100;
  inset: 0;
  background-color: rgb(0 0 0 / 50%);
`

export const DialogContent = styled(Dialog.Content)<DialogContentProps>`
  position: fixed;
  z-index: 101;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.textColor[100]};
  background-color: ${props => props.theme.bodyColor['300']};
  width: 532px;
`
export const DialogHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14px 24px;

  border-bottom: 1px solid ${props => props.theme.bodyColor['100']};

  .title {
    margin: 0;
    font-size: 17px;
    font-weight: 500;
  }
`

export const DialogContentBox = styled.div`
  position: relative;
  padding: 23px 24px 36px;
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
