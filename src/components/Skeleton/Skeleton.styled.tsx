import SkeletonBase from 'react-loading-skeleton'

import { styled } from 'styled-components'

export const SkeletonStyled = styled(SkeletonBase).attrs<{ $containerFlex: boolean }>(props => ({
  baseColor: props.theme.bodyColor[300],
  highlightColor: props.theme.bodyColor[500],
}))`
  flex: ${props => (props.$containerFlex ? 1 : 0)};
`
