import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Register from "./components/Register";
import Home from "./components/Home";
import Posts from "./components/Posts";
import NotFound from "./components/NotFound";
import { Routes, Route, Navigate } from "react-router-dom";
import Users from "./components/Users";
import AddPost from "./components/AddPost";
import Update from "./components/Update";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

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
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/details/:id" element={<ProductDetails />} />
        <Route path="/post/update/:postId" element={<Update />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
