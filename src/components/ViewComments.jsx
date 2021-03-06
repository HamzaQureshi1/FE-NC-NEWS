import React, { Component } from "react";
// import { Link } from "@reach/router";
import Error from "./Error";
import IsLoading from "./IsLoading";
import Moment from "react-moment";

import {
  getComments,
  changeVotesOnComment,
  postAComment,
  removeComment
} from "./api";
import VoteOnComments from "./VoteOnComments";
import PostComment from "./PostComment";
import DeleteComment from "./DeleteComment";
import "../index";

class ViewComments extends Component {
  state = {
    comments: [],
    username: "jessjelly",
    err: null
  };
  render() {
    // const mystyle = {
    //   color: "black",
    //   backgroundColor: "DodgerBlue",
    //   padding: "10px",
    //   fontFamily: "Arial"
    // };
    const { article_id } = this.props;
    if (this.state.err) return <Error err={this.state.err} />;
    if (this.state.username) {
      return (
        <div
          // style={mystyle}
          className="section"
        >
          <h1>COMMENTS</h1>
          <PostComment
            article_id={this.props.article_id}
            function={this.addAComment}
            username={this.state.username}
          />

          <ul className="box1">
            {this.state.comments.map(comment => {
              return (
                <div>
                  <li className="box" key={comment.comment_id}>
                    Author:{comment.author}
                    <br></br>
                    Body:{comment.body}
                    <br></br>
                    Created at:
                    <Moment>
                      {comment.created_at}
                    </Moment>
                      <br></br>
                    Comment id: {comment.comment_id}
                    <VoteOnComments
                      votes={comment.votes}
                      function={this.updateVotesOnComment}
                      comment_id={comment.comment_id}
                    />
                    {comment.author === this.state.username ? (
                      <DeleteComment
                        author={comment.author}
                        comment_id={comment.comment_id}
                        username={this.state.username}
                        delete={this.deleteAComment}
                      />
                    ) : null}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <ul>
            {this.state.comments.map(comment => {
              return (
                <li key={comment.comment_id}>
                  Author:{comment.author}
                  <br></br>
                  Body:{comment.body}
                  <br></br>
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
        </div>
      );
    }
  }
  addAComment = (article_id, body, username) => {
    postAComment(article_id, body, username).then(response => {
      this.setState(state => {
        return { comments: [response, ...state.comments] };
      });
    });
  };

  deleteAComment = (comment_id, author) => {
    removeComment(comment_id).then(response => {
      this.setState(state => {
        return {
          comments: state.comments.filter(
            comment => comment.comment_id !== comment_id
          )
        };
      });
    });
    // }
  };

  updateVotesOnComment(value, comment_id) {
    changeVotesOnComment(value, comment_id);
  }

  // changeVotesOnComment()

  componentDidMount() {
    const { article_id } = this.props;
    getComments(article_id)
      .then(response => {
        this.setState({ comments: response });
      })
      .catch(({ response }) =>
        this.setState({
          err: { status: response.status, msg: response.data.msg },
          isLoading: false
        })
      );
  }
}

export default ViewComments;
