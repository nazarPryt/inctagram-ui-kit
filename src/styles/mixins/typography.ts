import { css } from 'styled-components'

export const typography = {
  Bold_text_16: css`
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
  `,
  H1: css`
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 2.25rem;
  `,
  H2: css`
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5rem;
  `,
  H3: css`
    font-weight: 700;
    font-size: 1rem;
    line-height: 2.25rem;
  `,
  Large: css`
    font-weight: 600;
    font-size: 1.625rem;
    line-height: 2.25rem;
  `,
  Medium_text_14: css`
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;
  `,
  Semi_bold_small_text: css`
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1rem;
  `,
  bold_text_14: css`
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.5rem;
  `,
  regular_link: css`
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;
  `,
  regular_text_14: css`
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;
  `,
  regular_text_16: css`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
  `,
  small_link: css`
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;
  `,
  small_text: css`
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;
  `,
}
export type TypographyType = typeof typography
