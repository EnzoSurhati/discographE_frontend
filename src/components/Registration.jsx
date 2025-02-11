import React, { useState } from 'react';
import {useRegisterMutation} from '../../discographE_frontend/src/components/accountSlice'
import {useNavigate} from 'react-router-dom'

function Registertration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [register, {isLoading, error}] = useRegisterMutation();
  const navigate = useNavigate();

  if(isLoading){
    return <p>Hold up...</p>
  }

  if(error){
    return <p>Already exists: {error.message}</p>
  }

  const handleRegister = async (email, password) => {
    console.log(email, password);
    const newUser = await register({email, password});
    console.log(newUser);
    if(newUser){
      const token = newUser.data.token;
      localStorage.setItem('token', token);
      navigate("/account");
    }
    
  }

  return (
  <>
  </>
  );
  }
export default Registertration;