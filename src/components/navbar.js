import React from 'react'
import { Link } from 'react-router-dom'
import NavMenu from './navMenu'

const Navbar = (props) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">RESK</Link>
        <Link to="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
        <ul className="right hide-on-med-and-down">
          <NavMenu />
        </ul>
      </div>
    </nav>
  )  
}

export default Navbar