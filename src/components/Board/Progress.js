import React, { Component } from "react";

class Progress extends Component {
  render() {
    return (
      <>
        <div className="container">
          <p>Progress list : {this.props.plist}</p>
        </div>
      </>
    );
  }
}

export default Progress;
