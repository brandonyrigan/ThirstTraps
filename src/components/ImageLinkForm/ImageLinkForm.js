import React from 'react';
import './ImageLinkForm.css';
import thirstiphone from './thirstiphone.png';


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f1 b white'>
				{'THIRSTY?'}
			</p>
			<div className='center pb3'>
 				<img alt='iphone' src={thirstiphone} height='600px' />
			</div>
		</div>
	);
}

export default ImageLinkForm;