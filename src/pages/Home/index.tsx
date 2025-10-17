import { useQuery } from '@apollo/client/react'
import { getCharacters } from '../../graphql/queries'

export function Home() {
  const { loading, error, data } = useQuery(getCharacters, {
    variables: { page: 1 },
  })

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(error, null, 2)}</pre>
      <pre>{JSON.stringify(loading, null, 2)}</pre>
    </>
  )
}
