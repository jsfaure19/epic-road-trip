import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header3 from '../markup/Layout/Header3';
import Footer3 from '../markup/Layout/Footer3';
import Listingslider from '../markup/Element/Listingslider';
import {Dropdown} from 'react-bootstrap';
import axios from 'axios';

class Profil extends Component{
	render(){
		return(
			<div className="page-wraper">
				
				<Header3 />
				
				<div className="page-content bg-white text-gray-1">	
					
					<div className="dlab-bnr-inr listing-details-slider">
						<div className="dlab-bnr-inr-entry">
							<Listingslider />
						</div>
						<div className="container">
							<div className="listing-details-head style1">
								<div className="listing-info-box row">
									<div className="listing-details-left col-lg-7 col-md-7">
										<div className="listing-theme-logo">
											<img src={require("../images/gallery/gallery-box/pic1.jpg")} alt="" />
										</div>
										<div className="listing-info">
											<div className="listing-info-left text-white">
												<h3 className="title">Infos utilisateur :</h3>
												axios.get(''){}

												
												<ul className="listing-info-list m-tb15">
													<li><Link to={'#'} className="site-button-link white">lien,</Link></li>
													<li><Link to={'#'} className="site-button-link white">lien</Link></li>
												</ul>
											</div>
										</div>
									</div>
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
export default Profil;