import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router, Link } from "@reach/router";
import ArticlesList from "./components/ArticlesList";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Router>
        <ArticlesList path="/" />
        <ArticlesList path="/topics/:topic/articles" />
      </Router>
    </div>
  );
}

export default App;
