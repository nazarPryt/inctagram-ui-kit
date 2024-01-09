import * as Popover from '@radix-ui/react-popover'
import { PopoverContentTypeProps } from '@radix-ui/react-popover'
import { styled } from 'styled-components'

export const PopoverContent = styled(Popover.Content)<PopoverContentTypeProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-90%);
  background-color: ${props => props.theme.bodyColor['300']};
  padding: 10px;
  gap: 10px;
  border: 1px solid ${props => props.theme.bodyColor['100']};
  z-index: 999;
  color: ${props => props.theme.textColor[100]};
  max-height: 470px;
  overflow-y: auto;
`
