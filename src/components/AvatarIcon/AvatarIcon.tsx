import React from 'react'

import * as process from 'process'

import Image from 'next/image'
import { EmptyAvatar } from 'shared/assets/icons/emptyAvatar'

import { PATH } from '../../constants/PATH'
import { AvatarIconWrapper } from './AvatarIcon.styled'

export type AvatarIconType = {
  img: string
  userID: null | number
}
export const AvatarIcon = ({ img, userID }: AvatarIconType) => {
  const BASE_URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL as string

  return (
    <AvatarIconWrapper href={`${BASE_URL}${PATH.USER_PROFILE}/${userID}`}>
      {img ? <Image alt={'user-avatar'} height={36} src={img} width={36} /> : <EmptyAvatar />}
    </AvatarIconWrapper>
  )
}
