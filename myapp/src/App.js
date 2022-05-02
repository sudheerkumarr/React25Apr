import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Cart />
    </div>
  );
}

export default App;
