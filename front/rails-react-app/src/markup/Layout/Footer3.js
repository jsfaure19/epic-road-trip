import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer2 extends Component{
	render(){
		return(
			<footer className="site-footer bg-black-2">
				<div className="footer-top">
					<div className="container saf-footer">
						<div className="row">
							<div className="col-md-6 col-lg-3 col-sm-6 footer-col-4">
								<div className="widget widget_getintuch">
									<h5 className="m-b30 text-white text-uppercase ">Nous contacter</h5>
									<ul>
										<li><i className="ti-location-pin"></i><strong>address</strong> 123 rue marchand </li>
										<li><i className="ti-mobile"></i><strong>phone</strong>0800-123456 (24/7 Support Line)</li>
										<li><i className="ti-email"></i><strong>email</strong>pro@epitech.eu</li>
									</ul>
								</div>
							</div>
							
							<div className="col-md-6 col-lg-3 col-sm-6 col-5 footer-col-4">
								<div className="widget widget_services border-0">
									<h5 className="m-b30 text-white text-uppercase ">Entreprise</h5>
									<ul>
										<li><Link to={"/homepage"}>Accueil</Link></li>
										<li><Link to={"/contact"}>Prendre contact</Link></li>
									</ul>
								</div>
							</div>
							
							<div className="col-md-6 col-lg-3 col-sm-6 col-7 footer-col-4">
								<div className="widget widget_services border-0">
									<h5 className="m-b30 text-white text-uppercase ">Lien utile</h5>
									<ul>
										<li><Link to={"/login/register"}>Crée un compte</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-12 text-left"> <span>Copyright © 2022 EpicRoadTrip</span> </div>
							<div className="col-md-6 col-sm-12 text-right"> 
								<div className="widget-link "> 
									<ul>
										<li><Link to={"privacy-policy"}> Privacy Policy</Link></li> 
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer2;