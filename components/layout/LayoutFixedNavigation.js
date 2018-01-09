import Link from 'next/link'
import {
  Container,
  Image,
  Menu
} from 'semantic-ui-react'

const isActive = ({pathname}, target_path) => pathname === target_path

const pages = [
  {path: '/', name: 'Home'},
  {path: '/events', name: 'Events'},
  {path: '/game-library', name: 'Game Library'},
  {path: '/members', name: 'Members'},
  {path: '/about', name: 'About Us'}
]

const LayoutFixedNavigation = ({url}) => (
  <Menu fixed="top" inverted>
    <Container>
      <Link href="/">
        <Menu.Item as="a">
          <Image
            size="mini"
            src="/static/d20-icon-5.png"
            style={{ marginRight: '1.5em' }}
          />
          Game Group Manager
        </Menu.Item>
      </Link>

      {pages.map(({name, path}) => (
        <Link href={path} key={`page-link-${path}`}>
          <Menu.Item as="a" active={isActive(url, path)}>{name}</Menu.Item>
        </Link>
      ))}

      <Menu.Menu position="right">
        <Link href="/login">
          <Menu.Item as="a">Login</Menu.Item>
        </Link>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default LayoutFixedNavigation
