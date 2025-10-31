import React from 'react'
import Image from 'next/image'
import { Navbar } from '@/components/components'
import './page.css'

// .add-btn - add functionality

const Prompt = () => {

  return (
    <div className="main-page">
      <div className="navbar-container">
        <Navbar/>
      </div>

      <div className="right">
        <div className="head-text-prmpt">
          <h1>Make a folder to start prompting!</h1>
        </div>
        <hr />

        <div className="head">
          <h2>Folders</h2>
          <button className="create-new-folder">
            + Create New Folder
          </button>
        </div>

        <div className="folder-list">
          
        </div>
      </div>

    </div>
  )
}

export default Prompt