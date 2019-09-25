import React, { Component } from "react";
import HOCComponent from "./HOCComponent";

class HoverCount extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button onMouseOver={this.props.hover}>Click</button>
      </div>
    );
  }
}

export default HOCComponent(HoverCount);
