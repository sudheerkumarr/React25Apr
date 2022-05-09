import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
        <Link
          to="/post/add"
          type="button"
          className="btn btn-primary float-end"
        >
          Add Post
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              {this.props.user.login && this.props.user.role == "admin" && (
                <th>Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {this.props.posts.map((p) => (
              <tr key={p.id}>
                <td>{p.userId}</td>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.body}</td>
                {this.props.user.login && this.props.user.role == "admin" && (
                  <td>
                    <Link to={`/post/update/${p.id}`}>
                      <i className="bi bi-pencil-square me-3"></i>
                    </Link>

                    <i
                      className="bi bi-trash"
                      type="button"
                      onClick={() => this.handleDelete(p.id)}
                    ></i>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
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
export default connect(mapStateToProps)(PostTable);
