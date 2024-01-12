import * as TabsRadixUI from '@radix-ui/react-tabs'
import { styled } from 'styled-components'

import { TabsProps, TabsVariantType } from './Tabs'

export const TabsRoot = styled(TabsRadixUI.Root)<TabsProps>`
  display: flex;
  flex-direction: column;
`
export const TabsList = styled(TabsRadixUI.List)<{ $variant: TabsVariantType }>`
  display: flex;
  flex-shrink: 0;
  border-bottom: 2px solid blue;

  &.secondary {
    border-bottom: none;
  }
`
export const TabsTrigger = styled(TabsRadixUI.Trigger)<{
  $fullWidth: boolean | undefined
  $variant: TabsVariantType
}>`
  all: unset;
  cursor: pointer;

  &.primary {
    position: relative;

    min-width: 120px;
    padding: 6px 25px;

    font-weight: 700;
    color: var(--color-text-inactive);
    text-align: center;

    transition: var(--transtition-duration-basic) background-color;

    &.fullWidth {
      flex-grow: 1;
    }

    &:focus-visible {
      background-color: var(--color-bg-focus);
    }

    &:hover {
      background-color: var(--color-action-hover);
    }

    &[data-state='active'] {
      color: var(--color-accent-500);

      &::after {
        content: '';

        position: absolute;
        bottom: -2px;
        left: 0;

        width: 100%;
        height: 2px;

        background-color: var(--color-accent-500);
      }
    }

    &:active {
      background-color: var(--color-action-active);
    }

    &[data-disabled] {
      cursor: initial;
      color: var(--color-text-disabled);
      background-color: inherit;
    }
  }

  &.secondary {
    padding: 6px 24px;

    font-size: 16px;
    line-height: 24px;
    color: var(--color-text-secondary);

    border: 1px solid var(--color-border-input-primary);
    border-left: none;

    transition: var(--transtition-duration-basic) all;

    &:first-child {
      border-left: 1px solid var(--color-border-input-primary);
      border-radius: var(--border-radius-s) 0 0 var(--border-radius-s);
    }

    &:last-child {
      border-radius: 0 var(--border-radius-s) var(--border-radius-s) 0;
    }

    &:focus-visible {
      outline: var(--outline-focus);
    }

    &:hover {
      background-color: var(--color-bg-focus);
    }

    &[data-state='active'] {
      color: var(--color-text-primary-contrast);
      background-color: var(--color-bg-contrast);
      border-color: var(--color-bg-contrast);
    }

    &[data-disabled] {
      cursor: initial;
      color: var(--color-text-disabled);
      background-color: inherit;
    }
  }
`
export const TabsContent = styled(TabsRadixUI.Content)`
  color: ${props => props.theme.textColor[100]};
`
