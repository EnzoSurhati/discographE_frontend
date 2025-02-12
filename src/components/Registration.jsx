import React, { useState } from 'react';
import {useRegisterMutation} from './accountSlice'
import {useNavigate} from 'react-router-dom'



function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
//   const [ registerUserApi, { isLoading }] = useRegisterUserMutation();
//   const navigate = useNavigate();
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUserInfo = { firstName, lastName, email, password };
    //   const response = await registerUserApi(newUserInfo).unwrap();
    //   console.log (response)
    //   dispatch(registerUser({ token: response.token, user: response.user }));
    //   navigate('/');
    } catch (error) {
      setError('Invalid registration, please try again!');
      console.error('Invalid registration, please try again!', error);
    }
  };

  return (
    <div>
      <h2>Sign up Here</h2>
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
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <button type="submit" disabled={isLoading} className="btn btn-primary"> */}
        <button type="submit" className="btn btn-primary">
          {/* {isLoading ? "Loading..." : "Sign Up"} */}
          Sign Up!
        </button>
      </form>
    </div>
  );
}

export default Registration;
