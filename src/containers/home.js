import React, { Component } from 'react'
import { connect } from 'react-redux'
import WelcomeMsg from '../components/welcomeMsg';
import Navbar from '../components/navbar'

class Home extends Component {
  render() {
    const { auth, profile } = this.props
    const msg = auth.uid ? <WelcomeMsg profile={profile} /> : <p>Login first!</p>
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          {msg}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Home)
