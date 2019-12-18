import React, { Component } from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'
import downArrow from '../arrow-down.png'

export default class nav extends Component {
  render() {
    return (
      <nav className="navBar">
        <div className="navBarLeft" >
          <NavLink className="navBarLeftItem" to="/">YNFP</NavLink>
        </div>
        <ul className="navBarRight">
          <li className="navItem"><NavLink className="text-white tw" to='/'>Home</NavLink></li>
          <li className="navItem"><NavLink className="text-white tw" to='/about'>About</NavLink></li>
          <li className="navItem"><NavLink className="text-white tw" to='/'>Contact</NavLink></li>
            
            <div class="dropdown">
            <button class="dropbtn">Contact</button>
            <i class="">{downArrow}</i>

            <div class="dropdown-content">
              <NavLink className="text-white tw" to='/'>Contact</NavLink>
              <NavLink className="text-white tw" to='/'>Get Involved</NavLink>
            </div>
          </div>
          

        </ul>
      </nav>
    )
  }
}