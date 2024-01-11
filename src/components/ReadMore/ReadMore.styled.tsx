import { styled } from 'styled-components'

export const ReadMoreStyled = styled.button`
  all: unset;

  cursor: pointer;

  margin-left: 5px;

  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  color: ${props => props.theme.palette.primary[500]};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`
