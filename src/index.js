import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Router } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>

  <Provider store={Store}>

  <Header />
    <App />
    <Footer/>
    
  </Provider>
   

  </>
);

reportWebVitals();
