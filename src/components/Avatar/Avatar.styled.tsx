import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { styled } from 'styled-components'

export const AvatarRoot = styled(AvatarPrimitive.Root)<{ $size: number }>`
  align-items: center;
  background-color: ${props => props.theme.bodyColor[500]};
  border-radius: 100%;
  display: inline-flex;
  height: ${props => props.$size}px;
  width: ${props => props.$size}px;
  justify-content: center;
  overflow: hidden;
  user-select: none;
  vertical-align: middle;
`

export const AvatarImage = styled(AvatarPrimitive.Image)`
  border-radius: inherit;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const AvatarFallback = styled(AvatarPrimitive.Fallback)<{ $size: number }>`
  align-items: center;
  background-color: ${props => props.theme.bodyColor[500]};
  color: white;
  display: flex;
  font-size: ${props => props.$size / 2.3}px;
  font-weight: 500;
  height: 100%;
  justify-content: center;
  line-height: 1;
  width: 100%;
`
