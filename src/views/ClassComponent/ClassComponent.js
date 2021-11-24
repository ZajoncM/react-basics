import React from "react";
import PropTypes from "prop-types";

class ClassComponent extends React.Component {
  state = {
    interval: 0,
    time: 0,
  };

  consoleInterval = () => {
    console.log(`ClassComponent: ${this.state.time}`);
  };

  componentDidMount() {
    const myInterval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
      this.consoleInterval();
    }, 1000);
    this.setState({ interval: myInterval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <p>ClassComponent: {this.state.time}</p>
        <p>Root: {this.props.rootTime}</p>
      </div>
    );
  }
}

ClassComponent.propTypes = {
  rootTime: PropTypes.number,
};

export default ClassComponent;
