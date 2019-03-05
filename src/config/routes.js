import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../containers/login'
import Register from '../containers/register'
import Home from '../containers/home'

class Routes extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/create-account' component={Register} />
          </Switch>
      </Router>
    )
  }
}

export default Routes