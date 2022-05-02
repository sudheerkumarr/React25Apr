// class component
// imrc - import React/Component
// cc - class component
import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        <form className="w-50 mx-auto border p-3 mt-5">
          <div className="mb-3">
            <label forHtml="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label forHtml="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
