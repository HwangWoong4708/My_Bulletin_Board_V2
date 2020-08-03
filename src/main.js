import React from "react";
import LoginForm from "./LoginForm";
import signUp from "./signUp";
import { Route } from "react-router-dom";
import $ from "jquery";
import {} from "jquery.cookie";
import BoardForm from "./Board_Form";
import BoardWrite from "./Board_Write";
import BoardDetail from "./Board_Detail";

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
        <Route path="/BoardWrite" component={BoardWrite}></Route>
        <Route path="/board/detail" component={BoardDetail}></Route>

        {mainForm}
      </div>
    );
  }
}

export default main;
