import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick = () => {
    this.setState({ date: new Date() });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <div>
          <h3>It is {this.state.date.toLocaleTimeString()}</h3>
        </div>
      </>
    );
  }
}

export { Clock };


