import { useState } from 'react'
import { Heart, MagnifyingGlass } from 'phosphor-react'
import {
  SearchBarWrapper,
  SearchButton,
  SearchInput,
  SearchInputWrapper,
  ToggleButton,
} from './styles'

interface SearchAndFiltersProps {
  favoriteIds: string[]
  showFavoritesOnly: boolean
  nameToSearch: string
  handleChangePage: (newPage: number) => void
  onSearch: (name: string) => void
  onClearSearch: () => void
  onToggleFavorites: (newValue: boolean) => void
  fetchFavorites: (options: { variables: { ids: string[] } }) => void
}

export function SearchAndFilters({
  favoriteIds,
  showFavoritesOnly,
  nameToSearch,
  handleChangePage,
  onSearch,
  onClearSearch,
  onToggleFavorites,
  fetchFavorites,
}: SearchAndFiltersProps) {
  const [searchInput, setSearchInput] = useState('')

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

  function handleSearch() {
    const name = searchInput.trim()
    if (name) {
      onSearch(name)

      if (showFavoritesOnly) {
        onToggleFavorites(false)
      }
    } else {
      onClearSearch()
    }
  }

  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  function handleClearSearch() {
    onClearSearch()
    setSearchInput('')
    handleChangePage(1)
  }

  return (
    <SearchBarWrapper>
      <ToggleButton onClick={handleToggleFavorites}>
        {showFavoritesOnly ? 'Show All' : 'Show Favorites'}
        <Heart size={20} weight={showFavoritesOnly ? 'fill' : 'regular'} />
      </ToggleButton>

      <SearchInputWrapper>
        <SearchInput
          type="text"
          placeholder="Search by name..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={showFavoritesOnly}
        />
        <SearchButton
          onClick={handleSearch}
          disabled={showFavoritesOnly || !searchInput.trim()}
        >
          <MagnifyingGlass size={20} />
        </SearchButton>
        {nameToSearch && (
          <SearchButton onClick={handleClearSearch}>Clear</SearchButton>
        )}
      </SearchInputWrapper>
    </SearchBarWrapper>
  )
}
