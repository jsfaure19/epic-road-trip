import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header3 from '../markup/Layout/Header3';
import Footer3 from '../markup/Layout/Footer3';
import {Form} from 'react-bootstrap';
import Tabservices2 from '../markup/Element/Tabservices2';
import Userowl2 from '../markup/Element/Userowl2';
import Userowl3 from '../markup/Element/Userowl3';

var img1 = require('../images/main-slider/slide7.jpg');
var img2 = require('../images/background/bg3.jpg');

class Homepage extends Component{
	render(){
		return(
			<div className="page-wraper font-roboto">
				<Header3 />
				<div className="page-content bg-white">

				<div className="dlab-bnr-inr dlab-bnr-inr-md bnr-style1" style={{backgroundImage:"url(" + img1 + ")", backgroundSize: "cover"}} id="dezParticles">
						<div className="container">
							<div className="dlab-bnr-inr-entry align-m dlab-home">
								<div className="bnr-content">
									<h2>MILLE & UNES ACTIVITES</h2>
									<p>Ici vous trouverez ce qui vous convient le mieux</p>
								</div>
								<div className="search-filter filter-style1">
									<form>
										<div className="input-group">
											<input id="villeDepart" type="text" className="form-control" placeholder="Ville de départ" />
											<input id="villeArrivee" type="text" className="form-control" placeholder="Ville d'arrivée" />

												<Form.Control as="select">
													<option>Trajet</option>
													<option>Hôtel</option>
													<option>Loisir</option>
													<option>Manger</option>
													<option>Boire</option>Authorization
												</Form.Control>

											<div className="input-group-prepend">
												<Link 	to ="../trip"
														className="site-button"
														state="#villeDepart"
														> Rechercher</Link>
											</div>
										</div>
									</form>
								</div>
								<div className="navbar scroll-button">
									<Link to="#page_content" className="site-button button-style1 scroll"><i className="la la-long-arrow-down"></i></Link>
								</div>
							</div>
						</div>
					</div>
					<div className="content-block" id="page_content">
						<div className="section-full bg-white content-inner-2">
							<div className="container-fluid">
								<div className="section-head text-black text-center">
									<h2 className="box-title">Villes populaires</h2>
									<div className="dlab-separator bg-primary"></div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
								</div>
								<div className="row m-lr0 featured-style2-area">
									<div className="col-lg-4 col-md-12 p-lr0">
										<div className="row m-lr0">
											<div className="col-lg-12 col-md-4 col-sm-12 p-lr0">
												<div className="featured-bx style2">
													<div className="featured-media">
														<img src={require("../images/featured/pic1.jpg")} alt="" />
														<div className="featured-type featured-top">
															TOP FEATURED
														</div>
													</div>
													<div className="featured-content text-white">
														<h2 className="title"><Link to={'#'}>Sucre</Link></h2>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-4 col-sm-6 p-lr0">
												<div className="featured-bx style2">
													<div className="featured-media">
														<img src={require("../images/featured/pic2.jpg")} alt="" />
													</div>
													<div className="featured-content text-white">
														<h2 className="title"><Link to ={'#'}>U.S.A</Link></h2>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-4 col-sm-6 p-lr0">
												<div className="featured-bx style2">
													<div className="featured-media">
														<img src={require("../images/featured/pic3.jpg")} alt="" />
													</div>
													<div className="featured-content text-white">
														<h2 className="title"><Link to={'#'}>Corée</Link></h2>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-12 p-lr0">
										<div className="row m-lr0">
											<div className="col-lg-6 col-md-4 col-sm-6 p-lr0">
												<div className="featured-bx style2">
													<div className="featured-media">
														<img src={require("../images/featured/pic4.jpg")} alt="" />
													</div>
													<div className="featured-content text-white">
														<h2 className="title"><Link to={'#'}>Toulouse</Link></h2>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-4 col-sm-6 p-lr0">
												<div className="featured-bx style2">
													<div className="featured-media">
														<img src={require("../images/featured/pic6.jpg")} alt="" />
													</div>
													<div className="featured-content text-white">
														<h2 className="title"><Link to={'#'}>Abidjan</Link></h2>
													</div>
												</div>
											</div>
											<div className="col-lg-12 col-md-4 col-sm-12 p-lr0">
												<div className="featured-bx style2">
													<div className="featured-media">
														<img src={require("../images/featured/pic8.jpg")} alt="" />
														<div className="featured-type featured-trading">
															<i className="fa fa-bolt"></i>
														</div>
													</div>
													<div className="featured-content text-white">
														<h2 className="title"><Link to={'#'}>Londre</Link></h2>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-12 p-lr0">
										<div className="row m-lr0">
											<div className="col-lg-12 col-md-4 col-sm-12 p-lr0">
												<div className="featured-bx style2">
													<div className="featured-media">
														<img src={require("../images/featured/pic7.jpg")} alt="" />
													</div>
													<div className="featured-content text-white">
														<h2 className="title"><Link to={'#'}>Lyon</Link></h2>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="section-full bg-gray-1 content-inner about-us">
						<div className="container-fluid">
							<div className="section-head text-black text-left text-center">
								<h2 className="box-title">Les Choses à Faire Dans La Ville</h2>
								<div className="dlab-separator bg-primary"></div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
							</div>	
							
							<Tabservices2 />
						</div>
					</div>		
					
					<div className="section-full bg-img-fix bg-white content-inner">
						<div className="container">
							<div className="section-head text-center">
								<h2 className="box-title">En Savoir Plus ?</h2>
								<div className="dlab-separator bg-primary"></div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
							</div>
							<div className="row">
								
								<div className="col-lg-4 col-md-6">
									<div className="icon-bx-wraper center work-box style1 m-b30">
										<div className="box-count">01</div>
										<div className="icon-bx-lg radius bg-gray-1 m-b20">
											<Link to={"#"} className="icon-cell"><i className="ti-search text-primary"></i></Link> 
										</div>
										<div className="icon-content">
											<h3 className="dlab-tilte">Quoi Faire?</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6">
									<div className="icon-bx-wraper center work-box style1 m-b30">
										<div className="box-count">02</div>
										<div className="icon-bx-lg radius bg-gray-1 m-b20">
											<Link to={'#'} className="icon-cell"><i className="ti-gift text-primary"></i></Link> 
										</div>
										<div className="icon-content">
											<h3 className="dlab-tilte">Faites nous confiance !</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="icon-bx-wraper center work-box style1 m-b30">
										<div className="box-count">03</div>
										<div className="icon-bx-lg radius bg-gray-1 m-b20">
											<Link to={'#'} className="icon-cell"><i className="ti-rocket text-primary"></i></Link> 
										</div>
										<div className="icon-content">
											<h3 className="dlab-tilte">Découvrez De Fabuleux Endroits.</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="section-full bg-white content-inner-2 bg-img-fix overlay-black-dark owl-out" style={{backgroundImage:"url(" + img2 + ")" ,backgroundPosition: "left bottom" }}>
						<div className="container">
							<div className="section-head text-center text-white">
								<h2 className="box-title">What Our Users Say</h2>
								<div className="dlab-separator bg-primary"></div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
							</div>
							<Userowl2 />
						</div>
					</div>
					<div className="section-full bg-white content-inner owl-out">
						<div className="container">
							<div className="section-head text-black text-center">
								<h2 className="box-title">From The Blog</h2>
								<div className="dlab-separator bg-primary"></div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
							</div>	
							<Userowl3 />
							
						</div>
					</div>		
				</div>
				<Footer3 />
			</div>	
		)
		
	}
}


export default Homepage;