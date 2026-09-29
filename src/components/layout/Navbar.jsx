import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo-mark.png'

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleMenu = (menu) => setOpenMenu((prev) => (prev === menu ? null : menu))

  return (
    <nav
      ref={navRef}
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '22px 60px',
        background: '#0a0a0a',
        borderBottom: '1px solid #222',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="IBA" style={{ height: 30, objectFit: 'contain' }} />
      </Link>
      <div style={{ display: 'flex', gap: 40 }}>
        <div style={{ position: 'relative', paddingBottom: 12 }}>
          <span style={navLinkStyle} onClick={() => toggleMenu('main')}>MAIN</span>
          {openMenu === 'main' && (
            <div style={dropdownStyle}>
              <Link to="/main/introduction" style={dropdownLinkStyle} onClick={() => setOpenMenu(null)}>INTRODUCTION</Link>
              <Link to="/main/members" style={dropdownLinkStyle} onClick={() => setOpenMenu(null)}>MEMBERS</Link>
              <Link to="/main/awards" style={dropdownLinkStyle} onClick={() => setOpenMenu(null)}>AWARDS</Link>
            </div>
          )}
        </div>

        <div style={{ position: 'relative', paddingBottom: 12 }}>
          <span style={navLinkStyle} onClick={() => toggleMenu('activities')}>ACTIVITIES</span>
          {openMenu === 'activities' && (
            <div style={dropdownStyle}>
              <Link to="/activities/curriculum" style={dropdownLinkStyle} onClick={() => setOpenMenu(null)}>CURRICULUM</Link>
            </div>
          )}
        </div>

        <div style={{ position: 'relative', paddingBottom: 12 }}>
          <span style={navLinkStyle} onClick={() => toggleMenu('networking')}>NETWORKING</span>
          {openMenu === 'networking' && (
            <div style={dropdownStyle}>
              <Link to="/networking/gathering" style={dropdownLinkStyle} onClick={() => setOpenMenu(null)}>GATHERING</Link>
            </div>
          )}
        </div>

        <div style={{ position: 'relative', paddingBottom: 12 }}>
          <span style={navLinkStyle} onClick={() => toggleMenu('join')}>JOIN US</span>
          {openMenu === 'join' && (
            <div style={dropdownStyle}>
              <Link to="/join/application" style={dropdownLinkStyle} onClick={() => setOpenMenu(null)}>APPLICATION</Link>
              <Link to="/join/faq" style={dropdownLinkStyle} onClick={() => setOpenMenu(null)}>FAQ</Link>
              <Link to="/join/contact" style={dropdownLinkStyle} onClick={() => setOpenMenu(null)}>CONTACT</Link>
            </div>
          )}
        </div>
      </div>

    </nav>
  )
}

const navLinkStyle = { color: '#ccc', textDecoration: 'none', fontSize: 15, fontWeight: 'bold', cursor: 'pointer' }
const dropdownStyle = { position: 'absolute', top: 26, left: 0, background: '#eee', borderRadius: 6, padding: '14px 0', minWidth: 220, zIndex: 10 }
const dropdownLinkStyle = { display: 'block', padding: '10px 22px', color: '#333', textDecoration: 'none', fontSize: 14, fontWeight: 'bold' }

export default Navbar