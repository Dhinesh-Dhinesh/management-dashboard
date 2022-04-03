import React from 'react';
import './App.css';


export default function Resister() {
  return (
    <div className='container'>
      <h1 className='center'>Register</h1>
      <div className='center'>
        <input placeholder="Username" />
      </div>
      <div className='center'>
        <input placeholder="Password" />
      </div>
      <div className='center'>
        <button>Submit</button>
      </div>
    </div>
  );
}
