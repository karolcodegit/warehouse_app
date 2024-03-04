import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CartShipping = () => {
    const [cartItems, setCartItems] = useState([]);
  
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
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
          {cartItems.length === 0 && <p>Your cart is empty.</p>}
          {cartItems.map((item) => (
            <div className="bg-gray-100 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Nike Girls Shoe</h2>
              <button className="text-sm font-semibold text-gray-600 hover:text-gray-800 focus:outline-none">
                CONTINUE TO SHOPPING
              </button>
            </div>
            <div className="flex items-center mb-4">
              <p className="text-xl font-semibold text-gray-800">Total Cart Products (4)</p>
              <div className="ml-4">
                <button className="text-sm font-semibold text-gray-600 hover:text-gray-800 focus:outline-none">
                  QUANTITY
                </button>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-600"
                >
                  <path
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18C6.477 4 2 7.477 2 12s4.477 8 10 8 10-3.523 10-8S17.523 4 12 4zm0 14a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-800">CHECKOUT</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <p className="text-xl font-semibold text-gray-800">SUBTOTAL: $456</p>
            </div>
            <div className="flex items-center">
              <p className="text-xl font-semibold text-gray-800">TOTAL: $567</p>
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
  
  export default CartShipping;