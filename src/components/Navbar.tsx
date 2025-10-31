'use client'
import { useState } from 'react'
import NavbarBtn from './NavbarBtn';
import '@/styles/Navbar.css'

const Navbar = () => {
  const [active, setActive] = useState('/overview')

  return (
    <nav>
      <div className="greeting-text">
        {/* Dynamic naming */}
        <h2>Hello, name</h2>
      </div>

      <div className="nav-list">
        <NavbarBtn 
          label="Overview"
          iconDefault="/images/overview-white.svg"
          iconHover='/images/overview-prpl.svg'
          location='/overview'
          active={active === '/overview'}
          setActive={setActive}
        />

        <NavbarBtn
          label='Prompt Me'
          iconDefault='/images/prompt-white.svg'
          iconHover='/images/prompt-prpl.svg'
          location='/prompt'
          active={active === '/prompt'}
          setActive={setActive}
        />

        <NavbarBtn
          label='Reminders'
          iconDefault='/images/reminder-white.svg'
          iconHover='/images/reminder-prpl.svg'
          location='/reminders'
          active={active === '/reminders'}
          setActive={setActive}
        />

        <NavbarBtn
          label='Share'
          iconDefault='/images/share-white.svg'
          iconHover='/images/share-prpl.svg'
          location='/share'
          active={active === '/share'}
          setActive={setActive}
        />

        <NavbarBtn
          label='Settings'
          iconDefault='/images/settings-white.svg'
          iconHover='/images/settings-prpl.svg'
          location='/settings'
          active={active === '/settings'}
          setActive={setActive}
        />
      </div>
    </nav>
  )
}

export default Navbar