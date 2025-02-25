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
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-96 bg-white p-6 rounded-lg shadow-lg border border-gray-400">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm text-center">{error.data?.message || "Login failed"}</p>}

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className=" px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
            </div>
          </div>

          <button
            type="submit"
            className=" bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold shadow-md transition-all"
          >
            {isLoading ? "Logging in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;


// -----------------------------------------------------------------------------




// import { useState } from 'react';
// import { useLoginUserMutation } from '../store/loginSlice';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { registerUser } from '../store/authSlice';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [error, setError] = useState(null);
//   const [loginUserApi, { isLoading }] = useLoginUserMutation();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const credentials = { email, password };
//       const response = await loginUserApi(credentials).unwrap();
//       dispatch(registerUser({ token: response.token, user: response.user }));
//       navigate('/');
//     } catch (error) {
//       setError('Invalid login, please try again!');
//       console.error('Invalid login, please try again!', error);
//     }
//   };

//   return (
//     <>
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit" disabled={isLoading} className="btn btn-primary">
//           {isLoading ? 'Loading...' : 'Login'}
//         </button>
//       </form>
//     </>
//   );
// };

// export default Login;