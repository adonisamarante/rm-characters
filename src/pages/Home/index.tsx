import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLazyQuery, useQuery } from '@apollo/client/react'
import { getCharacters, getCharactersByIds } from '../../graphql/queries'
import { useFavorites } from '../../contexts/FavoritesContext'
import { defaultListInfo } from '../../utils/defaultValues'
import {
  CharacterCard,
  LoadSkeleton,
  Pagination,
  SearchAndFilters,
} from './components'
import type {
  ICharacter,
  IGetCharactersData,
  ICharactersListInfo,
} from '../../types/character'
import * as S from './styles'

export function Home() {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const [nameToSearch, setNameToSearch] = useState('')
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const { favoriteIds } = useFavorites()

  const {
    loading: charactersLoading,
    error: charactersError,
    data: charactersData,
  } = useQuery<IGetCharactersData>(getCharacters, {
    variables: { page, name: nameToSearch || null },
    skip: showFavoritesOnly,
  })

  const [
    fetchFavorites,
    { loading: favoritesLoading, error: favoritesError, data: favoritesData },
  ] = useLazyQuery<{ charactersByIds: ICharacter[] }>(getCharactersByIds)

  const loading = showFavoritesOnly ? favoritesLoading : charactersLoading
  const error = showFavoritesOnly ? favoritesError : charactersError

  const apiCharacters: ICharacter[] = charactersData?.characters?.results || []
  const favoriteCharacters: ICharacter[] =
    favoriteIds.length === 0 ? [] : favoritesData?.charactersByIds || []

  const info: ICharactersListInfo =
    charactersData?.characters?.info || defaultListInfo

  const displayCharacters = showFavoritesOnly
    ? favoriteCharacters
    : apiCharacters

  function handleSearch(name: string) {
    setNameToSearch(name)
    setPage(1)
    setShowFavoritesOnly(false)
  }

  function handleClearSearch() {
    setNameToSearch('')
  }

  function onToggleFavorites(newValue: boolean) {
    setShowFavoritesOnly(newValue)
  }

  function handleClickCharacter(characterId: string) {
    navigate(`/info/${characterId}`)
  }

  function handleChangePage(newPage: number) {
    setPage(newPage)
  }

  return (
    <S.Container>
      <S.TitleWrapper>
        <span>Meet the Characters</span>
      </S.TitleWrapper>

      <SearchAndFilters
        favoriteIds={favoriteIds}
        fetchFavorites={fetchFavorites}
        nameToSearch={nameToSearch}
        onSearch={handleSearch}
        onClearSearch={handleClearSearch}
        handleChangePage={handleChangePage}
        onToggleFavorites={onToggleFavorites}
        showFavoritesOnly={showFavoritesOnly}
      />

      <S.CharactersListWrapper>
        <S.CharactersList>
          {loading
            ? Array.from({ length: 20 }).map((_, index) => (
                <LoadSkeleton key={`skeleton-${index}`} />
              ))
            : displayCharacters.length > 0 &&
              displayCharacters.map((character) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  onClick={() => handleClickCharacter(character.id)}
                />
              ))}
        </S.CharactersList>

        {!showFavoritesOnly && displayCharacters.length > 0 && (
          <Pagination
            page={page}
            info={info}
            handleChangePage={handleChangePage}
          />
        )}
      </S.CharactersListWrapper>

      {error && <p>Error: {error.message}</p>}

      {!loading && !showFavoritesOnly && displayCharacters.length === 0 && (
        <p>There are no characters to show.</p>
      )}

      {showFavoritesOnly && favoriteIds.length === 0 && !loading && (
        <p>You have no favorite characters yet.</p>
      )}
    </S.Container>
  )
}
