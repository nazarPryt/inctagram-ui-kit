import { ArrowBack, ArrowForward } from '../../../../icons'
import { PageButtonStyled } from '../PageButton/PageButton.styled'

export type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
}

export const PrevButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <PageButtonStyled disabled={disabled} onClick={onClick}>
      <ArrowBack />
    </PageButtonStyled>
  )
}

export const NextButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <PageButtonStyled disabled={disabled} onClick={onClick}>
      <ArrowForward />
    </PageButtonStyled>
  )
}
