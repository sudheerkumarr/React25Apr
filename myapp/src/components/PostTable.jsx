import React, { Component } from "react";
import axios from "axios";

class PostTable extends Component {
  handleDelete = (postId) => {
    console.log(postId);
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="w-75 mx-auto mt-3">
        <button type="button" className="btn btn-primary float-end">
          Add Post
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Update</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {this.props.posts.map((p) => (
              <tr key={p.id}>
                <td>{p.userId}</td>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.body}</td>
                <td>
                  <button type="button" className="btn btn-secondary">
                    Update
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PostTable;
