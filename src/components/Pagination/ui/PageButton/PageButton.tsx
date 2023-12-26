import { NavigationButtonProps } from '../PrevNextButtons'
import { PageButtonStyled } from './PageButton.styled'

export type PageButtonProps = NavigationButtonProps & {
  page: number
  selected: boolean
}

export const PageButton = ({ disabled, onClick, page, selected }: PageButtonProps) => {
  return (
    <PageButtonStyled $selected={selected} disabled={selected || disabled} onClick={onClick}>
      {page}
    </PageButtonStyled>
  )
}
