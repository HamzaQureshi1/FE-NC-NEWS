import React, { Component } from "react";

class VoteOnComments extends Component {
  state = {
    votes: this.props.votes,
    clicked: 1
  };

  render() {
    const votes = this.state.votes;
    return (
      <div>
        <div>
          Votes:{votes}
          <button
            ref="button"
            type="button"
            onClick={this.handleChange}
            value={1}
            disabled={this.state.clicked === "1" ? true : false}
          >
            Upvote Comment
          </button>
          <button
            ref="button1"
            type="button"
            onClick={this.handleChange}
            value={-1}
            disabled={this.state.clicked === "-1" ? true : false}
          >
            Downvote Comment
          </button>
        </div>
      </div>
    );
  }
  handleChange = event => {
    // this.state.clicked = true;
    // if (this.state.clicked === true)
    //   this.refs.button.setAttribute("disabled", "disabled");
    // this.refs.button.setAttribute("enabled", "enabled");

    // this.state.clicked = false;
    this.setState({ clicked: event.target.value });
    
    const updateVotesOnComment = this.props.function;
    const comment_id = this.props.comment_id;
    const { value } = event.target;
    const votes = this.state.votes;
    this.setState({ votes: this.state.votes + +value });
    // this.setState({ clicked: "-1" });
    updateVotesOnComment(value, comment_id);
  };
  //   handleChange1 = event => {
  //     // this.refs.button1.setAttribute("disabled", "disabled");
  //     this.setState({ clicked: event.target.value });
  //     const updateVotesOnComment = this.props.function;
  //     const comment_id = this.props.comment_id;
  //     const { value } = event.target;
  //     const votes = this.state.votes;
  //     this.setState({ votes: this.state.votes + +value });

  //     updateVotesOnComment(value, comment_id);
  //   };
}

export default VoteOnComments;
