import React, { Component } from "react";

export default class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("constructor called In B");
  }
  static getDerivedStateFromProps(state, props) {
    console.log("getDerivedStateFromProps Triggered B");
    return {};
  }
  render() {
    console.log("Render Method Triggered B");
    return <div>{this.props.val}</div>;
  }

  componentDidMount() {
    console.log("componentDidMount is called B");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate is called");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate is Triggered");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is triggered");
  }
}
