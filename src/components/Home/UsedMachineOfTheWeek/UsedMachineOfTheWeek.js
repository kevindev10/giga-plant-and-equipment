import React from 'react';
import NavSlideShow from './NavSlideShow/NavSlideShow';
import topImageBanner from './topImageBanner.jpg';
import {Link} from 'react-router-dom';

function UsedMachineOfTheWeek() {
  return (
    <div className=" ">
       



    	<div className='mh3 ph3  machine-of-week-main-mobile-view'>
    		<section class=" " >
			  <h2 class=" f2 fw1 ph3 ph0-l pt5 pb2 mobile-display-font-size-header">Cat Excavator 320 gc</h2>
			  <article class="bt bb b--black-10 ">
			    <p class="db pv4 ph3 ph0-l no-underline black machine-of-week-image-and-paragraph-width-mobile-view" href="#0">
			      <div class="flex flex-column flex-row-ns machine-of-week-mobile-view">
			        <div class="pr3-ns mb4 mb0-ns w-100 w-60-ns machine-of-week-image-width-mobile-view">
			        <NavSlideShow/>
			          
			        </div>
			        <div class="w-100 w-40-ns pl3-ns machine-of-week-paragraph-width-mobile-view">
			          <h1 class="f3 fw1  mt0 lh-title">320 GC Hydraulic Excavator</h1>
			          <p class="f6 f5-l lh-copy bt pt4 b--black-10">
			             <div class="dt w-100 mt1">
						      <div class="dtc">
						        <h1 class="f5 f4-ns mv0 fw1">Maximum Engine Power:</h1>
						      </div>
						      <div class="dtc tr ">
						        <h2 class="f5 mv0 fw1 ">146 hp</h2>
						      </div>
						    </div>


						     <div class="dt w-100 mt1">
						      <div class="dtc">
						        <h1 class="f5 f4-ns mv0 fw1">Model:</h1>
						      </div>
						      <div class="dtc tr">
						        <h2 class="f5 mv0 fw1">Cat C4.4e TA Cat C4.4e TA</h2>
						      </div>
						    </div>


						     <div class="dt w-100 mt1">
						      <div class="dtc">
						        <h1 class="f5 f4-ns mv0 fw1">Maximum Digging Depth:</h1>
						      </div>
						      <div class="dtc tr">
						        <h2 class="f5 mv0 fw1">22 ft 6720 mm</h2>
						      </div>
						    </div>



						     <div class="dt w-100 mt1">
						      <div class="dtc">
						        <h1 class="f5 f4-ns mv0 fw1">Stock Status:</h1>
						      </div>
						      <div class="dtc tr">
						        <h2 class="f5 mv0 fw1">In  Stock</h2>
						      </div>
						    </div>



						     <div class="dt w-100 mt1">
						      <div class="dtc">
						        <h1 class="f5 f4-ns mv0 fw1">Price:</h1>
						      </div>
						      <div class="dtc tr">
						        <h2 class="f5 mv0 fw1 ">$110,000</h2>
						      </div>
						    </div>

			          </p>


			          <h1 class="f3 fw1 pt3 pb0  lh-title">OVERVIEW</h1>
			          <p class="f6 f5-l lh-copy ">
			          	Up To 20% Less Fuel Consumption.<br/>
						Improved Reliabilty And Efficiency.<br/>
						Up To 25% Lower Maintenance Costs.<br/>
						Easy-to-use technology features.<br/>

			          </p>
			         
			        </div>
			      </div>
			    </p>
			  </article>
			</section>
    	</div>
       
    	<div className=' pa3 tc tracked-mega  white'  style={{'backgroundImage': `url(${topImageBanner})`, 'font-size':'22px'}}>
          <h3 className='top-banner-header-on-mobile'>WE DRIVE EFFICIENCY</h3>
        </div>





        <div className='pt4'>

				<div className='bg-yellow'>
					<div className='mb0 mr2 ml2 mt2 pa4'>
											
						<h1 className='f3 ' >JOIN OUR NEWSLETTER!</h1>
						<h1 className='f5 mb4' >STAY UP TO DATE WITH OUR LATEST NEWS AND OFFERS.</h1>

						<form  className=''>
						  
						  <input type="text" id="email" name="email" placeholder='Email Address' className='pa2 mv3 br2 shadow-5 f4 w-90' style={{ "color":"#44c8e8"}}/>
						  
						  <input type="text" id="fname" name="fname" placeholder='First Name' className='pa2 mv3 br2 shadow-5 f4 w-90' style={{ "color":"#44c8e8"}}/>
						 
						  <input type="text" id="lname" name="lname" placeholder='Last Name' className='pa2 mv3 br2 shadow-5 f4 w-90 ' style={{ "color":"#44c8e8"}}/><br/>

						  <button style={{ "padding-top":"11px"  }} className=' button button-mobile-footer br2 shadow-5 button-mobile pa2 mt3 w-20 pointer bg-black  '><Link to='/'  style={{"color":"white"}} className='   button-text no-underline f5 fw6 ' >SUBSCRIBE</Link></button>
						</form>

						
					</div>
				
				</div>

				<div className='bg-black white center footer-main-on-mobile'>


					<div className='flex  footer-flex-on-mobile' >

						<div  className='pv5 pr6  footer-quicklinks-on-mobile'>
							<ul className='' style={{'list-style':'none'}}>
								<li className='pb4 fw8' style={{'font-size':'23px'}}>
							 		Quick Links
							 	</li>
							 	<li className='pb2' >
							 		<Link exact to='/' className='no-underline white dim   ' style={{'font-size':'17px'}}>
							 			HOME
							 		</Link>
							 	</li>

							 	<li className='pb2'>
							 		<Link  to='/curr-stk' className='no-underline white dim  ' style={{'font-size':'17px'}} >
							 			CURRENT STOCKLIST
							 		</Link>
							 		
							 	</li>

							 	<li className='pb2'>
						            <Link  to='/equip-range' className='no-underline white dim ' style={{'font-size':'17px'}}>
						            	 EQUIPMENT RANGE
						            </Link>
					          </li>

							 	<li className='pb2'>
							 		<Link  to='/rentals' className='no-underline white dim ' style={{'font-size':'17px'}} >
							 			RENTALS
							 		</Link>
							 	</li>	
							 	<li className='pb2'>
							 		<Link  to='/spares' className='no-underline white dim  ' style={{'font-size':'17px'}}>
							 			SPARE PARTS
							 		</Link>
							 	</li>
							 	<li className='pb2'>
							 		<Link  to='/services' className='no-underline white dim ' style={{'font-size':'17px'}}>
							 			SERVICES
							 		</Link>
							 	</li>
							 		
							 	<li className='pb2'>
							 		<Link  to='/news' className='no-underline white dim  ' style={{'font-size':'17px'}}>
							 			NEWS
							 		</Link>
							 	</li>	


						 	</ul>

					    </div>

					    <div className='pv5 ph5 footer-contact-on-mobile' >
					        <p className='fw8'  style={{'font-size':'23px'}}>Call Us On Whatsapp</p>
					    	<a href="https://api.whatsapp.com/send?phone=00000000000001" target="_blank" rel="noopener noreferrer"><i class="fa fa-whatsapp  footer-whatsapp-buttons-on-mobile" style={{'font-size':'78px', 'color':'#FCA206'}}></i></a>
					    	<p className='fw8 pt4 pb3'  style={{'font-size':'17px'}}>Or view us on:</p>
					    	<ul className='flex footer-social-buttons-on-mobile' style={{'list-style':'none'}}>
					    		<li><a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer" class="fa fa-facebook"> </a></li>
					 			<li><a href="https://www.instagram.com/"  target="_blank" rel="noopener noreferrer" class="fa fa-instagram"> </a></li>
					 			<li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" class="fa fa-youtube"> </a></li>
					 			<li><a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer" class="fa fa-twitter"> </a></li>
					 			<li><a href="https://ke.linkedin.com/"  target="_blank" rel="noopener noreferrer" class="fa fa-linkedin"> </a></li>
					    	</ul>

					    </div>

					    <div className='pv5 footer-policies-on-mobile'>
					    	<p className='fw8  '  style={{'font-size':'23px' }}><Link to='/' className='no-underline white dim ' >Company Business Integrity Policies and</Link> </p>
					    	<p className='fw8 pb4 '  style={{'font-size':'23px' }}><Link to='/' className='no-underline white dim ' > Grievance Form </Link></p>
					    	<p className='pv2'><Link to='/' className='no-underline white dim '  style={{'font-size':'17px'}}> Giga Data Privacy Policy</Link></p>
					    	<p className='pv2'><Link to='/' className='no-underline white dim '  style={{'font-size':'17px'}}> Company ESG</Link></p>
					    </div>


					</div>


				</div>
					<div className='bg-black gray tl pl5 bt b--gray pt4 pb5 footer-policies-on-mobile mb0'>
							<p className=''>Copyright Giga Group Africa 2021 all rights reserved | <Link to='/' className='dim  gray no-underline'>Privacy Policy </Link></p>
					</div>


			</div>




    </div>
  );
}

export default UsedMachineOfTheWeek;
