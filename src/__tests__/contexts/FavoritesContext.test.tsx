import { renderHook, act } from '@testing-library/react'
import {
  FavoritesProvider,
  useFavorites,
} from '../../contexts/FavoritesContext'

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FavoritesProvider>{children}</FavoritesProvider>
)

describe('FavoritesContext', () => {
  it('should add character to favorites', () => {
    const { result } = renderHook(() => useFavorites(), { wrapper })

    act(() => {
      result.current.toggleFavorite('1')
    })

    expect(result.current.favoriteIds).toContain('1')
    expect(result.current.isFavorite('1')).toBe(true)
  })

  it('should add and remove character from favorites', () => {
    const { result } = renderHook(() => useFavorites(), { wrapper })

    act(() => {
      result.current.addToFavorites('1')
    })
    expect(result.current.favoriteIds).toContain('1')
    expect(result.current.isFavorite('1')).toBe(true)

    act(() => {
      result.current.removeFromFavorites('1')
    })
    expect(result.current.favoriteIds).not.toContain('1')
    expect(result.current.isFavorite('1')).toBe(false)

    expect(result.current.favoriteIds).not.toContain('1')
  })
})
