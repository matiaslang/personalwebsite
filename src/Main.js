import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import colors from './styles/colors.js'

import Home from './pages/Home'
import Skills from './pages/Skills'
import NoMatch from './pages/NoMatch'
import Contact from './pages/Contact'

const Wrapper = styled.div`
  background: ${colors.ViewTopicColor};
  flex-grow: 1;
  height: 2200px;
  width: 100%;
`

const Main = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/Skills'>
          <Skills />
        </Route>
        <Route path='/Contact'>
          <Contact />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Wrapper>
  )
}

export default Main
