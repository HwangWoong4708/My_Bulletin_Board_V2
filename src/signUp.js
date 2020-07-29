import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./signUp.css";
import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class signUp extends React.Component {
  signup = () => {
    const signupEmail = this.signupEmail.value;
    const signupName = this.signupName.value;
    const signupPassword = this.signupPassword.value;
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const regExp2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

    if (signupEmail === "" || signupEmail === undefined) {
      /*이메일 입력란이 비어있을때*/
      alert("Please Enter your email address.");
      this.signupEmail.focus(); /*커서 다시 이메일 입력창으로*/
      return;
    } else if (
      signupEmail.match(regExp) === null ||
      signupEmail.match(regExp) === undefined
    ) {
      alert("Please enter it according to the email format.");
      this.signupEmail.value = "";
      this.signupEmail.focus();
      return;
    } else if (signupName === "" || signupName === undefined) {
      alert("Please enter your name");
      this.signupName.focus();
      return;
    } else if (signupPassword === "" || signupPassword === undefined) {
      alert("Please enter your password");
      this.signupPassword.focus();
      return;
    } else if (
      signupPassword.match(regExp2) === null ||
      signupPassword.match(regExp2) === undefined
    ) {
      alert(
        "Please enter your password in 8 to 16 digits, including numbers, letters, and special characters."
      );
      this.signupPassword.value = "";
      this.signupPassword.focus();
      return;
    }

    //위의 조건이 충족될 경우 이메일 주소, 이름, 비밀번호 값 서버에 전송.
    const send_param = {
      headers,
      email: this.signupEmail.value,
      name: this.signupName.value,
      password: this.signupPassword.value,
    };
    axios.post("http://localhost:8080/member/signup", send_param); //send_param에 담긴 가입정보 8080포트로 전송.
  };
  render() {
    return (
      <Form className="signUp_Form_Style">
        <h2>SIGN UP</h2>
        <Form.Group className="signUp_Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            maxLength="100"
            ref={ref => (this.signupEmail = ref)}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="signUp_name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            maxLength="20"
            ref={ref => (this.signupName = ref)}
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="signUp_Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            maxLength="64"
            ref={ref => (this.signupPassword = ref)}
            placeholder="Enter Password"
          />
        </Form.Group>
        <Button variant="dark" onClick={this.signup} type="button" block>
          Sign Up
        </Button>
        <Form.Text className="text-muted">You already have account?</Form.Text>
        <Link to="/">
          <Button variant="dark" type="button" block>
            Go to Login Page
          </Button>
        </Link>
      </Form>
    );
  }
}

export default signUp;
