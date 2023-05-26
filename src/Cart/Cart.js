import React, { useState } from "react";

let cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  }
];

function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const removeItem = (index) => {
    // Create a copy of the cartElements array
    const updatedCart = [...cartElements];
    // Remove the item at the specified index
    updatedCart.splice(index, 1);
    // Update the cartElements array
    cartElements = updatedCart;
  };

  return (
    <div>
      <button onClick={toggleCart}>Cart</button>
      {isOpen && (
        <div className="cart-items">
          {cartElements.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.imageUrl} alt={item.title} />
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
