import { styled } from 'styled-components'

interface TypographyProps {
  fontSize?: string
  fontWeight?: string
  lineHeight?: string
}

const TypographyMixin = styled.p<TypographyProps>`
  font-family: ${props => props.theme.typography.fontFamilyPrimary};
  color: ${props => props.theme.textColor['500']};
  white-space: pre-line;

  &.primary-color {
    color: ${props => props.theme.textColor['500']};
  }

  &.secondary-color {
    //color: ${props => props.theme.bodyColor['500']};
  }

  &.inherit-color {
    color: inherit;
  }

  &.error-color {
    color: ${props => props.theme.palette.danger['500']};
  }
`

export const H1 = styled(TypographyMixin)`
  font-size: ${props => props.theme.typography.fontSizeXL};
  line-height: ${props => props.theme.typography.lineHeightL};
  font-weight: ${props => props.theme.typography.fontWeightBold};
`

export const H2 = styled(TypographyMixin)`
  font-size: ${props => props.theme.typography.fontSizeL};
  line-height: ${props => props.theme.typography.lineHeightM};
  font-weight: ${props => props.theme.typography.fontWeightBold};
`

export const H3 = styled(TypographyMixin)`
  font-size: ${props => props.theme.typography.fontSizeM};
  line-height: ${props => props.theme.typography.lineHeightM};
  font-weight: ${props => props.theme.typography.fontWeightSemiBold};
`

export const Large = styled(TypographyMixin)`
  font-size: ${props => props.theme.typography.fontSizeXXL};
  line-height: ${props => props.theme.typography.lineHeightL};
  font-weight: ${props => props.theme.typography.fontWeightSemiBold};
`

export const RegularText16 = styled(TypographyMixin)`
  font-size: ${props => props.theme.typography.fontSizeM};
  line-height: ${props => props.theme.typography.lineHeightM};
  font-weight: ${props => props.theme.typography.fontWeightRegular};
`

export const BoldText16 = styled(TypographyMixin)`
  font-size: ${props => props.theme.typography.fontSizeM};
  line-height: ${props => props.theme.typography.lineHeightM};
  font-weight: ${props => props.theme.typography.fontWeightBold};
`

export const RegularText14 = styled(TypographyMixin)`
  font-size: ${props => props.theme.typography.fontSizeS};
  line-height: ${props => props.theme.typography.lineHeightM};
  font-weight: ${props => props.theme.typography.fontWeightRegular};
`

export const MediumText14 = styled(TypographyMixin)`
  font-size: ${props => props.theme.typography.fontSizeS};
  line-height: ${props => props.theme.typography.lineHeightM};
  font-weight: ${props => props.theme.typography.fontWeightMedium};
`

export const BoldText14 = styled(TypographyMixin)`
  font-size: ${props => props.theme.typography.fontSizeS};
  line-height: ${props => props.theme.typography.lineHeightM};
  font-weight: ${props => props.theme.typography.fontWeightBold};
`

export const SmallText = styled(TypographyMixin)`
  font-size: ${props => props.theme.typography.fontSizeS};
  line-height: ${props => props.theme.typography.lineHeightXS};
  font-weight: ${props => props.theme.typography.fontWeightRegular};
`
export const SemiBoldSmallText = styled(TypographyMixin)`
  font-size: ${props => props.theme.typography.fontSizeXS};
  line-height: ${props => props.theme.typography.lineHeightS};
  font-weight: ${props => props.theme.typography.fontWeightSemiBold};
`

export const RegularLink = styled(TypographyMixin)`
  font-size: ${props => props.theme.typography.fontSizeS};
  line-height: ${props => props.theme.typography.lineHeightM};
  font-weight: ${props => props.theme.typography.fontWeightRegular};
  color: ${props => props.theme.palette.primary['500']};
  text-decoration-line: underline;
  cursor: pointer;
`

export const SmallLink = styled(TypographyMixin)`
  font-size: ${props => props.theme.typography.fontSizeXS};
  line-height: ${props => props.theme.typography.lineHeightS};
  font-weight: ${props => props.theme.typography.fontWeightRegular};
  color: ${props => props.theme.palette.primary['500']};
  text-decoration-line: underline;
  cursor: pointer;
`

export const Error = styled(TypographyMixin)`
  font-size: ${props => props.theme.typography.fontSizeXS};
  line-height: ${props => props.theme.typography.lineHeightS};
  font-weight: ${props => props.theme.typography.fontWeightRegular};
  color: ${props => props.theme.palette.danger['500']};
`

export const TypographyStyle = {
  BoldText14,
  BoldText16,
  Error,
  H1,
  H2,
  H3,
  Large,
  MediumText14,
  RegularLink,
  RegularText14,
  RegularText16,
  SemiBoldSmallText,
  SmallLink,
  SmallText,
}
