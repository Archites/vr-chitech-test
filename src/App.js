import React from 'react'
import { Switch, Route } from 'react-router'
import ExamplePage from './pages/ExamplePage'

const App = () => (
	<Switch>
		<Route exact path="/" component={ExamplePage} />
	</Switch>
)

export default App
