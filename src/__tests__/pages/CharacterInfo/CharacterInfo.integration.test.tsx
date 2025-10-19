import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MockedProvider } from '@apollo/client/testing/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CharacterInfo } from '../../../pages/CharacterInfo'
import { successMocks, loadingMocks } from '../../mocks/characterInfoMocks'
import { defaultTheme } from '../../../styles/themes/default'

jest.mock('../../../pages/CharacterInfo/components/LoadSkeleton', () => ({
  LoadSkeleton: () => <div data-testid="load-skeleton">Loading...</div>,
}))

jest.mock('../../../pages/CharacterInfo/styles', () => ({
  Container: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="character-container">{children}</div>
  ),
  Card: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="character-card">{children}</div>
  ),
  TitleWrapper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="title-wrapper">{children}</div>
  ),
  CharacterImage: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img {...props} />
  ),
  Name: ({ children }: { children: React.ReactNode }) => <h1>{children}</h1>,
  InfoList: ({ children }: { children: React.ReactNode }) => (
    <ul>{children}</ul>
  ),
  BackButton: ({
    children,
    onClick,
  }: {
    children: React.ReactNode
    onClick: () => void
  }) => <button onClick={onClick}>{children}</button>,
}))

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useParams: () => ({ characterId: '1' }),
}))

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <MockedProvider mocks={successMocks}>
    <MemoryRouter>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </MemoryRouter>
  </MockedProvider>
)

describe('CharacterInfo Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should load character data from API', async () => {
    render(<CharacterInfo />, { wrapper })

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
      expect(screen.getByText('Earth (C-137)')).toBeInTheDocument()
      expect(screen.getByText('Citadel of Ricks')).toBeInTheDocument()
    })
  })

  it('should show loading skeleton while loading', async () => {
    const LoadingWrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={loadingMocks}>
        <MemoryRouter>
          <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
        </MemoryRouter>
      </MockedProvider>
    )

    render(<CharacterInfo />, { wrapper: LoadingWrapper })

    expect(screen.getByTestId('load-skeleton')).toBeInTheDocument()
    expect(screen.queryByText('Rick Sanchez')).not.toBeInTheDocument()
  })

  it('should handle navigation back to home', async () => {
    render(<CharacterInfo />, { wrapper })

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    const backButton = screen.getByText('Back to Characters')
    fireEvent.click(backButton)

    expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true })
  })

  it('should display all character information fields', async () => {
    render(<CharacterInfo />, { wrapper })

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()

      expect(screen.getByText('Gender')).toBeInTheDocument()
      expect(screen.getByText('Male')).toBeInTheDocument()

      expect(screen.getByText('Species')).toBeInTheDocument()
      expect(screen.getByText('Human')).toBeInTheDocument()

      expect(screen.getByText('Status')).toBeInTheDocument()
      expect(screen.getByText('Alive')).toBeInTheDocument()

      expect(screen.getByText('Origin')).toBeInTheDocument()
      expect(screen.getByText('Earth (C-137)')).toBeInTheDocument()

      expect(screen.getByText('Last Known Location')).toBeInTheDocument()
      expect(screen.getByText('Citadel of Ricks')).toBeInTheDocument()
    })
  })
})
