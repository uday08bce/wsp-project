import React from 'react';
import './Navigation.css';

const Navigation = () => {
		return(
			<div>
				<nav className='toolbar row no-wrap items-center constrain'>
					<p className='menu-link border-right'>Home</p>
					<p className='menu-link border-right'>About Us</p>
					<p className='menu-link border-right donate-link'>Donate</p>
					<p className='menu-link border-right'>Get Newsletter</p>
					<div className='betweenspace'></div>
					<p className='menu-link border-right'>Become an author</p>
					<p className='menu-link border-right'>Sign in</p>
				</nav>
			</div>
		); 
		
}

export default Navigation;
