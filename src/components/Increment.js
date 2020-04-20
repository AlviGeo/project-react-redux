import React, { useEffect, useState, Component } from "react";
import { Button } from "reactstrap";

class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
    };
  }

  Increment = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  };
  Decrease = () => {
    this.setState({
      clicks: this.state.clicks - 1,
    });
  };
  ToggleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <h1>button</h1>
        <div>
          <button onClick={this.Increment}>+</button>
          <button onClick={this.Decrease}>-</button>
          <button onClick={this.ToggleClick}> </button>
        </div>
      </div>
    );
  }
}

export default Increment;
