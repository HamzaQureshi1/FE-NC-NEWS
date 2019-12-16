import React, { Component } from "react";

class IsLoggedIn extends Component {
  state = {
    IsLoggedIn: "jessjelly"
  };
  render() {
    return <div> user:{this.state.IsLoggedIn}</div>;
  }
}

export default IsLoggedIn;
