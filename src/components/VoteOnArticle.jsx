import React, { Component } from "react";

class VoteOnArticle extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.handleChange}>
          Upvote Article
        </button>
      </div>
    );
  }
  handleChange = event => {
    const updateVotesOnArticle = this.props.function;
    
    updateVotesOnArticle();
  };
}

export default VoteOnArticle;
