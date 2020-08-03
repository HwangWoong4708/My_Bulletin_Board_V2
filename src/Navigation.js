import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import {} from "jquery.cookie";
import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Navigation extends React.Component {
  state = {
    buttonDisplay: "none",
  };

  componentDidMount() {
    if ($.cookie("login_id")) {
      this.setState({
        buttonDisplay: "block",
      });
    } else {
      this.setState({
        buttonDisplay: "none",
      });
    }
  }
  logout = () => {
    axios
      .get("http://localhost:8080/member/logout", {
        headers,
      })
      .then(returnData => {
        if (returnData.data.message) {
          $.removeCookie("login_id");
          alert("로그아웃 되었습니다.");
          window.location.href = "/";
        }
      });
  };
  render() {
    const buttonStyle = {
      margin: "0px 5px 0px 10px",
      display: this.state.buttonDisplay,
    };
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Bulletin Board v2</Navbar.Brand>
        <Navbar.Toggle />
        <NavLink to="/BoardWrite">
          <Button style={buttonStyle} variant="dark">
            Write
          </Button>
        </NavLink>

        <Button style={buttonStyle} onClick={this.logout} variant="dark">
          Log Out
        </Button>

        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
