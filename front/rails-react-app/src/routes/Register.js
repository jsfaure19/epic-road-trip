import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import {
    loadingToggleAction,
    signupAction,
} from '../store/actions/AuthActions';
import GoogleLoginComponent from '../services/GoogleLoginComponent';
import bnr from '../images/logo.png';

function Register(props) {
	const [email, setEmail] = useState('');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    function onSignUp(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Email';
            error = true;
        }
        if (password === '') {
            errorObj.password = 'Password';
            error = true;
        }
        setErrors(errorObj);
        if (error) return;
        dispatch(loadingToggleAction(true));
        dispatch(signupAction(email, password, props.history));
    }
	return(
		<div className="page-wraper">
			<div className="page-content dlab-login" style={{backgroundImage: "url("+ bnr +")",  backgroundBlendMode:"screen"}}>
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-4 login-form-box">
							<div className="login-form">
								<div className="logo">
									<Link to={"/homepage"}><img src={require("../images/logoert.png")} alt=""/></Link>
								</div>
								<div className="tab-content nav">
									<div className="">
										{props.errorMessage && (
											<div className=''>
												{props.errorMessage}
											</div>
										)}
										{props.successMessage && (
											<div className=''>
												{props.successMessage}
											</div>
										)}
										<form className="dlab-form" onSubmit={onSignUp}>
											<h3 className="form-title m-t0">Formulaire d'inscription :</h3>
											<div className="form-group text-center">
												<GoogleLoginComponent />
											</div>
											<div className="form-group">
												<input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="e@example.com" />
												<div className="text-danger">{errors.email && <div>{errors.email}</div>}</div>											</div>
											<div className="form-group">
												<input value={password} minlength="8" type="password" className="form-control" placeholder="Mot de passe" defaultValue="Password"
													onChange={(e) =>
														setPassword(e.target.value)
													}
												/>
												<div className="text-danger">{errors.password && <div>{errors.password}</div>}</div>
											</div>
											<div className="form-group">
												<input name="dzName" required="" className="form-control" placeholder="Re-taper votre mot de passe" type="password"/>
											</div>
											<h6 className="text-inherit m-b10">Information de compte : </h6>
											<div className="form-group">
												<input name="dzName" required="" className="form-control" placeholder="Nom d'utilisateur" type="text"/>
											</div>
											<div className="form-group">
												<input type="checkbox" required="required" id="privacy-policy" />
												<label htmlFor="privacy-policy">J'ai lu & j'accepte <Link to="#" className="btn-link">la politique d'utilisation de votre service </Link>& <Link to="#" className="btn-link">la politique de gestion des données </Link></label>
											</div>
											<div className="form-group"> 
												<button className="site-button button-md btn-block">C'est parti !</button>
											</div>
											<div className="form-group">
												<p className="info-bottom">
													<Link to="/login" className="btn-link">Vous avez déjà un compte ?</Link> 
												</p>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="content-info">
								<ul className="list-info">
									<li>
										<div className="dlab-box">
											<i className="fa fa-bullhorn"></i>
											<p>Obtenez des conseils personnalisés de la part des amis et des experts en voyage en qui vous avez confiance.</p>
										</div>
									</li>
									<li>
										<div className="dlab-box">
											<i className="fa fa-car"></i>
											<p>Trouvez facilement les hôtels, les activités et les restaurants qui vous conviennent.</p>
										</div>
									</li>
									<li>
										<div className="dlab-box">
											<i className="fa fa-check"></i>
											<p>C'est tout ce que vous devez savoir</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	)
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};
export default connect(mapStateToProps)(Register);