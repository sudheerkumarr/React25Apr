import React, { Component, useState } from "react";
import axios from "axios";

class Users extends Component {
  state = {
    users: [],
  };
  // Life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log("render method");
    return (
      <div>
        <h1>Users Page</h1>
        <table className="table w-75 mx-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((u) => (
              <tr>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>{u.address.city}</td>
                <td>{u.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
