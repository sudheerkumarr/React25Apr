import React, { Component } from "react";
import axios from "axios";
import Joi from "joi-browser";
import { withRouter } from "./withRouter";

// this.props.history.push('/home') - react-router-dom v5.x
class AddPost extends Component {
  state = {
    post: {
      userId: "",
      id: "",
      title: "",
      body: "",
    },
    errors: {},
    errMsg: "",
  };
  // schema
  schema = {
    userId: Joi.number().integer().required(),
    id: Joi.number().integer().required(),
    title: Joi.string().min(3).required(),
    body: Joi.string().required(),
  };
  // validate post with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.post, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
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
    // update state with errors after validation
    this.setState({ errors: this.validate() });
    console.log(this.state.errors);
    if (this.state.errors) return;
    // Send post request to rest api
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state.post)
      .then((res) => {
        console.log(res.data);
        alert("Post added successfully!");
        this.props.navigate("/posts");
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errMsg: err.response.data.message });
      });
  };
  render() {
    const { errors, errMsg } = this.state;
    return (
      <div
        style={{ marginLeft: "auto", marginRight: "auto" }}
        className="w-50 border p-3 mt-3"
      >
        <h1>Add Post</h1>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
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
            {errors && <small className="text-danger">{errors.userId}</small>}
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
            {errors && <small className="text-danger">{errors.id}</small>}
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
            {errors && <small className="text-danger">{errors.title}</small>}
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
            {errors && <small className="text-danger">{errors.body}</small>}
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

export default withRouter(AddPost);
