import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CartWithProduct = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, img: '', name: "Apple", quantity: 2, price: 200},
    ]);
  
    const addToCart = (product) => {
      const existingItem = cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        setCartItems(cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
    };
  
    const removeFromCart = (product) => {
      const existingItem = cartItems.find((item) => item.id === product.id);
      if (existingItem.quantity > 1) {
        setCartItems(cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item)));
      } else {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
      }
    };
  
    const getTotalPrice = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
  
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Total Cart Product</h2>
          {cartItems.length === 0 && <p>Your cart is empty.</p>}
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                <div>
                  <p className="text-lg font-bold">{item.name}</p>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button onClick={() => removeFromCart(item)} className="bg-gray-200 text-gray-600 py-1 px-2 rounded-md mr-2">-</button>
                <span className="text-lg font-bold">{item.quantity}</span>
                <button onClick={() => addToCart(item)} className="bg-gray-200 text-gray-600 py-1 px-2 rounded-md ml-2">+</button>
              </div>
            </div>
          ))}
          <div className="border-t border-gray-300 mt-4 pt-4">
            <p className="text-lg font-bold">Total: ${getTotalPrice()}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full mt-4">Checkout</button>
            <Link to="/" className="text-blue-500 hover:underline block mt-4 text-center">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default CartWithProduct;