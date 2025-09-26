import React from "react";
import Greeting from "@/components/Greeting";
import HeaderSign from "@/components/HeaderSign";
import './page.css'

import Signup from "@/components/Signup";

export default function Home() {
  return (
    <div className="parent">
      <HeaderSign/>
      <div className="child-1">
        <div className="left">
          {/* <Greeting/> */}
          <Signup/>
        </div>

        <div className="right">
          
        </div>
      </div>
    </div>
  );
}