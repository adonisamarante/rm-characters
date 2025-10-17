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

export const PaginationContainer = styled.div`
  gap: 0.5rem;
  margin: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const PaginationButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme['gray-100']};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;

  transition:
    background 0.2s,
    box-shadow 0.2s;

  &:hover:not(:disabled) {
    cursor: pointer;
    box-shadow: 0 0 8px 2px ${({ theme }) => theme['blue-700']};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const PaginationInfo = styled.span`
  color: ${({ theme }) => theme['green-700']};
  background: ${({ theme }) => theme['green-300']};
  box-shadow: 0 0 8px 2px ${({ theme }) => theme['green-300']};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
`
