import { Component } from 'react'

import { css, styled } from 'styled-components'

import { ButtonProps } from './Button'

export const ComponentButton = styled(Component<ButtonProps>).withConfig({
  shouldForwardProp: prop => !['fullwidth'].includes(prop),
})<{ fullwidth?: boolean }>`
  border-radius: 2px;
  padding: 6px 24px;
  cursor: pointer;
  border: none;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter, sans-serif;
  letter-spacing: 0.7px;
  text-decoration: none;
  width: ${props => (props.fullwidth ? '100%' : '')};

  ${props => {
    switch (props.variant) {
      case 'contained':
        return css`
          background-color: ${({ theme }) => theme.bodyColor[100]};
          color: ${({ theme }) => theme.textColor[900]};

          &:active {
            background-color: ${({ theme }) => theme.palette.primary[700]};
          }

          &:hover {
            background-color: ${({ theme }) => theme.bodyColor[100]};
            color: ${({ theme }) => theme.textColor[300]};
          }

          &:focus {
            background-color: ${({ theme }) => theme.bodyColor[100]};
            color: ${({ theme }) => theme.textColor[900]};
            border: 2px solid ${({ theme }) => theme.palette.primary[700]};
          }

          &:disabled {
            background-color: ${({ theme }) => theme.bodyColor[900]};
            color: ${({ theme }) => theme.textColor[100]};
            cursor: not-allowed;
          }
        `
      case 'link':
        return css``

      case 'text':
        return css`
          background-color: inherit;
          color: ${({ theme }) => theme.palette.primary[500]};

          &:active {
            color: ${({ theme }) => theme.palette.primary[700]};
          }

          &:hover {
            color: ${({ theme }) => theme.palette.primary[100]};
          }

          &:focus {
            color: ${({ theme }) => theme.palette.primary[500]};
            border: 2px solid ${({ theme }) => theme.palette.primary[700]};
          }

          &:disabled {
            color: ${({ theme }) => theme.palette.primary[900]};
            cursor: not-allowed;
          }
        `
      case 'outlined':
        return css`
          background-color: inherit;
          color: ${({ theme }) => theme.palette.primary[500]};
          border: 1px solid ${({ theme }) => theme.palette.primary[500]};

          &:active {
            color: ${({ theme }) => theme.palette.primary[700]};
          }

          &:hover {
            border: 1px solid ${({ theme }) => theme.palette.primary[100]};
            color: ${({ theme }) => theme.palette.primary[100]};
          }

          &:focus {
            color: ${({ theme }) => theme.palette.primary[700]};
            border: 2px solid ${props => props.theme.palette.primary[700]};
          }

          &:disabled {
            border: 2px solid ${props => props.theme.palette.primary[900]};
            color: ${({ theme }) => theme.palette.primary[900]};
            cursor: not-allowed;
          }
        `
      case 'primary':
        return css`
          background-color: ${({ theme }) => theme.palette.primary[500]};
          color: white;

          &:active {
            background-color: ${({ theme }) => theme.palette.primary[700]};
            color: white;
          }

          &:hover {
            background-color: ${({ theme }) => theme.palette.primary[100]};
            color: white;
          }

          &:focus {
            background-color: ${({ theme }) => theme.palette.primary[700]};
            color: ${({ theme }) => theme.textColor[100]};
          }

          &:disabled {
            background-color: ${({ theme }) => theme.palette.primary[900]};
            color: ${({ theme }) => theme.textColor[900]};
            cursor: not-allowed;
          }
        `
    }
  }};
`
