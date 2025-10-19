import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Home } from '../../../pages/Home'
import { FavoritesProvider } from '../../../contexts/FavoritesContext'
import { successMocks, errorMocks, emptyMocks } from '../../mocks/homeMocks'
import { defaultTheme } from '../../../styles/themes/default'

jest.mock('../../../pages/Home/components/LoadSkeleton', () => ({
  LoadSkeleton: () => <div data-testid="load-skeleton">Loading...</div>,
}))

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}))

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <MockedProvider mocks={successMocks}>
    <MemoryRouter>
      <ThemeProvider theme={defaultTheme}>
        <FavoritesProvider>{children}</FavoritesProvider>
      </ThemeProvider>
    </MemoryRouter>
  </MockedProvider>
)

describe('Home Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render the main title', () => {
    render(<Home />, { wrapper })
    expect(screen.getByText('Meet the Characters')).toBeInTheDocument()
  })

  it('should display characters after loading', async () => {
    render(<Home />, { wrapper })

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
      expect(screen.getByText('Morty Smith')).toBeInTheDocument()
    })
  })

  it('should navigate when character is clicked', async () => {
    render(<Home />, { wrapper })

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    const rickCard = screen.getByText('Rick Sanchez').closest('div')
    if (rickCard) {
      fireEvent.click(rickCard)
      expect(mockNavigate).toHaveBeenCalledWith('/info/1')
    }
  })

  it('should show error message when API fails', async () => {
    const ErrorWrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={errorMocks}>
        <MemoryRouter>
          <ThemeProvider theme={defaultTheme}>
            <FavoritesProvider>{children}</FavoritesProvider>
          </ThemeProvider>
        </MemoryRouter>
      </MockedProvider>
    )

    render(<Home />, { wrapper: ErrorWrapper })

    await waitFor(() => {
      expect(screen.getByText(/Error: Network error/)).toBeInTheDocument()
    })
  })

  it('should show empty state when no characters found', async () => {
    const EmptyWrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={emptyMocks}>
        <MemoryRouter>
          <ThemeProvider theme={defaultTheme}>
            <FavoritesProvider>{children}</FavoritesProvider>
          </ThemeProvider>
        </MemoryRouter>
      </MockedProvider>
    )

    render(<Home />, { wrapper: EmptyWrapper })

    await waitFor(() => {
      expect(
        screen.getByText('There are no characters to show.'),
      ).toBeInTheDocument()
    })
  })
})
