import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        (item.id === 1) ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  

  return (
    <div>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.id} {item.title} {item.quantity}{" "}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>update</button>
    </div>
  );
}

export default App;
