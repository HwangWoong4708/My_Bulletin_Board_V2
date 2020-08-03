import React from "react";
import CKEditor from "ckeditor4-react";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
import { Form, Button } from "react-bootstrap";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };
class BoardWrite extends React.Component {
  state = {
    data: "",
  }; //ckeditor, 글 내용 초기 값 빈칸.
  state = {
    data: "",
  };

  componentDidMount() {
    if (this.props.location.query !== undefined) {
      this.boardTitle.value = this.props.location.query.title;
    }
  }

  componentWillMount() {
    if (this.props.location.query !== undefined) {
      this.setState({
        data: this.props.location.query.content,
      });
    }
  }

  writeBoard = () => {
    let url;
    let send_param;

    const boardTitle = this.boardTitle.value;
    const boardContent = this.state.data;

    if (boardTitle === undefined || boardTitle === "") {
      alert("글 제목을 입력 해주세요.");
      boardTitle.focus();
      return;
    } else if (boardContent === undefined || boardContent === "") {
      alert("글 내용을 입력 해주세요.");
      boardContent.focus();
    }

    if (this.props.location.query !== undefined) {
      url = "http://localhost:8080/board/update";
      send_param = {
        headers,
        _id: this.props.location.query._id,
        title: boardTitle,
        content: boardContent,
      };
    } else {
      url = "http://localhost:8080/board/write";
      send_param = {
        headers,
        _id: $.cookie("login_id"),
        title: boardTitle,
        content: boardContent,
      };
    }

    axios
      .post(url, send_param)
      //정상 수행
      .then(returnData => {
        if (returnData.data.message) {
          alert(returnData.data.message);
          window.location.href = "/";
        } else {
          alert("글쓰기 실패");
        }
      })
      //에러
      .catch(err => {
        console.log(err);
      });
  };

  onEditorChange = evt => {
    this.setState({
      data: evt.editor.getData(),
    });
  };

  render() {
    const divStyle = {
      margin: 50,
    };
    const titleStyle = {
      marginBottom: 5,
    };
    const buttonStyle = {
      marginTop: 5,
    };
    return (
      <div style={divStyle} className="App">
        <h2>Writing</h2>
        <Form.Control
          type="text"
          style={titleStyle}
          placeholder="Title"
          ref={ref => (this.boardTitle = ref)}
        />
        <CKEditor
          data={this.state.data}
          onChange={this.onEditorChange}
        ></CKEditor>
        <Button style={buttonStyle} onClick={this.writeBoard} block>
          Save
        </Button>
      </div>
    );
  }
}

export default BoardWrite;
