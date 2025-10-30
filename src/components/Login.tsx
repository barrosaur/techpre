'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import '@/styles/Signup.css';

const Login = () => {
  const imgSize = 30;
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seePass, setSeePass] = useState(false);

  const secureInput = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
  }

  return (
    <div className="login-container">
      <div className="head-text">
        <h1>Login to Just —</h1>
        <h1>Just Study</h1>
      </div>
      <hr />

      <form action="">
        <div className="wrapper">
          <label htmlFor="">Email</label>
          <input 
            type="email"
            placeholder='Enter your email' 
            className='email-grn'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            onCopy={secureInput}
            onCut={secureInput}
            onPaste={secureInput}
          />
        </div>

        <div className="wrapper">
          <label htmlFor="">Password</label>
          <div className="view-pw pw-prpl">
            <input 
              type={seePass ? "text" : "password"}
              placeholder='Enter your password' 
              className='pw-prpl'
              value={password}  
              onChange={e => setPassword(e.target.value)}
              required
              onCopy={secureInput}
              onCut={secureInput}
              onPaste={secureInput}
            />
            <button className='see-pass-btn' onClick={() => setSeePass(!seePass)}>
              <Image
                src={seePass ? "/images/eye-closed.svg" : "/images/eye-open.svg"}
                height={imgSize}
                width={imgSize}
                alt={seePass ? "Close password" : 'See Password'}
                className='see-pass'
              />
            </button>
          </div>
        </div>

        <div className="signup-btn-container">
          <button>Login</button>
        </div>

        {/* Add logic if password or email is invalid account */}
      </form>
    </div>
  )
}

export default Login