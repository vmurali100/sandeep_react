import React, { Component } from "react";
const HOCComponent = InputComponent => {
  class Sandeep extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 10
      };
    }

    hoverCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
    clickCount = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <InputComponent
          hover={this.hoverCount}
          click={this.clickCount}
          count={this.state.count}
        />
      );
    }
  }

  return Sandeep;
};

export default HOCComponent;
