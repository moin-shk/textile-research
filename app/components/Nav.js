// components/Nav.js
import Link from 'next/link'

export default function Nav() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
      <Link 
        href="/" 
        style={{ marginRight: '1rem', textDecoration: 'none', color: '#007acc' }}
      >
        Home
      </Link>
      <Link 
        href="/reports" 
        style={{ textDecoration: 'none', color: '#007acc' }}
      >
        Reports
      </Link>
    </nav>
  )
}
