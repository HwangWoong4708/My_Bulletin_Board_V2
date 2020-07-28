import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./Navigation";
import signUp from "./signUp";

ReactDOM.render(
  <HashRouter>
    <Navigation />
    <LoginForm />
    <Route path="/signUp" component={signUp}></Route>
  </HashRouter>,
  document.getElementById("board")
);
