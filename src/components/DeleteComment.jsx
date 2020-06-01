import React, { Component } from "react";
import { Button } from "react-bootstrap";

class DeleteComment extends Component {
  render() {
    const comment_id = this.props.comment_id;

    return (
      <Button
        size="sm"
        variant="primary"
        ref="button"
        type="button"
        onClick={this.handleChange}
      >
        Delete Comment
      </Button>
    );
  }

  handleChange = () => {
    const deleteAComment = this.props.delete;
    const comment_id = this.props.comment_id;
    const author = this.props.author;

    deleteAComment(comment_id, author);
  };
}

export default DeleteComment;
