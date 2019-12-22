import React, { Component } from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

export default class nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-white sticky-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand navBrand" to="/">YNFP</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span className="navbar-toggler-icon">
            </span>
          </button>


          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="tw nav-link" to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="tw nav-link" to='/about'>About</NavLink>
              </li>


              <li class="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Contact
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink class="dropdown-item" to="#">Contact us</NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink class="dropdown-item" to="#">Get Involved</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">Blog</NavLink>
              </li>
            </ul>
          </div>


        </div>

      </nav>

      // <nav className="navBar">
      //   <div className="navBarLeft" >
      //     <NavLink className="navBarLeftItem" to="/">YNFP</NavLink>
      //   </div>
      //   <ul className="navBarRight">
      //     <li className="navItem"><NavLink className="tw" to='/'>Home</NavLink></li>
      //     <li className="navItem"><NavLink className="tw" to='/about'>About</NavLink></li>
      //     <li className="navItem"><NavLink className="tw" to='/'>Blog</NavLink></li>

      //   </ul>
      // </nav>
    )
  }
}