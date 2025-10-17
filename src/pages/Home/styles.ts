import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 5rem;
`

export const TitleWrapper = styled.div`
  width: 100%;
  height: 12rem;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: white;
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

export const CharactersListContainer = styled.div`
  flex: 1;
  flex-direction: column;
`

export const CharactersList = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 1.5rem;
  justify-items: center;
`
