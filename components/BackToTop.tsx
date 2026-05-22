'use client'
import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      className={`back-to-top${show ? ' show' : ''}`}
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', width: '44px', height: '44px', borderRadius: '50%', background: 'var(--primary)', color: 'white', border: 'none', cursor: 'pointer', display: show ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)', zIndex: 999, transition: 'var(--transition)', fontSize: '1rem' }}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  )
}
