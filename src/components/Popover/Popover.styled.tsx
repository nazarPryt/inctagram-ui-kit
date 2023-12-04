import styled from 'styled-components'

export const PopoverContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-90%);
    background-color: ${props => props.theme.bodyColor['500']};
    padding: 10px;
    gap: 10px;
    border: 1px solid ${props => props.theme.bodyColor['100']};
    z-index: 999;
    color: ${props => props.theme.textColor[100]};
    max-height: 470px;
    overflow-y: auto;

    div {
        width: 100%;
        justify-content: left;
    }
`
export const PopoverWrapper = styled.div`
    position: relative;
    display: inline-block;
`
