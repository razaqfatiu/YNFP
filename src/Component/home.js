import React from 'react'
// import { NavLink } from 'react-router-dom'
import './home.css'
import pic1 from '../images/4.jpg'
import pic2 from '../images/1.jpg'
import pic3 from '../images/3.jpg'

function home() {
  return (
    <div className="homePage">
      <div className="carousel slide" data-ride="carousel" id="slides">
        <ul className="carousel-indicators">
          <li data-target="#slides" data-slide-to="0" className="active"> </li>
          <li data-target="#slides" data-slide-to="1"></li>
          <li data-target="#slides" data-slide-to="2"></li>
        </ul>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="imgB" src={pic1} alt="image0" />
            {/* <div className="carousel-caption">
              <h1 className="display-2">YPNF</h1>

            </div> */}
          </div>
          <div className="carousel-item"> <img className="imgB"src={pic2} alt="image1" /> </div>
          <div className="carousel-item"> <img className="imgB" src={pic3} alt="image2"/> </div>
        </div>

      </div>

      <div className="container-fluid padding bodyDiv">
        <div className="row text-center padding">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i className="fa fa-code fa-3x"></i>
            <h3>MISSION</h3>
            <p className="textBody text-xl-left">To drive national development through government engagement on foreign 
            policy issues, and provide constant advocacy for the welfare of Nigerians in the diaspora.</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 ">
            <i className="fa fa-eye fa-3x"></i>
            <h3>VISSION</h3>
            <p  className="textBody text-xl-left">To give Nigeria’s foreign policy a new framework that reinvigorates its international prestige and reflects its national 
              interests in a suitable fashion for a dynamic modern world and global climes..</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 bg-dark rounded">
            <i className="fa fa-info-circle fa-3x text-light"></i>
            <h3 className="text-light">Our Values</h3>
            <p  className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
              officia deserunt mollit anim id est laborum.</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default home