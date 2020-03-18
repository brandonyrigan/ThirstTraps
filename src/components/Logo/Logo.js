import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () => {
	return (
		<div className='pt4 ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 75 }} style={{ height: 100, width: 100 }} >
 				<div className='Tilt-inner white f3 pt4'>BLACK</div>
			</Tilt>
		</div>
	);
}

export default Logo;