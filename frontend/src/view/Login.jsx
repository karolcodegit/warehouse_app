import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Input from '../components/Input/Input';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-8">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Login</button>
        </form>
        <p className="mt-4 text-center">Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;