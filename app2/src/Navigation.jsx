import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log(this.props);
  }
  navigate = val => {
    this.props.history.push(val);
  };
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
        <button
          onClick={() => {
            this.navigate("/");
          }}
        >
          GO to Home
        </button>
        <button
          onClick={() => {
            this.navigate("/murali");
          }}
        >
          GO to Murali
        </button>
        <button
          onClick={() => {
            this.navigate("/sandeep");
          }}
        >
          GO to Sandeep
        </button>
      </div>
    );
  }
}

export default withRouter(Navigation);
