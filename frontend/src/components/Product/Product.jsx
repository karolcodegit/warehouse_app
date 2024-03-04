import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => (
  
  <Link to={`/products/${product._id}`} className='no-undeline'>
    <div className="bg-white shadow-md p-4 rounded">
      <div className="flex items-center">
        <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full mr-4">
          {/* Replace with an actual image or icon */}
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
          <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
          <p className="text-gray-600">{product.reviews} reviews</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-semibold text-gray-800">${product.price}</p>
      </div>
  </div>
  </Link>
);

export default Product;