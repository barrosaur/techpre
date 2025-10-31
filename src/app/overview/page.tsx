import React from 'react'
import Image from 'next/image'
import { Navbar, ViewAllBtn } from '@/components/components'
import './page.css'

// .add-btn - add functionality

const main = () => {

  return (
    <div className="main-page">
      <div className="navbar-container">
        <Navbar/>
      </div>

      <div className="right">
        <div className="container reminders">
          <div className="head">
            <h2>Reminders</h2>
            <ViewAllBtn/>
          </div>
          <div className="list-holder">
            <button className="add-btn">+</button>
          </div>
        </div>
        
        <div className="second-level">
          <div className="container">
            <div className="head">
              <h2>Folders</h2>
              <ViewAllBtn/>
            </div>
            <div className="list-holder">
              <button className="add-btn">+</button>
            </div>
          </div>
          <div className="container">
            <div className="head">
              <h2>Friends</h2>
              <ViewAllBtn/>
            </div>
            <div className="list-holder">
              <button className="add-btn">+</button>
            </div>
          </div>
          <div className="container">
            <div className="head">
              <h2>Groups</h2>
              <ViewAllBtn/>
            </div>
            <div className="list-holder">
              <button className="add-btn">+</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default main