import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 5rem);
  background: ${({ theme }) => theme['gray-900']};
  margin-top: 7rem;

  justify-content: center;
`

export const Card = styled.div`
  max-width: 62.5rem;
  height: fit-content;
  background: ${({ theme }) => theme['gray-800']};
  box-shadow: 0 0 10px ${({ theme }) => theme['blue-700']};
  border-radius: 24px;
  padding: 2rem 3rem;
  margin-bottom: 1.5rem;

  flex-direction: column;
  align-items: center;
`

export const TitleWrapper = styled.div`
  margin-bottom: 4rem;

  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0;
  }
`

export const CharacterImage = styled.img`
  width: 12rem;
  height: 12rem;
  border: 3px solid ${({ theme }) => theme['green-500']};
  box-shadow: 0 0 15px ${({ theme }) => theme['green-300']};
  border-radius: 50%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 9.5rem;
    height: 9.5rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 2rem;
  }
`

export const Name = styled.h1`
  color: ${({ theme }) => theme['blue-700']};
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`

export const InfoList = styled.ul`
  list-style: none;
  margin: 0 0 2rem 0;
  width: 100%;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 0.5rem 2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    margin-bottom: 2rem;

    span {
      color: ${({ theme }) => theme['green-300']};
      font-weight: 600;
    }
  }
`

export const BackButton = styled.button`
  color: ${({ theme }) => theme['gray-100']};
  background: ${({ theme }) => theme['gray-700']};
  padding: 0.75rem 2rem;
  border-radius: 8px;
  border: none;

  font-size: 1rem;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 8px 2px ${({ theme }) => theme['blue-700']};
    transition: box-shadow 0.2s ease-in-out;
  }
`
