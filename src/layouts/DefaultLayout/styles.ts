import { styled } from 'styled-components'

export const Container = styled.div`
  flex: 1;
`

export const LayoutWrapper = styled.div`
  height: 100vh;

  flex-direction: column;
`

export const Head = styled.div`
  height: 5rem;
`

export const Body = styled.div`
  flex: 1;
  padding: 0 12rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 0 2rem;
  }
`
