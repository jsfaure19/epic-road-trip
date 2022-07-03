import React, {Component} from 'react';
import {Link} from 'react-router-dom';

var bnr = require('./../../images/banner/bnr1.jpg');

class Contactus extends Component{
	render(){
		return(
			<div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-black-middle" style={{backgroundImage:"url("+ bnr + ")" }}>
				
			</div>	
		)
	}
}

export default Contactus;