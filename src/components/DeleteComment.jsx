import React, { Component } from "react";

class DeleteComment extends Component {
  render() {
    const comment_id = this.props.comment_id;
    // if()
    // const deleteAComment = this.props.delete;
    return (
      <button ref="button" type="button" onClick={this.handleChange}>
        Delete Comment
      </button>
    );
  }

  handleChange = () => {
    const deleteAComment = this.props.delete;
    const comment_id = this.props.comment_id;
    const author = this.props.author;
    // console.log(comment_id);
    deleteAComment(comment_id, author);
  };
}

export default DeleteComment;
