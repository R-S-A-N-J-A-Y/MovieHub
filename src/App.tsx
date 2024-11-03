import { useState } from "react";
import NavBar from "./components/Cart/NavBar";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState(["product1", "product2"]);

  return <div>
    <NavBar cartCount = {cart.length}/>
    <Cart cartItems = {cart} onClear={() => setCart([])}/>
  </div>;
}

export default App;
