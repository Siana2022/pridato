'use client'
import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('pridato_cookies')) {
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => { localStorage.setItem('pridato_cookies', 'accepted'); setVisible(false) }
  const reject = () => { localStorage.setItem('pridato_cookies', 'rejected'); setVisible(false) }

  if (!visible) return null

  return (
    <div className="cookie-banner show" id="cookieBanner">
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
        <i className="fas fa-cookie-bite" style={{ color: 'var(--gold)', fontSize: '1.3rem', marginTop: '0.1rem', flexShrink: 0 }}></i>
        <div>
          <strong style={{ fontSize: '0.95rem', color: 'var(--primary-dark)' }}>Usamos cookies</strong>
          <p style={{ margin: '0.35rem 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar contenidos.</p>
        </div>
      </div>
      <div className="cookie-actions">
        <button className="btn btn-primary btn-sm" onClick={accept}>Aceptar todas</button>
        <button className="btn btn-outline btn-sm" onClick={reject}>Solo necesarias</button>
      </div>
    </div>
  )
}
