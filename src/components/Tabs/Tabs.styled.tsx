import * as TabsRadixUI from '@radix-ui/react-tabs'
import { css, styled } from 'styled-components'

import { IconColor } from '../../styles'
import { TabsProps, TabsVariantType } from './Tabs'

export const TabsRoot = styled(TabsRadixUI.Root)<TabsProps>`
  display: flex;
  flex-direction: column;
`
export const TabsList = styled(TabsRadixUI.List)<{ $variant: TabsVariantType }>`
  display: flex;
  flex-shrink: 0;
  ${props => {
    switch (props.$variant) {
      case 'primary':
        return css`
          border-bottom: 2px solid ${props => props.theme.palette.primary[500]};
        `
      case 'secondary':
        return css`
          border-bottom: none;
        `
    }
  }}
`
export const TabsTrigger = styled(TabsRadixUI.Trigger)<{
  $fullWidth: boolean | undefined
  $showIcon?: boolean
  $variant: TabsVariantType
}>`
  all: unset;
  cursor: pointer;
  flex-grow: ${props => (props.$fullWidth ? 1 : 0)};

  ${props => {
    switch (props.$variant) {
      case 'primary':
        return css`
          position: relative;

          min-width: 120px;
          padding: 6px 25px;

          font-weight: 700;
          color: ${props => props.theme.palette.primary[500]};
          text-align: center;

          transition: 200ms background-color;

          &:focus-visible {
            outline: 2px ${props => props.theme.palette.primary[700]};
          }

          &:hover {
            background-color: ${props => props.theme.bodyColor[500]};
          }

          &[data-state='active'] {
            background-color: ${props => props.theme.bodyColor[300]};

            &::after {
              content: '';

              position: absolute;
              bottom: -2px;
              left: 0;

              width: 100%;
              height: 2px;

              background-color: ${props => props.theme.palette.primary[500]};
            }
          }

          &:active {
            background-color: ${props => props.theme.bodyColor[100]};
          }

          &[data-disabled] {
            cursor: initial;
            color: ${props => props.theme.palette.primary[900]};
            background-color: inherit;
          }
        `
      case 'secondary':
        return css`
          padding: 6px 24px;

          font-size: 16px;
          line-height: 24px;
          color: ${props => props.theme.textColor[900]};

          transition: 200ms all;

          &:focus-visible {
            outline: ${props => props.theme.textColor[900]};
          }

          &:hover {
            background-color: ${props => props.theme.bodyColor[300]};
          }

          &[data-state='active'] {
            color: ${props => props.theme.textColor[100]};
            background-color: ${props => props.theme.bodyColor[100]};
          }

          &[data-disabled] {
            cursor: initial;
            color: ${props => props.theme.textColor[900]};
            background-color: inherit;
          }
        `
    }
  }}

  ${props => {
    if (props.$showIcon) {
      return css`
        min-width: auto;
        padding: 6px 15px;

        width: 30px;
        height: 30px;

        ${IconColor}

        svg {
          height: 100%;
          width: 100%;
        }
      `
    }
  }}
`
export const TabsContent = styled(TabsRadixUI.Content)`
  color: ${props => props.theme.textColor[100]};
`
