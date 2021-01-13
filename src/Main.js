import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Skills from './pages/Skills'
import NoMatch from './pages/NoMatch'
import Contact from './pages/Contact'

const Main = () => {
  return (
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
  )
}

export default Main
