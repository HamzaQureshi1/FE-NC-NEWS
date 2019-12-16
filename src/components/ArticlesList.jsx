import React, { Component } from "react";
import { getArticles } from "./api";
import { Link } from "@reach/router";
import SortBy from "./SortBy";
import IsLoading from "./IsLoading";
import ViewComments from "./ViewComments";
import Error from "./Error";


class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    err: null
  };

  render() {
    if (this.state.isLoading) {
      return <IsLoading />;
    }
    if (this.state.err) return <Error err={this.state.err} />;
    return (
      <div >
        <SortBy function={this.fetchArticles} />
        <br></br>
        <ul>
          {this.state.articles.map(article => {
            return (
              <div>
                <li key={article.article_id}>
                  Author:{article.author} <br></br>
                  Created at:{article.created_at} <br></br>
                  Title: {article.title} <br></br>
                  Topic:{article.topic} <br></br>
                  Comment_count:{article.comment_count}
                  <br></br>
                  Votes:{article.votes}
                  <br></br>
                  <Link to={`/articles/${article.article_id}`}>
                    Article_id:{article.article_id}
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  fetchArticles = sort_by => {
    const { topic } = this.props;

    getArticles(topic, sort_by)
      .then(response => {
        this.setState({
          articles: response,
          isLoading: false,
          sort_by: sort_by
        });
      })
      .catch(({ response }) =>
        this.setState({
          err: { status: response.status, msg: response.data.msg },
          isLoading: false
        })
      );
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
