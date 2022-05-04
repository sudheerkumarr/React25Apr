import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Register from "./components/Register";
import Home from "./components/Home";
import Posts from "./components/Posts";
import NotFound from "./components/NotFound";
import AddPost from "./components/AddPost";
import { Routes, Route, Navigate } from "react-router-dom";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
