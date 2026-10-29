export const profiles = [
  {
    id: 'b',
    name: 'B',
    tag: 'B',
    color: '#00e5ff',
    role: 'Strategist',
    bio: 'The brains behind every clutch play. Loves tactical shooters and grinding RPGs to 100% completion. Never rage-quits — just "strategically retreats".',
    games: ['Valorant', 'Elden Ring', 'Counter-Strike 2', 'Apex Legends'],
    stats: { hours: '2,400', rank: 'Immortal', wins: '1,830', kd: '1.42' },
  },
  {
    id: 'g',
    name: 'G',
    tag: 'G',
    color: '#a855f7',
    role: 'Fragger',
    bio: 'First through the door, every time. FPS main with a soft spot for open-world adventures. Will camp a sniper spot for 10 minutes if the situation calls for it.',
    games: ['Valorant', 'Call of Duty: Warzone', 'GTA V', 'Minecraft'],
    stats: { hours: '1,950', rank: 'Diamond', wins: '1,560', kd: '1.28' },
  },
]

export function getProfile(id) {
  return profiles.find((p) => p.id === id)
}
