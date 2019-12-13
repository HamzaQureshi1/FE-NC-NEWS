import React from "react";
import { Link } from "@reach/router";
import "../App.css";

const NavBar = () => {
  return (
    <middler>
      <nav>
        <Link to="/articles">ALL ARTICLES</Link> |
        <Link to="/topics/cooking/articles">COOKING</Link> |
        <Link to="/topics/coding/articles">CODING</Link> |
        <Link to="/topics/football/articles">FOOTBALL</Link>
      </nav>
    </middler>
  );
};

export default NavBar;
