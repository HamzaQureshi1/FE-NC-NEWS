import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import ArticlesList from "./components/ArticlesList";
import ArticleID from "./components/ArticleID";

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
        </Router>
      </div>
    </div>
  );
}

export default App;
