import React from 'react';
import {Link} from 'react-router-dom';
import banner from './banner.jpg';
import './SpareParts.css';
import bottomImg1 from './bottomImg1.jpg';
import bottomImg2 from './bottomImg2.jpg';






function SpareParts() {
  return (
    <div className="">
      

    	<div className='' style={{'width':'100%', 'margin-left':'auto', 'margin-right':'auto'}}>
			<img className ='banner' src ={banner}  style={{'height':'100%', 'width':'100%'}} alt=''/>
			<h1 className='f2 pa3 tl  mobile-display-font-size-header' style={{'border-bottom': '1px solid #E0DDDD' , 'width':'90%', 'margin-left':'auto', 'margin-right':'auto'}} >Spare Parts</h1>
 		
		</div>

		<div className='pv3 ' style={{'width':'90%', 'margin-left':'auto', 'margin-right':'auto'}}>
			<p className ='pa2 f5 mobile-display-font-size-paragraph '>
				Giga’s objective is to be best-in-class in supply of construction equipment spare parts.
				Both OEM and after-market spare parts (such as ITR-USCO) for its own machine fleet and beyond.
				We aim to maintain high levels of off-the-shelf availability (OSA) of spares for our customers 
				within our local premises. We do this through state of the art inventory management software.
			    And we aim to provide fast lead times when it comes to providing critical construction equipment
				spare parts for vehicle-off-the-road (VOR) breakdowns. We represent a number of OEM and after-market brands.
			    And we have developed key supplier relationships, ensuring that whatever part you are looking for,
			    we either have it in stock or can aim to get it to you, in country, fully declared with all duties 
			    and VAT paid within 14 days.
			</p>

			<p className ='pv2 mt3 f4 fw8 mobile-display-font-size-paragraph  gray '>
				Spare Parts Enquiries:
			</p>

			<div className='tl'>

					<div className="container">
					    
					    <form target="_blank" action="https://formsubmit.co/kevozzz@yahoo.com" method="POST">
					        <div className="">
					            <div className="">
					                <div className="">
					                    <input  type="text" name="name" className="f4  pa1 mv3 w-80 br1 shadow-5" style={{'border':'1px solid gray'}} placeholder="Full Name" required/>
					                </div>
					                <div className="">
					                    <input type="text" name=" Organization " className="f4  pa1 mv3 w-70 br1 shadow-5"  style={{'border':'1px solid gray'}} placeholder="Business / Organization " required/>
					                </div>
					                <div className="">
					                    <input type="email" name="email" className="f4  pa1 mv3 w-60 br1 shadow-5"  style={{'border':'1px solid gray'}} placeholder="Email Address" required/>
					                </div>
					                <div className="">
					                    <input  type="phone" name="phone" className="f4  pa1 mv3 w-50 br1 shadow-5"  style={{'border':'1px solid gray'}} placeholder="Phone Number" required/>
					                </div>
					            </div>
					        </div>

					        <div className="">
					        	
					            <textarea  placeholder="Request" className="f4  pa1 mv3  w-90 br1 shadow-5" name="message" rows="6" required></textarea>
					        </div>
					        <button type="submit" className="pa2 mv2 f4 w-40 br1 shadow-5 dib dim" style={{'background':'#E6E3E3', 'border':'1px solid #E6E3E3'}} >Submit </button>
					    </form>
					</div>    


			</div>

			<div className='mv3 '>
				<div className=' bottom-imagez-on-mobile'>
					<img src={bottomImg1} alt='' className=' pv2  ph1 bottom-imagez-size-on-mobile  ' style={{'width':'50%', height:'440px', 'object-fit':'cover'}}/>
					<img src={bottomImg2} alt='' className=' pv2 ph1 bottom-imagez-size-on-mobile' style={{'width':'50%', height:'440px', 'object-fit':'cover'}}/>
				</div>

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

export default SpareParts;




