import logo from "./logo.svg";
//import "./App.css";
import { Link } from "react-router-dom";
import './css/plugins.css';
import './css/style.css';
import './css/templete.css';
import './css/skin/skin-1.css';
import './plugins/slick/slick.min.css';
import './plugins/slick/slick-theme.min.css';

function App() {
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

export default App;