import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

export default function LogIn() {

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(prevInput => ({
      ...prevInput,
      [name]: value
    }));
  }

  const options = {
    headers: { "content-type": "application/json" }
  }

  const sendRequest = async () => {
    const res = await axios.post('http://localhost:4000/api/login', {
      email: input.email,
      password: input.password
    }, options).catch(err => console.error(err));

    const data = await res.data;
    return data;
  }

  const login = () => {
    sendRequest().then(data => {
      if (data.success) {
        window.location.href = '/';
        console.log(data.user);
      }
    });
  }

  return (
    <div className='container'>
      <div className='center_box'>
        <div className='box'>
          <h1 className='center title'>Login</h1>
          <div className='top_fix'>
            <div className='txt'>
              <h3>Email:</h3>
            </div>
            <div className='center'>

              <input className='inputs' placeholder="Email" name="email" onChange={handleChange} />
            </div>
            <div className='txt'>
              <h3>Password:</h3>
            </div>
            <div className='center'>
              <input className='inputs' type='password' name="password" placeholder="Password"
                onChange={handleChange} />
            </div>
            <div className='center btn_fix'>
              <button className='btn-hover' onClick={login}>Login</button>
            </div>
            <div className='center footer_txt txt'>
              <p>Don't have an account? <a href='/register'>Register</a></p>
            </div>
            <div className='hr_top'>
              <hr className='horizontal_line'></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
