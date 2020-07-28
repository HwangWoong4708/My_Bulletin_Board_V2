import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./signUp.css";
class signUp extends React.Component {
  render() {
    return (
      <Form className="signUp_Form_Style">
        <h2>SIGN UP</h2>
        <Form.Group className="signUp_Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="signUp_name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="signUp_Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="dark" type="button" block>
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
