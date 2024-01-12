import { Component } from 'react'

import { styled } from 'styled-components'

import { typography } from '../../../styles'

export const PopoverItemWrapper = styled(Component)`
  cursor: pointer;
  display: flex;

  align-items: center;
  gap: 15px;

  font-family: inherit;
  white-space: nowrap;
  background-color: inherit;
  color: ${props => props.theme.textColor['100']};
  border: none;
  padding: 0;
  text-decoration: none;

  ${typography.regular_text_14}

  &:hover {
    color: ${props => props.theme.palette.primary['100']};
    path {
      fill: ${props => props.theme.palette.primary['100']};
    }
  }

  path {
    fill: ${props => props.theme.textColor[100]};
  }
`
