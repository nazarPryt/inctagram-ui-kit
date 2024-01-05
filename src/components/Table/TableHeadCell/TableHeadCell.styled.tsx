import { styled } from 'styled-components'

import { IconColor } from '../../../styles/mixins/IconColor'

export const TableHeadCellStyled = styled.th`
  padding: 6px 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  background-color: ${props => props.theme.bodyColor[300]};
  //todo make icon center

  .sortIcon {
    display: inline-block;
    width: 15px;
    height: 15px;

    ${IconColor}
    svg {
      width: 100%;
      height: 100%;
    }
  }
`
