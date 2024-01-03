import * as RadixSelect from '@radix-ui/react-select'
import { SelectContentProps } from '@radix-ui/react-select'
import { styled } from 'styled-components'

import { IconColor } from '../../styles/mixins/IconColor'

export const SelectRoot = styled.div`
  .viewport {
    padding: 12px 0;
  }

  .label {
    display: inline-block;
    margin-bottom: 9px;
    //font-size: var(--font-size-s);
    color: blueviolet;
  }
`

export const SelectTrigger = styled.div`
  .trigger {
    cursor: pointer;

    display: flex;
    gap: 11px;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 36px;
    padding: 9px 8px 8px 12px;

    //font-size: var(--font-size-m);
    //line-height: var(--line-height-m);
    //color: var(--color-text-primary);

    background-color: red;
    border: 1px solid red;
    border-radius: 5px;
    outline: none;

    transition:
      200ms background-color,
      200ms color;

    &::placeholder {
      color: blue;
    }

    &[data-headlessui-state='open'] {
      border-color: green;
      border-radius: 5px 5px 0 0;
    }

    &:disabled {
      cursor: auto;
      color: gray;
    }

    &:focus-visible {
      //outline: var(--outline-focus);
    }

    &:hover:not(&:disabled) {
      background-color: gray;
    }

    &.error {
      border-color: red;
    }

    &.secondary {
      width: fit-content;
      background-color: transparent;
      border: none;

      & > span:first-child {
        padding-bottom: 1px;

        color: yellow;

        background-image: linear-gradient(to right, yellow 40%, brown 0%);
        background-repeat: repeat-x;
        background-position: left 12px bottom;
        background-size: 4px 1px;
      }
    }

    &.secondary:focus > span:first-child {
      color: cyan;
      background-image: linear-gradient(to right, yellowgreen 40%, salmon 0%);
    }

    &.pagination {
      gap: 2px;
      height: 24px;
      padding: 0 2px 0 6px;
      //font-size: var(--font-size-s);
    }
  }

  .value {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .icon {
    width: 24px;
    height: 24px;
    transition: 200ms transform;

    &.secondary path {
      stroke: yellow;
    }

    &.pagination {
      display: flex;
      width: 16px;
      height: 16px;
    }

    [data-headlessui-state='open'] > & {
      transform: rotate(180deg);
    }

    .trigger:disabled > & path {
      stroke: grey;
    }
  }
`
export const SelectContent = styled.div`
  .content {
    overflow: hidden;

    background-color: greenyellow;
    border: 1px solid tan;
    border-radius: 0 0 5px 5px;
    outline: none;

    &.secondary {
      border: 1px solid yellowgreen;

      & .item {
        &[data-headlessui-state~='active'],
        &[data-headlessui-state~='selected'] {
          color: red;
          background-color: blue;
        }
      }
    }
  }
`
export const SelectItem = styled.div`
  .item {
    cursor: pointer;

    display: flex;

    width: 100%;
    padding: 6px 12px;

    text-align: start;

    background: none; /* Remove button default background */
    border: none; /* Remove button default border */
    outline: none;

    transition:
      200ms background-color,
      200ms color;

    [data-headlessui-state='active'],
    [data-headlessui-state='active selected'] {
      background-color: brown;
    }

    [data-headlessui-state='selected'],
    [data-headlessui-state='active selected'] {
      color: hotpink;
    }

    [data-headlessui-state='disabled'] {
      cursor: auto;
      color: grey;
    }

    &.pagination {
      padding: 0 0 0 6px;
      //font-size: var(--font-size-s);
      //line-height: var(--line-height-m);
    }
  }
`

export const SelectTriggerd = styled(RadixSelect.SelectTrigger)`
  all: unset;
  cursor: pointer;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 36px;
  padding: 6px 12px;

  color: ${props => props.theme.textColor['100']};

  background-color: ${props => props.theme.bodyColor['700']};
  border: 1px solid ${props => props.theme.bodyColor['100']};
  border-radius: 0.125rem;

  [data-state='open'] {
    border-color: ${props => props.theme.bodyColor['100']};
    border-bottom: none;
    border-radius: 0.125rem 0.125rem 0 0;
  }

  span {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &.pagination {
    min-width: 3.125rem;
    gap: 2px;
    height: 24px;
    padding: 0 2px 0 6px;
  }

  &.error {
    border-color: ${props => props.theme.palette.danger['500']};
  }

  &:hover {
    background: ${props => props.theme.bodyColor['500']};
    border-color: ${props => props.theme.bodyColor['100']};
  }

  &:focus {
    border-color: ${props => props.theme.palette.primary['500']};
    //outline: 1px solid ${props => props.theme.palette.primary['500']};
  }

  &[data-placeholder] {
    color: ${props => props.theme.textColor['100']};
  }

  &[data-disabled] {
    pointer-events: none;
    color: ${props => props.theme.bodyColor['300']};
  }
  ${IconColor}
`
export const SelectIcon = styled(RadixSelect.SelectIcon)`
  width: 24px;
  height: 24px;
  transition: 0.2s;

  &.pagination {
    display: flex;
    width: 16px;
    height: 16px;
  }

  ${IconColor}

  &[data-state='open'] {
    transform: rotate(180deg);
  }
`
//https://github.com/radix-ui/primitives/blob/main/packages/react/select/src/Select.tsx
export const SelectContentr = styled(RadixSelect.Content)<SelectContentProps>`
  cursor: pointer;
  position: relative;
  z-index: 500;
  display: flex;
  width: 100%;
  max-height: 100px;

  background-color: ${props => props.theme.bodyColor['900']};
  border: 1px solid ${props => props.theme.bodyColor['100']};
  border-radius: 0 0 0.125rem 0.125rem;

  &.pagination {
    width: 20px;
  }
  ${IconColor}
`
export const StyledItemw = styled(RadixSelect.Item)`
  display: flex;
  padding: 6px 12px;
  gap: 12px;
  width: 100%;

  color: ${props => props.theme.textColor['100']};
  background-color: ${props => props.theme.bodyColor['900']};

  &.pagination {
    padding: 0 0 0 6px;
  }

  &[data-highlighted] {
    color: ${props => props.theme.palette.primary['500']};
    background-color: ${props => props.theme.bodyColor['300']};
    outline: none;
    path {
      fill: ${props => props.theme.palette.primary[100]};
    }
    line {
      stroke: ${props => props.theme.palette.primary[100]};
    }
  }

  &[data-disabled] {
    pointer-events: none;
    color: ${props => props.theme.textColor['300']};
  }

  &:hover {
    path {
      fill: ${props => props.theme.palette.primary[100]};
    }
    line {
      stroke: ${props => props.theme.palette.primary[100]};
    }
  }
`
