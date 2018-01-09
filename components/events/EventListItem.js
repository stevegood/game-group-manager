import { List } from "semantic-ui-react"

const EventListItem = ({ id, title, start, end }) => (
  <List.Item>
    <List.Icon name="github" size="large" verticalAlign="middle" />
    <List.Content>
      <List.Header as="a" style={{ fontSize: '1.33em', fontWeight: 'bold' }}>{title}</List.Header>
      <List.Description as="a">
        <List>
          <List.Item>
            <List.Content>
              <List.Description>
                <strong>When:</strong> {start.toString()} -- {end.toString()}
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </List.Description>
    </List.Content>
  </List.Item>
)

export default EventListItem
