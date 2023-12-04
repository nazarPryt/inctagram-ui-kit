import { styled } from 'styled-components'

export const InputFileWrapper = styled.label`
  border-radius: 2px;
  padding: 6px 24px;
  cursor: pointer;
  border: none;
  font-size: 16px;

  font-weight: 600;
  font-family: Inter, sans-serif;
  letter-spacing: 0.7px;

  background-color: ${props => props.theme.palette.primary[500]};
  color: ${props => props.theme.textColor[100]};
`
