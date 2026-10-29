import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="app">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>B&amp;G Gaming &copy; 2026 &mdash; Built by best friends, for best friends.</p>
      </footer>
    </div>
  )
}
