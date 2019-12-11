import React from "react";

const PostComment = () => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Post a new comment
        <input
          type="text"
          // value={this.state.value}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

const handleSubmit = event => {
  console.log(event);
};

const handleChange = () => {
  console.log("changed");
};

export default PostComment;


//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("A name was submitted: " + this.state.value);
//     event.preventDefault();
//
// }
