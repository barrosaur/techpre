import React from 'react';
import '@/styles/Greeting.css';

interface Greeting {
  onSignUp: () => void
}

const Greeting = ({ onSignUp } : Greeting) => {
  return (
    <div className="home-signin">
      <div className="title-text">
        <h1>Just —</h1>
        <h1>Just Study</h1>
      </div>

      <div className="methods">
        <button onClick={onSignUp}>Sign Up</button>
        <span>Already have an account? 
          <span className='signin'> Sign in</span>
        </span>
      </div>
    </div>
  )
}

export default Greeting