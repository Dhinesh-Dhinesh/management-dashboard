import React from 'react';
import './App.css';


export default function Resister() {
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

              <input className='inputs_register' placeholder="Enter your name" />
            </div>
            <div className='txt'>
              <h3>Email:</h3>
            </div>
            <div className='center'>
              <input className='inputs_register' placeholder="Enter your email" />
            </div>
            <div className='txt'>
              <h3>Password:</h3>
            </div>
            <div className='center'>
              <input className='inputs_register'  type="password" placeholder="New password" />
            </div>
            <div className='txt'>
              <h3>Confirm Password:</h3>
            </div>
            <div className='center'>
              <input className='inputs_register' type="password" placeholder="Re-enter Password" />
            </div>
            <div className='center btn_fix_register'>
              <button className='btn-hover'>Sign Up</button>
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
