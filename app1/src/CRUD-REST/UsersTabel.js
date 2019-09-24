import React, { Component } from "react";

export default class UsersTabel extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              {Object.keys(sampleObj).map((p, i) => {
                return <th key={i}>{p}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user, i) => {
              return (
                <tr key={i}>
                  {Object.keys(user).map((pr, ind) => {
                    return <td key={ind}>{user[pr]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
let sampleObj = {
  firstName: "",
  lastName: "",
  id: ""
};
