import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from './store/store';
import Trip from "./routes/Trip";
import Homepage from "./routes/Homepage";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Error from "./routes/Error";
import Profil from "./routes/Profil";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
    />
  <Provider store = {store}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Error />} />
        <Route path="trip" element={<Trip />} />
        <Route path="homepage" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="login/register" element={<Register />} />
        <Route path="profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
