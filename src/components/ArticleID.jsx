import React, { Component } from "react";

import { getSingleArticle } from "./api";
import { changeVotesOnArticle } from "./api";
import IsLoading from "./IsLoading";
import VoteOnArticle from "./VoteOnArticle";
import ViewComments from "./ViewComments";
import Error from "./Error";
import "../index";

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
    // const mystyle = {
    //   color: "black",
    //   backgroundColor: "DodgerBlue",
    //   padding: "10px",
    //   fontFamily: "Arial"
    // };

    return (
      <div>
        <h1
        // style={mystyle}
        >
          ARTICLE
        </h1>
        <section className="section">
          <div className="box1">
            <ul className="box">
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
                Comment_Count:{article.comment_count}
                <br></br>
                Created_at:{article.created_at}
                <br></br>
              </li>
            </ul>
          </div>
        </section>
        <h1>
          <VoteOnArticle function={this.updateVotesOnArticle} />
        </h1>
        <div>
          {" "}
          <ViewComments article_id={this.props.article_id} />{" "}
        </div>
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
}

export default ArticleID;
