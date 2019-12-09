import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to ="/articles">ALL ARTICLES</Link> | 
        <br></br>
        TOPICS:
        <Link to ="/topics/cooking/articles">COOKING</Link> | 
        <Link to ="/topics/coding/articles">CODING</Link> | 
        <Link to ="/topics/football/articles">FOOTBALL</Link></nav>
    </div>
  );
};

export default NavBar;
