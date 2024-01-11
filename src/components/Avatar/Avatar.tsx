import { ComponentPropsWithoutRef } from 'react'

import { AvatarFallback, AvatarImage, AvatarRoot } from './Avatar.styled'
import { stringAvatar } from './helper/BackgroundLetterAvatar'

export type AvatarType = {
  size?: number
  src: string
  userName?: string
} & ComponentPropsWithoutRef<'img'>

export const Avatar = ({ size = 36, src, userName, ...rest }: AvatarType) => (
  <AvatarRoot $size={size}>
    <AvatarImage src={src} {...rest} />
    <AvatarFallback
      $size={size}
      delayMs={600}
      {...stringAvatar(userName || 'avatar icon')}
    ></AvatarFallback>
  </AvatarRoot>
)
