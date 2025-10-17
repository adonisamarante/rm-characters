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

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: center;
`

export const PaginationButton = styled.button<{ active?: boolean }>`
  background: ${({ active, theme }) =>
    active ? theme['green-300'] : 'transparent'};
  color: ${({ theme }) => theme['green-500']};
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  box-shadow: ${({ active, theme }) =>
    active ? `0 0 8px 2px ${theme['blue-700']}` : 'none'};
  cursor: pointer;
  transition:
    background 0.2s,
    box-shadow 0.2s;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme['green-700']};
    color: ${({ theme }) => theme['gray-100']};
    box-shadow: 0 0 8px 2px ${({ theme }) => theme['blue-700']};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const PaginationInfo = styled.span`
  background: ${({ theme }) => theme['green-300']};
  color: ${({ theme }) => theme['green-700']};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 0 0 8px 2px ${({ theme }) => theme['blue-700']};
`
