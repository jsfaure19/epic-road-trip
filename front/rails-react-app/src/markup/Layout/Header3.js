import React, {Component} from 'react';
import  {Link} from 'react-router-dom';

class Header3 extends Component{
	componentDidMount() {

        // sidebar open/close

        var btn = document.querySelector('.navicon');
        var aaa = document.querySelector('.myNavbar ');

        function toggleFunc() {
            return aaa.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }

        function checkLi(current) {
            navUl.forEach(el => el.classList.remove('open'));
            current.classList.add('open');
        }

    }

	render(){
		return(
			<header className="site-header header-transparent mo-left">

				<div className="sticky-header main-bar-wraper navbar-expand-lg">
					<div className="main-bar clearfix ">
						<div className="container clearfix">
							<div className="logo-header mostion">
								<Link to={"/homepage"} className="logo-1"><img src={require("../../images/logothumbnail.png")} alt="" /></Link>
							</div>

							<button className="navbar-toggler collapsed navicon  justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<span></span>
								<span></span>
								<span></span>
							</button>
							<div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown">
								<ul className="nav navbar-nav">
									<li><Link to={"/homepage"}>Accueil<span className="tag-new">New</span></Link></li>

									<li className="down"><Link to={"#"}>Comptes <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to={"/login/register"}>S'enregistrer</Link></li>
											<li><Link to={"/login"}>Se connecter</Link></li>
											<li><Link to={"/"}>Se déconnecter<span className="tag-new">TODO</span></Link></li>
										</ul>
									</li>
									<li><Link to={"/contact-us"}>Nous contacter</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default Header3;
