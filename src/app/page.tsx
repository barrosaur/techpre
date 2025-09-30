'use client';
import React, { useState } from "react";
import { Greeting, Signup, HeaderSign } from '@/components/components'
import Image from "next/image";
import './page.css'


export default function Home() {
  const imgSize = 400;

  const [signup, setSignup] = useState(false)

  return (
    <div className="parent">
      <HeaderSign/>
      <div className="child-1">
        <div className="left">
          {/* <Signup/> */}

          {signup ? (<Signup/>): (<Greeting onSignUp={() => setSignup(true)}/> )}
        </div>

        <div className="right">
          <Image
            src="/images/logo.svg"
            height={imgSize}
            width={imgSize}
            alt="Logo"
          />
          <h1>MindForge Solutions</h1>
          <p className="quote">Anticipate. Learn. Excel. Create</p>
        </div>
      </div>
    </div>
  );
}