import styled from 'styled-components'
import * as Select from '@radix-ui/react-select'

// export const SelectWrapper = styled.div`
//     width: 100%;
//     margin: 0;
//     padding: 0;
//     .trigger {
//         all: unset;
//         cursor: pointer;
//         display: flex;
//         gap: 12px;
//         align-items: center;
//         justify-content: space-between;
//
//         box-sizing: border-box;
//         height: 36px;
//         padding: 6px 12px;
//
//         font-size: ${props => props.theme.typography.fontSizeM};
//         line-height: ${props => props.theme.typography.lineHeightM};
//         color: ${props => props.theme.textColor['100']};
//
//         background-color: ${props => props.theme.bodyColor['700']};
//         border: 1px solid ${props => props.theme.bodyColor['100']};
//         border-radius: 0.125rem;
//         &.primary {
//             //min-width: 13.125rem;
//         }
//         &[data-state='open'] {
//             border-color: ${props => props.theme.bodyColor['100']};
//             border-bottom: none;
//             border-radius: 0.125rem 0.125rem 0 0;
//         }
//
//         span {
//             display: flex;
//             align-items: center;
//             gap: 12px;
//         }
//
//         &.pagination {
//             min-width: 3.125rem;
//             gap: 2px;
//             height: 24px;
//             padding: 0 2px 0 6px;
//             font-size: ${props => props.theme.typography.fontSizeS};
//         }
//
//         &.error {
//             border-color: ${props => props.theme.palette.danger['500']};
//         }
//
//         &:hover {
//             background: ${props => props.theme.bodyColor['500']};
//             border-color: ${props => props.theme.bodyColor['100']};
//         }
//
//         &:focus {
//             border-color: ${props => props.theme.palette.primary['500']};
//             //outline: 1px solid ${props => props.theme.palette.primary['500']};
//         }
//
//         &[data-placeholder] {
//             color: ${props => props.theme.textColor['100']};
//         }
//
//         &[data-disabled] {
//             pointer-events: none;
//             color: ${props => props.theme.bodyColor['300']};
//         }
//
//         .icon {
//             width: 24px;
//             height: 24px;
//             transition: 0.2s;
//             &.pagination {
//                 display: flex;
//                 width: 16px;
//                 height: 16px;
//             }
//             svg {
//                 color: ${props => props.theme.textColor['500']};
//             }
//         }
//
//         &[data-state='open'] {
//             .icon {
//                 transform: rotate(180deg);
//             }
//         }
//     }
//
//
//     .label {
//         display: block;
//         font-size: ${props => props.theme.typography.fontSizeS};
//         line-height: ${props => props.theme.typography.lineHeightM};
//         color: ${props => props.theme.textColor['100']};
//
//         &.disabled {
//             color: ${props => props.theme.textColor['300']};
//         }
//     }
// `
export const SelectWrapper = styled.div`
    width: 167px;
    margin: 0 !important;
    padding: 0;
`

export const SelectTrigger = styled(Select.SelectTrigger)`
    all: unset;
    cursor: pointer;
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;
    height: 36px;
    padding: 6px 12px;

    font-size: ${props => props.theme.typography.fontSizeM};
    line-height: ${props => props.theme.typography.lineHeightM};
    color: ${props => props.theme.textColor['100']};

    background-color: ${props => props.theme.bodyColor['700']};
    border: 1px solid ${props => props.theme.bodyColor['100']};
    border-radius: 0.125rem;

    [data-state='open'] {
        border-color: ${props => props.theme.bodyColor['100']};
        border-bottom: none;
        border-radius: 0.125rem 0.125rem 0 0;
    }

    span {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    &.pagination {
        min-width: 3.125rem;
        gap: 2px;
        height: 24px;
        padding: 0 2px 0 6px;
        font-size: ${props => props.theme.typography.fontSizeS};
    }

    &.error {
        border-color: ${props => props.theme.palette.danger['500']};
    }

    &:hover {
        background: ${props => props.theme.bodyColor['500']};
        border-color: ${props => props.theme.bodyColor['100']};
    }

    &:focus {
        border-color: ${props => props.theme.palette.primary['500']};
        //outline: 1px solid ${props => props.theme.palette.primary['500']};
    }

    &[data-placeholder] {
        color: ${props => props.theme.textColor['100']};
    }

    &[data-disabled] {
        pointer-events: none;
        color: ${props => props.theme.bodyColor['300']};
    }
`
export const SelectIcon = styled(Select.SelectIcon)`
    width: 24px;
    height: 24px;
    transition: 0.2s;

    &.pagination {
        display: flex;
        width: 16px;
        height: 16px;
    }

    svg {
        color: ${props => props.theme.textColor['500']};
    }

    &[data-state='open'] {
        transform: rotate(180deg);
    }
`
export const SelectContent = styled(Select.Content)`
    cursor: pointer;
    position: relative;
    z-index: 500;
    display: flex;
    width: var(--radix-select-trigger-width);
    max-height: var(--radix-select-content-available-height);

    background-color: ${props => props.theme.bodyColor['900']};
    border: 1px solid ${props => props.theme.bodyColor['100']};
    border-radius: 0 0 0.125rem 0.125rem;

    &.pagination {
        width: var(--radix-select-trigger-width);
    }
`
export const StyledItem = styled(Select.Item)`
    display: flex;
    padding: 6px 12px;
    gap: 12px;
    width: 100%;
    font-size: ${props => props.theme.typography.fontSizeS};
    line-height: ${props => props.theme.typography.lineHeightM};
    color: ${props => props.theme.textColor['100']};
    background-color: ${props => props.theme.bodyColor['900']};

    &.pagination {
        padding: 0 0 0 6px;
        font-size: ${props => props.theme.typography.fontSizeS};
        line-height: ${props => props.theme.typography.lineHeightM};
    }

    &[data-highlighted] {
        color: ${props => props.theme.palette.primary['500']};
        background-color: ${props => props.theme.bodyColor['300']};
        outline: none;
    }

    &[data-disabled] {
        pointer-events: none;
        color: ${props => props.theme.textColor['300']};
    }
`
