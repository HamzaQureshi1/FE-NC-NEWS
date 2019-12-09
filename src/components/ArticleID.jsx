import React, { Component } from "react";
import { getSingleArticle } from "./api";

class ArticleID extends Component {
  state = {
    article: []
  };
  render() {
    const { article_id } = this.props;
    const { article } = this.state;
    console.log(article);
    return (
      <div>
        <ul>
          <li key={article.article_id}>
            {article.articleID}
            <br></br>
            {article.title}
            <br></br>
            {article.body}
            <br></br>
            {article.votes} <br></br>
            {article.topic}<br></br>
            {article.author}<br></br>
            {article.created_at}<br></br>
            {article.comment_count}
          </li>
        </ul>
      </div>

      // <div>
      //   <ul>
      //     {this.state.article.map(a => {
      //       return <li>{a.article_id}</li>;
      //     })}
      //   </ul>
      // </div>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    getSingleArticle(article_id).then(response => {
      this.setState({ article: response });
    });
  }
}

export default ArticleID;
