/* import logo from "./logo.svg";
//import "./App.css";
import { Link } from "react-router-dom";
import './css/plugins.css';
import './css/style.css';
import './css/templete.css';
import './css/skin/skin-1.css';
import './plugins/slick/slick.min.css';
import './plugins/slick/slick-theme.min.css';
 */

import React, { Suspense, useEffect } from "react";

import { connect, useDispatch } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { checkAutoLogin } from "./services/AuthService";
import { isAuthenticated } from "./store/selectors/AuthSelectors";
import "./css/plugins.css";
import "./css/style.css";
import "./css/templete.css";
import "./css/skin/skin-1.css";
import "./plugins/slick/slick.min.css";
import "./plugins/slick/slick-theme.min.css";

import Login from "./routes/Login";
import SignUp from "./routes/Register";

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    checkAutoLogin(dispatch, props.history);
  }, [dispatch, props.history]);

  if (props.isAuthenticated) {
    return (
      <>
        <Suspense
          fallback={
            <div id="preloader">
              <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"></div>
              </div>
            </div>
          }
        ></Suspense>
      </>
    );
  } else {
    return (
      <div className="vh-100">
        <Suspense
          fallback={
            <div id="preloader">
              <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"></div>
              </div>
            </div>
          }
        ></Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

export default connect(mapStateToProps)(App);

{
  /*  function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to="/trip">Trip</Link>
            <Link to="/homepage">Homepage</Link>
            <Link to="/login">Login</Link>
          </nav>
        </header>
      </div>
    </div>
  );
} 

//export default App; */
}
