import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Games from './pages/Games'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="games" element={<Games />} />
      </Route>
    </Routes>
  )
}
