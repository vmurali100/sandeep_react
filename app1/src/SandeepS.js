import React, { Component } from "react";

export default class SandeepS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: users
    };
    console.log(this.state);
  }

  deleteUser = i => {
    console.log(i);

    this.state.data.splice(i, 1);
    this.setState({ data: this.state.data });
  };
  render() {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              {Object.keys(this.state.data[0]).map(propperty => {
                return <th key={propperty}>{propperty}</th>;
              })}
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map((obj, i) => {
              console.log(i);
              return (
                <tr key={i}>
                  {Object.keys(obj).map(key => {
                    return <td key={key}>{obj[key]}</td>;
                  })}
                  <td>
                    <button>Edit</button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.deleteUser(i);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

let users = [
  {
    fname: "Shannon",
    lname: "Sidaway",
    tel: "(378)032-8852",
    address: "268 Adipiscing Ct",
    city: "Hartford",
    state: "MD",
    zip: 50899
  },
  {
    fname: "Leslie",
    lname: "Nacita",
    tel: "(751)547-6361",
    address: "3570 Lacus Ln",
    city: "Brookville",
    state: "TN",
    zip: 90097
  },
  {
    fname: "Regine",
    lname: "Skublics",
    tel: "(663)716-2412",
    address: "3065 Pulvinar Ave",
    city: "Ashburn",
    state: "DC",
    zip: 12576
  }
];
