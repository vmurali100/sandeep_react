import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log(this.props);
  }
  //   goToHome = () => {
  //     this.props.history.push("/");
  //   };
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/murali">Murali</Link>
          </li>
          <li>
            <Link to="/sandeep">sandeep</Link>
          </li>
        </ul>
        <button onClick={this.goToHome}>GO to Home</button>
      </div>
    );
  }
}
