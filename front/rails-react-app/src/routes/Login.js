import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { loadingToggleAction,loginAction,
} from '../store/actions/AuthActions';
import bnr from '../images/logo.png';

function Login (props) {
	const [email, setEmail] = useState('');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

     function onLogin(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Veuillez renseigner votre Email';
            error = true;
        }
        if (password === '') {
            errorObj.password = 'Veuillez renseigner votre mot de passe';
            error = true;
        }
        setErrors(errorObj);
        if (error) {
			return ;
		}
		dispatch(loadingToggleAction(true));
        dispatch(loginAction(email, password, props.history));
    }

	return(
		<div className="page-wraper">

			<div className="page-content dlab-login" style={{backgroundImage: "url("+ bnr +")", backgroundPosition: "top right", backgroundBlendMode:"screen"}}>
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-4 login-form-box">
							<div className="login-form">
								<div className="logo">
									<Link to={"/homepage"}><img src={require("../images/logoert.png")} alt=""/></Link>
								</div>
								<div className="tab-content nav">
									<div id="login" className="tab-pane active">
										<form className="dlab-form" onSubmit={onLogin}>
											<h3 className="form-title m-t0">Re-bonjour, Connectez vous à votre compte</h3>
											{props.errorMessage && (
												<div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
													{props.errorMessage}
												</div>
											)}
											{props.successMessage && (
												<div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
													{props.successMessage}
												</div>
											)}
{/* 											<div className="text-center m-b20">
												<Link to= {"#"} className="site-button facebook btn-block"><i className="fa fa-facebook-official m-r10"></i> Log in with Facebook</Link>
											</div> */}
											<div className="form-group">
												<input type="email" className="form-control"
													placeholder="Adresse mail"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
												{errors.email && <div className="text-danger fs-12">{errors.email}</div>}

											</div>
											<div className="form-group">
                                                {/* <input name="dzName" required="" className="form-control " placeholder="Type Password" type="password"/> */}
                                                <input type="password" className="form-control" value={password} placeholder="Mot de passe"
                                                    onChange={(e) =>
                                                        setPassword(e.target.value)
                                                    }
                                                />
											</div>
											<div className="form-group field-btn text-left">
												<div className="input-block">
													<input id="check1" type="checkbox" />
													<label htmlFor="check1">Se souvenir </label>
												</div>
												<Link data-toggle="tab" to="#forgot-password" className="btn-link forgot-password">Mot de passe oublié ?</Link>
											</div>
											<div className="form-group">
												<button type="submit" className="site-button btn-block button-md">Se connecter</button>
											</div>
											<div className="form-group">
												<p className="info-bottom">Pas encore de compte ? <Link to="register" className="btn-link">inscription</Link> </p>
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
export default connect(mapStateToProps)(Login);

/* export default Login; */