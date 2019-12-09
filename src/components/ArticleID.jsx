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
