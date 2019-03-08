import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../containers/login'
import Register from '../containers/register'
import Home from '../containers/home'
import Sidenav from '../components/sidenav'
import AddSlider from '../containers/addSlider'

class Routes extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/create-account' component={Register} />
            <Route exact path='/add-slide' component={AddSlider} />
          </Switch>
          <Sidenav />
        </React.Fragment>
      </Router>
    )
  }
}

export default Routes