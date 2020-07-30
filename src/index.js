import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./main";
import Footer from "./Footer";

ReactDOM.render(
  <HashRouter>
    <Navigation />
    <Main />
    <Footer />
  </HashRouter>,
  document.getElementById("board")
);
