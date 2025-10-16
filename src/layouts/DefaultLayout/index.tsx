import { Outlet } from 'react-router-dom'
import { Body, Container, Head, LayoutWrapper } from './styles'
import Header from '../../components/Header'

export function DefaultLayout() {
  return (
    <Container>
      <LayoutWrapper>
        <Head>
          <Header />
        </Head>

        <Body>
          <Outlet />
        </Body>
      </LayoutWrapper>
    </Container>
  )
}
