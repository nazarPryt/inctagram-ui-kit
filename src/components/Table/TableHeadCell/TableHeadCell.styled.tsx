import styled from 'styled-components'

export const TableHeadCellStyled = styled.th`
    padding: 6px 24px;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;

    background-color: ${props => props.theme.bodyColor[300]};
`
