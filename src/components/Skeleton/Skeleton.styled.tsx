import SkeletonBase, { SkeletonProps } from 'react-loading-skeleton'

import { styled } from 'styled-components'

export const SkeletonStyled = styled(SkeletonBase)<SkeletonProps & { $containerFlex: boolean }>`
  display: inline-block;
  flex: ${props => (props.$containerFlex ? 1 : 0)};
  ${props => (props.baseColor = '#de1e1e')};
  ${props => (props.highlightColor = '#1f1c1c')};
`
