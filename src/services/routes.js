import React from 'react'
import { isAuthenticated } from './auth'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Error404 from '../views/Error404'
import Login from '../views/Login'
import Home from '../views/Home'
import Stock from '../views/Stock'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest } render={ props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to='/login' />
        ) // isAuthenticated
    )}/>
) // PrivateRoute

const OnlyPublicRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest } render={ props => (
        !isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to='/' />
        ) // isAuthenticated
	)}/>
) // OnlyPrivateRoute

const Routes = () => (
    <BrowserRouter>
        <Switch>
			<PrivateRoute exact path="/estoque" component={() => <Stock />} />
            <OnlyPublicRoute exact path="/login" component={() => <Login />} />
            <PrivateRoute exact path="/inicio" component={() => <Home />} />
            <PrivateRoute exact path="/" component={() => <Home />} />
            <Route component={() => <Error404 />} />
        </Switch>
    </BrowserRouter>
) // Routes

export default Routes
