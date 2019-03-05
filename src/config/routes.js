import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/home'
import ProjectsPage from './pages/projects'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import CreateProject from './pages/createProject'
import ProjectDetails from './components/projectDetails'
import SideNav from './components/sidenav'

class Routes extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/projects' component={ProjectsPage} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/createproject' component={CreateProject} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
          <SideNav />
        </div>
      </Router>
    )
  }
}

export default Routes