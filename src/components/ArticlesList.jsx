import React, { Component } from "react";
import getArticles from "./api";

class ArticlesList extends Component {
  state = {
    articles: []
  };
  render() {
    const { topic } = this.props;
    // console.log(topic, "topic inside render");
    return (
      <div>
        ARTICLES
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
                Article_id:{article.article_id}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    const { topic } = this.props;
    getArticles(topic).then(response => {
      this.setState({ articles: response });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    if (prevProps.topic !== topic) {
      getArticles(topic).then(response => {
        this.setState({ articles: response });
      });
    }
  }
}

export default ArticlesList;
