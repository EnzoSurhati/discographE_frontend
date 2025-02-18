// import React, { useState } from 'react';
// import {useRegisterMutation} from './accountSlice'
// import {useNavigate} from 'react-router-dom'



// function Registration() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
// //   const [ registerUserApi, { isLoading }] = useRegisterUserMutation();
// //   const navigate = useNavigate();
//   const [error, setError] = useState(null);


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newUserInfo = { firstName, lastName, email, password };
//     //   const response = await registerUserApi(newUserInfo).unwrap();
//     //   console.log (response)
//     //   dispatch(registerUser({ token: response.token, user: response.user }));
//     //   navigate('/');
//     } catch (error) {
//       setError('Invalid registration, please try again!');
//       console.error('Invalid registration, please try again!', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign up Here</h2>
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
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {/* <button type="submit" disabled={isLoading} className="btn btn-primary"> */}
//         <button type="submit" className="btn btn-primary">
//           {/* {isLoading ? "Loading..." : "Sign Up"} */}
//           Sign Up!
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Registration;

import React, { useState } from 'react';
import { useRegisterMutation } from './accountSlice';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const [registerUserApi, { isLoading }] = useRegisterMutation();  // Un-commented & Used

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUserInfo = { firstname, lastname, email, password, username };
      const response = await registerUserApi(newUserInfo).unwrap();  // Now Calling API
      console.log("User Registered:", response);
      localStorage.setItem('token', response.token);
      navigate('/login');  // Redirect to login page after success
    } catch (error) {
      setError('Invalid registration, please try again!');
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 border border-gray-300">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Create an Account</h2>

        {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">First Name</label>
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md shadow-md transition-all"
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;