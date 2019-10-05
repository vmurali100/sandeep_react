import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, updateUser, deleteUser } from "./actions";
class CRUD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      index: null
    };
  }
  addUserDetails = () => {
    this.props.addUser({ fname: this.state.fname });
    this.clearForm();
  };
  clearForm = () => {
    this.setState({ fname: "" });
  };

  ediUser = (user, i) => {
    this.setState({ fname: user.fname, index: i });
  };
  updateUser = () => {
    let info = {
      obj: { fname: this.state.fname },
      index: this.state.index
    };
    this.props.updateUser(info);
    this.clearForm();
  };
  render() {
    return (
      <div>
        <h2>Welcome to CRUD APP</h2>
        <form>
          <input
            type="text"
            value={this.state.fname}
            onChange={e => {
              this.setState({ fname: e.target.value });
            }}
          />
        </form>
        <button
          onClick={() => {
            this.addUserDetails();
          }}
        >
          Add
        </button>
        <button onClick={this.updateUser}>Update</button>
        <ul>
          {this.props.users.map((user, i) => {
            return (
              <li key={i}>
                {user.fname}
                <button
                  onClick={() => {
                    this.ediUser(user, i);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    this.props.deleteUser(i);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    users: state
  };
}
export default connect(
  mapStateToProps,
  { addUser, updateUser, deleteUser }
)(CRUD);
