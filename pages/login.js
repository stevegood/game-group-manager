import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react'
import LayoutHead from '../components/layout/LayoutHead'

const Login = () => (
  <div className="login-form">
    <LayoutHead/>

    <style>{`
      body > div,
      body > div > div,
      body > div > div > div,
      body > div > div > div > div.login-form {
        height: 100%;
      }
    `}</style>

    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          <Image src="/static/d20-icon-5.png" />
          Game Group Manager
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input fluid icon="user" iconPosition="left" placeholder="Email address" type="email" />
            <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" type="password" />
            <Button primary fluid size="large">Login</Button>
          </Segment>
        </Form>

        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default Login
