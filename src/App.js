import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import ArticlesList from "./components/ArticlesList";
import ArticleID from "./components/ArticleID";
import PostComment from "./components/PostComment";
import Error from "./components/Error";
import ViewComments from "./components/ViewComments";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <NavBar />

      <div>
        <Router>
          <ArticlesList path="/" />
          <ArticleID path="/articles/:article_id" />
          <ArticlesList path="/articles" />
          <ArticlesList path="/topics/:topic/articles" />
          {/* <PostComment path="articles/:article_id/postacomment" /> */}
          <Error default err={{ status: 404, msg: "route not found" }} />
          <ViewComments path="articles/:article_id/comments" />
        </Router>
      </div>
    </div>
  );
}

export default App;
