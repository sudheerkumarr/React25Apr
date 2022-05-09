import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  // initialize component state
  const [post, setPost] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });

  // get post id from url
  const params = useParams();
  console.log(params);

  // Navigate
  const navigate = useNavigate();
  // send get request
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((res) => {
        console.log(res);
        setPost((post) => ({
          ...post,
          userId: res.data.userId,
          id: res.data.id,
          title: res.data.title,
          body: res.data.body,
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  //   const [count, setCount] = useState(0);
  //   setCount(10);

  const handleChange = (event) => {
    // event.target.name - name of the field
    // event.target.value - value entered in the field
    //setPost((prevState) => ({ ...prevState, userId: 10, id: 14, title:"title", body:"body" }));
    setPost((post) => ({ ...post, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, post)
      .then((res) => {
        console.log(res);
        alert("Updated post " + params.postId + " successfully!!");
        navigate("/posts");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-50 mx-auto border p-3 mt-3">
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

export default Update;
