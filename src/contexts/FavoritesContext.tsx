import { createContext, useContext, useState, type ReactNode } from 'react'

interface FavoritesContextProps {
  favoriteIds: string[]
  addToFavorites: (characterId: string) => void
  removeFromFavorites: (characterId: string) => void
  isFavorite: (characterId: string) => boolean
  toggleFavorite: (characterId: string) => void
}

interface FavoritesProviderProps {
  children: ReactNode
}

const FavoritesContext = createContext<FavoritesContextProps>(
  {} as FavoritesContextProps,
)

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([])

  function addToFavorites(characterId: string) {
    setFavoriteIds((prev) => {
      if (!prev.includes(characterId)) {
        return [...prev, characterId]
      }
      return prev
    })
  }

  function removeFromFavorites(characterId: string) {
    setFavoriteIds((prev) => prev.filter((id) => id !== characterId))
  }

  function isFavorite(characterId: string) {
    return favoriteIds.includes(characterId)
  }

  function toggleFavorite(characterId: string) {
    if (isFavorite(characterId)) {
      removeFromFavorites(characterId)
    } else {
      addToFavorites(characterId)
    }
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoriteIds,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}
