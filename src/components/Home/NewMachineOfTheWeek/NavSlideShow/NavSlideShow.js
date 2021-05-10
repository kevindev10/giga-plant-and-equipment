import React, { Component } from 'react';
import Slider from "react-slick";
import './NavSlideShow.css';
import newestMachine1 from "./newestMachine1.jpg";
import newestMachine2 from "./newestMachine2.jpg";
import newestMachine3 from "./newestMachine3.jpg";
import newestMachine4 from "./newestMachine4.jpg";
import newestMachine5 from "./newestMachine5.jpg";
import newestMachine6 from "./newestMachine6.jpg";




export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
            <div>
            <h3>  <img className ='slideshow-top-img-mobile-view pointer' src ={newestMachine1} width= ''  height='570' alt='Cat 990K Large Wheel Loader'  />  </h3>
          </div>
          <div>
            <h3>  <img className ='slideshow-top-img-mobile-view pointer' src ={newestMachine2} width= ''  height='570' alt='Cat 990K Large Wheel Loader'  />  </h3>
          </div>
          <div>
            <h3>  <img className ='slideshow-top-img-mobile-view pointer' src ={newestMachine3} width= ''  height='570' alt='Cat 990K Large Wheel Loader'  />  </h3>
          </div>
          <div>
            <h3>  <img className ='slideshow-top-img-mobile-view pointer' src ={newestMachine4} width= ''  height='570' alt='Cat 990K Large Wheel Loader'  />  </h3>
          </div>
          <div>
            <h3>  <img className ='slideshow-top-img-mobile-view pointer'  src ={newestMachine5} width= ''  height='570' alt='Cat 990K Large Wheel Loader'  />  </h3>
          </div>
          <div>
            <h3>  <img className ='slideshow-top-img-mobile-view pointer' src ={newestMachine6} width= ''  height='570' alt='Cat 990K Large Wheel Loader'  />  </h3>
          </div>
        </Slider>
     
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={6}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
             <h3>  <img className ='pr2 slideshow-bottom-imgs-mobile-view pointer' src ={newestMachine1} width= '125'  height='100' alt='Cat 990K Large Wheel Loader'  />  </h3>
          </div>
          <div>
            <h3>  <img className ='pr2 slideshow-bottom-imgs-mobile-view pointer' src ={newestMachine2} width= '125'  height='100' alt='Cat 990K Large Wheel Loader'  />  </h3>
          </div>
          <div>
            <h3>  <img className ='pr2 slideshow-bottom-imgs-mobile-view pointer' src ={newestMachine3} width= '125'  height='100' alt='Cat 990K Large Wheel Loader'  />  </h3>
          </div>
          <div>
            <h3>  <img className ='pr2 slideshow-bottom-imgs-mobile-view pointer' src ={newestMachine4} width= '125'  height='100' alt='Cat 990K Large Wheel Loader'  />  </h3>
          </div>
          <div>
            <h3>  <img className ='pr2 slideshow-bottom-imgs-mobile-view pointer' src ={newestMachine5} width= '125'  height='100' alt='Cat 990K Large Wheel Loader'  />  </h3>
          </div>
          <div>
            <h3>  <img className ='slideshow-bottom-imgs-mobile-view pointer' src ={newestMachine6} width= '125'  height='100' alt='Cat 990K Large Wheel Loader'  />  </h3>
          
          </div>
        </Slider>
      </div>
    );
  }
}
