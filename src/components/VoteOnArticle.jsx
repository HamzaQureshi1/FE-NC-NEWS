import React, { Component } from "react";

class VoteOnArticle extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.handleChange} value={1}>
          Upvote Article
        </button>
        <button type="button" onClick={this.handleChange} value={-1}>
          Downvote Article
        </button>
      </div>
    );
  }
  handleChange = event => {
    const updateVotesOnArticle = this.props.function;
    const { value } = event.target;
    updateVotesOnArticle(value);
  };
}

export default VoteOnArticle;
