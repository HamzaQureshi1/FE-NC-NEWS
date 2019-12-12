import React, { Component } from "react";

class VoteOnComments extends Component {
  state = {
    votes: this.props.votes
  };

  render() {
    const votes = this.state.votes;
    return (
      <div>
        <div>
          Votes:{votes}
          <button type="button" onClick={this.handleChange} value={1}>
            Upvote Comment
          </button>
          <button type="button" onClick={this.handleChange} value={-1}>
            Downvote Comment
          </button>
        </div>
      </div>
    );
  }
  handleChange = event => {
    const updateVotesOnComment = this.props.function;
    const comment_id = this.props.comment_id;
    const { value } = event.target;
    const votes = this.state.votes;
    this.setState({ votes: this.state.votes + +value });

    updateVotesOnComment(value, comment_id);
  };
}

export default VoteOnComments;
