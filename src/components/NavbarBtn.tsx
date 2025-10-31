'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import '@/styles/Navbar.css'
import { useRouter } from 'next/navigation'

interface NavBtnProp {
  label: string,
  iconDefault: string,
  iconHover: string,
  location: string,
  active: boolean,
  setActive: (loc: string) => void
}

const NavbarBtn = ({label, iconDefault, iconHover, location, active, setActive} : NavBtnProp) => {
  const [hover, setHover] = useState(false);
  const imgSize = 20;
  const router = useRouter();

  const handleClick = () => {
    setActive(location)
    router.push(location)
  }

  const isHoverdOrActive = hover || active;

  return (
    <button
      className={`nav-btn ${active ? 'active' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >

      <Image
        src={isHoverdOrActive ? iconHover : iconDefault}
        width={imgSize}
        height={imgSize}
        alt={label}
      />
      <h3 className='nav-txt'>{label}</h3>

    </button>
  )
}

export default NavbarBtn