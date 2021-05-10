import React,{useState} from 'react';
import Button from '../Button/Button';
import{Link} from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown'

import './Navbar.css';


function Navbar() {
	const[click, setClick] = useState(false);
	const[dropdown, setDropdown] = useState(false);


	const handleClick = () => setClick(!click);
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
		 <nav className='navbar'>
		 	<Link exact to ='/' className='navbar-logo '>
		 		 <div style={{'height':'30px', 'line-height':'30px'}} >
			   		<span style={{ 'color':'orange', 'font-size':'38px' }}>GIGA</span>
			        <span style={{ 'color':'white', 'font-size':'20px' }}> . PLANT & EQUIPMENT</span>
			        
			    </div>	
		 	</Link>
		 	<div className='menu-icon' onClick ={handleClick} >
		 		<i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
		 	</div>
		 	<ul className={click ? 'nav-menu active' : 'nav-menu'}>

			 	<li className ='nav-item'>
			 		<Link exact to='/' className='nav-links' onClick ={closeMobileMenu}>
			 			HOME
			 		</Link>
			 	</li>

			 	

			 	<li className ='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={extendElement}>
			 		<Link  to='/curr-stk' className='nav-links' >
			 			EQUIPMENT RANGE<i className='pl3 fas fa-caret-down'/>
			 		</Link>
			 		{dropdown && <Dropdown onCloseMobileMenu={closeMobileMenu}/>}
			 	</li>

			 	<li className='nav-item'>
		            <Link  to='/curr-stk' className='nav-links' onClick={closeMobileMenu}>
		            	 CURRENT STOCKLIST
		            </Link>
	          </li>

			 	<li className ='nav-item'>
			 		<Link  to='/rentals' className='nav-links' onClick ={closeMobileMenu}>
			 			RENTALS
			 		</Link>
			 	</li>	
			 	<li className ='nav-item'>
			 		<Link  to='/spares' className='nav-links' onClick ={closeMobileMenu}>
			 			SPARE PARTS
			 		</Link>
			 	</li>
			 	<li className ='nav-item'>
			 		<Link  to='/services' className='nav-links' onClick ={closeMobileMenu}>
			 			SERVICES
			 		</Link>
			 	</li>
			 	<li className ='nav-item'>
			 		<Link  to='/partners' className='nav-links' onClick ={closeMobileMenu}>
			 			PARTNERS
			 		</Link>
			 	</li>	

				<li className ='nav-item'>
			 		<Link  to='/contact' className='nav-links' onClick ={closeMobileMenu}>
			 			CONATCT US
			 		</Link>
			 	</li>	
			 	<li className ='nav-item'>
			 		<Link  to='/news' className='nav-links' onClick ={closeMobileMenu}>
			 			NEWS
			 		</Link>
			 	</li>	


	

			 
			 	

		 	</ul>
		 	<Button/>
		 </nav> 
	</div>
  );
}

export default Navbar;
