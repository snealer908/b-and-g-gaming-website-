import { Link } from 'react-router-dom'
import { profiles } from '../data/profiles'

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-b">B</span>
            <span className="hero-amp">&amp;</span>
            <span className="hero-g">G</span>
            <span className="hero-sub">Gaming</span>
          </h1>
          <p className="hero-desc">
            Two friends. One squad. Every game, every clutch, every late-night grind — this is our corner of the internet.
          </p>
          <div className="hero-cta">
            <Link to="/games" className="btn btn-primary">See Our Games</Link>
            <Link to={`/profile/${profiles[0].id}`} className="btn btn-ghost">Meet the Squad</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">The Squad</h2>
        <div className="profile-cards">
          {profiles.map((p) => (
            <Link key={p.id} to={`/profile/${p.id}`} className="profile-card" style={{ '--accent': p.color }}>
              <div className="profile-card-avatar">{p.name}</div>
              <h3 className="profile-card-name">{p.name}</h3>
              <p className="profile-card-role">{p.role}</p>
              <p className="profile-card-games">{p.games.length} games</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
