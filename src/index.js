import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'

const App = () => (
  <div>Hello</div>
)

const AppWithHot = hot(module)(App)

ReactDOM.render(<AppWithHot />, document.getElementById('app'))
