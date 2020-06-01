import React, { Component } from "react";
import { Badge } from "react-bootstrap";

class IsLoggedIn extends Component {
  state = {
    IsLoggedIn: "jessjelly",
  };
  render() {
    return (
      <div>
        <Badge pill variant="primary">
          user:{this.state.IsLoggedIn}
        </Badge>{" "}
      </div>
    );
  }
}

export default IsLoggedIn;
