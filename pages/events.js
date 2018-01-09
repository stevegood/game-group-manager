import { List } from 'semantic-ui-react'
import { PageLayout } from '../components/layout'
import EventListItem from '../components/events/EventListItem'

const events = [{
  id: 1,
  title: 'Play some games!',
  start: new Date('2018-01-09T15:00:00'),
  end: new Date('2018-01-09T16:30:00')
}, {
  id: 2,
  title: 'Play some games!',
  start: new Date('2018-01-16T15:00:00'),
  end: new Date('2018-01-16T16:30:00')
}]

export default props => (
  <PageLayout {...props} title="Events">
    <List>
      {events.map(event => (
        <EventListItem key={event.id} {...event} />
      ))}
    </List>
  </PageLayout>
)
