import React, { Component } from "react";
import HOCComponent from "./HOCComponent";

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button onClick={this.props.click}>Click</button>
      </div>
    );
  }
}

export default HOCComponent(ClickCounter);
