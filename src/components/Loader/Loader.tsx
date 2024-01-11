import { LoaderStyled } from './Loader.styled'

export type LoaderType = {
  fullScreen?: boolean
  size?: number
}

export const Loader = ({ fullScreen = false, size = 50 }: LoaderType) => {
  return (
    <LoaderStyled $fullScreen={fullScreen} $size={size}>
      <span />
    </LoaderStyled>
  )
}
