import {
  Container,
  Header
} from 'semantic-ui-react'
import LayoutFixedNavigation from './LayoutFixedNavigation'
import LayoutHead from './LayoutHead'
import LayoutFooter from './LayoutFooter'

const style = {
  container: {
    marginTop: '7em'
  }
}

const PageLayout = ({ children, title, url }) => (
  <div>
    <LayoutHead />

    <LayoutFixedNavigation url={url} />

    <Container style={style.container}>
      {title ? <Header as="h1">{title}</Header> : null}
      {children}
    </Container>

    <LayoutFooter />
  </div>
)

export default PageLayout
