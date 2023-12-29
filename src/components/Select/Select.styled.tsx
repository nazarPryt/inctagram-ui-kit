import { styled } from 'styled-components'

export const SelectStyled = styled.div`
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
    color: ${props => props.theme.textColor[100]};

    background-color: ${props => props.theme.bodyColor[100]};
    border: 1px solid red;
    border-radius: 10px;
    outline: none;

    transition:
      0.2ms background-color,
      0.2ms color;

    &::placeholder {
      color: ${props => props.theme.bodyColor[300]};
      background-color: ${props => props.theme.textColor[100]};
    }

    &[data-headlessui-state='open'] {
      border-color: red;
      border-radius: 5px 5px 0 0;
    }

    &:disabled {
      cursor: auto;
      color: gray;
    }

    &:focus-visible {
      outline: ${props => props.theme.textColor[900]};
    }

    &:hover:not(&:disabled) {
      background-color: ${props => props.theme.bodyColor[500]};
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

        background-image: linear-gradient(to right, yellowgreen 40%, burlywood 0%);
        background-repeat: repeat-x;
        background-position: left 12px bottom;
        background-size: 4px 1px;
      }
    }

    &.secondary:focus > span:first-child {
      color: ${props => props.theme.textColor[500]};
      background-image: linear-gradient(to right, red 40%, yellowgreen 0%);
    }

    &.pagination {
      gap: 2px;
      height: 24px;
      padding: 0 2px 0 6px;
      font-size: 15px;
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
    transition: 0.2ms transform;

    &.secondary path {
      stroke: ${props => props.theme.textColor[500]};
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
      stroke: ${props => props.theme.textColor[900]};
    }
  }

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
      0.2ms background-color,
      0.2ms color;

    &[data-headlessui-state='active'],
    &[data-headlessui-state='active selected'] {
      background-color: darkgreen;
    }

    &[data-headlessui-state='selected'],
    &[data-headlessui-state='active selected'] {
      color: blueviolet;
    }

    &[data-headlessui-state='disabled'] {
      cursor: auto;
      color: gray;
    }

    &.pagination {
      padding: 0 0 0 6px;
      //font-size: var(--font-size-s);
      //line-height: var(--line-height-m);
    }
  }

  .content {
    overflow: hidden;

    background-color: ${props => props.theme.bodyColor[100]};
    border: 1px solid ${props => props.theme.textColor[500]};
    border-radius: 0 0 5px 5px;
    outline: none;

    &.secondary {
      border: 1px solid blue;

      & .item {
        &[data-headlessui-state~='active'],
        &[data-headlessui-state~='selected'] {
          color: burlywood;
          background-color: black;
        }
      }
    }
  }

  .viewport {
    padding: 12px 0;
  }

  .label {
    display: inline-block;
    margin-bottom: 9px;
    font-size: 20px;
    color: brown;
  }
`
