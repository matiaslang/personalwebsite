import React, { Fragment } from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
  Redirect,
  withRouter,
  BrowserRouter,
} from 'react-router-dom'
import './App.css'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'

const menuButton = styled.button``
const Wrapper = styled.section`
  background-color: papayawhip;
`

const App = () => {
  const allTabs = ['/', '/memorygame', '/nothing']
  let history = useHistory()
  const handleChange = (event, value) => {
    console.log('Redirecting to:')
    console.log(value)
    return
  }

  return (
    <div>
      <BrowserRouter>
        <Wrapper>
          <Route
            path='/'
            render={({ location }) => (
              <Fragment>
                <Paper className={'ClassName'}>
                  <Tabs
                    value={location.pathname}
                    indicatorColor='secondary'
                    variant='fullWidth'
                    textColor='primary'
                    centered
                  >
                    <Tab
                      label='Home'
                      value='/home'
                      component={Link}
                      to={allTabs[0]}
                    />
                    <Tab
                      label='Memory Game'
                      value='/memorygame'
                      component={Link}
                      to={allTabs[1]}
                    />
                    <Tab
                      label='Noothiiing....'
                      value='/nothing'
                      disableRipple
                      component={Link}
                      to={allTabs[2]}
                    />
                  </Tabs>
                </Paper>

                <Switch>
                  <Route path={allTabs[0]}>
                    <About />
                  </Route>
                  <Route path={allTabs[1]}>
                    <Topics />
                  </Route>
                  <Route path={allTabs[2]}>
                    <Home />
                  </Route>
                </Switch>
              </Fragment>
            )}
          />
        </Wrapper>
      </BrowserRouter>
    </div>
  )
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>1</h2>
}

function Topics() {
  let match = useRouteMatch()

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}

function Topic() {
  let { topicId } = useParams()
  return <h3>Requested topic ID: {topicId}</h3>
}

export default App
