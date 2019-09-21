import React, { Component } from "react";

export default class SandeepS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: users,
      editUser: sampleObj,
      index: null
    };
  }

  deleteUser = i => {
    this.state.data.splice(i, 1);
    this.setState({ data: this.state.data });
  };
  updateUser = () => {
    console.log(this.state.editUser);
    this.state.data[this.state.index] = this.state.editUser;
    this.setState({ data: this.state.data });
  };

  handleChange = event => {
    this.state.editUser[event.target.name] = event.target.value;
    this.setState({ editUser: this.state.editUser });
  };
  editUser = i => {
    this.setState({ editUser: this.state.data[i], index: i });
  };
  render() {
    const {
      fname,
      lname,
      tel,
      address,
      city,
      zip,
      state
    } = this.state.editUser;
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
                    <button
                      onClick={() => {
                        this.editUser(i);
                      }}
                    >
                      Edit
                    </button>
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
        <div>
          <br />
          <form>
            <label>First Name</label>
            <input
              name="fname"
              value={fname}
              onChange={event => {
                this.handleChange(event);
              }}
            />
            <br />
            <label>Last Name</label>
            <input
              name="lname"
              value={lname}
              onChange={event => {
                this.handleChange(event);
              }}
            />
            <br />
            <label>Tel</label>
            <input
              name="tel"
              value={tel}
              onChange={event => {
                this.handleChange(event);
              }}
            />
            <br />
            <label>Address</label>
            <input
              name="address"
              value={address}
              onChange={event => {
                this.handleChange(event);
              }}
            />
            <br />
            <label>City</label>
            <input
              name="city"
              value={city}
              onChange={event => {
                this.handleChange(event);
              }}
            />
            <br />
            <label>State</label>
            <input
              name="state"
              value={state}
              onChange={event => {
                this.handleChange(event);
              }}
            />
            <br />
            <label>zip</label>
            <input
              name="zip"
              value={zip}
              onChange={event => {
                this.handleChange(event);
              }}
            />
            <br />
            <br />
            <button onClick={this.updateUser} type="button">
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}

let sampleObj = {
  fname: "",
  lname: "",
  tel: "",
  address: "",
  city: "",
  state: "",
  zip: ""
};

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
