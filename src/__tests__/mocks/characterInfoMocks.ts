import { getCharacter } from '../../graphql/queries/getCharacter'

export const mockCharacter = {
  id: '1',
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: { name: 'Earth (C-137)' },
  location: { name: 'Citadel of Ricks' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
}

export const successMocks = [
  {
    request: {
      query: getCharacter,
      variables: { id: '1' },
    },
    result: {
      data: {
        character: mockCharacter,
      },
    },
  },
]

export const errorMocks = [
  {
    request: {
      query: getCharacter,
      variables: { id: '1' },
    },
    error: new Error('Character not found'),
  },
]

export const loadingMocks = [
  {
    request: {
      query: getCharacter,
      variables: { id: '1' },
    },
    delay: 1000,
    result: {
      data: {
        character: mockCharacter,
      },
    },
  },
]
