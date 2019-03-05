import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import HomePage from './pages/home'
import Login from '../containers/login'

class Routes extends Component {
  render() {
    return (
      <Router>
          <Switch>
            {/* <Route exact path='/' component={HomePage} /> */}
            <Route exact path='/login' component={Login} />
          </Switch>
      </Router>
    )
  }
}

export default Routes