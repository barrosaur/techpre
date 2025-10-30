import NavbarBtn from './NavbarBtn';
import '@/styles/Navbar.css'

const Navbar = () => {

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
        />

        <NavbarBtn
          label='Prompt Me'
          iconDefault='/images/prompt-white.svg'
          iconHover='/images/prompt-prpl.svg'
        />

        <NavbarBtn
          label='Reminders'
          iconDefault='/images/reminder-white.svg'
          iconHover='/images/reminder-prpl.svg'
        />

        <NavbarBtn
          label='Share'
          iconDefault='/images/share-white.svg'
          iconHover='/images/share-prpl.svg'
        />

        <NavbarBtn
          label='Settings'
          iconDefault='/images/settings-white.svg'
          iconHover='/images/settings-prpl.svg'
        />
      </div>
    </nav>
  )
}

export default Navbar