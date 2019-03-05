import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    const { profile } = this.props
    return (
      <div className="container">
        <h1 className="center">Welcome {profile.firstName}!</h1>
      </div>
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
