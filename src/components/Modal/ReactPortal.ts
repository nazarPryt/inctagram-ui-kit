import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: ReactNode
  wrapperId: string
}

export const ReactPortal = ({ children, wrapperId }: Props) => {
  let element = document.getElementById(wrapperId)

  if (!element) {
    element = createWrapperAndAppendToBody(wrapperId)
  }

  return createPortal(children, element)
}

export const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement('div')

  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)

  return wrapperElement
}
