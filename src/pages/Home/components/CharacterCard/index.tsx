import { CardContainer, CharacterDescription } from './styles'
import type { ICharacter } from '../../../../infra/interfaces/character'
import type { HTMLAttributes } from 'react'

interface CharacterCardProps extends HTMLAttributes<HTMLDivElement> {
  character: ICharacter
}

export default function CharacterCard({
  character,
  ...rest
}: CharacterCardProps) {
  return (
    <CardContainer {...rest}>
      <img src={character.image} alt="image example" />

      <CharacterDescription>
        <span>{character.name}</span>
        <span>
          This is the description test sjoia aisfjoid sidjfos sidfjsoidfjios isd
          isdj isidfojsdof sidjfosd sidjofsijfos ijofsjid his is the description
          test sjoia aisfjoid sidjfos sidfjsoidfjios isd isdj isidfojsdof
          sidjfosd sidjofsijfos ijofsjid his is the description test sjoia
          aisfjoid sidjfos sidfjsoidfjios isd isdj isidfojsdof sidjfosd
          sidjofsijfos ijofsjid his is the description test sjoia aisfjoid
          sidjfos sidfjsoidfjios isd isdj isidfojsdof sidjfosd sidjofsijfos
          ijofsjid
        </span>
      </CharacterDescription>
    </CardContainer>
  )
}
