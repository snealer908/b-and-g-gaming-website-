import { profiles } from '../data/profiles'

export default function Games() {
  const allGames = profiles.flatMap((p) =>
    p.games.map((g) => ({ name: g, players: p.name, color: p.color }))
  )

  const gameMap = new Map()
  for (const g of allGames) {
    if (!gameMap.has(g.name)) {
      gameMap.set(g.name, { name: g.name, players: [] })
    }
    gameMap.get(g.name).players.push({ name: g.players, color: g.color })
  }

  const games = Array.from(gameMap.values()).sort((a, b) =>
    b.players.length - a.players.length || a.name.localeCompare(b.name)
  )

  return (
    <div className="games-page">
      <h1 className="page-title">Our Games</h1>
      <p className="page-subtitle">Every title we play — together or solo.</p>
      <div className="game-grid">
        {games.map((g) => (
          <div key={g.name} className="game-card">
            <h3 className="game-card-title">{g.name}</h3>
            <div className="game-card-players">
              {g.players.map((p) => (
                <span key={p.name} className="player-badge" style={{ '--accent': p.color }}>
                  {p.name}
                </span>
              ))}
            </div>
            {g.players.length > 1 && <span className="coop-tag">Co-op</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
