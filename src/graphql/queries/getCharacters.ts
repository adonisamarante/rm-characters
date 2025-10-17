import { gql } from '@apollo/client'

export const getCharacters = gql`
  query characters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
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
