import React, {Component} from 'react';
import Header3 from '../markup/Layout/Header3';
import Footer3 from '../markup/Layout/Footer3';
import Contactus from '../markup//Element/Contactus';


class Error extends Component{
	render(){
		return(
			<div className="page-wraper">
				
				<Header3 />
				
				<div className="page-content bg-white">
					
				<Contactus />

					<div className="section-full content-inner-2">
						<div className="container">
							<div className="">
								<div className="error-page">
									<span className="error-no">404</span>
									<span className="error-title">Page <br/> Not <br/> Found</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<Footer3  />
			</div>	
		)
	}
}


export default Error;