import { useParams, Link } from 'react-router-dom'
import { getProfile, profiles } from '../data/profiles'

export default function Profile() {
  const { id } = useParams()
  const profile = getProfile(id)

  if (!profile) {
    return (
      <div className="not-found">
        <h2>Profile not found</h2>
        <Link to="/" className="btn btn-ghost">Back home</Link>
      </div>
    )
  }

  return (
    <div className="profile-page" style={{ '--accent': profile.color }}>
      <div className="profile-header">
        <div className="profile-avatar">{profile.name}</div>
        <div className="profile-info">
          <h1 className="profile-name">{profile.name}</h1>
          <p className="profile-role-tag">{profile.role}</p>
        </div>
      </div>

      <section className="profile-bio">
        <h2>About</h2>
        <p>{profile.bio}</p>
      </section>

      <section className="profile-stats">
        <h2>Stats</h2>
        <div className="stat-grid">
          <div className="stat-card">
            <span className="stat-value">{profile.stats.hours}</span>
            <span className="stat-label">Hours Played</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{profile.stats.rank}</span>
            <span className="stat-label">Peak Rank</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{profile.stats.wins}</span>
            <span className="stat-label">Total Wins</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{profile.stats.kd}</span>
            <span className="stat-label">K/D Ratio</span>
          </div>
        </div>
      </section>

      <section className="profile-games">
        <h2>Games</h2>
        <div className="game-chips">
          {profile.games.map((g) => (
            <span key={g} className="game-chip">{g}</span>
          ))}
        </div>
      </section>

      <div className="profile-nav">
        {profiles.filter((p) => p.id !== profile.id).map((p) => (
          <Link key={p.id} to={`/profile/${p.id}`} className="btn btn-ghost" style={{ '--accent': p.color }}>
            View {p.name}&apos;s Profile
          </Link>
        ))}
      </div>
    </div>
  )
}
