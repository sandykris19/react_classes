import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <>
        <div className="container">
          Label:
          <input
            type="text"
            onChange={(e) => {
              this.props.tchange = e.target.value;
            }}
          />
        </div>
      </>
    );
  }
}

export default Todo;
