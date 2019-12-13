import React, { Component } from "react";

import { getSingleArticle } from "./api";
import { changeVotesOnArticle } from "./api";
// import { getComments } from "./api";
import IsLoading from "./IsLoading";
import VoteOnArticle from "./VoteOnArticle";
import ViewComments from "./ViewComments";
import Error from "./Error";
import "../App.css";

class ArticleID extends Component {
  state = {
    article: [],
    isLoading: true,
    comments: [],
    err: null
  };
  render() {
    const { article_id } = this.props;
    const { article } = this.state;
    const { votes } = this.state.article;

    if (this.state.err) return <Error err={this.state.err} />;
    if (this.state.isLoading) return <IsLoading />;
    return (
      <div>
        <h1 align="center">ARTICLE</h1>
        <div className="center">
          <ul>
            <li key={article.article_id}>
              Article_id:{article.article_id}
              <br></br>
              Title: {article.title}
              <br></br>
              Body:{article.body}
              <br></br>
              Votes:{article.votes} <br></br>
              Topic:{article.topic}
              <br></br>
              Author:{article.author}
              <br></br>
              Created_at:{article.created_at}
              <br></br>
              Comment_Count:{article.comment_count}
            </li>
          </ul>
        </div>
        <h1 align="center">
          <VoteOnArticle function={this.updateVotesOnArticle} />
        </h1>

        <ViewComments article_id={this.props.article_id} />
      </div>
    );
  }

  updateVotesOnArticle = value => {
    const { article_id } = this.props;
    changeVotesOnArticle(article_id, value);
    this.setState(function(prevState) {
      const newVotes = prevState.article.votes + +value;
      const article = { ...prevState.article };
      article.votes = newVotes;
      return { article };
    });
  };

  // fetchComments = () => {
  //   const { article_id } = this.props;
  //   getComments(article_id).then(response => {this.setState({
  //     comments
  //   })});
  // };

  componentDidMount() {
    const { article_id } = this.props;
    getSingleArticle(article_id)
      .then(response => {
        this.setState({ article: response, isLoading: false });
      })
      .catch(({ response }) =>
        this.setState({
          err: { status: response.status, msg: response.data.msg },
          isLoading: false
        })
      );
  }

  // updateVotesOnArticle = value => {
  //   const { article_id } = this.props;
  //   increaseVotesOnArticle(article_id, value).then(response => {
  //     console.log(response);
  //     this.setState(function(prevState) {
  //       return prevState.article.votes + response.votes;
  //     });
  //   });
  // };
}

export default ArticleID;
