import styled, {css} from 'styled-components'
import Link from 'next/link'
import {ReactNode} from 'react'

export const NavLinkWrapper = styled(Link)`
    display: flex;
    align-items: center;
    gap: 15px;

    text-decoration: none;
    color: ${props => props.theme.textColor[100]};

    &:hover {
        color: ${props => props.theme.palette.primary[100]};

        path {
            fill: ${props => props.theme.palette.primary[100]};
        }
    }

    &.active {
        color: ${props => props.theme.palette.primary[500]};

        path {
            fill: ${props => props.theme.palette.primary[500]};
        }
    }
`
const Wrapper = styled.span<{$active: boolean}>`
    width: 23px;
    height: 23px;

    svg {
        width: 100%;
        height: 100%;
    }

    path {
        ${props => {
            if (props.$active) {
                return css`
                    fill: ${props => props.theme.palette.primary[500]};
                `
            } else {
                return css`
                    fill: ${props => props.theme.textColor[100]};
                `
            }
        }}
    }
`

export const NavIconWrapper = (props: {children: ReactNode; active: boolean}) => {
    return <Wrapper $active={props.active}>{props.children}</Wrapper>
}
