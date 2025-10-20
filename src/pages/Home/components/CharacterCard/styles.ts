import { Heart } from 'phosphor-react'
import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 19.375rem;
  width: 16rem;
  background-color: ${({ theme }) => theme['gray-800']};
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

    background-color: ${({ theme }) => theme['gray-700']};
    box-shadow: 0 0 15px ${({ theme }) => theme['green-300']};
    border: 3px solid ${({ theme }) => theme['green-500']};
    border-radius: 50%;

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
  margin-top: 7.5rem;
  text-align: center;
  flex-direction: column;
  gap: 1rem;

  > :first-child {
    color: ${({ theme }) => theme['blue-700']};
    font-size: 1.4rem;
    line-height: 130%;
    font-weight: 700;
  }
`

export const FavoriteButton = styled(Heart).attrs<{ isFavorite: boolean }>(
  (props) => ({
    size: 26,
    weight: props.isFavorite ? 'fill' : 'light',
    color: props.theme['gray-300'],
  }),
)`
  position: absolute;
  top: 1rem;
  left: 1rem;

  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`

export const InfoList = styled.ul`
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.5rem;

  li {
    display: flex;
    flex-direction: column;

    text-align: center;
    margin-bottom: 0.7rem;

    span {
      color: ${({ theme }) => theme['green-300']};
    }
  }
`
