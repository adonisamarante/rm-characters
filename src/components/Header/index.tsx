import { Container } from './styles'
import headerLogo from '../../assets/header-logo.png'

export default function Header() {
  return (
    <Container>
      <img src={headerLogo} alt="Rick and Morty logo" />
    </Container>
  )
}
