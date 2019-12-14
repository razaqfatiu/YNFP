import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './home.css'
import pic1 from '../images/1.jpg'
import pic2 from '../images/2.jpg'

export default class home extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    let myIndex = 0;
    function carousel() {
      let i;
      const x = document.getElementsByClassName("img1");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) { myIndex = 1 }
      x[myIndex - 1].style.display = "block";
      setTimeout(carousel, 5000);
    }
    carousel();
  }

  handleSlide1() {
  }





  render() {
    return (
      <div className="homePage">
        <div className="slideshow">
          <img className="img1" src="https://www.lamudi.com.ph/journal/wp-content/uploads/2014/05/jakarta-indonesia-city-skyline-realestate-market.jpg" alt="image1" />
          <img className="img1" src="http://www.nairaland.com/attachments/1248145_1248109_lagos_Nigeria_jpg1cbd0ca84cf41560f79fee4c4b0257a5_jpg228c559c70f387c3ccbe222288373807" alt="image2" />
          <span className="icons">
          </span>

          <div>
            <p>Pretty cool eh? This slide is proof the content can be anything.</p>
          </div>
        </div>

      </div>
    )
  }
}
