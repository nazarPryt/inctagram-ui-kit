import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as ScrollArea from '@radix-ui/react-scroll-area'

import { ScrollbarStyled } from './Scrollbar.styled'

export type ScrollbarProps = {
  children: ReactNode
  className?: string
  /** maxHeight viewport in pixels */
  maxHeight?: number | string
  /** maxWidth viewport in pixels */
  maxWidth?: number | string
  type?: ScrollArea.ScrollAreaProps['type']
} & ComponentPropsWithoutRef<'div'>

export const Scrollbar = ({
  children,
  className,
  maxHeight = '100%',
  maxWidth = '100%',
  type = 'auto',
  ...rest
}: ScrollbarProps) => {
  const maxHeightConverted = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight
  const maxWidthConverted = typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth

  const viewportStyles = { maxHeight: maxHeightConverted, maxWidth: maxWidthConverted }

  return (
    <ScrollArea.Root asChild type={type}>
      <ScrollbarStyled {...rest}>
        <ScrollArea.Viewport className={'viewport'} style={viewportStyles}>
          {children}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar className={'scrollbar'} orientation={'vertical'}>
          <ScrollArea.Thumb className={'thumb'} />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar className={'scrollbar'} orientation={'horizontal'}>
          <ScrollArea.Thumb className={'thumb'} />
        </ScrollArea.Scrollbar>
      </ScrollbarStyled>
    </ScrollArea.Root>
  )
}
