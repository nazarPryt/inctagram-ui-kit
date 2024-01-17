import { SkeletonProps as SkeletonPropsBase } from 'react-loading-skeleton'

import { SkeletonStyled } from './Skeleton.styled'

export type SkeletonProps = Omit<
  SkeletonPropsBase,
  'baseColor' | 'borderRadius' | 'highlightColor'
> & {
  containerFlex?: boolean
}
/** https://www.npmjs.com/package/react-loading-skeleton */

export const Skeleton = ({ containerFlex = true, ...props }: SkeletonProps) => {
  const containerClassName = containerFlex ? 'skeletonContainerFlex' : ''

  return <SkeletonStyled borderRadius={'6px'} containerClassName={containerClassName} {...props} />
}
