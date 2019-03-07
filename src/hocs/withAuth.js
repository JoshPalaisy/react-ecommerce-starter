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
      if (!this.props.authError === null) {
        this.props.history.push('/signin')
      }
    }
    render(){
      return <ComponentToBeRendered {...this.props} />
    }
  }
  function mapStateToProps(state) {
    return {
      authError: state.authError
    }
  }

  return connect(mapStateToProps)(Authenticate)
}

