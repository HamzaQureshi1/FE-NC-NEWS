import React, { Component } from "react";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";

class SortBy extends Component {
  state = {
    sort_by: "created_at",
  };

  render() {
    // console.log(this.state.sort_by);
    return (
      <div>
        <select
          className="btn1"
          value={this.state.sort_by}
          name="sort_by"
          onChange={this.handleChange}
        >
          <option value="created_at">Created at</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comment count</option>
        </select>
      </div>
    );
  }

  componentDidM;
  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    const fetchArticles = this.props.function;

    this.setState({ [name]: value });
    fetchArticles(value);
  };

  // handleSubmit = sort_by => {
  //   const fetchArticles = this.props.function;
  //   fetchArticles(this.state.sort_by);
  // };
}

export default SortBy;
