import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { ApolloProvider } from '@apollo/client/react'
import { client } from './lib/apolloClient'
import { FavoritesProvider } from './contexts/FavoritesContext'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <FavoritesProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </FavoritesProvider>

        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  )
}
