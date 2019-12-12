import React, { Component, Link } from "react";
import { getComments, changeVotesOnComment } from "./api";
import VoteOnComments from "./VoteOnComments";
import PostComment from "./PostComment";

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
                {/* Votes: {comment.votes} */}
                {/* <br></br> */}
                Created at:{comment.created_at}
                <br></br>
                Comment id: {comment.comment_id}
                <VoteOnComments
                  votes={comment.votes}
                  function={this.updateVotesOnComment}
                  comment_id={comment.comment_id}
                />
              </li>
            );
          })}
        </ul>
        <PostComment />
      </div>
    );
  }
  updateVotesOnComment(value, comment_id) {
    console.log(value, comment_id);
    changeVotesOnComment(value, comment_id);
    
  }
  componentDidMount() {
    const { article_id } = this.props;
    getComments(article_id).then(response => {
      this.setState({ comments: response });
    });
  }
}

export default ViewComments;
