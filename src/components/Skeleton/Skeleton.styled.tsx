import SkeletonBase from 'react-loading-skeleton'

import { styled } from 'styled-components'

export const SkeletonStyled = styled(SkeletonBase).attrs(props => ({
  baseColor: props.theme.bodyColor[300],
  highlightColor: props.theme.bodyColor[500],
}))``
