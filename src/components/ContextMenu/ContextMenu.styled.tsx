import * as ContextMenu from '@radix-ui/react-context-menu'
import { css, styled } from 'styled-components'

export const ContextMenuTrigger = styled(ContextMenu.Trigger)`
  display: block;
  border: 2px ${({ theme }) => theme.textColor[500]} dashed;
  color: ${({ theme }) => theme.textColor[500]};
  border-radius: 4px;
  font-size: 15px;
  user-select: none;
  padding: 45px 0;
  width: 300px;
  text-align: center;
`

const contentStyles = css`
  background-color: ${({ theme }) => theme.bodyColor[500]};
  border-radius: 6px;
  box-shadow:
    0 10px 38px -10px rgba(22, 23, 24, 0.35),
    0 10px 20px -15px rgba(22, 23, 24, 0.2);
  min-width: 220px;
  overflow: hidden;
  padding: 5px;
`

export const ContextMenuContent = styled(ContextMenu.Content)<
  ContextMenu.ContextMenuContentProps & HTMLDivElement
>`
  ${contentStyles}
`
export const ContextMenuSubContent = styled(ContextMenu.SubContent)<
  ContextMenu.ContextMenuSubContentProps & HTMLDivElement
>`
  ${contentStyles}
`
const itemStyles = css`
  &[data-disabled] {
    color: ${({ theme }) => theme.textColor[900]};
    pointer-events: none;
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.bodyColor[100]};
    color: ${({ theme }) => theme.textColor[100]};
  }

  align-items: center;
  border-radius: 3px;
  color: ${({ theme }) => theme.textColor[100]};
  display: flex;
  font-size: 13px;
  height: 25px;
  line-height: 1;
  outline: none;
  padding: 0 5px 0 25px;
  position: relative;
  user-select: none;
`

export const ContextMenuItem = styled(ContextMenu.Item)`
  ${itemStyles}
`
export const ContextMenuCheckboxItem = styled(ContextMenu.CheckboxItem)<
  ContextMenu.ContextMenuCheckboxItemProps & HTMLDivElement
>`
  ${itemStyles}
`
export const ContextMenuRadioItem = styled(ContextMenu.RadioItem)`
  ${itemStyles}
`
export const ContextMenuSubTrigger = styled(ContextMenu.SubTrigger)`
  &[data-state='open'] {
    background-color: ${({ theme }) => theme.bodyColor[100]};
    color: ${({ theme }) => theme.textColor[100]};
  }
  ${itemStyles}
`

export const ContextMenuLabel = styled(ContextMenu.Label)`
  color: ${({ theme }) => theme.textColor[100]};
  font-size: 12px;
  line-height: 25px;
  padding-left: 25px;
`

export const ContextMenuSeparator = styled(ContextMenu.Separator)`
  background-color: ${({ theme }) => theme.bodyColor[100]};
  height: 1px;
  margin: 5px;
`

export const ContextMenuItemIndicator = styled(ContextMenu.ItemIndicator)`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  left: 0;
  position: absolute;
  width: 25px;
`

export const RightSlot = styled.div`
  &[data-disabled] {
    color: ${({ theme }) => theme.textColor[900]};
  }

  &[data-highlighted] > & {
    color: white;
  }

  color: ${({ theme }) => theme.textColor[100]};
  margin-left: auto;
  padding-left: 20px;
`
