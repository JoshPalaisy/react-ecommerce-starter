import React from 'react'
import { Link } from 'react-router-dom'
import NavMenu from './navMenu'
import Logo from '../images/logo.svg'
import '../styles/navbar.css'

const Navbar = (props) => {
  const { auth } = props
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo"><img src={Logo} className="App-logo responsive-img" alt="Logo" /></Link>
        <Link to="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
        <ul className="right hide-on-med-and-down">
          <NavMenu auth={auth} />
        </ul>
      </div>
    </nav>
  )  
}

export default Navbar