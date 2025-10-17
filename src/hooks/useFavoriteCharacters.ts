import { useFavorites } from '../contexts/FavoritesContext'
import type { ICharacter } from '../infra/interfaces/character'

export function useFavoriteCharacters(allCharacters: ICharacter[]) {
  const { favoriteIds } = useFavorites()

  return allCharacters.filter((character) => favoriteIds.includes(character.id))
}
