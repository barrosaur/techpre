import React from 'react';
import '@/styles/Greeting.css';
import Link from "next/link";

const Greeting = () => {
  return (
    <div className="home-signin">
      <div className="title-text">
        <h1>Just —</h1>
        <h1>Just Study</h1>
      </div>

      <div className="methods">
        <button>Sign Up</button>
        <span>Already have an account? 
          <span className='signin'> Sign in</span>
        </span>
      </div>
    </div>
  )
}

export default Greeting