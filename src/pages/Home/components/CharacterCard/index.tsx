import { CardContainer, CharacterDescription, FavoriteButton } from './styles'
import type { ICharacter } from '../../../../types/character'
import type { HTMLAttributes } from 'react'
import { useFavorites } from '../../../../contexts/FavoritesContext'

interface CharacterCardProps extends HTMLAttributes<HTMLDivElement> {
  character: ICharacter
}

export function CharacterCard({ character, ...rest }: CharacterCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites()
  const isCharacterFavorite = isFavorite(character.id)

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    toggleFavorite(character.id)
  }

  return (
    <CardContainer {...rest}>
      <img src={character.image} alt="image example" />

      <FavoriteButton
        onClick={handleFavoriteClick}
        isFavorite={isCharacterFavorite}
      />

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
