// app/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const [message, setMessage] = useState<string>('')

  const handleFetchData = () => {
    setMessage('Fetching data…')
    setTimeout(() => {
      setMessage('Fetching data successful')
    }, 2000)
  }

  const handleGenerateReports = () => {
    setMessage('Generating reports…')
    setTimeout(() => {
      setMessage('Reports generated successfully')
    }, 2000)
  }

  return (
    <main
      style={{
        maxWidth:  '800px',
        margin:    '4rem auto',
        padding:   '0 1rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Welcome to Your Textile Dashboard
      </h1>
      <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
        Explore interactive reports on cotton and silk production.
      </p>

      <div
        style={{
          display:       'flex',
          justifyContent:'center',
          gap:           '1rem',
          marginBottom:  '2rem',
        }}
      >
        <button
          onClick={handleFetchData}
          style={{
            padding:        '0.5rem 1rem',
            backgroundColor:'#28a745',
            color:          '#fff',
            border:         'none',
            borderRadius:   '4px',
            cursor:         'pointer',
          }}
        >
          Fetch Data
        </button>

        <button
          onClick={handleGenerateReports}
          style={{
            padding:        '0.5rem 1rem',
            backgroundColor:'#17a2b8',
            color:          '#fff',
            border:         'none',
            borderRadius:   '4px',
            cursor:         'pointer',
          }}
        >
          Generate Reports
        </button>
      </div>

      <Link
        href="/reports"
        style={{
          display:        'inline-block',
          padding:        '0.75rem 1.5rem',
          backgroundColor:'#007acc',
          color:          '#fff',
          borderRadius:   '4px',
          textDecoration: 'none',
          fontWeight:     500,
        }}
      >
        View Reports
      </Link>

      {message && (
        <div style={{ marginTop: '1.5rem', color: '#333', fontWeight: 500 }}>
          {message}
        </div>
      )}
    </main>
  )
}
