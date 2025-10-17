import { useState } from 'react'
import { useQuery } from '@apollo/client/react'
import { useNavigate } from 'react-router-dom'
import { getCharacters } from '../../graphql/queries'
import { CharacterCard, Pagination } from './components'
import type {
  ICharacter,
  IGetCharactersData,
  ICharactersListInfo,
} from '../../infra/interfaces/character'
import {
  CharactersList,
  CharactersListWrapper,
  Container,
  TitleWrapper,
} from './styles'

const defaultInfo: ICharactersListInfo = {
  count: 0,
  pages: 0,
  next: 0,
  prev: 0,
}

export function Home() {
  const [page, setPage] = useState(1)
  const { loading, error, data } = useQuery<IGetCharactersData>(getCharacters, {
    variables: { page },
  })
  const navigate = useNavigate()

  const characters: ICharacter[] = data?.characters?.results || []
  const info: ICharactersListInfo = data?.characters?.info || defaultInfo

  function handleClickCharacter(characterId: string) {
    navigate(`/info/${characterId}`)
  }

  function handleChangePage(newPage: number) {
    setPage(newPage)
  }

  return (
    <Container>
      <TitleWrapper>
        <span>Meet the Characters</span>{' '}
      </TitleWrapper>

      <CharactersListWrapper>
        <CharactersList>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {!loading &&
            characters.length &&
            characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                onClick={() => handleClickCharacter(character.id)}
              />
            ))}
        </CharactersList>

        <Pagination
          page={page}
          info={info}
          handleChangePage={handleChangePage}
        />
      </CharactersListWrapper>
    </Container>
  )
}
