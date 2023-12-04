import { BackToPreviousWrapper } from './BackToPrevious.styled'
import { BackToPreviousIcon } from './BackToPreviousIcon'

export type PropsType = {
  href: string
  title: string
}
export const BackToPrevious = ({ href, title }: PropsType) => {
  return (
    <BackToPreviousWrapper href={href}>
      <BackToPreviousIcon />
      <span>{title}</span>
    </BackToPreviousWrapper>
  )
}
