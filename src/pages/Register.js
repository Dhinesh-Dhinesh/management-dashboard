import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

export default function Resister() {

  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(prevInput => ({
      ...prevInput,
      [name]: value
    }));
  }

  const sendRequest = async () => {
    const res = await axios.post('http://localhost:4000/api/signup', {
      name: input.name,
      email: input.email,
      password: input.password,
    }).catch(err => console.error(err));

    const data = await res.data;

    return data;
  }

  const signUp = () => {
    if (input.password !== input.confirmPassword) {
      alert('Password and Confirm Password is not same');
      return;
    }

    sendRequest().then(data => {
      if(data.success) {
        alert('Successfully Registered');
        window.location.href = '/login';
      }
    });
  }


  return (
    <div className='container'>
      <div className='center_box'>
        <div className='box_register'>
          <h1 className='center title'>Register</h1>
          <div className='top_fix'>
            <div className='txt'>
              <h3>Name:</h3>
            </div>
            <div className='center'>

              <input className='inputs_register' name="name" placeholder="Enter your name"
                onChange={handleChange} value={input.name}/>
            </div>
            <div className='txt'>
              <h3>Email:</h3>
            </div>
            <div className='center'>
              <input className='inputs_register' name="email" placeholder="Enter your email"
                onChange={handleChange} value={input.email} />
            </div>
            <div className='txt'>
              <h3>Password:</h3>
            </div>
            <div className='center'>
              <input className='inputs_register' type="password" name="password" 
              placeholder="New password" onChange={handleChange} value={input.password} />
            </div>
            <div className='txt'>
              <h3>Confirm Password:</h3>
            </div>
            <div className='center'>
              <input className='inputs_register' type="password" name="confirmPassword"
               placeholder="Re-enter Password" onChange={handleChange} value={input.confirmPassword} />
            </div>
            <div className='center btn_fix_register'>
              <button className='btn-hover' onClick={signUp}>Sign Up</button>
            </div>
            <div className='center footer_txt_register txt'>
              <p>Already have an account? <a href='/'>Login</a></p>
            </div>
            <hr className='horizontal_line'></hr>
          </div>
        </div>
      </div>
    </div>
  );
}
