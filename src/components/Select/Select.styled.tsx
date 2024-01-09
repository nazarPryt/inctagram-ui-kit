import { styled } from 'styled-components'

import { typography } from '../../styles'
import { IconColor } from '../../styles/mixins/IconColor'

export const SelectRoot = styled.div`
  padding: 12px 0;

  .label {
    display: inline-block;
    margin-bottom: 9px;
    color: blueviolet;
  }
`
export const SelectIcon = styled.span`
  width: 24px;
  height: 24px;
  transition: 200ms transform;
  ${IconColor}

  .secondary path {
    stroke: yellow;
  }

  .pagination {
    display: flex;
    width: 16px;
    height: 16px;
  }

  [data-headlessui-state='open'] > & {
    transform: rotate(180deg);
  }

  .trigger:disabled > & path {
    stroke: ${props => props.theme.bodyColor['300']};
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

    ${typography.regular_text_16()}
    font-family: inherit;

    color: ${props => props.theme.textColor[100]};

    background-color: ${props => props.theme.bodyColor[700]};
    border: 1px solid ${props => props.theme.bodyColor[100]};
    border-radius: 5px;
    outline: none;

    transition:
      200ms background-color,
      200ms color;

    &::placeholder {
      color: ${props => props.theme.textColor[100]};
    }

    &[data-headlessui-state='open'] {
      border-color: ${props => props.theme.bodyColor[100]};
      border-radius: 5px 5px 0 0;
    }

    &:disabled {
      pointer-events: none;
      color: ${props => props.theme.textColor[900]};
      background-color: ${props => props.theme.bodyColor[100]};
    }

    &:focus-visible {
      outline: 1px solid ${props => props.theme.palette.primary[500]};
    }

    &:hover:not(&:disabled) {
      background: ${props => props.theme.bodyColor[500]};
      border-color: ${props => props.theme.bodyColor[100]};
    }

    &.error {
      border-color: ${props => props.theme.palette.danger[500]};
    }

    &.secondary {
      width: fit-content;
      background-color: transparent;
      border: none;

      & > span:first-child {
        padding-bottom: 1px;

        color: ${props => props.theme.textColor[100]};

        background-image: linear-gradient(
          to right,
          ${props => props.theme.textColor[900]}; 40%,
          ${props => props.theme.bodyColor[100]}; 0%
        );
        background-repeat: repeat-x;
        background-position: left 12px bottom;
        background-size: 4px 1px;
      }
    }

    &.secondary:focus > span:first-child {
      color: ${props => props.theme.textColor[300]};
      background-image: linear-gradient(
        to right,
        ${props => props.theme.textColor[900]}; 40%,
        ${props => props.theme.bodyColor[100]}; 0%
      );
    }

    &.pagination {
      gap: 2px;
      height: 24px;
      padding: 0 2px 0 6px;
      ${typography.regular_text_14}
    }
  }

  .value {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
export const SelectContent = styled.div`
  .content {
    overflow: hidden;

    background-color: ${props => props.theme.bodyColor[300]};
    border: 1px solid ${props => props.theme.bodyColor[100]};
    border-radius: 0 0 5px 5px;
    outline: none;

    &.secondary {
      border: 1px solid ${props => props.theme.bodyColor[900]};

      & .item {
        &[data-headlessui-state~='active'],
        &[data-headlessui-state~='selected'] {
          color: ${props => props.theme.textColor[300]};
          background-color: ${props => props.theme.bodyColor[300]};
        }
      }
    }
  }
`
export const SelectItem = styled.div`
  .item {
    cursor: pointer;

    display: flex;
    color: ${props => props.theme.textColor['100']};
    width: 100%;
    padding: 6px 12px;

    ${typography.regular_text_16()}
    font-family: inherit;
    text-align: start;

    background: none; /* Remove button default background */
    border: none; /* Remove button default border */
    outline: none;

    transition:
      200ms background-color,
      200ms color;

    &[data-headlessui-state='active'],
    &[data-headlessui-state='active selected'] {
      background-color: ${props => props.theme.bodyColor[100]};
      color: ${props => props.theme.textColor[900]};
    }

    &[data-headlessui-state='selected'],
    &[data-headlessui-state='active selected'] {
      color: ${props => props.theme.palette.primary[300]};
    }

    &[data-headlessui-state='disabled'] {
      cursor: auto;
      color: ${props => props.theme.textColor[900]};
      background-color: ${props => props.theme.bodyColor[500]};
    }

    &.pagination {
      padding: 0 0 0 6px;
      ${typography.regular_text_14}
    }
  }
`
