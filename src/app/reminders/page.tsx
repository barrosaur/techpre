import React from 'react'
import { Navbar, Calendar } from '@/components/components'

const Reminders = () => {
  return (
    <div className="main-page">
      <div className="navbar-container">
        <Navbar/>
      </div>

      <div className="right">
        <Calendar/>
      </div>

    </div>
  )
}

export default Reminders