// Class Component
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 10,
  };

  increment = () => {
    //this.state.count=+1;
    // modify state value
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    // decrement counter value by 1
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-outline-secondary me-2"
          onClick={this.decrement}
        >
          Decrement
        </button>
        {this.state.count}
        <button
          type="button"
          className="btn btn-outline-success ms-2"
          onClick={this.increment}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
