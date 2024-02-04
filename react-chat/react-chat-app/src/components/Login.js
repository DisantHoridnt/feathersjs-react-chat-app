import React, { useState } from 'react';
import client from './feathersClient';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Attempting to log in with', email, password); // Log the attempt
    try {
      const response = await client.authenticate({
        strategy: 'local',
        email,
        password,
      });
      console.log('Login successful', response); // Log the successful response
      onLogin(); // Invoke the callback function to signal a successful login
    } catch (error) {
      console.error('Login error', error); // Log any errors
      setError(error.message); // Set any authentication errors to be displayed
    }
  };

  const handleSignup = async () => {
    console.log('Attempting to sign up with', email, password); // Log the attempt
    try {
      const user = await client.service('users').create({ email, password });
      console.log('Signup successful', user); // Log the created user

      const response = await client.authenticate({
        strategy: 'local',
        email,
        password,
      });
      console.log('Authentication after signup successful', response); // Log the successful response
      onLogin(); // Invoke the onLogin callback
    } catch (error) {
      console.error('Signup or authentication error', error); // Log any errors
      setError(error.message); // Set the error message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-md p-8 space-y-4">
        {error && <div className="p-4 text-red-200 bg-red-700 rounded-lg">{error}</div>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
            <input type="email" id="email" placeholder="Email" className="mt-1 px-3 py-2 bg-gray-700 text-white w-full rounded-md border border-gray-600 focus:ring-blue-500 focus:border-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-300">Password</label>
            <input type="password" id="password" placeholder="Password" className="mt-1 px-3 py-2 bg-gray-700 text-white w-full rounded-md border border-gray-600 focus:ring-blue-500 focus:border-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow">Login</button>
        </form>
        <button className="w-full py-2 px-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-md shadow" onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
};

export default Login;
