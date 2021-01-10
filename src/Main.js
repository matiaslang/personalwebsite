import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Skills from './pages/Skills'

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Skills' component={Skills}></Route>
    </Switch>
  )
}

export default Main
