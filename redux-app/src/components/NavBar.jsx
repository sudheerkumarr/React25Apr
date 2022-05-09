import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

// class component with constructor
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/home">
              MyApp
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/posts">
                    Posts
                  </NavLink>
                </li>
                {this.props.user.login && this.props.user.role == "admin" && (
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/users"
                    >
                      Users
                    </NavLink>
                  </li>
                )}
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto">
                {this.props.user.login ? (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/logout">
                      Logout
                    </NavLink>
                  </li>
                ) : (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                )}

                <li className="nav-item">
                  <NavLink className="nav-link" to="/cart">
                    Cart
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
  return {
    user: state.login.user,
  };
};
export default connect(mapStateToProps)(NavBar);
