import React from "react";


class WindowSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = { windowsize: window.innerWidth };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({ windowsize: window.innerWidth });
    });
  }

  componentDidUpdate() {
    document.title = `size: ${this.state.windowsize}`;
  }

  componentWillUnmount() {
    window.removeEventListener("resize");
  }

  render() {
    return (
      <>
        <h4>Window size is: {this.state.windowsize}</h4>
      </>
    );
  }
}

export { WindowSize };
