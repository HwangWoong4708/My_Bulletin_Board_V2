import React from "react";
import {} from "jquery.cookie";
import $ from "jquery";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class BoardRow extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <NavLink
            to={{ pathname: "/board/detail", query: { _id: this.props._id } }}
          >
            {this.props.createdAt.substring(0, 10)}
          </NavLink>
        </td>
        <td>
          <NavLink
            to={{ pathname: "/board/detail", query: { _id: this.props._id } }}
          >
            {this.props.title}
          </NavLink>
        </td>
      </tr>
    );
  }
}
class BoardForm extends React.Component {
  state = {
    boardList: [],
  };

  componentDidMount() {
    this.getBoardList();
  }

  getBoardList = () => {
    const send_param = {
      headers,
      _id: $.cookie("login_id"),
    };

    axios
      .post("http://localhost:8080/board/getBoardList", send_param)
      .then(returnData => {
        let boardList;
        if (returnData.data.list.length > 0) {
          console.log(returnData.data.list.length);
          const boards = returnData.data.list;
          boardList = boards.map(item => (
            <BoardRow
              key={Date.now() + Math.random() * 500}
              _id={item._id}
              createdAt={item.createdAt}
              title={item.title}
            ></BoardRow>
          ));
          console.log(boardList);
          this.setState({
            boardList: boardList,
          });
        } else {
          boardList = (
            <tr>
              <td colSpan="2">작성한 게시글이 존재하지 않습니다.</td>
            </tr>
          );
          this.setState({
            boardList: boardList,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const divStyle = {
      margin: 50,
    };
    return (
      <div>
        <div style={divStyle}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Wrote time</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>{this.state.boardList}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default BoardForm;
