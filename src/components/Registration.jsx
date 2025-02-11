
import React, { useState } from 'react';




const Registration = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  
  const handleSubmit = async(e,email,lastname,firstname,password) => {
    e.preventDefault();
    try {
        const addUser = await fetch("http://localhost.com:3000/api/register",{
            method:'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({email,lastname,firstname,password})
        });
        console.log(addUser)
    } catch (error) {
        
    }


    
  };

  return (
    <form onSubmit={(e)=>handleSubmit(e,email,lastName,firstName,password)}>
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
      <input placeholder='lastname'
        label="lastname"

        type="lastname"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />
<input placeholder='firstname'
        label="firstname"

        type="firstname"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}/>
     <button onClick={(e)=>handleSubmit(e,email,lastName,firstName,password)}>Register</button>
    </form>
  );
};

export default Registration;