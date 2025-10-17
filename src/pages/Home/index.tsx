import CharacterCard from './components/CharacterCard'
import {
  CharactersList,
  CharactersListContainer,
  Container,
  PaginationButton,
  PaginationContainer,
  PaginationInfo,
  TitleWrapper,
} from './styles'
import { useQuery } from '@apollo/client/react'
import { getCharacters } from '../../graphql/queries'
import type {
  ICharacter,
  IGetCharactersData,
  ICharactersListInfo,
} from '../../infra/interfaces/character'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

  return (
    <Container>
      <TitleWrapper>
        <span>Meet the Characters</span>{' '}
      </TitleWrapper>
      <CharactersListContainer>
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
        <PaginationContainer>
          <PaginationButton
            onClick={() => setPage(1)}
            title="First page"
            disabled={page === 1}
          >
            {'<<'}
          </PaginationButton>
          <PaginationButton
            onClick={() => setPage(page - 1)}
            title="Previous page"
            disabled={!info?.prev}
          >
            {'<'}
          </PaginationButton>
          <PaginationInfo>
            {page} of {info?.pages ?? '...'}
          </PaginationInfo>
          <PaginationButton
            onClick={() => setPage(page + 1)}
            title="Next page"
            disabled={!info?.next}
          >
            {'>'}
          </PaginationButton>
          <PaginationButton
            onClick={() => setPage(info?.pages ?? page)}
            title="Last page"
            disabled={page === info?.pages}
          >
            {'>>'}
          </PaginationButton>
        </PaginationContainer>
      </CharactersListContainer>
    </Container>
  )
}
