import { useNavigate, useParams } from 'react-router-dom'
import type { ICharacter, IGetCharacterData } from '../../types/character'
import {
  BackButton,
  Card,
  CharacterImage,
  Container,
  InfoList,
  Name,
  TitleWrapper,
} from './styles'
import { useQuery } from '@apollo/client/react'
import { getCharacter } from '../../graphql/queries/getCharacter'
import { LoadSkeleton } from './components/LoadSkeleton'

export function CharacterInfo() {
  const { characterId } = useParams<{ characterId: string }>()
  const navigate = useNavigate()

  const { loading, error, data } = useQuery<IGetCharacterData>(getCharacter, {
    variables: { id: characterId },
  })

  console.log(error?.message)
  console.log(loading)

  const character: ICharacter | undefined = data?.character

  function handleClickBack() {
    navigate('/', { replace: true })
  }

  return (
    <>
      {loading ? (
        <LoadSkeleton />
      ) : (
        <Container>
          <Card>
            <TitleWrapper>
              <CharacterImage src={character?.image} alt={character?.name} />
              <Name>{character?.name}</Name>
            </TitleWrapper>

            <InfoList>
              <li>
                <span>Gender</span> {character?.gender}
              </li>
              <li>
                <span>Type</span> {character?.type || 'unknown'}
              </li>
              <li>
                <span>Species</span> {character?.species}
              </li>
              <li>
                <span>Status</span> {character?.status}
              </li>
              <li>
                <span>Origin</span> {character?.origin?.name}
              </li>
              <li>
                <span>Last Known Location</span> {character?.location?.name}
              </li>
            </InfoList>

            <BackButton onClick={handleClickBack}>
              Back to Characters
            </BackButton>
          </Card>
        </Container>
      )}
    </>
  )
}
