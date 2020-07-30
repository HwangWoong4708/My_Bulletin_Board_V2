import React from "react";
import { Image, Form, Button } from "react-bootstrap";
import $ from "jquery";
import {} from "jquery.cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LoginForm.css";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class LoginForm extends React.Component {
  login = () => {
    const loginEmail = this.loginEmail.value;
    const loginPassword = this.loginPassword.value;

    if (loginEmail === "" || loginEmail === undefined) {
      alert("Please Enter Email address.");
      this.loginEmail.focus();
      return;
    } else if (loginPassword === "" || loginPassword === undefined) {
      alert("please Enter Password");
      this.loginPassword.focus();
      return;
    }

    const send_param = {
      headers,
      email: this.loginEmail.value,
      password: this.loginPassword.value,
    };
    axios
      .post("http://localhost:8080/member/login", send_param) //서버로 로그인이메일,비밀번호 전송.
      .then(returnData => {
        if (returnData.data.message) {
          // console.log("login_id:" + returnData.data._id);
          $.cookie("login_id", returnData.data._id, { expires: 1 });
          $.cookie("login_email", returnData.data.email, { expires: 1 });
          alert(returnData.data.message);
          window.location.reload();
        } else {
          alert(returnData.data.message);
        }
      })
      //에러
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <Form className="loginForm_Style">
        <div align="center" className="mainImage_Style">
          <Image src="React_Image.png" />
        </div>
        <Form.Group className="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            maxLength="100"
            ref={ref => (this.loginEmail = ref)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            maxLength="20"
            ref={ref => (this.loginPassword = ref)}
            placeholder="Password"
            type="password"
          />
        </Form.Group>
        <div className="loginButton">
          <Button variant="dark" type="button" onClick={this.login} block>
            Log In
          </Button>
        </div>
        <Link to="signUp">
          <Button variant="dark" type="button" block>
            Sign Up
          </Button>
        </Link>
      </Form>
    );
  }
}
export default LoginForm;
