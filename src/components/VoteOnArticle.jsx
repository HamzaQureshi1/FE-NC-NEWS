import React, { Component } from "react";

class VoteOnArticle extends Component {
  state = {
    clicked: null
  };
  render() {
    return (
      <div>
        <button
          ref="button"
          type="button"
          onClick={this.handleChange}
          value={1}
          disabled={this.state.clicked === "1" ? true : false}
        >
          Upvote Article
        </button>
        <button
          ref="button1"
          type="button"
          onClick={this.handleChange1}
          value={-1}
          disabled={this.state.clicked === "-1" ? true : false}
        >
          Downvote Article
        </button>
      </div>
    );
  }
  handleChange = event => {
    // this.refs.button.setAttribute("disabled", "disabled");
    this.setState({ clicked: event.target.value });
    const updateVotesOnArticle = this.props.function;
    const { value } = event.target;
    updateVotesOnArticle(value);
  };
  handleChange1 = event => {
    this.setState({ clicked: event.target.value });
    this.refs.button1.setAttribute("disabled", "disabled");
    const updateVotesOnArticle = this.props.function;
    const { value } = event.target;
    updateVotesOnArticle(value);
  };
}

export default VoteOnArticle;
