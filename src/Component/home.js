import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class home extends Component {
  render() {
    return (
      <div>

        <div className="jumbotron">
          <h1 className="display-4">YNFP INITIATIVE</h1>
          <p className="lead">
            A youth-led organization of foreign policy professionals and advocates championing government engagement on foreign policy issues,
            nation branding and welfare of the Nigerian diaspora at multi-stakeholder levels.
          </p>
          <hr className="my-4" />
          <p className="lead">
            <NavLink className="btn btn-primary btn-lg" to="/mission" role="button">Mission & Vission</NavLink>
          </p>
        </div>

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="container carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://www.magnafaith.com/wp-content/uploads/2019/01/iStock_000034040610_Large.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="http://www.mscareergirl.com/wp-content/uploads/2017/01/diversity-fixy-0117-640x400@2x.png" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://i.pinimg.com/originals/4b/cd/b5/4bcdb5b3f821bca649ac944a25d04a21.jpg" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>


        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320">
          <path fill="#273036"
            fill-opacity="0.5"
            d="M0,224L40,218.7C80,213,160,203,240,213.3C320,224,400,256,480,245.3C560,235,640,181,720,170.7C800,160,880,192,960,208C1040,224,1120,224,1200,192C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
          </path></svg>
          <br />

      </div>
    )
  }
}
