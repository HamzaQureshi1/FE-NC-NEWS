import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Layout from "../Layout";

class VoteOnArticle extends Component {
  state = {
    clicked: null,
  };
  render() {
    return (
      <Layout>
        <div>
          <Button
            variant="primary"
            ref="button"
            type="button"
            onClick={this.handleChange}
            value={1}
            disabled={this.state.clicked === "1" ? true : false}
          >
            Upvote Article
          </Button>{" "}
          <Button
            variant="primary"
            ref="button1"
            type="button"
            onClick={this.handleChange}
            value={-1}
            disabled={this.state.clicked === "-1" ? true : false}
          >
            Downvote Article
          </Button>
        </div>
      </Layout>
    );
  }
  handleChange = (event) => {
    // this.refs.button.setAttribute("disabled", "disabled");
    this.setState({ clicked: event.target.value });
    const updateVotesOnArticle = this.props.function;
    const { value } = event.target;
    updateVotesOnArticle(value);
  };
  // handleChange1 = event => {
  //   this.setState({ clicked: event.target.value });
  //   this.refs.button1.setAttribute("disabled", "disabled");
  //   const updateVotesOnArticle = this.props.function;
  //   const { value } = event.target;
  //   updateVotesOnArticle(value);
  // };
}

export default VoteOnArticle;
