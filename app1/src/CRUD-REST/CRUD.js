import React, { Component } from "react";
import axios from "axios";
import UsersTabel from "./UsersTabel";

export default class CRUD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
    console.log("Constructor Called");
  }

  render() {
    console.log("render Called");

    return (
      <div>
        <h1>Welcome To CRUD</h1>
        <UsersTabel {...this.state} />
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount Called");
    axios.get("http://localhost:3000/users").then(res => {
      console.log(res.data);
      this.setState({ users: res.data });
    });

    // fetch("http://localhost:3000/users")
    //   .then(response => response.json())
    //   .then(resp => this.setState({ users: resp.data }));
  }
}
