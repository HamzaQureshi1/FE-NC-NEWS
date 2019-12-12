import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import ArticlesList from "./components/ArticlesList";
import ArticleID from "./components/ArticleID";
import PostComment from "./components/PostComment";
function App() {
  return (
    <div>
      <Header />
      <NavBar />

      <div>
        <Router>
          <ArticleID path="/articles/:article_id" />
          <ArticlesList path="/articles" />
          <ArticlesList path="/topics/:topic/articles" />
          <PostComment path="articles/:article_id/postacomment" />
        </Router>
      </div>
    </div>
  );
}

export default App;
