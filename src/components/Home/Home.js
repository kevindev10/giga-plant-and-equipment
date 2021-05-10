import React from 'react';
import './Home.css';
import TopImageSlider from './TopImageSlider/TopImageSlider';
import {Link} from 'react-router-dom';
import newestMachine from "./newestMachine.jpg";
import usedMachineOfWeek from './usedMachineOfWeek.jpg';
import currentStockCover from './currentStockCover.jpg';
import bottomImg1 from	'./bottomImg1.jpg';
import bottomImg2 from	'./bottomImg2.jpg';
import bottomImg3 from	'./bottomImg3.jpg';
import cardImg1 from "./cardImg1.jpg"
import cardImg2 from "./cardImg2.jpg"
import cardImg3 from "./cardImg3.jpg"
import OurLocationsAcrossTheContinent from './OurLocationsAcrossTheContinent/OurLocationsAcrossTheContinent';



function Home() {
  return (
    <div className="">

        <div className='pb4' style={{'width':'100%', 'overflow-x':'hidden'}}>
				
				<TopImageSlider/>
		</div>

		<div>
			<p className='pv4'>
				
				<div className='mobile-display-font-size-header f2  tc '>AFRICAS LEADING EQUIPMENT COMPANY</div><br/><br/>
				<div className='mobile-display-font-size-paragraph f4 mobile-paragraph-padding mh5 ' >The GIGA Group Africa is a group of construction
				 equipment and machinery dealerships operating across East and Southern Africa. The group sells new and used construction,
				 earthmoving, concreting, materials handling mining and drilling equipment. Within our product range, we have new construction,
				 earthmoving & agricultural machinery of the world-renowned JCB brand for the markets of Angola, Rwanda and Tanzania. Materials 
				 handling equipment, reach trucks and forklifts from the KION Group for the markets of Kenya, Tanzania, Uganda, Rwanda and Angola 
				(both Baoli and Still). Concreting equipment, mixers, pumps and batching plants from Schwing Stetter and SIRL for the markets of 
				Kenya, Tanzania and Rwanda. And a whole range of other equipment from well-known American, European, Chinese and Indian manufacturers. Our 
			    driving philosophy is to provide our customers with high quality machinery at the right prices, backed up by best-in-class after-sales
				service and support. We drive efficiency, uptime and productivity within their businesses..</div><br/>
			</p>
		</div>

		<div className	='tc'>
		<p className='f3 pv2 mobile-display-font-size-header  '>Take a look at  Intelligent Compaction for BOMAG asphalt roller</p>
    	  <div className=' youtube-main mt3 mb6 '>
    	  		<iframe width="660"
    	  		 className='youtube br2'
    	  		 height="415"
    	  		 src="https://www.youtube.com/embed/mPFddjrL6L4?controls=0" 
    	  		 title="YouTube video player" 
    	  		 frameborder="0"
    	  		allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    	  </div>


    	  <p className='f3 pv2 mobile-display-font-size-header  '>View the new Liebherr crawler excavator generation</p>
    	  <div className=' youtube-main  mt3 mb6'>
    	  		<iframe width="660"
    	  		 className='youtube br2'
    	  		 height="415"
    	  		 src="https://www.youtube.com/embed/KA2Pw7f6Zx4?controls=0"
    	  		 title="YouTube video player" 
    	  		 frameborder="0"
    	  		allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    	  </div>



    	 <p className='f3 pv2 mobile-display-font-size-header  '>Walkaround of Hitachi’s new ICT hydraulic excavator</p>
    	  <div className=' youtube-main  mt3 mb6 '>
    	  		<iframe width="660"
    	  		 className='youtube br2'
    	  		 height="415"
    	  		 src="https://www.youtube.com/embed/f8nHnhOeI2M?controls=0"
    	  		 title="YouTube video player" 
    	  		 frameborder="0"
    	  		allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    	  </div>


    	  <p className='f3 pv2 mobile-display-font-size-header  '>Zoomlion QAY800 All Terrain Crane - Walkaround</p>
    	  <div className=' youtube-main mt3 mb4 '>
    	  		<iframe width="660"
    	  		 className='youtube br2'
    	  		 height="415"
    	  		 src="https://www.youtube.com/embed/ENPLdQPiw6M?controls=0"
    	  		 title="YouTube video player" 
    	  		 frameborder="0"
    	  		allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    	  </div>


		</div>


		<div>
		<div className=" mv4 pv4 sale-banner-desktop-only  ">
		   	<div>
		   		
		   		<div  className='ph3' >
		   			<div  className=' flex ' > 


						<div className='pa1'>
							<Link to='/new-machine-of-the-week' className='pointer no-underline'>
							<p  className="link  pointer dt  br2 cover bg-center" 
							style ={ { backgroundImage: "url("+newestMachine+")" ,
								'width':'430px', 'height':'400px'
							}} >
							  <span className="white  dtc v-btm w-100 h-100 child  tc bg-black-20">
							    
								<h2 className='f4 pb2 ' >New Machine Of the Week</h2>
								
							  </span>
							</p>
							</Link>
						</div>


						<div className='pa1'>
							<Link to='/used-machine-of-the-week' className='pointer no-underline'>
							<p className="link pointer dt  br2 cover bg-center" 
							style ={ { backgroundImage: "url("+usedMachineOfWeek+")" ,
								'width':'430px', 'height':'400px'
							}} >
							  <span className="white  dtc v-btm w-100 h-100 child  tc bg-black-20">
							    
								<h2 className='f4 pb2' >Used Machine Of The Week</h2>
								
							  </span>
							</p>
							</Link>	
						</div>


						<div className='pa1'>
							<Link to='/curr-stk' className='pointer no-underline'>
							<p  className="link pointer dt  br2 cover bg-center" 
							style ={ { backgroundImage: "url("+currentStockCover+")" ,
								'width':'430px', 'height':'400px'
							}} >
							  <span className="white  dtc v-btm w-100 h-100 child  tc bg-black-20">
							    
								<h2 className='f4 pb2' >Current Stocklist</h2>
								
							  </span>
							</p>
							</Link>
						</div>

					</div>

	   			</div>
		   	</div>
	   	</div>

	   	<div className=" sale-banner-mobile-only ">
		   	<div>
		   		
		   		<div  className='' >
		   			<div  className=' ' > 


						<div className='pv2'>
							<Link to='/new-machine-of-the-week' className='pointer no-underline'>
							<p  className="link  mh2  pointer dt  br2 cover bg-center" 
							style ={ { backgroundImage: "url("+newestMachine+")" ,
								"width":"96%", "height":"400px"
							}} >
							  <span className="white  dtc v-btm w-100 h-100 child  tc bg-black-20">
							    
								<h2 className='f4 pb2'>New Machine Of the Week</h2>
								
							  </span>
							</p>
							</Link>
						</div>


						<div className='pv2'>
							<Link to='/used-machine-of-the-week' className='pointer no-underline'>
							<p className="link mh2 pointer dt  br2 cover bg-center" 
							style ={ { backgroundImage: "url("+usedMachineOfWeek+")" ,
								'width':"96%", 'height':'400px'
							}} >
							  <span className="white  dtc v-btm w-100 h-100 child  tc bg-black-20">
							    
								<h2 className='f4 pb2' >Used Machine Of The Week</h2>
								
							  </span>
							</p>
							</Link>	
						</div>


						<div className='pv2'>
							<Link to='/curr-stk' className='pointer no-underline'>
							<p  className="link mh2 pointer dt  br2 cover bg-center" 
							style ={ { backgroundImage: "url("+currentStockCover+")" ,
								'width':"96%", 'height':'400px'
							}} >
							  <span className="white  dtc v-btm w-100 h-100 child  tc bg-black-20">
							    
								<h2 className='f4 pb2' >Current Stocklist</h2>
								
							  </span>
							</p>
							</Link>
						</div>

					</div>

	   			</div>
		   	</div>
	   	</div>

		</div>



			<div className='pv5' style={{'background-color':'#F5F5F5'}}>
				<div>
						<section class="portfolio-on-mobile-width" style={{'width':'89%', 'margin-left':'auto', 'margin-right':'auto'}}>
						  
						  <article class=" ph3 ph0-l portfolio-on-mobile-article-padding">
						    <div class="flex flex-column flex-row-ns portfolio-on-mobile-main">
						      <div class="w-100 w-50-ns pr3-ns order-2 order-1-ns bg-white portfolio-on-mobile-pararaph-width">
						        <h1 class="f5  mt0 lh-title tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding  ">NEW & USED CONSTRUCTION EQUIPMENT</h1>
						        <p class="f5 f5-l lh-copy   ph4 tc pt2">
						          We sell the best-known brands of new and used construction and earthmoving
						           equipment perfectly suited to African conditions. Take a look at our current stocklist.
						        </p>
						        <div className='tc pt4'>
						        	<Link to='/curr-stk'> <button className='pa2 grow bg-yellow shadow-5 f7 b--yellow'>VIEW DETAILS</button> </Link>
						        </div>
						        
						      </div>
						      <div class=" order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width">
						        <img src={bottomImg1} class="db" alt="dimly lit room with a computer interface terminal."/>
						      </div>
						    </div>
						   
						  </article>
						  </section>

						  <section class="portfolio-on-mobile-width" style={{'width':'89%', 'margin-left':'auto', 'margin-right':'auto'}}>
							  
							  <article class="portfolio-on-mobile-article-second-paragraph">
							    <p class="db  ph3 ph0-l no-underline black portfolio-on-mobile-article-padding " href="#0">
							      <div class="flex flex-column flex-row-ns portfolio-on-mobile-main">
							        <div class=" mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width-second-image ">
							          <img src={bottomImg2} class="db" alt=" dimly lit room with a computer interface terminal."/>
							        </div>
							        <div class="w-100 w-50-ns pl3-ns bg-white portfolio-on-mobile-pararaph-width">
							          <h1 class="f5   mt0 lh-title tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding-second-paragraph">RENTALS</h1>
							          <p class="f5 f5-l lh-copy ph4 tc pt2">
							            We provide a wide range of equipment for rental at unbeatable prices and on flexible terms 
							            best suited to the individual customer’s requirements. Reducing the capital requirements of our customers and allowing them to focus on their core business.
							          </p>
							            <div className='tc pt4'>
								        	<Link to='/rentals'> <button className='pa2 grow bg-yellow shadow-5 f7 b--yellow'>VIEW DETAILS</button> </Link>
								        </div>
							         
							        </div>
							      </div>
							    </p>
							  </article>
							 </section> 


							 <section class="portfolio-on-mobile-width" style={{'width':'89%', 'margin-left':'auto', 'margin-right':'auto'}}>
						  
						  <article class=" ph3 ph0-l portfolio-on-mobile-article-padding">
						    <div class="flex flex-column flex-row-ns portfolio-on-mobile-main">
						      <div class="w-100 w-50-ns pr3-ns order-2 order-1-ns bg-white portfolio-on-mobile-pararaph-width">
						        <h1 class="f5  mt0 lh-title tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding">AFTER SALES</h1>
						        <p class="f5 f5-l lh-copy ph4 tc pt2">
						         The philosophy of our company is taking care of our customers’ after-sales needs, in both spare parts and service,
						         driving life-time efficiencies and maximising utilisation of their equipment.
						        </p>

					            <div className='tc pt4'>
						        	<Link to='/services'> <button className='pa2 grow bg-yellow shadow-5 f7 b--yellow'>VIEW DETAILS</button> </Link>
						        </div>

						      </div>
						      <div class=" order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width">
						        <img src={bottomImg3} class="db" alt=" dimly lit room with a computer interface terminal."/>
						      </div>
						    </div>
						   
						  </article>
						  </section>
				</div>
			</div>

				<div>
				<h2 className='tc pt5  '>FEATURED SECTORS</h2>
				<div className='cardz ma1 pa3 mb3 main-cardz-on-mobile ' > 
				<article className="br2 ba dark-gray b--black-10 mv4  w-30  ma3 shadow-5 cardz-on-mobile">
				  <img src={cardImg1} width='400' height='320' className="db w-100 br2 br--top card-img-size card-photo-mobile " alt=" COMMUNITY FOCUSED."/>
				  <div className="pa2 ph3-ns pb3-ns">
				    <div className="dt w-100 mt1">
				      <div className="dtc">
				        <h1 className="f5 f4-ns mv0">CONSTRUCTION</h1>
				      </div>
				      
				    </div>
				    <p className="f6 lh-copy measure mt2 mid-gray ">
				      We serve the customer’s construction equipment needs
				      within the construction sector, which is a major part
				      of the African growth story, both in terms of infrastructure
				      and real estate (residential, commercial and industrial). 
				      Africa is on the verge of an unprecedented boom with regards
				      to upgrading its public infrastructure and private & 
				      commercial real estate stock. We look forward to being 
				      part of this story, providing the machinery to help make it happen.
				    </p>
				  </div>
				</article>

				<article className="br2 ba dark-gray b--black-10 mv4 w-30   ma3 shadow-5 cardz-on-mobile" >
				  <img src={cardImg2} width='400' height='320' className="db w-100 br2 br--top card-img-size card-photo-mobile" alt=" LONG TERM SOLUTIONS."/>
				  <div className="pa2 ph3-ns pb3-ns">
				    <div className="dt w-100 mt1">
				      <div className="dtc">
				        <h1 className="f5 f4-ns mv0">MATERIALS HANDLING</h1>
				      </div>
				      
				    </div>
				    <p className="f6 lh-copy measure mt2 mid-gray">
				       Logistics and movement of goods is one of the principal
				       pillars that drives an economy and our materials handling 
				       products and services aim to give customers unbeatable 
				       productivity and efficiencies. We sell a wide range of 
				       ICE and electric materials handling equipment from the KION Group.
				    </p>
				  </div>
				</article>

				<article className="br2 ba dark-gray b--black-10 mv4 w-30  ma3 shadow-5 cardz-on-mobile">
				  <img src={cardImg3} width='400' height='320' className="db w-100 br2 br--top card-img-size card-photo-mobile" alt=" PROVING 100%."/>
				  <div className="pa2 ph3-ns pb3-ns">
				    <div className="dt w-100 mt1">
				      <div className="dtc">
				        <h1 className="f5 f4-ns mv0">CONCRETING</h1>
				      </div>
				      
				    </div>
				    <p className="f6 lh-copy measure mt2 mid-gray">
				          As a major part of the construction equipment sector,
				          concrete provides the very blocks on which real estate
				          and infrastructure projects are built. We aim to provide
				          customers with the best concreting tools for the job 
				          (including the world-renowned products of Schwing Stetter).
				          We sell a range of concreting and construction equipment 
				          perfectly suited to your project requirements in Africa, 
				          from concrete pumps to batching plants.
				    </p>
				  </div>
				</article>
			  </div>
			</div>

			<div>
				<h2 className='tc mt4 pv3'>OPERATIONS</h2>
				<p className='ph5  pv3 mobile-display-font-size-paragraph  mobile-paragraph-padding'>The Giga Group operates across Southern and Eastern Africa through its subsidiary local companies,
				 which all have physical footprints on the ground in the form of construction equipment sales and service teams,
				  and workshop and showroom premises.</p>
			</div>
			<div className='center pv4 '  >
				
				<OurLocationsAcrossTheContinent/>
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

export default Home;
