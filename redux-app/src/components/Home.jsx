import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        Home Page
        {console.log(this.props.history)}
      </div>
    );
  }
}

export default Home;
