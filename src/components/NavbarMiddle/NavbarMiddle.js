import React,{useState} from 'react';

import{Link} from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown'

import './NavbarMiddle.css';


function Navbar() {
	const[click, setClick] = useState(false);
	const[dropdown, setDropdown] = useState(false);


	
	const closeMobileMenu = () => setClick (false);

	const onMouseEnter = () => {
		if (window.innerWidth < 960){
			setDropdown(false);
		}else {
			setDropdown(true);
		}
	}
	const onMouseLeave = () => {
		if (window.innerWidth < 960){
			setDropdown(false);
		}else {
			setDropdown(false);
		}
	}

	/*//////////////////////////////////////////////////////////////////////////*/

	const extendElement = () => {
	  dropdown ? setDropdown(false) : setDropdown(true);
	}

	/*//////////////////////////////////////////////////////////////////////////*/

  return (
	<div>
		 <nav className='navbar2'>
		 
		 	<ul className={click ? 'nav-menu2 active' : 'nav-menu2'}>

			 	<li className ='nav-item2'>
			 		<Link exact to='/' className='nav-links2' onClick ={closeMobileMenu}>
			 			HOME
			 		</Link>
			 	</li>

			 

			 	<li className='nav-item2'>
		            <Link  to='/curr-stk' className='nav-links2' onClick={closeMobileMenu}>
		            	 CURRENT STOCKLIST
		            </Link>
	          </li>


	          	<li className ='nav-item2' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={extendElement}>
			 		<Link  to='/curr-stk' className='nav-links2' >
			 			EQUIPMENT RANGE <i className='fas fa-caret-down'/>
			 		</Link>
			 		{dropdown && <Dropdown onCloseMobileMenu={closeMobileMenu}/>}
			 	</li>


			 	<li className ='nav-item2'>
			 		<Link  to='/rentals' className='nav-links2' onClick ={closeMobileMenu}>
			 			RENTALS
			 		</Link>
			 	</li>	
			 	<li className ='nav-item2'>
			 		<Link  to='/spares' className='nav-links2' onClick ={closeMobileMenu}>
			 			SPARE PARTS
			 		</Link>
			 	</li>	
			 	 	<li className='nav-item2'>
		            <Link  to='/services' className='nav-links2' onClick={closeMobileMenu}>
		            	 SERVICES
		            </Link>
	          </li>

			 	<li className ='nav-item2'>
			 		<Link  to='/partners' className='nav-links2' onClick ={closeMobileMenu}>
			 			PARTNERS
			 		</Link>
			 	</li>	
			 	<li className ='nav-item2'>
			 		<Link  to='/contact' className='nav-links2' onClick ={closeMobileMenu}>
			 			CONTACT US
			 		</Link>
			 	</li>	
			 	<li className ='nav-item2'>
			 		<Link  to='/news' className='nav-links2' onClick ={closeMobileMenu}>
			 			NEWS
			 		</Link>
			 	</li>
			 

			 	
			 	

		 	</ul>
		 	
		 </nav> 
	</div>
  );
}

export default Navbar;
