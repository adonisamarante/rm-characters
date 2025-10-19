import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 5rem);
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 21.875rem;
    left: 50%;
    width: 62.5rem;
    height: 62.5rem;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      circle,
      ${({ theme }) => theme['green-700']}40 0%,
      ${({ theme }) => theme['green-500']}25 10%,
      ${({ theme }) => theme['green-300']}18 40%,
      transparent 70%
    );
    z-index: -1;
  }
`

export const TitleWrapper = styled.div`
  width: 100%;
  height: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${({ theme }) => theme['gray-300']};
    font-size: 3rem;
    font-weight: 700;
    filter: drop-shadow(0 0 7px ${({ theme }) => theme['blue-700']});
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    span {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    span {
      font-size: 2rem;
    }
  }
`

export const CharactersListWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`

export const CharactersList = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 1.5rem;
  justify-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
