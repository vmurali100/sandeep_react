import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser, deleteUser, updateUser } from "./actions";
class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      index: null,
      isEdit: null
    };
  }

  addUser = () => {
    let newuser = {
      fname: this.state.fname,
      lname: this.state.lname
    };
    this.props.createUser(newuser);
    this.clearForm();
  };

  clearForm = () => {
    this.setState({ fname: "", lname: "" });
  };
  editUser = (user, i) => {
    console.log(user);
    this.setState({
      fname: user.fname,
      lname: user.lname,
      index: i,
      isEdit: true
    });
  };
  updateUser = () => {
    let userInfo = {
      user: {
        fname: this.state.fname,
        lname: this.state.lname
      },
      index: this.state.index
    };
    this.props.updateUser(userInfo);
    this.clearForm();
    this.setState({ isEdit: false });
  };
  render() {
    const { fname, lname } = this.state;
    const users = this.props.users;
    return (
      <div>
        <div className="signup-form">
          <form method="post">
            <h2>Add User</h2>
            <p className="hint-text">
              Create your account. It's free and only takes a minute.
            </p>
            <div className="form-group">
              <div className="row">
                <div className="col-xs-6">
                  <input
                    type="text"
                    className="form-control"
                    name="fname"
                    placeholder="First Name"
                    value={fname}
                    onChange={e => {
                      this.setState({ fname: e.target.value });
                    }}
                  />
                </div>
                <div className="col-xs-6">
                  <input
                    type="text"
                    className="form-control"
                    name="lname"
                    placeholder="Last Name"
                    value={lname}
                    onChange={e => {
                      this.setState({ lname: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
            {/* <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={email}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="state"
                placeholder="State"
                value={state}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="city"
                placeholder="City"
                value={city}
                onChange={e => {
                  this.handleChange(e);
                }}
              />
            </div> */}

            <div className="form-group">
              {!this.state.isEdit && (
                <button
                  type="button"
                  className="btn btn-success btn-lg btn-block"
                  onClick={this.addUser}
                >
                  Add Now
                </button>
              )}
              {this.state.isEdit && (
                <button
                  type="button"
                  className="btn btn-warning btn-lg btn-block"
                  onClick={this.updateUser}
                >
                  Update Now
                </button>
              )}
            </div>
          </form>
        </div>
        <table id="mytable" className="table table-bordred table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {users.map((user, i) => {
              return (
                <tr key={i}>
                  {Object.keys(user).map((prop, index) => {
                    return <td key={index}>{user[prop]}</td>;
                  })}
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        this.editUser(user, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.deleteUser(i);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state
  };
}
export default connect(
  mapStateToProps,
  { createUser, deleteUser, updateUser }
)(User);

let userInfo = {
  fname: "",
  lname: ""
};
