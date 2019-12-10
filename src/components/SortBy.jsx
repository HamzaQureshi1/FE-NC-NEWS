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
        <DropdownButton id="dropdown-basic-button" title="sort_by">
          <Dropdown.Item onClick={this.handleChange}>Created at</Dropdown.Item>
          <Dropdown.Item onClick={this.handleChange}>Votes</Dropdown.Item>
          <Dropdown.Item onClick={this.handleChange}>
            Comment count
          </Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
  handleChange = event => {
    const fetchArticles = this.props.function;
    const { sort_by } = this.state;
    this.setState({ sortBy: event.target.value });
    fetchArticles(sort_by);
  };
  // componentDidUpdate(prevProps, prevState) {
  //   const { sort_by } = this.state;
  //   if (prevState.sort_by !== this.state.sort_by) {
  //     sortArticleBy(sort_by).then(response => {
  //       this.setState({
  //         articles: response
  //       });
  //     });
  //   }
  // }
}

export default SortBy;
