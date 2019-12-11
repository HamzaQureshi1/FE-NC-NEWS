import React, { Component } from "react";
import { getArticles } from "./api";
import { Link } from "@reach/router";
import SortBy from "./SortBy";
import IsLoading from "./IsLoading";
import ViewComments from "./ViewComments";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at"
  };

  render() {
    if (this.state.isLoading) {
      return <IsLoading />;
    }
    return (
      <div>
        <SortBy function={this.fetchArticles} />
        <br></br> ARTICLES
        <ul>
          {this.state.articles.map(article => {
            return (
              <li key={article.article_id}>
                Author:{article.author} <br></br>
                Created at:{article.created_at} <br></br>
                Title: {article.title} <br></br>
                Topic:{article.topic} <br></br>
                Comment_count:{article.comment_count}
                <br></br>
                Votes:{article.votes}
                <br></br>
                <ViewComments />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  fetchArticles = sort_by => {
    const { topic } = this.props;

    getArticles(topic, sort_by).then(response => {
      this.setState({ articles: response, isLoading: false, sort_by: sort_by });
    });
  };
  componentDidMount() {
    const { topic } = this.props;
    this.fetchArticles();
  }
  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    if (prevProps.topic !== topic) {
      this.fetchArticles();
    }
  }
}

export default ArticlesList;
