import React from 'react';
import {Link} from 'react-router-dom';
import banner from './banner.jpg';
import banner2 from './banner2.jpg';
import cardImg1 from "./cardImg1.jpg";
import cardImg2 from "./cardImg2.jpg";
import cardImg3 from "./cardImg3.jpg";
import cardImg4 from "./cardImg4.jpg";
import cardImg5 from "./cardImg5.jpg";
import cardImg6 from "./cardImg6.jpg";
import cardImg7 from "./cardImg7.jpg";
import cardImg8 from "./cardImg8.jpg";

function ConcretingEquipment() {
  return (
    <div className=" ">
       

        <div className='' style={{'width':'100%', 'margin-left':'auto', 'margin-right':'auto'}}>
			<img className ='banner' src ={banner}  style={{'height':'50%', 'width':'100%'}} alt=''/>
			<h1 className='f2 pa3 tl  mobile-display-font-size-header' style={{'border-bottom': '1px solid #E0DDDD' , 'width':'90%', 'margin-left':'auto', 'margin-right':'auto'}} >Concreting Equipment</h1>
 		
		</div>

		<div className	='tc' style={{'width':'90%', 'margin-left':'auto', 'margin-right':'auto'}}>
			<p className='f3 pv2 mobile-display-font-size-header  '>GET IN with McNeilus Concrete Mixers</p>
	    	  <div className=' youtube-main mt3 mb5 '>
	    	  		<iframe width="660"
	    	  		 className='youtube br2'
	    	  		 height="415"
	    	  		 src="https://www.youtube.com/embed/chQdvPlHlYQ?controls=0" 
	    	  		 title="YouTube video player" 
	    	  		 frameborder="0"
	    	  		allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	    	  </div>

	    	  <p className =' f5 mobile-display-font-size-paragraph '>
	    	  Giga can supply the full range of McNeilus Concrete equipment 
	    	  across the East African markets of Kenya, Uganda, Tanzania 
	    	  and Rwanda. There are a wide number of products to choose 
	    	  from, manufactured in Europe and India, with the latter
	    	  providing well-suited models and designs for the African 
	    	  market. We can supply trailer-mounted concrete pumps, 
	    	  static concrete pumps, truck-mounted boom pumps, a wide r
	    	  ange of truck-mounted mixers, self-loading mixers, a comprehensive
	    	  range of batching plants and all of the related components and
	    	  high-wear spare parts.
 				</p>
 				<img className ='banner pv4' src ={banner2}  style={{'height':'50%', 'width':'75%'}} alt=''/>
	    	</div>


	    	<div style={{'width':'90%', 'margin-left':'auto', 'margin-right':'auto'}}>
		    	<p className ='pa2 f5 mobile-display-font-size-paragraph '>
					Giga is also a supplier of the full range of SIRL concreting equipment.
					SIRL manufactures more than 150 different models of mixer, a whole range 
					of hand-operated and walk-behind compaction equipment as well as a wide
					range of vibration machines. We are agent for SIRL products across the
				    East African markets of Kenya, Tanzania, Uganda and Rwanda and maintain 
					a sizable stock of equipment for the walk-in customer.
				</p>

				<div className='tl pt4'>
		        	<Link to='/contact'> <button className='dib pa3 grow bg-yellow shadow-5 f5 b--yellow'>Contact Our Sales Team</button> </Link>
		        </div>
	    	</div>


	    	<div className=' mv4' style={{'border-top': '1px solid #E0DDDD', 'width':'90%', 'margin-left':'auto', 'margin-right':'auto' }}></div>
		<div>
			<div >
				
				<div className='cardz mh1 mt1 mb0 ph3 pt3 pb0  main-cardz-on-mobile ' > 
				<article className="br2 ba dark-gray b--black-10 mv4 ma3 shadow-5 cardz-current-stock-on-mobile" style={{'width':'22.5%'}}>
				  <img src={cardImg1}  height='210' className="db w-100 br2 br--top card-img-size card-current-stock-photo-mobile " alt=" COMMUNITY FOCUSED."/>
				  <div className="pa2 ph3-ns pb3-ns">
				    <div className="dt w-100 mt1">
				      <div className="dtc">
				        <h3 className="f6 f5-ns mv0">AIMIX JZM series concrete mixer  forward mixing and reverse discharge concrete mixer</h3>
				      </div>
				      
				    </div>
				    <p className="f5 lh-copy measure mt2 mid-gray ">
				      Concrete Equipment
				    </p>
				    <p className="f5 lh-copy measure mt2 mid-gray ">
				       On Enquiry | 2021
				    </p>
				  </div>
				</article>

				<article className="br2 ba dark-gray b--black-10 mv4 ma3 shadow-5 cardz-current-stock-on-mobile" style={{'width':'22.5%'}}>
				  <img src={cardImg2}  height='210' className="db w-100 br2 br--top card-img-size card-current-stock-photo-mobile " alt=" COMMUNITY FOCUSED."/>
				  <div className="pa2 ph3-ns pb3-ns">
				    <div className="dt w-100 mt1">
				      <div className="dtc">
				        <h3 className="f6 f5-ns mv0">Ray Technosys Stainless Steel Concrete Mixing Machine with Hydraulic Hopper</h3>
				      </div>
				      
				    </div>
				    <p className="f5 lh-copy measure mt2 mid-gray ">
				      Concrete Equipment
				    </p>
				    <p className="f5 lh-copy measure mt2 mid-gray ">
				       On Enquiry | 2021
				    </p>
				  </div>
				</article>

				<article className="br2 ba dark-gray b--black-10 mv4 ma3 shadow-5 cardz-current-stock-on-mobile" style={{'width':'22.5%'}}>
				  <img src={cardImg3}  height='210' className="db w-100 br2 br--top card-img-size card-current-stock-photo-mobile " alt=" COMMUNITY FOCUSED."/>
				  <div className="pa2 ph3-ns pb3-ns">
				    <div className="dt w-100 mt1">
				      <div className="dtc">
				        <h3 className="f6 f5-ns mv0">500L Diesel Engine Concrete Mixer Machine With Mechanic Transmission And Hydraulic Tipping system</h3>
				      </div>
				      
				    </div>
				    <p className="f5 lh-copy measure mt2 mid-gray ">
				      Concrete Equipment
				    </p>
				    <p className="f5 lh-copy measure mt2 mid-gray ">
				       On Enquiry | 2021
				    </p>
				  </div>
				</article>


				<article className="br2 ba dark-gray b--black-10 mv4 ma3 shadow-5 cardz-current-stock-on-mobile" style={{'width':'22.5%'}}>
				  <img src={cardImg4}  height='210' className="db w-100 br2 br--top card-img-size card-current-stock-photo-mobile " alt=" COMMUNITY FOCUSED."/>
				  <div className="pa2 ph3-ns pb3-ns">
				    <div className="dt w-100 mt1">
				      <div className="dtc">
				        <h3 className="f6 f5-ns mv0">JBT15 concrete mixer with pump</h3>
				      </div>
				      
				    </div>
				    <p className="f5 lh-copy measure mt2 mid-gray ">
				      Concrete Equipment
				    </p>
				    <p className="f5 lh-copy measure mt2 mid-gray ">
				       On Enquiry | 2021
				    </p>
				  </div>
				</article>

			  </div>
			</div>



			<div className=''>
				
				<div className='cardz mh1  mb0 ph3  pb0  main-cardz-on-mobile ' > 
				<article className="br2 ba dark-gray b--black-10 mv4 ma3 shadow-5 cardz-current-stock-on-mobile" style={{'width':'22.5%'}}>
				  <img src={cardImg5}  height='210' className="db w-100 br2 br--top card-img-size card-current-stock-photo-mobile " alt=" COMMUNITY FOCUSED."/>
				  <div className="pa2 ph3-ns pb3-ns">
				    <div className="dt w-100 mt1">
				      <div className="dtc">
				        <h3 className="f6 f5-ns mv0">ZZ1257M3241 7m3 Concrete Mixer Truck</h3>
				      </div>
				      
				    </div>
				    <p className="f5 lh-copy measure mt2 mid-gray ">
				      Concrete Equipment
				    </p>
				    <p className="f5 lh-copy measure mt2 mid-gray ">
				       $ 88,500.00 | 2021
				    </p>
				  </div>
				</article>

				<article className="br2 ba dark-gray b--black-10 mv4 ma3 shadow-5 cardz-current-stock-on-mobile" style={{'width':'22.5%'}}>
				  <img src={cardImg6}  height='210' className="db w-100 br2 br--top card-img-size card-current-stock-photo-mobile " alt=" COMMUNITY FOCUSED."/>
				  <div className="pa2 ph3-ns pb3-ns">
				    <div className="dt w-100 mt1">
				      <div className="dtc">
				        <h3 className="f6 f5-ns mv0"> Concrete Mixer Truck</h3>
				      </div>
				      
				    </div>
				    <p className="f5 lh-copy measure mt2 mid-gray ">
				      Concrete Equipment
				    </p>
				    <p className="f5 lh-copy measure mt2 mid-gray ">
				       On Enquiry | 2021
				    </p>
				  </div>
				</article>

				<article className="br2 ba dark-gray b--black-10 mv4 ma3 shadow-5 cardz-current-stock-on-mobile" style={{'width':'22.5%'}}>
				  <img src={cardImg7}  height='210' className="db w-100 br2 br--top card-img-size card-current-stock-photo-mobile " alt=" COMMUNITY FOCUSED."/>
				  <div className="pa2 ph3-ns pb3-ns">
				    <div className="dt w-100 mt1">
				      <div className="dtc">
				        <h3 className="f6 f5-ns mv0"> MERCEDES-BENZ ACTROS 3248 8X4 Concrete Mixer Truck</h3>
				      </div>
				      
				    </div>
				    <p className="f5 lh-copy measure mt2 mid-gray ">
				      Concrete Equipment
				    </p>
				    <p className="f5 lh-copy measure mt2 mid-gray ">
				       On Enquiry | 2021
				    </p>
				  </div>
				</article>


				<article className="br2 ba dark-gray b--black-10 mv4 ma3 shadow-5 cardz-current-stock-on-mobile" style={{'width':'22.5%'}}>
				  <img src={cardImg8}  height='210' className="db w-100 br2 br--top card-img-size card-current-stock-photo-mobile " alt=" COMMUNITY FOCUSED."/>
				  <div className="pa2 ph3-ns pb3-ns">
				    <div className="dt w-100 mt1">
				      <div className="dtc">
				        <h3 className="f6 f5-ns mv0">Concrete Mixer Truck</h3>
				      </div>
				      
				    </div>
				    <p className="f5 lh-copy measure mt2 mid-gray ">
				      Concrete Equipment
				    </p>
				    <p className="f5 lh-copy measure mt2 mid-gray ">
				       On Enquiry | 2021
				    </p>
				  </div>
				</article>

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

export default ConcretingEquipment;

