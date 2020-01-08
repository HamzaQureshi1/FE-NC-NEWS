import React, { Component } from "react";
import { getArticles } from "./api";
import { Link } from "@reach/router";
import SortBy from "./SortBy";
import IsLoading from "./IsLoading";
import ViewComments from "./ViewComments";
import Error from "./Error";
import ArticleCard from "./ArticleCard";
import Moment from "react-moment";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    err: null
  };

  render() {
    // const mystyle = {
    //   color: "black",
    //   backgroundColor: "dark-grey",
    //   padding: "10px"
    // };
    if (this.state.isLoading) {
      return <IsLoading />;
    }
    if (this.state.err) return <Error err={this.state.err} />;
    return (
      <div>
        <SortBy function={this.fetchArticles} />
        <div className="box2">
          {/* <br></br> */}
          {/* <ArticleCard articles={this.state.articles} /> */}
          <ul className="box1">
            {this.state.articles.map(article => {
              return (
                <div>
                  <li className="box" key={article.article_id}>
                    Author:{article.author} <br></br>
                    Created at:<Moment>{article.created_at}</Moment> <br></br>
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
      </div>
    );
  }

  fetchArticles = sort_by => {
    const { topic } = this.props;
    console.log("fetchings");
    getArticles(topic, sort_by)
      .then(response => {
        this.setState({
          articles: response,
          isLoading: false,
          sort_by: sort_by,
          err: null
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
    // console.log(this.state.sort_by);

    if (prevProps.topic !== topic) {
      this.fetchArticles();
    }
  }
}

export default ArticlesList;
