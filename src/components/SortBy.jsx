import React, { Component } from "react";

class SortBy extends Component {
  // state = {
  //   articles: [],
  //   sort_by: ""
  // };
  render() {
    return (
      <div>
        <select>
          <option value="created_at" onClick={this.handleChange}>
            Created at
          </option>
          <option value="votes" onClick={this.handleChange}>
            Votes
          </option>
          <option value="comment_count" onClick={this.handleChange}>
            Comment count
          </option>
        </select>
      </div>
    );
  }
  handleChange = event => {
    const fetchArticles = this.props.function;
    const sort_by = event.target.value;
    fetchArticles(sort_by);
  };
}
export default SortBy;
