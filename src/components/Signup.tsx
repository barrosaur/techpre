'use client'
import React, { useState } from 'react';
import '@/styles/Signup.css';
import Image from 'next/image';

const Signup = () => {
  const imgSize = 30;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("")
  const [seePass, setSeePass] = useState(false)

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setConfirmPass("");
  }

  // PREVENT COPY PASTING METHODS

  return (
    <div className="signup">
      <div className="head-text">
        <h1>Sign Up with Just —</h1>
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

        <div className="wrapper">
          <label htmlFor="">Confirm Password</label>
          <div className="view-pw conf-pw-blue">
            <input 
              type={seePass ? "text" : "password"}
              placeholder='Confirm password'
              className='conf-pw-blue' 
              value={confirmPass}
              onChange={e => setConfirmPass(e.target.value)}
              required
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

        {
          (confirmPass !== password) && (
            <p className="red-msg">Passwords do not match.</p>
          )
        }

        <div className="signup-btn-container">
          <button onClick={clearInputs}>Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup