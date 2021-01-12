import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, max: 10 };
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h1 className="mt-5">
          {this.props.name ?? "Default"}: <span>{this.state.count}</span>
        </h1>
        <button
          className="badge-warning badge"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
      </>
    );
  }
}

export default Counter;
