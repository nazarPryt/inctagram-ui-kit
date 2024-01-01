import * as RadixSelect from '@radix-ui/react-select'
import { SelectContentProps } from '@radix-ui/react-select'
import { styled } from 'styled-components'

import { IconColor } from '../../styles/mixins/IconColor'

export const SelectWrapper = styled.div`
  width: 167px;
  margin: 0 !important;
  padding: 0;
`

export const SelectTrigger = styled(RadixSelect.SelectTrigger)`
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
export const SelectContent = styled(RadixSelect.Content)<SelectContentProps>`
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
export const StyledItem = styled(RadixSelect.Item)`
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
