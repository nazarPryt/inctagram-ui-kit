import Image from 'next/image'

import { AvatarIconWrapper } from './AvatarIcon.styled'
import { EmptyAvatar } from './icons/emptyAvatar'

export type AvatarIconType = {
  href: string
  img: string
}
export const AvatarIcon = ({ href, img }: AvatarIconType) => {
  return (
    <AvatarIconWrapper href={href}>
      {img ? <Image alt={'user-avatar'} height={36} src={img} width={36} /> : <EmptyAvatar />}
    </AvatarIconWrapper>
  )
}
