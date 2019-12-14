import React, { Component } from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

export default class nav extends Component {
  render() {
    return (
        <nav className="navBar">
          <div className="navBarLeft" >
          <NavLink className="navBarLeftItem" to="/">YNFP Initiative</NavLink>
          </div>
          <ul className="navBarRight">
              <li className="navItem"><NavLink className="text-white tw" to='/'>Home</NavLink></li>
              <li className="navItem"><NavLink className="text-white tw" to='/about'>About</NavLink></li>
              <li className="navItem"><NavLink className="text-white tw" to='/'>Contact</NavLink></li>
        </ul>
        </nav>
    )
  }
}