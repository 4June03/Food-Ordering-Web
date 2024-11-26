import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import RestaurantDetail from "./components/Restaurant/RestaurantDetail";
import CartItem from "./components/Cart/CartItem";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="Ap">
      <section></section>
      <Navbar></Navbar>
      {/* <Home></Home> */}
      {/* <RestaurantDetail /> */}
      <Cart />
    </div>
  );
}

export default App;
