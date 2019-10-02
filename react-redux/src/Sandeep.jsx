import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCount } from "./actions";
class Sandeep extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        Count From State : {this.props.count}
        <br />
        <button
          onClick={() => {
            this.props.updateCount();
          }}
        >
          Update Count
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    count: state.count
  };
}
export default connect(
  mapStateToProps,
  { updateCount }
)(Sandeep);
