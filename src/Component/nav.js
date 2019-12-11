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
              <li><NavLink className="navItem" to='/'>Home</NavLink></li>
              <li><NavLink className="navItem" to='/about'>About</NavLink></li>
              <li><NavLink className="navItem" to='/'>Contact</NavLink></li>
        </ul>
        </nav>
    )
  }
}