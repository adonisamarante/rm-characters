import CharacterCard from './components/CharacterCard'
import {
  CharactersList,
  CharactersListContainer,
  Container,
  TitleWrapper,
} from './styles'
import { useQuery } from '@apollo/client/react'
import { getCharacters } from '../../graphql/queries'
import type {
  ICharacter,
  IGetCharactersData,
} from '../../infra/interfaces/character'

export function Home() {
  const { loading, error, data } = useQuery<IGetCharactersData>(getCharacters, {
    variables: { page: 1 },
  })

  const characters: ICharacter[] = data?.characters?.results || []

  function handleClickCharacter(character: ICharacter) {
    console.log(character.name)
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
                onClick={() => handleClickCharacter(character)}
              />
            ))}
        </CharactersList>
      </CharactersListContainer>
    </Container>
  )
}
