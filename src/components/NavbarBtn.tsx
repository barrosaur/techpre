'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import '@/styles/Navbar.css'

interface NavBtnProp {
  label: string,
  iconDefault: string,
  iconHover: string
}

const NavbarBtn = ({label, iconDefault, iconHover} : NavBtnProp) => {
  const [hover, setHover] = useState(false);
  const imgSize = 20;

  return (
    <button
      className='nav-btn'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

      <Image
        src={hover ? iconHover : iconDefault}
        width={imgSize}
        height={imgSize}
        alt={label}
      />
      <h3 className='nav-txt'>{label}</h3>

    </button>
  )
}

export default NavbarBtn