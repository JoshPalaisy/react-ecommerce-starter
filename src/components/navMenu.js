import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../data/actions/authActions'
import { NavItem, Icon } from 'react-materialize'

const NavMenu = (props) => {
  const { auth, logOut } = props
  const menu = auth.uid ? <li><Link to="#!" onClick={logOut}><Icon>lock</Icon></Link></li> : <li><Link to="/login">Log In</Link></li>
  return (
    <React.Fragment>
      <li><NavLink to="/"><Icon>home</Icon></NavLink></li>
      {/* <NavItem href='/'><Icon>home</Icon></NavItem> */}
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