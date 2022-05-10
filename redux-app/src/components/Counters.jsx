// Class Component
import React, { Component } from "react";

class Counters extends Component {
  state = {
    count: 0,
    stepValue: 1,
  };

  increment = () => {
    //this.state.count=+1;
    // modify state value
    //this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + parseInt(this.state.stepValue) });
  };

  decrement = () => {
    // decrement counter value by 1
    //this.setState({ count: this.state.count - 1 });
    this.setState({ count: this.state.count - parseInt(this.state.stepValue) });
  };
  handleChange = (event) => {
    this.setState({ stepValue: event.target.value });
  };

  render() {
    return (
      <div className="w-75 mx-auto">
        <p className="fs-4 mt-3" data-testid="title">
          Counter Page
        </p>

        <button className="btn btn-primary me-2" onClick={this.decrement}>
          Decrement
        </button>
        <p className="fs-3" data-testid="counter">
          {this.state.count}
        </p>

        <button
          className="btn btn-secondary ms-2"
          onClick={this.increment}
          data-testid="increment"
        >
          Increment
        </button>
        <form>
          <div>
            <label className="form-label">
              Enter step value
              <input
                id="standard-basic"
                type="number"
                value={this.state.stepValue}
                onChange={this.handleChange}
                className="form-control"
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Counters;
