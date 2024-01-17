import { SkeletonProps as SkeletonPropsBase } from 'react-loading-skeleton'

import { SkeletonStyled } from './Skeleton.styled'

export type SkeletonProps = SkeletonPropsBase & {
  containerFlex?: boolean
}
/** https://www.npmjs.com/package/react-loading-skeleton */

export const Skeleton = ({ containerFlex = true, ...props }: SkeletonProps) => {
  return <SkeletonStyled $containerFlex={containerFlex} borderRadius={'6px'} {...props} />
}
