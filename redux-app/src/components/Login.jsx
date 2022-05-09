// class component
// imrc - import React/Component
// cc - class component
import axios from "axios";
import React, { Component } from "react";
import { loginAction, logoutAction } from "../actions/loginactions";
import { withRouter } from "./withRouter";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    user: {
      email: "",
      password: "",
      role: "",
    },
  };
  handleChange = (event) => {
    const newUser = { ...this.state.user };
    newUser[event.target.name] = event.target.value;
    this.setState({ user: newUser });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(this.state.user);
    // axios
    //   .post("http://localhost:8080/login", this.state.user)
    //   .then((res) => {
    //     console.log(res);
    //     alert("User Logged in Successfully!");
    //     this.props.navigate("/home");
    //   })
    //   .catch(err=>console.log(err));
    // dispatch login action
    this.props.loginAction(this.state.user);
    alert("User Logged in Successfully!");
    this.props.navigate("/home");
  };
  render() {
    const { email, password, role } = this.state.user;
    return (
      <div>
        <form
          className="w-50 mx-auto border p-3 mt-5"
          onSubmit={this.handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={this.handleChange}
              value={email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={this.handleChange}
              value={password}
            />
          </div>

          <select
            className="form-select"
            aria-label="Default select example"
            name="role"
            onChange={this.handleChange}
            value={role}
          >
            <option selected>Select Role</option>
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

//export default withRouter(Login);

// funtion to get updates from store
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    loginAction,
    logoutAction,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(withRouter(Login));
