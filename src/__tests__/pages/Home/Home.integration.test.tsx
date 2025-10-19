import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MockedProvider } from '@apollo/client/testing/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Home } from '../../../pages/Home'
import {
  FavoritesProvider,
  useFavorites,
} from '../../../contexts/FavoritesContext'
import { integrationMocks } from '../../mocks/homeMocks'
import { defaultTheme } from '../../../styles/themes/default'

jest.mock('../../../pages/Home/components/LoadSkeleton', () => ({
  LoadSkeleton: () => <div data-testid="load-skeleton">Loading...</div>,
}))

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}))

const FavoritesHelper = ({ characterId }: { characterId: string }) => {
  const { addToFavorites } = useFavorites()
  return (
    <button
      onClick={() => addToFavorites(characterId)}
      data-testid={`add-favorite-${characterId}`}
    >
      Add to favorites
    </button>
  )
}

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <MockedProvider mocks={integrationMocks}>
    <MemoryRouter>
      <ThemeProvider theme={defaultTheme}>
        <FavoritesProvider>{children}</FavoritesProvider>
      </ThemeProvider>
    </MemoryRouter>
  </MockedProvider>
)

describe('Home Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should load characters from API', async () => {
    render(<Home />, { wrapper })

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
      expect(screen.getByText('Morty Smith')).toBeInTheDocument()
    })
  })

  it('should show favorites when toggled', async () => {
    render(
      <>
        <FavoritesHelper characterId="1" />
        <Home />
      </>,
      { wrapper },
    )

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByTestId('add-favorite-1'))

    const favoritesButton = screen.getByRole('button', {
      name: /show favorites/i,
    })
    fireEvent.click(favoritesButton)

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
      expect(screen.queryByText('Morty Smith')).not.toBeInTheDocument()
    })
  })

  it('should show empty favorites message', async () => {
    render(<Home />, { wrapper })

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    const favoritesButton = screen.getByRole('button', {
      name: /show favorites/i,
    })
    fireEvent.click(favoritesButton)

    await waitFor(() => {
      expect(
        screen.getByText('You have no favorite characters yet.'),
      ).toBeInTheDocument()
    })
  })
})
