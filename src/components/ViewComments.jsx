import React, { Component } from "react";
// import { Link } from "@reach/router";
import { getComments, changeVotesOnComment, postAComment } from "./api";
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
        <PostComment
          article_id={this.props.article_id}
          function={this.addAComment}
        />
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
        {/* <Link to={`/articles/${article_id}/postacomment`}>Post a comment</Link> */}
      </div>
    );
  }
  addAComment = (article_id, body, username) => {
    postAComment(article_id, body, username).then(response => {
      this.setState({ comments: response });
    });
  };

  updateVotesOnComment(value, comment_id) {
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
