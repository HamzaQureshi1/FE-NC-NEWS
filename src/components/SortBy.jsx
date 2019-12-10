import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

class SortBy extends Component {
  state = {
    articles: [],
    sort_by: ""
  };
  render() {
    return (
      <div>
        {/* <DropdownButton id="dropdown-basic-button" title="sort_by">
          <Dropdown.Item onClick={this.handleChange} value="created_at">
            Created at
          </Dropdown.Item>
          <Dropdown.Item onClick={this.handleChange} value="votes">
            Votes
          </Dropdown.Item>
          <Dropdown.Item onClick={this.handleChange} value="comment_count">
            Comment count
          </Dropdown.Item>
        </DropdownButton> */}
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
