import React from 'react';
import './App.css';


export default function LogIn() {
  return (
    <div className='container'>
      <h1 className='center'>LogIn</h1>
      <div className='center'>
        <input placeholder="Username" />
      </div>
      <div className='center'>
        <input placeholder="Password" onChange={(e)=>console.log(e.target.value)} />
      </div>
      <div className='center'>
        <button>Submit</button>
      </div>
    </div>
  );
}
