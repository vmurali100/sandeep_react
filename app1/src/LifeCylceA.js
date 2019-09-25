import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export default class LifeCylceA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hi: "Hi from My StateS",
      value: 10
    };
    console.log("constructor called");
  }

  static getDerivedStateFromProps(state, props) {
    console.log(state);
    console.log(props);
    console.log("getDerivedStateFromProps Triggered");
    return {};
  }
  changeValue = () => {
    this.setState({ value: 20 });
  };
  render() {
    console.log("Render Method Triggered");

    return (
      <div>
        <h1>I am From LifeCycleA</h1>
        <LifeCycleB val={this.state.value} />
        <button onClick={this.changeValue}>ChangeValue</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount is called");
  }
}
