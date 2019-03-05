import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function withAuth(ComponentToBeRendered){
  class Authenticate extends Component {
    componentWillMount(){
      const { auth, history } = this.props
      if(!auth.uid) {
        history.push('/signin')
      }
    }
    componentWillUpdate(){
      if (!this.props.isAuthenticated === false) {
        this.props.history.push('/signin')
      }
    }
    render(){
      return <ComponentToBeRendered {...this.props} />
    }
  }
  function mapStateToProps(state) {
    return {
      isAuthenticated: state.currentUser.isAuthenticated
    }
  }

  return connect(mapStateToProps)(Authenticate)
}
