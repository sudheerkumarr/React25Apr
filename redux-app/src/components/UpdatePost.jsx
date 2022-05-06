import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdatePost = () => {
  const params = useParams();
  console.log(params);

  // initialize the state
  const [post, setPost] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });

  useEffect(() => {
    console.log("Inside useEffect");
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
        // setUserId(res.data.userId);
        // setId(res.data.id);
        // setTitle(res.data.title);
        // setBody(res.data.body);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (event) => {
    console.log("handleChange");
    setPost((post) => ({
      ...post,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, post)
      .then((res) => {
        console.log(res.data);
        alert("Updated Post successfully!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{ marginLeft: "auto", marginRight: "auto" }}
      className="w-50 border p-3 mt-3"
    >
      <h1>Update Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label float-start">
            User Id
          </label>
          <input
            type="number"
            className="form-control"
            id="userId"
            aria-describedby="emailHelp"
            value={post.userId}
            name="userId"
            onChange={handleChange}
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
            value={post.id}
            name="id"
            onChange={handleChange}
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
            value={post.title}
            name="title"
            onChange={handleChange}
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
            value={post.body}
            name="body"
            onChange={handleChange}
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
};

export default UpdatePost;
