import styled from 'styled-components'

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    a {
        align-self: flex-start;
    }

    p {
        margin-bottom: 20px;
        font-size: ${({theme}) => theme.typography.fontSizeXL};
        font-weight: ${({theme}) => theme.typography.fontWeightBold};
    }

    span {
        font-size: ${({theme}) => theme.typography.fontSizeS};
        font-style: normal;
        font-weight: ${({theme}) => theme.typography.fontWeightRegular};
        line-height: ${({theme}) => theme.typography.lineHeightM};
        max-width: 1000px;
        text-align: center;
    }
`
