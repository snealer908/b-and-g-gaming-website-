import { Link, useLocation } from 'react-router-dom'
import { profiles } from '../data/profiles'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/games', label: 'Games' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="logo-b">B</span>
        <span className="logo-amp">&amp;</span>
        <span className="logo-g">G</span>
        <span className="logo-text">Gaming</span>
      </Link>
      <div className="navbar-links">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={location.pathname === item.to ? 'nav-link active' : 'nav-link'}
          >
            {item.label}
          </Link>
        ))}
        {profiles.map((p) => (
          <Link
            key={p.id}
            to={`/profile/${p.id}`}
            className={
              location.pathname === `/profile/${p.id}`
                ? 'nav-link nav-profile active'
                : 'nav-link nav-profile'
            }
            style={{ '--accent': p.color }}
          >
            {p.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
