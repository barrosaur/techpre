'use client'
import React, { useState } from 'react'
import { Navbar } from '@/components/components'
import Image from 'next/image'
import './page.css'

const Share = () => {
  const imgSize = 30;
  const [search, setSearch] = useState<string>("");

  const handleClick = () => {
    setSearch("")
  }

  return (
    <div className="main-page share-page">
      <div className="navbar-container">
        <Navbar/>
      </div>

      <div className="right">
        <h1>Look for your friends or groups!</h1>
        <div className="search-bar-container">
          <div className="search-bar-nd-btn">
            <input 
              type="text"
              placeholder='Search name or group'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='search-bar'
            />
            <button onClick={handleClick} className='search-btn'>
              <Image
                src="/images/search.svg"
                height={imgSize}
                width={imgSize}
                alt='Search'
              />
            </button>
          </div>
        </div>

        <div className="frnd-grp-container">
          <div className="list">
            <h3>Friends</h3>
          </div>
          <div className="list">
            <h3>Groups</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share