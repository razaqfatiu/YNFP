import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class nav extends Component {
  render() {
    return (
      <div className="bg-success">
        <nav className="navbar fixed-top navbar-expand-md navbar-light bg-secondary">
          <NavLink className="navbar-brand" to="/">YNFP Initiative</NavLink>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav float-left">
              <NavLink className="nav-item nav-link text-light active" to='/goals'>Goals</NavLink>
              <NavLink className="nav-item nav-link text-light" to='/mission'>Mission & Vission</NavLink>
              <NavLink className="nav-item nav-link text-light" to='/'>Potential Partners</NavLink>
              <NavLink className="nav-item nav-link text-light" to='/'>Projects</NavLink>
              <NavLink className="nav-item nav-link text-light" to='/'>Tasks</NavLink>
            </div>
          </div>
        </nav>
        <br/>
      </div >
    )
  }
}