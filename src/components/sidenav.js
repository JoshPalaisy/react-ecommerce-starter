import React, { Component } from 'react'
import M from 'materialize-css'
import { NavItem, Icon } from 'react-materialize'
import bgImg from '../images/sidenav-user-bg.png'
import profilePic from '../images/blank-profile.png'

class Sidenav extends Component {
  componentDidMount() {
    let selects = document.querySelectorAll('.sidenav')

    let options = {
      draggable: true
    }

    M.Sidenav.init(selects, options)
  }
  render(){
    return (
      <ul className="sidenav" id="mobile-demo">
        <li><div class="user-view">
          <div class="background">
            <img src={bgImg} alt="bg" />
          </div>
                <a href="#user"><img class="circle" src={profilePic} alt="profile" /></a>
                  <a href="#name"><span class="white-text name">John Doe</span></a>
                  <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
          </div>
        </li>
        <NavItem href='/'><Icon>home</Icon>Home</NavItem>
      </ul>
    )
  }
}

export default Sidenav