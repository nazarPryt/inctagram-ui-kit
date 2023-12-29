import { styled } from 'styled-components'

export const ScrollbarStyled = styled.div`
  overflow: hidden;

  .viewport {
    width: 100%;
    height: 100%;
  }

  .scrollbar {
    touch-action: none;
    user-select: none;
    display: flex;
  }

  .scrollbar[data-orientation='vertical'] {
    width: 14px;
    padding: 3px 0;
  }

  .scrollbar[data-orientation='horizontal'] {
    flex-direction: column;
    height: 14px;
    padding: 0 3px;
  }

  .thumb {
    cursor: pointer;

    position: relative;

    flex-grow: 1;

    padding: 0 5px;

    border-radius: 5px;

    &::before {
      content: '';

      position: absolute;

      width: 4px;
      height: 100%;

      background-color: cornflowerblue;
      border-radius: 3px;

      transition: 0.2ms background-color;

      [data-orientation='horizontal'] & {
        width: 100%;
        height: 4px;
      }
    }

    [data-orientation='horizontal'] & {
      padding: 5px 0;
    }

    &:hover::before {
      background-color: brown;
    }
  }
`
