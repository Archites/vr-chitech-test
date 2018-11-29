import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import Router from './createRoutes'

const App = () => <Router />

const AppWithHot = hot(module)(App)

ReactDOM.render(
	<BrowserRouter>
		<AppWithHot />
	</BrowserRouter>,
	document.getElementById('app'),
)
