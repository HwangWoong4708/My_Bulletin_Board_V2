import React from "react";
import LoginForm from "./LoginForm";
import signUp from "./signUp";
import { Route } from "react-router-dom";
import $ from "jquery";
import {} from "jquery.cookie";
import BoardForm from "./Board_Form";

class main extends React.Component {
  render() {
    let mainForm;
    function getmainForm() {
      if ($.cookie("login_id")) {
        mainForm = <Route exact path="/" component={BoardForm} />;
        return mainForm;
      } else {
        mainForm = <Route exact path="/" component={LoginForm} />;
        return mainForm;
      }
    }
    getmainForm();
    return (
      <div>
        <Route path="/signUp" component={signUp}></Route>
        {mainForm}
      </div>
    );
  }
}

export default main;
