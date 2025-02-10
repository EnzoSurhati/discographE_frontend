
import React, { useState } from 'react';




const Registration = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = async(e,email,password) => {
    e.preventDefault();
    try {
        const addUser = await fetch("http://localhost.com:3000/api/register",{
            method:'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({email,password})
        });
        console.log(addUser)
    } catch (error) {
        
    }


    
  };

  return (
    <form onSubmit={(e)=>handleSubmit(e,email,password)}>
      <input placeholder='Email'
        label="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input placeholder='Password'
        label="Password"

        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
     <button onClick={(e)=>handleSubmit(e,email,password)}>Register</button>
    </form>
  );
};

export default Registration;