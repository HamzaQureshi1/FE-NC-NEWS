import { postAComment } from "./api";
import React, { Component } from "react";

class PostComment extends Component {
  state = {
    body: "",
    username: this.props.username
  };
  render() {
    const addAComment = this.props.function;

    const article_id = this.props.article_id;
    // console.log(article_id);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Post a new comment
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  handleChange = event => {
    const words = event.target.value;
    const username = this.props.username;
    this.setState({ body: words, username: username });
  };

  handleSubmit = event => {
    const addAComment = this.props.function;
    event.preventDefault();
    const { article_id } = this.props;
    const { body } = this.state;
    const { username } = this.state;

    addAComment(article_id, body, username);
  };
}

export default PostComment;
