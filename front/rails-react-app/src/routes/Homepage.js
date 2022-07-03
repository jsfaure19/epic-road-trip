import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header3 from '../markup/Layout/Header3';
import Footer3 from '../markup/Layout/Footer3';
import {Form} from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

var img1 = require('../images/main-slider/slide2.jpg');
var img2 = require('../images/main-slider/slide2.jpg');

// class Homepage extends Component{
const Homepage = () => {

	const [villeD, setVilleD] = React.useState('')
	const [villeA, setVilleA] = React.useState('')
	const [deplacement, setDeplacement] = React.useState('')
	const [searchResultDeparture, setSearchResultDeparture] = React.useState([])
	const [searchResultArrival, setSearchResultArrival] = React.useState([])

	const onChangeVilleDepart = (e) => {
		setVilleD(e.target.value)
	}

	const onChangeVilleArrive = (e) => {
		setVilleA(e.target.value)
	}

	const onChangeDeplacement = (e) => {
		setDeplacement(e.target.value)
	}

	React.useEffect(() => {
		if(villeD)
		{
			async function fetchData(){return axios.get(
				`http://localhost:3001/search_lat_long?search_string=${villeD}`,
		).then((response) => {
			const res = [...response.data]
			res.forEach((data)=> data.label = data.display_name)
			setSearchResultDeparture(response.data)
		  })};
		  fetchData();
	}
	  }, [villeD]);

	  React.useEffect(() => {
		if(villeA)
		{
			async function fetchData(){return axios.get(
				`http://localhost:3001/search_lat_long?search_string=${villeA}`,
		).then((response) => {
			const res = [...response.data]
			res.forEach((data)=> data.label = data.display_name)
			setSearchResultArrival(response.data)
		  })};
		  fetchData();
	  }}, [villeA]);

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
											{/* <input id="villeDepart" onChange={onChangeVilleDepart} type="text" className="form-control" placeholder="Ville de départ" />
											<input id="villeArrivee" onChange={onChangeVilleArrive} type="text" className="form-control" placeholder="Ville d'arrivée" /> */}
												<Autocomplete
												className="form-control"
												disablePortal
												id="combo-box-demo"
												options={searchResultDeparture}
												onChange={(e)=> setVilleD(searchResultDeparture[e.target.value])}
												sx={{ width: 300 }}
												renderInput={(params) => <TextField {...params} label="Depart" onChange={(e)=>setVilleD(e.target.value)} value={villeD}/>}
												/>
													<Autocomplete
												className="form-control"
												disablePortal
												id="combo-box-demo"
												options={searchResultArrival}
												onChange={(e)=> setVilleA(searchResultArrival[e.target.value])}
												sx={{ width: 300 }}
												renderInput={(params) => <TextField {...params} label="Arrivée" onChange={(e)=>setVilleA(e.target.value)} value={villeA} />}
												/>

												<Form.Control onChange={(e)=>onChangeDeplacement(e.target.value)} value={deplacement} as="select">
													<option>Automobile</option>
													<option>A pieds</option>
													<option>Vélo</option>
												</Form.Control>

											<div className="input-group-prepend">
											<Link className="site-button" to="/trip" state={{ departure: villeD, arrival: villeA, deplacement: deplacement }}> Let's go !</Link>

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
									<h2 className="box-title">Vos destinations favorites</h2>
									<div className="dlab-separator bg-primary"></div>
									<p>Vous trouverez ci-dessous les destinations qui vous ont fait vibrer.</p>
								</div>
								<div className="row m-lr0 featured-style2-area">
									<div className="col-lg-4 col-md-12 p-lr0">
										<div className="row m-lr0">
											<div className="col-lg-12 col-md-4 col-sm-12 p-lr0">
												<div className="featured-bx style2">
													<div className="featured-media">
														<img src={require("../images/featured/pic1.jpg")} alt="" />
														<div className="featured-type featured-top">
															Les plus belles destinations
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
														<h2 className="title"><Link to ={'#'}>Portland</Link></h2>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-4 col-sm-6 p-lr0">
												<div className="featured-bx style2">
													<div className="featured-media">
														<img src={require("../images/featured/pic3.jpg")} alt="" />
													</div>
													<div className="featured-content text-white">
														<h2 className="title"><Link to={'#'}>Séoul</Link></h2>
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
					<div className="section-full bg-img-fix bg-white content-inner">
						<div className="container">
							<div className="section-head text-center">
								<h2 className="box-title">En Savoir Plus ?</h2>
								<div className="dlab-separator bg-primary"></div>
								<p>Notre service est là pour vous permettre d'optimiser vos sorties. Préparez-vous, on s'occupe du reste ♥ .</p>
							</div>
							<div className="row">
								
								<div className="col-lg-4 col-md-6">
									<div className="icon-bx-wraper center work-box style1 m-b30">
										<div className="box-count">01</div>
										<div className="icon-bx-lg radius bg-gray-1 m-b20">
											<Link to={"#"} className="icon-cell"><i className="ti-search text-primary"></i></Link> 
										</div>
										<div className="icon-content">
											<h3 className="dlab-tilte">Quoi faire?</h3>
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
											<h3 className="dlab-tilte">Découvrez de fabuleux endroits.</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer3 />
			</div>
		)

	}


export default Homepage;