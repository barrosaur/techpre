'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import '@/styles/Navbar.css'
import { useRouter } from 'next/navigation'

interface NavBtnProp {
  label: string,
  iconDefault: string,
  iconHover: string,
  location: string
}

const NavbarBtn = ({label, iconDefault, iconHover, location} : NavBtnProp) => {
  const [hover, setHover] = useState(false);
  const imgSize = 20;
  const router = useRouter();

  return (
    <button
      className='nav-btn'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => router.push(location)}
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