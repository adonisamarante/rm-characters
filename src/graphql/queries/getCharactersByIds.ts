import { gql } from '@apollo/client'

export const getCharactersByIds = gql`
  query charactersByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      image
      gender
      species
    }
  }
`
