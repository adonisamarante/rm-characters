import { gql } from '@apollo/client'

export const getCharacters = gql`
  query characters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      results {
        id
        name
        image
        gender
        species
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`
