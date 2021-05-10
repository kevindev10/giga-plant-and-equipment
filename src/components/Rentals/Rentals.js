import React from 'react';
import {Link} from 'react-router-dom';
import banner from './banner.jpg';




function Rentals() {
  return (
    <div className=" ">
       
    	<div className='' style={{'width':'100%', 'margin-left':'auto', 'margin-right':'auto'}}>
			<img className ='banner' src ={banner}  style={{'height':'100%', 'width':'100%'}} alt=''/>
			<h1 className='f2 pa3 tl  mobile-display-font-size-header' style={{'border-bottom': '1px solid #E0DDDD' , 'width':'90%', 'margin-left':'auto', 'margin-right':'auto'}} >Rentals / Operational Leases</h1>
 		
		</div>

		<div className='pv3 ' style={{'width':'90%', 'margin-left':'auto', 'margin-right':'auto'}}>
			<p className ='pa2 f5 mobile-display-font-size-paragraph '>
				Giga can provide materials handling equipment rentals to its customers.
				Giga rents machinery, mostly in the form of materials handling and warehousing equipment to its customers. 
				We do this across a number of industries and sectors. We provide several options as follows: wet lease, 
				dry lease, semi-dry lease, guaranteed up-time and hire purchase. These options suit whatever requirements 
				that our customers might have. The renting of machinery allows our customer to focus on his core business.
				 Without getting distracted by or allocating valuable resources to machinery breakdowns and service.
				Our rental rates are very competitive. Ultimately we aim to improve our customers’ bottom line through
			    decreased downtime and lower total cost of operation (TCO). 
			</p>

			<p className ='pa2 mt3 f5 mobile-display-font-size-paragraph gray '>
				We can offer the following brands of materials handling equipment for rent:
			</p>

			<ul className='ml4 mt2'>
				<li>
					JCB telehandlers, teletrucks and wheeled loaders.
				</li>
				<li>
					Baoli forklifts and reach trucks, both electric and ICE.
				</li>
				<li>
				 Still forklifts, reach trucks, aisle pickers and a whole range of advanced warehouse machines.
				</li>
				<li>
				 Haulotte access equipment
				</li>
			</ul>



			<p className ='pa2 mt3 f5 mobile-display-font-size-paragraph gray '>
				We can rent machinery on the following terms:
			</p>

			<ul className='ml4 mt2'>
				<li>
					Minimum rental period: 30 days.
				</li>
				<li>
					Monthly pricing: from 5% of retail price ex VAT for materials handling equipment.
				</li>
				<li>
				 A selection of materials handling equipment: forklift, order pickers, aisle stackers, reach trucks, telehandlers, teletrucks, skidsteers, wheeled loaders.
				</li>
				<li>
				 With or without operator.
				</li>
			</ul>
			<div className='tl pt4'>
	        	<Link to='/contact'> <button className='dib pa3 grow bg-yellow shadow-5 f5 b--yellow'>Contact Our Sales Team</button> </Link>
	        </div>
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

export default Rentals;


