import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (
			<Component {...props} />
		)} // render
	/>
) // PrivateRoute

const OnlyPublicRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (
			<Component {...props} />
		)} // render
	/>
) // OnlyPublicRoute

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route component={() => <h1>Hello, World!</h1>} />
		</Switch>
	</BrowserRouter>
) // Routes
