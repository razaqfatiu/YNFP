import React, { Component } from 'react'
import './nav.css'

export default class footer extends Component {
  render() {
    return (
      <div className="container-fluid padding footerBg">
        <div className="row text-center">
          {/* <h2 className="col-12">Social</h2> */}
          <div className="col-12 social padding">
            <a href="https://fb.com"> <i className="fa fa-facebook iconLink" ></i></a>
            <a href="https://twitter.com"> <i className="fa fa-twitter iconLink" ></i></a>
            <a href="https://instagram.com"> <i className="fa fa-instagram iconLink" ></i></a>
          </div>


          <div className="col-12">
            <hr className="light" />
            <h4 className="text-center"> &copy; YNPF 2019</h4>
          </div>
        </div>

      </div>
    )
  }
}
