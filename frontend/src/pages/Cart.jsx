import { useState } from 'react';

const initialCart = [
  { id: 1, name: 'Product 1', price: 10, quantity: 1 },
  { id: 2, name: 'Product 2', price: 20, quantity: 2 },
];

function Cart({ cart, setCart }) {
  const calculateTotal = () => {
    if (!cart || cart.length === 0) return '0.00'; // Fallback for empty or invalid cart
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleBuy = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Add items to proceed.');
    } else {
      alert('Thank you for your purchase!');
      setCart([]); // Clear the cart after purchase
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>
                {item.name} - ${item.price} x {item.quantity}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h2 className="text-xl font-bold mt-6">Total: ${calculateTotal()}</h2>
      <button
        onClick={handleBuy}
        className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Buy
      </button>
    </div>
  );
}

export default Cart;