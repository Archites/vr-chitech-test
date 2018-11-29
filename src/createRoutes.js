import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ExamplePage from './pages/ExamplePage'

const Router = () => (
  <Switch>
    <Route exact path="/" component={ExamplePage} />
  </Switch>
)

export default Router
