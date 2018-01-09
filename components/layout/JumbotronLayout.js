import LayoutFixedNavigation from './LayoutFixedNavigation'
import LayoutHead from './LayoutHead'
import LayoutFooter from './LayoutFooter'

const JumbotronLayout = props => (
  <div>
    <LayoutHead />

    <LayoutFixedNavigation url={props.url} />

    <div style={{ marginTop: 60 }}>
      {props.children}
    </div>

    <LayoutFooter />
  </div>
)

export default JumbotronLayout
