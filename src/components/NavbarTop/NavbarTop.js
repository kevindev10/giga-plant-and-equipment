import React from 'react';

import{Link} from 'react-router-dom';


import './NavbarTop.css';


function NavbarTop() {


  return (
	<div>
		 <nav className='navbarTop'>
		 	<Link exact to ='/' className='navbarTop-logo mr4 '>
			   <div style={{'height':'100px', 'line-height':'100px'}} >
			   		<span style={{'font-size':'2.4em', 'color':'orange'}}>GIGA</span>
			        <span style={{'font-size':'0.7em',}}> . PLANT & EQUIPMENT</span>
			        
			    </div>	

		 	</Link>
		 
		 	<ul className='navTop-menu'>
		 			<li><a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer" class="fa fa-facebook"> </a></li>
		 			<li><a href="https://www.instagram.com/"  target="_blank" rel="noopener noreferrer" class="fa fa-instagram"> </a></li>
		 			<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" class="fa fa-youtube"> </a>
		 			<li><a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer" class="fa fa-twitter"> </a></li>
		 			<li><a href="https://ke.linkedin.com/"  target="_blank" rel="noopener noreferrer" class="fa fa-linkedin"> </a></li>

		 	</ul>
		 
		 </nav> 
	</div>
  );
}

export default NavbarTop;
