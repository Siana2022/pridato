'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/')
  const closeMenu = () => { setMenuOpen(false); setOpenDropdown(null) }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-inner">
        <Link href="/" className="nav-brand">
          <div className="nav-logo-mark">PR</div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">PRIDATO</span>
            <span className="nav-brand-tag">Compliance &amp; Privacy</span>
          </div>
        </Link>
        <ul className={`nav-menu${menuOpen ? ' open' : ''}`} id="navMenu">
          <li className="nav-item">
            <Link href="/" className={`nav-link${pathname === '/' ? ' active' : ''}`} onClick={closeMenu}>
              <i className="fas fa-home"></i> Inicio
            </Link>
          </li>
          <li className={`nav-item has-dropdown${openDropdown === 'servicios' ? ' open' : ''}`}>
            <a href="/servicios" className={`nav-link${isActive('/servicios') ? ' active' : ''}`}
               onClick={(e) => { if (window.innerWidth <= 768) { e.preventDefault(); setOpenDropdown(openDropdown === 'servicios' ? null : 'servicios') } }}>
              <i className="fas fa-briefcase"></i> Servicios <i className="fas fa-chevron-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li><Link href="/servicios#dpo" className="dropdown-item" onClick={closeMenu}><i className="fas fa-user-shield"></i> DPO Externo</Link></li>
              <li><Link href="/servicios#adecuacion" className="dropdown-item" onClick={closeMenu}><i className="fas fa-clipboard-check"></i> Adecuación RGPD</Link></li>
              <li><Link href="/servicios#auditoria" className="dropdown-item" onClick={closeMenu}><i className="fas fa-search"></i> Auditoría &amp; Diagnóstico</Link></li>
              <li><Link href="/servicios#ia" className="dropdown-item" onClick={closeMenu}><i className="fas fa-robot"></i> IA &amp; Automatización</Link></li>
              <li><Link href="/servicios#formacion" className="dropdown-item" onClick={closeMenu}><i className="fas fa-graduation-cap"></i> Formación</Link></li>
              <li className="dropdown-divider"></li>
              <li><Link href="/servicios#encargados" className="dropdown-item" onClick={closeMenu}><i className="fas fa-handshake"></i> Encargados del Tratamiento</Link></li>
              <li><Link href="/servicios#corresponsables" className="dropdown-item" onClick={closeMenu}><i className="fas fa-users"></i> Corresponsables</Link></li>
            </ul>
          </li>
          <li className={`nav-item has-dropdown${openDropdown === 'normativa' ? ' open' : ''}`}>
            <a href="/normativa" className={`nav-link${isActive('/normativa') ? ' active' : ''}`}
               onClick={(e) => { if (window.innerWidth <= 768) { e.preventDefault(); setOpenDropdown(openDropdown === 'normativa' ? null : 'normativa') } }}>
              <i className="fas fa-balance-scale"></i> Normativa <i className="fas fa-chevron-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li><Link href="/normativa/rgpd" className="dropdown-item" onClick={closeMenu}><i className="fas fa-shield-alt"></i> RGPD</Link></li>
              <li><Link href="/normativa/lopdgdd" className="dropdown-item" onClick={closeMenu}><i className="fas fa-flag"></i> LOPDGDD</Link></li>
              <li><Link href="/normativa/lssi" className="dropdown-item" onClick={closeMenu}><i className="fas fa-globe"></i> LSSI-CE</Link></li>
              <li><Link href="/normativa/ia-act" className="dropdown-item" onClick={closeMenu}><i className="fas fa-robot"></i> IA Act (UE 2024/1689)</Link></li>
              <li><Link href="/normativa/dsa" className="dropdown-item" onClick={closeMenu}><i className="fas fa-network-wired"></i> DSA (UE 2022/2065)</Link></li>
              <li><Link href="/normativa/eidas2" className="dropdown-item" onClick={closeMenu}><i className="fas fa-id-card"></i> eIDAS 2 (UE 2024/1183)</Link></li>
              <li><Link href="/normativa/nis2" className="dropdown-item" onClick={closeMenu}><i className="fas fa-lock"></i> NIS2 (UE 2022/2555)</Link></li>
              <li><Link href="/normativa/dma" className="dropdown-item" onClick={closeMenu}><i className="fas fa-store"></i> DMA (UE 2022/1925)</Link></li>
            </ul>
          </li>
          <li className={`nav-item has-dropdown${openDropdown === 'guias' ? ' open' : ''}`}>
            <a href="/guias/aepd" className={`nav-link${isActive('/guias') ? ' active' : ''}`}
               onClick={(e) => { if (window.innerWidth <= 768) { e.preventDefault(); setOpenDropdown(openDropdown === 'guias' ? null : 'guias') } }}>
              <i className="fas fa-book-open"></i> Guías AEPD/AESIA <i className="fas fa-chevron-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li><Link href="/guias/aepd" className="dropdown-item" onClick={closeMenu}><i className="fas fa-file-alt"></i> Guías AEPD</Link></li>
              <li><Link href="/guias/aesia" className="dropdown-item" onClick={closeMenu}><i className="fas fa-microchip"></i> Guías AESIA (16 Guías IA)</Link></li>
              <li><Link href="/guias/aepd#encargados" className="dropdown-item" onClick={closeMenu}><i className="fas fa-handshake"></i> Encargados Tratamiento</Link></li>
              <li><Link href="/guias/aepd#ia" className="dropdown-item" onClick={closeMenu}><i className="fas fa-brain"></i> IA &amp; Automatización AEPD</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link href="/blog" className={`nav-link${isActive('/blog') ? ' active' : ''}`} onClick={closeMenu}>
              <i className="fas fa-rss"></i> Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contacto" className={`nav-link${pathname === '/contacto' ? ' active' : ''}`} onClick={closeMenu}>
              <i className="fas fa-envelope"></i> Contacto
            </Link>
          </li>
        </ul>
        <div className="nav-cta">
          <Link href="/contacto" className="btn btn-outline btn-sm">Contactar</Link>
          <Link href="/contacto#diagnostico" className="btn btn-primary btn-sm"><i className="fas fa-rocket"></i> Diagnóstico Gratis</Link>
        </div>
        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Menú"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}}></span>
          <span style={menuOpen ? { opacity: '0' } : {}}></span>
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}}></span>
        </button>
      </div>
    </nav>
  )
}
