import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 19.375rem;
  width: 16rem;
  background-color: ${({ theme }) => theme['gray-700']};
  box-shadow: 0 0 7px ${({ theme }) => theme['blue-700']};

  position: relative;

  flex-direction: column;
  align-items: center;

  margin-top: 1.25rem;
  padding-bottom: 1.25rem;
  border-radius: 6px 36px 6px 36px;

  img {
    position: absolute;
    top: -1.25rem;

    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme['green-500']};
    box-shadow: 0 0 15px ${({ theme }) => theme['green-300']};

    height: 7.5rem;
    width: 7.5rem;
  }

  &:hover {
    box-shadow: 0 0 12px ${({ theme }) => theme['blue-500']};
    transition: box-shadow 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const CharacterDescription = styled.div`
  width: 13rem;
  margin-top: 8.5rem;
  text-align: center;
  flex-direction: column;
  gap: 1rem;

  :first-child {
    font-family: 'Baloo 2', sans-serif;
    color: ${({ theme }) => theme['blue-700']};
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 700;
  }

  :last-child {
    color: ${({ theme }) => theme['gray-300']};
    font-size: 0.875rem;
    line-height: 130%;

    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    overflow: hidden;
  }
`
