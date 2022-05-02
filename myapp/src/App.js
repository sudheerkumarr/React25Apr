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
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Posts />
      {/* <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Redirect path="/home" to="/" />
      </Switch> */}
    </div>
  );
}

export default App;
