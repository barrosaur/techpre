'use client';
import React, { useState } from "react";
import { Greeting, Signup, HeaderSign, Login } from '@/components/components'
import Image from "next/image";
import './page.css'


export default function Home() {
  const imgSize = 400;

  const [signup, setSignup] = useState(0)
  const [signin, setSignin] = useState(false)

  const [mode, setMode] = useState<"greeting" | "signup" | "login">("greeting");

  return (
    <div className="parent">
      <HeaderSign/>
      <div className="child-1">
        <div className="left">
          {mode === "greeting" && (
            <Greeting
              onSignUp={() => setMode("signup")}
              onSignIn={() => setMode("login")}
            />
          )}

          {mode === "signup" && (
            <Signup />
          )}

          {mode === "login" && (
            <Login/>
          )}
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