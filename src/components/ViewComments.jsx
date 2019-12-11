import React, { Component } from "react";
import { getComments } from "./api";

class ViewComments extends Component {
  state = {
    comments: []
  };
  render() {
    const { article_id } = this.props;
    return (
      <div>
        <h1>COMMENTS</h1>
        <ul>
          {this.state.comments.map(comment => {
            return (
              <li key={comment.comment_id}>
                Author:{comment.author}
                <br></br>
                Body:{comment.body}
                <br></br>
                Votes: {comment.votes}
                <br></br>
                Created at:{comment.created_at}
                <br></br>
                Comment id: {comment.comment_id}
              </li>
            );
          })}
        </ul>
        ;
      </div>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    getComments(article_id).then(response => {
      this.setState({ comments: response });
    });
  }
}

export default ViewComments;
