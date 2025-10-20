import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { ApolloProvider } from '@apollo/client/react'
import { client } from './lib/apolloClient'
import { FavoritesProvider } from './contexts/FavoritesContext'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <SkeletonTheme
          baseColor={defaultTheme['gray-700']}
          highlightColor={defaultTheme['gray-600']}
        >
          <FavoritesProvider>
            <BrowserRouter basename="/rm-characters">
              <Router />
            </BrowserRouter>
          </FavoritesProvider>
        </SkeletonTheme>

        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  )
}
