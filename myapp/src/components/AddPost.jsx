import React, { Component } from "react";
import axios from "axios";

class AddPost extends Component {
  state = {
    post: {
      userId: "",
      id: "",
      title: "",
      body: "",
    },
  };
  handleChange = (event) => {
    // console.log("handleChange");
    // console.log(event);
    // console.log(event.target.name); //return name of the field
    // console.log(event.target.value); //return value entered by the user
    const newPost = { ...this.state.post };
    newPost[event.target.name] = event.target.value;
    this.setState({ post: newPost });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state.post)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div
        style={{ marginLeft: "auto", marginRight: "auto" }}
        className="w-50 border p-3 mt-3"
      >
        <h1>Add Post Page</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label float-start">
              User Id
            </label>
            <input
              type="number"
              className="form-control"
              id="userId"
              aria-describedby="emailHelp"
              value={this.state.post.userId}
              name="userId"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="id" className="form-label float-start">
              Id
            </label>
            <input
              type="number"
              className="form-control"
              id="id"
              value={this.state.post.id}
              name="id"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label float-start">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={this.state.post.title}
              name="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label float-start">
              Body
            </label>
            <input
              type="text"
              className="form-control"
              id="body"
              value={this.state.post.body}
              name="body"
              onChange={this.handleChange}
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPost;
