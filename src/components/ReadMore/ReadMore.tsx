import { useState } from 'react'

import { ReadMoreStyled } from './ReadMore.styled'

export type ReadMoreType = {
  /** text for ReadMore button when text is shown */
  lessText?: string
  maxLength: number
  /** text for ReadMore button when text is hidden */
  moreText?: string
  text: string
}

export const ReadMore = ({
  lessText = 'Hide',
  maxLength,
  moreText = 'More',
  text,
}: ReadMoreType) => {
  const [isTrimmed, setIsTrimmed] = useState(true)
  const toggleReadMore = () => {
    setIsTrimmed(!isTrimmed)
  }

  if (text.length <= maxLength) {
    return <>{text}</>
  }

  const trimmedText = `${text.slice(0, maxLength)}...`
  const textToShow = isTrimmed ? trimmedText : text
  const buttonText = isTrimmed ? moreText : lessText

  return (
    <>
      {textToShow}
      <ReadMoreStyled onClick={toggleReadMore}>{buttonText}</ReadMoreStyled>
    </>
  )
}
