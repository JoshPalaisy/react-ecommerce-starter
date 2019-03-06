import React, { Component } from 'react'
import M from 'materialize-css'
import NavMenu from './navMenu'

class SideNav extends Component {
  componentDidMount(){
    M.AutoInit()
  }
  render(){
    return (
      <ul className="sidenav" id="mobile-demo">
        <NavMenu />
      </ul>
    )
  }
}

export default SideNav