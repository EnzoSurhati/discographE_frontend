import React, { useState } from 'react';
import { useLoginMutation } from './accountSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, error }] = useLoginMutation();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      const response = await login({ email, password }).unwrap(); 
      console.log("Login Successful:", response);
      localStorage.setItem('token', response.token);
      navigate('/account');
    } catch (err) {
      console.error("Login Failed:", err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-96 bg-white p-6 rounded-lg shadow-2xl border border-gray-300">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">Login</h2>
        {error && <p className="text-red-500 text-center">{error.data?.message || "Login failed"}</p>}

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-red-600 font-bold hover:underline">Forgot Password?</a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all"
          >
            {isLoading ? "Logging in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;