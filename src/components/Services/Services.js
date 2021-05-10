import React from 'react';
import {Link} from 'react-router-dom';
import banner from './banner.jpg';

function Services() {
  return (
    <div className=" ">
       


    	<div className='' style={{'width':'100%', 'margin-left':'auto', 'margin-right':'auto'}}>
			<img className ='banner' src ={banner}  style={{'height':'480px', 'width':'100%'}} alt=''/>
			<h1 className='f2 pa3 tl  mobile-display-font-size-header' style={{'border-bottom': '1px solid #E0DDDD' , 'width':'90%', 'margin-left':'auto', 'margin-right':'auto'}} >Service</h1>
 		
		</div>

		<div className='pv3 ' style={{'width':'90%', 'margin-left':'auto', 'margin-right':'auto'}}>
			<div className=' mv3' style={{'background-color':'#FDB800'}}>
				<p className='tc white pa5 f2 fw8 tracked-l '>
					SERVICE JOBS
				</p>
			</div>

			<p className ='pa2 f5 mobile-display-font-size-paragraph '>
				The Giga Group has a profound appreciation of the value that high quality and 
				timely service brings to our customers. We maintain fully-equipped service 
				centres in each of the countries in which we operate and understand the 
				importance of developing our own technicians through continuous training 
				with OEM’s. Our ability to provide our customers with appropriate levels of
				 service and to solve their problems depends on the organisational and
				 management capabilities within the company, a strong company culture of continuous 
				 training and retention of the best technical staff as well as ensuring that our 
				 service teams have the right tools and equipment to get the service jobs done in the
				  most efficient manner possible. In this way, we enhance the productivity and uptime of our
				 customers’ machinery fleets
			</p>
			<p className ='pa2 f5 mobile-display-font-size-paragraph '>
				We have fully equipped workshops able to undertake most service, maintenance and repair work on
			   the full range of machines that we supply in all of the countries in which we have operations. 
			   Additionally we have developed reliable local and regional supply chains to be able to undertake 
			   more complex re-builds, machining, welding and engineering jobs that are beyond our own capacity.
			   All requested service jobs will be analysed and quoted for by our experienced team of plant service
			   managers and technicians.
			</p>



			<div className=' mv3' style={{'background-color':'#FDB800'}}>
				<p className='tc white pa5 f2 fw8 tracked-l '>
					REMOTE SITE SERVICE JOBS
				</p>
			</div>

			<p className ='pa2 f5 mobile-display-font-size-paragraph '>
				The core of our service department, most of the service jobs required by our customers
				 are done on their work sites wherever those operations are situated. Remote site 
				 service requires a high level of organisational and operational ability to ensure that
				 the right personnel, with the right tools and spare parts, are despatched to the particular 
				 service job at the right time. This requires in-depth communication with the customer and 
				 an advanced understanding of what the particular job involves so that it can be completed 
				 in the most efficient manner possible, ensuring the least amount of down-time of the machine
				  in question.
			</p>



			<div className=' mv3' style={{'background-color':'#FDB800'}}>
				<p className='tc white pa5 f2 fw8 tracked-l '>
					SERVICE AND MAINTENANCE CONTRACTS
				</p>
			</div>

			<p className ='pa2 f5 mobile-display-font-size-paragraph '>
				Whether standard annual maintenance contracts (AMC) or full time maintenance and repair 
				capabilities established on the work site of a customer, we can tailor-make the right s
				ervice solution for your operation, ensuring that you get the best quality service for 
				your machine fleet, enhancing up time, productivity and machine life.
			</p>


			<div className=' mv3' style={{'background-color':'#FDB800'}}>
				<p className='tc white pa5 f2 fw8 tracked-l '>
					SURE PRICE SERVICE
				</p>
			</div>

			<p className ='pa2 f5 mobile-display-font-size-paragraph '>
				A service product that we offer to our customers whereby the price of scheduled services 
				(including parts, labour and lubes) is fixed for one year and will not change irrespective 
				of any cost increases. In this way a customer can budget his standard service & maintenance costs for the year.
			</p>

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

export default Services;


