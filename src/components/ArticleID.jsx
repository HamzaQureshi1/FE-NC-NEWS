import React, { Component } from "react";
import { getSingleArticle } from "./api";
import { increaseVotesOnArticle } from "./api";
import IsLoading from "./IsLoading";
import VoteOnArticle from "./VoteOnArticle";

class ArticleID extends Component {
  state = {
    article: [],
    isLoading: true
  };
  render() {
    const { article_id } = this.props;
    const { article } = this.state;
    const { votes } = this.state.article;

    if (this.state.isLoading) return <IsLoading />;
    return (
      <div>
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
        <VoteOnArticle function={this.updateVotesOnArticle} />
      </div>
    );
  }

  updateVotesOnArticle = value => {
    const { article_id } = this.props;
    increaseVotesOnArticle(article_id, value);
    this.setState(function(prevState) {
      const newVotes = prevState.article.votes + +value;
      const article = { ...prevState.article };
      article.votes = newVotes;
      return { article };
    });
  };

  componentDidMount() {
    const { article_id } = this.props;
    getSingleArticle(article_id).then(response => {
      this.setState({ article: response, isLoading: false });
    });
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
