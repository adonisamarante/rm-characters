import { Heart } from 'phosphor-react'
import { SearchBarWrapper, SearchInputWrapper, ToggleButton } from './styles'

interface SearchAndFiltersProps {
  favoriteIds: string[]
  showFavoritesOnly: boolean
  handleChangePage: (newPage: number) => void
  onToggleFavorites: (newValue: boolean) => void
  fetchFavorites: (options: { variables: { ids: string[] } }) => void
}

export function SearchAndFilters({
  favoriteIds,
  showFavoritesOnly,
  handleChangePage,
  onToggleFavorites,
  fetchFavorites,
}: SearchAndFiltersProps) {
  function handleToggleFavorites() {
    const newShowFavorites = !showFavoritesOnly
    onToggleFavorites(newShowFavorites)
    handleChangePage(1)

    if (newShowFavorites && favoriteIds.length > 0) {
      fetchFavorites({
        variables: { ids: favoriteIds },
      })
    }
  }

  return (
    <SearchBarWrapper>
      <SearchInputWrapper>
        <input type="text" />
      </SearchInputWrapper>

      <ToggleButton onClick={handleToggleFavorites}>
        <Heart size={20} weight={showFavoritesOnly ? 'fill' : 'regular'} />
        {showFavoritesOnly ? 'Show All' : 'Show Favorites'}
      </ToggleButton>
    </SearchBarWrapper>
  )
}
