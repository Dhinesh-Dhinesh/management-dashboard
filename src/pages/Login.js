import React from 'react';
import './App.css';


export default function LogIn() {
  return (
    <div className='container'>
      <div className='center_box'>
        <div className='box'>
          <h1 className='center title'>Login</h1>
          <div className='top_fix'>
            <div className='txt'>
              <h3>Username:</h3>
            </div>
            <div className='center'>

              <input className='inputs' placeholder="Username" />
            </div>
            <div className='txt'>
              <h3>Password:</h3>
            </div>
            <div className='center'>
              <input className='inputs' type='password' placeholder="Password" />
            </div>
            <div className='center btn_fix'>
              <button className='btn-hover'>Login</button>
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
