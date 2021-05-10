import React, { Component } from "react";
import Slider from "react-slick";
import banner from './banner.jpg';
import banner1 from './banner1.jpg';
import banner2 from './banner2.jpg';
import banner3 from './banner3.jpg';
import banner4 from './banner4.jpg';
import banner5 from './banner5.jpg';
import banner6 from './banner6.jpg';
import banner7 from './banner7.jpg';
import banner8 from './banner8.jpg';
import banner9 from './banner9.jpg';


import topImageBanner from  './topImageBanner.jpg'
import './TopImageSlider.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      arrow:false,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 8000,
      cssEase: "linear"
    };
    return (
      <div>
        {<div className=' pa3 tc tracked-mega  white'  style={{'backgroundImage': `url(${topImageBanner})`, 'font-size':'22px'}}>
          <h2 className='top-banner-header-on-mobile'>WE DRIVE EFFICIENCY</h2>
        </div>}
        
        <Slider {...settings}>
          <div>
            <h3>  <img className ='slider-image-size-on-mobile' src ={banner} width= '100%'  height='590px' alt='' style={{'object-fit': 'cover', }} />  </h3>
          </div>
          <div>
            <h3>  <img className ='slider-image-size-on-mobile' src ={banner1} width= '100%'  height='590px' alt='' style={{'object-fit': 'cover'}} />  </h3>
          </div>
          <div>
            <h3>  <img className ='slider-image-size-on-mobile' src ={banner2} width= '100%'  height='590px' alt='' style={{'object-fit': 'cover'}} />   </h3>
          </div>
          <div>
            <h3>  <img className ='slider-image-size-on-mobile' src ={banner3} width= '100%'  height='590px' alt='' style={{'object-fit': 'cover'}} />   </h3>
          </div>
          <div>
            <h3>  <img className ='slider-image-size-on-mobile' src ={banner4} width= '100%'  height='590px' alt='' style={{'object-fit': 'cover'}} />   </h3>
          </div>
          <div>
            <h3>  <img className ='slider-image-size-on-mobile' src ={banner5} width= '100%'  height='590px'  alt='' style={{'object-fit': 'cover'}} />   </h3>
          </div>
          <div>
            <h3>  <img className ='slider-image-size-on-mobile' src ={banner6} width= '100%'  height='590px'  alt='' style={{'object-fit': 'cover'}} />   </h3>
          </div>
          <div>
            <h3>  <img className ='slider-image-size-on-mobile' src ={banner7} width= '100%'  height='590px'  alt='' style={{'object-fit': 'cover'}} />   </h3>
          </div>
          <div>
            <h3>  <img className ='slider-image-size-on-mobile' src ={banner8} width= '100%'  height='590px'  alt='' style={{'object-fit': 'cover'}} />   </h3>
          </div>
          <div>
            <h3>  <img className ='slider-image-size-on-mobile' src ={banner9} width= '100%'  height='590px'  alt='' style={{'object-fit': 'cover'}} />   </h3>
          </div>
        </Slider>
      </div>
    );
  }
}