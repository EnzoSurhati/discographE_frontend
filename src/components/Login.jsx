// import React, { useState } from 'react';
// import styled from 'styled-components';
// import {useLoginMutation} from './accountSlice'

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const [login, {isLoading, error}] = useLoginMutation();

//   if(isLoading){
//     return <p>Just Wait...</p>
//   }

//   if(error){
//     return <p>Error: {error.message}</p>
//   }

//   const handleLogin = async (email, password) => {
//     const isLoggedIn = await login({email, password})
//     console.log(isLoggedIn);
//     if(isLoggedIn){
//       const token = isLoggedIn.data.token;
//       localStorage.setItem('token', token);
//     }
//   }
  
// return (
//   <StyledWrapper className="flex justify-center items-center h-screen bg-gray-200">
//     <div className="form-container">
//       <p className="title">Login</p>
//       <form className="form" onSubmit={() => handleLogin(email, password)}>
//         <div className="input-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             name="username"
//             id="username"
//             value={email}
//             placeholder="Enter username here"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={password}
//             placeholder="Enter password here"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <div className="forgot">
//             <a rel="noopener noreferrer" href="#">
//               Forgot Password?
//             </a>
//           </div>
//         </div>
//         <button className="sign">Sign in</button>
//       </form>
//     </div>
//   </StyledWrapper>
// );
// };

// const StyledWrapper = styled.div`
//   .form-container {
//     width: 320px;
//     border-radius: 10px;
//     background-color: beige;
//     padding: 30px;
//     color: black;
//     border: 2px solid black;
//     box-shadow: 8px 8px 0px black;
//   }

//   .title {
//     text-align: center;
//     font-size: 24px;
//     line-height: 2rem;
//     font-weight: 900;
//     margin-bottom: 1rem;
//   }

//   .form {
//     margin-top: 1.5rem;
//     display: flex;
//     flex-direction: column;
//     gap: 1.5rem;
//   }

//   .input-group {
//     font-size: 0.875rem;
//     line-height: 1.25rem;
//   }

//   .input-group label {
//     display: block;
//     color: black;
//     font-weight: bold;
//     margin-bottom: 4px;
//   }

//   .input-group input {
//     width: 100%;
//     border-radius: 5px;
//     border: 2px solid black;
//     background-color: beige;
//     padding: 0.75rem 1rem;
//     color: black;
//     box-shadow: 4px 4px black;
//     font-size: 14px;
//     font-weight: bold;
//   }

//   .input-group input:focus {
//     border-color: #2d8cf0;
//     outline: none;
//   }

//   .forgot {
//     display: flex;
//     justify-content: flex-end;
//     font-size: 0.75rem;
//     line-height: 1rem;
//     color: black;
//     margin-top: 10px; /* Adjust this value as needed */
//   }

//   .forgot a {
//     text-decoration: none;
//     font-size: 14px;
//     color: black;
//   }

//   .forgot a:hover {
//     text-decoration: underline;
//   }

//   .sign {
//     display: block;
//     width: 100%;
//     background-color: beige;
//     padding: 0.75rem;
//     text-align: center;
//     color: black;
//     border: 2px solid black;
//     border-radius: 5px;
//     font-weight: 700;
//     box-shadow: 4px 4px black;
//     cursor: pointer;
//     transition: all 0.2s ease;
//   }

//   .sign:hover {
//     background-color: lightgray;
//     box-shadow: 6px 6px black, 0px 0px 10px rgba(0, 0, 0, 0.3);
//     transform: scale(1.05);
//   }
// `;

// export default Login;


// -----------------------------------------------------------------------------




import { useState } from 'react';
import { useLoginUserMutation } from '../store/loginSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../store/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loginUserApi, { isLoading }] = useLoginUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const credentials = { email, password };
      const response = await loginUserApi(credentials).unwrap();
      dispatch(registerUser({ token: response.token, user: response.user }));
      navigate('/');
    } catch (error) {
      setError('Invalid login, please try again!');
      console.error('Invalid login, please try again!', error);
    }
  };

  return (
    <>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={isLoading} className="btn btn-primary">
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </>
  );
};

export default Login;