import { ReactNode } from 'react'

import { styled } from 'styled-components'

export const AuthContainerWrapper = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: Inter, sans-serif;

  .content {
    width: 100%;
    max-width: 400px;
    padding: 23px;
    border: 1px solid ${props => props.theme.bodyColor['300']};
    background-color: ${props => props.theme.bodyColor['500']};
  }
`

export const AuthContainer = (props: { children: ReactNode }) => {
  return (
    <AuthContainerWrapper>
      <div className={'content'}>{props.children}</div>
    </AuthContainerWrapper>
  )
}
