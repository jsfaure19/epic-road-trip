import React from 'react'
import {  Routes, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage';
//import Homepage2 from './Pages/Homepage2';
//import Homepage3 from './Pages/Homepage3';

import Error from './Pages/Error';
import Register from './Pages/Register';

/* import Addlisting from './Pages/Addlisting'; */
import Listing from './Pages/Listing';
/*import Listingleftsidebar from './Pages/Listingleftsidebar';
import Listingrightsidebar from './Pages/Listingrightsidebar';

import Gridleftsidebar from './Pages/Gridleftsidebar';
import Gridrightsidebar from './Pages/Gridrightsidebar';

import Gridmapleftsidebar from './Pages/Gridmapleftsidebar';
import Gridmaprightsidebar from './Pages/Gridmaprightsidebar';

import Listingdetail from './Pages/Listingdetail';
import Listingdetail2 from './Pages/Listingdetail2';
import Listingdetail3 from './Pages/Listingdetail3';


import Blogstandar from './Pages/Blogstandar';
import Blogstandardetail from './Pages/Blogstandardetail';
*/
import Contact from './Pages/Contact';
import ScrollToTop from './Element/ScrollToTop';
import Login from './Pages/Login';

const Markup = () =>{
	return (
		<>
			
			<div className="page-wraper">
				<Routes>
					<Route path='/' exact element={Homepage} />
					<Route path='/homepage' exact element={Homepage} />	
					<Route path='/error-404' exact element={Error} />
					<Route path='/register' exact element={Register} />
					<Route path='/contact-us' exact element={Contact} />
{/* 					<Route path='/add-listing' exact element={Addlisting} /> 
 */}					<Route path='/listing' exact element={Listing} />
					{/*					
					<Route path='/listing-left-sidebar' exact element={Listingleftsidebar} />
					<Route path='/listing-right-sidebar' exact element={Listingrightsidebar} />
				
					<Route path='/listing-grid-left-sidebar' exact element={Gridleftsidebar} />
					<Route path='/listing-grid-right-sidebar' exact element={Gridrightsidebar} />
					
					<Route path='/listing-grid-map-left-sidebar' exact element={Gridmapleftsidebar} />
					<Route path='/listing-grid-map-right-sidebar' exact element={Gridmaprightsidebar} />
					
					<Route path='/listing-details' exact element={Listingdetail} />
					<Route path='/listing-details-2' exact element={Listingdetail2} />
					<Route path='/listing-details-3' exact element={Listingdetail3} />
					
					<Route path='/blog-standard' exact element={Blogstandar} /> */}
					<Route path='/login' exact element={Login} />
				</Routes>
			</div>
			<ScrollToTop />
		</>

	)
}

export default Markup;