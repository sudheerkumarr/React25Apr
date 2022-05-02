import React, { Component } from "react";

class PostTable extends Component {
  render() {
    return (
      <table className="table table-striped w-75 mx-auto">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {this.props.posts.map((p) => (
            <tr key={p.id}>
              <td>{p.userId}</td>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default PostTable;
