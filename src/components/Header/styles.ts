import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  width: 100%;
  height: 5rem;
  padding: 0 12rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme['gray-800']};
  border-bottom: solid 2px ${({ theme }) => theme['gray-600']};

  display: flex;
  align-items: center;

  img {
    height: 3.2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`
