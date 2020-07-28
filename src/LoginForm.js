import React from "react";
import { Image, Form, Button } from "react-bootstrap";
import "./LoginForm.css";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  render() {
    return (
      <Form className="loginForm_Style">
        <div align="center" className="mainImage_Style">
          <Image src="React_Image.png" />
        </div>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="dark" type="button" block>
          Log In
        </Button>
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
