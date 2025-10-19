import { getCharacters, getCharactersByIds } from '../../graphql/queries'

export const mockCharacters = [
  {
    id: '1',
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (C-137)' },
    location: { name: 'Citadel of Ricks' },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: '2',
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'unknown' },
    location: { name: 'Citadel of Ricks' },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
]

export const successMocks = [
  {
    request: {
      query: getCharacters,
      variables: { page: 1, name: null },
    },
    result: {
      data: {
        characters: {
          results: mockCharacters,
          info: {
            count: 826,
            pages: 42,
            next: 2,
            prev: null,
          },
        },
      },
    },
  },
]

export const errorMocks = [
  {
    request: {
      query: getCharacters,
      variables: { page: 1, name: null },
    },
    error: new Error('Network error'),
  },
]

export const emptyMocks = [
  {
    request: {
      query: getCharacters,
      variables: { page: 1, name: null },
    },
    result: {
      data: {
        characters: {
          results: [],
          info: { count: 0, pages: 0, next: null, prev: null },
        },
      },
    },
  },
]

export const integrationMocks = [
  {
    request: {
      query: getCharacters,
      variables: { page: 1, name: null },
    },
    result: {
      data: {
        characters: {
          results: mockCharacters,
          info: { count: 826, pages: 42, next: 2, prev: null },
        },
      },
    },
  },
  {
    request: {
      query: getCharactersByIds,
      variables: { ids: ['1'] },
    },
    result: {
      data: {
        charactersByIds: [mockCharacters[0]],
      },
    },
  },
]
