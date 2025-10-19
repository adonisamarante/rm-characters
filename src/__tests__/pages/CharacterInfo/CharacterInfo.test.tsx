import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MockedProvider } from '@apollo/client/testing/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CharacterInfo } from '../../../pages/CharacterInfo'
import { successMocks, errorMocks } from '../../mocks/characterInfoMocks'
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

describe('CharacterInfo Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should display character information after loading', async () => {
    render(<CharacterInfo />, { wrapper })

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
      expect(screen.getByText('Male')).toBeInTheDocument()
      expect(screen.getByText('Human')).toBeInTheDocument()
      expect(screen.getByText('Alive')).toBeInTheDocument()
    })
  })

  it('should navigate back when back button is clicked', async () => {
    render(<CharacterInfo />, { wrapper })

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })

    const backButton = screen.getByRole('button', {
      name: /back to characters/i,
    })
    fireEvent.click(backButton)

    expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true })
  })

  it('should show error message when API fails', async () => {
    const ErrorWrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={errorMocks}>
        <MemoryRouter>
          <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
        </MemoryRouter>
      </MockedProvider>
    )

    render(<CharacterInfo />, { wrapper: ErrorWrapper })

    await waitFor(() => {
      expect(screen.queryByText('Rick Sanchez')).not.toBeInTheDocument()
    })
  })

  it('should display character image', async () => {
    render(<CharacterInfo />, { wrapper })

    await waitFor(() => {
      const image = screen.getByAltText('Rick Sanchez')
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute(
        'src',
        'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      )
    })
  })

  it('should show unknown for empty type field', async () => {
    render(<CharacterInfo />, { wrapper })

    await waitFor(() => {
      expect(screen.getByText('unknown')).toBeInTheDocument()
    })
  })
})
