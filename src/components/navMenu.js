import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../data/actions/authActions'

const NavMenu = (props) => {
  const { auth, logOut } = props
  const menu = auth.uid ? <li><Link to="#!" onClick={logOut}>Log Out</Link></li> : <li><Link to="/login">Log In</Link></li>
  return (
    <React.Fragment>
      <li><NavLink to="/">Home</NavLink></li>
      { menu }
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)