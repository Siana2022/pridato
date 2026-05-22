import Link from 'next/link'

export const metadata = {
  title: 'Normativa de Privacidad y Datos · PRIDATO',
  description: 'RGPD, LOPDGDD, LSSI-CE, IA Act, DSA, eIDAS 2, NIS2, DMA – Toda la normativa europea de privacidad y datos explicada.',
}

const normativas = [
  { href: '/normativa/rgpd', icon: 'fas fa-shield-alt', color: 'linear-gradient(135deg,#1e3a5f,#2563eb)', badge: 'UE 2016/679', title: 'RGPD', desc: 'Reglamento General de Protección de Datos. La piedra angular del marco europeo de privacidad, de aplicación desde mayo de 2018.', tags: ['Datos personales', 'Derechos ARCO+', 'Hasta 20M€ / 4%'] },
  { href: '/normativa/lopdgdd', icon: 'fas fa-flag', color: 'linear-gradient(135deg,#dc2626,#ef4444)', badge: 'LO 3/2018', title: 'LOPDGDD', desc: 'Ley Orgánica 3/2018 que adapta el RGPD al ordenamiento jurídico español e incorpora los derechos digitales del Título X.', tags: ['España', 'Derechos digitales', 'AEPD'] },
  { href: '/normativa/lssi', icon: 'fas fa-globe', color: 'linear-gradient(135deg,#0891b2,#22d3ee)', badge: 'Ley 34/2002', title: 'LSSI-CE', desc: 'Servicios de la Sociedad de la Información y Comercio Electrónico. Obligaciones para webs, tiendas online y servicios digitales.', tags: ['Cookies', 'Aviso legal', 'E-commerce'] },
  { href: '/normativa/ia-act', icon: 'fas fa-robot', color: 'linear-gradient(135deg,#f59e0b,#fbbf24)', badge: 'UE 2024/1689', title: 'IA Act', desc: 'Primer reglamento mundial de inteligencia artificial. Clasifica los sistemas de IA por nivel de riesgo y establece obligaciones específicas.', tags: ['Inteligencia Artificial', 'Clasificación riesgo', 'Agosto 2024'] },
  { href: '/normativa/dsa', icon: 'fas fa-network-wired', color: 'linear-gradient(135deg,#7c3aed,#a78bfa)', badge: 'UE 2022/2065', title: 'DSA', desc: 'Digital Services Act. Obligaciones de transparencia, moderación de contenidos y protección de menores para plataformas digitales.', tags: ['Plataformas', 'Contenidos ilegales', 'Menores'] },
  { href: '/normativa/eidas2', icon: 'fas fa-id-card', color: 'linear-gradient(135deg,#059669,#10b981)', badge: 'UE 2024/1183', title: 'eIDAS 2', desc: 'Identidad digital europea. El EUDI Wallet permitirá a los ciudadanos de la UE identificarse y firmar digitalmente en toda Europa.', tags: ['Identidad digital', 'EUDI Wallet', 'Firma electrónica'] },
  { href: '/normativa/nis2', icon: 'fas fa-lock', color: 'linear-gradient(135deg,#dc2626,#f87171)', badge: 'UE 2022/2555', title: 'NIS2', desc: 'Directiva de ciberseguridad para entidades esenciales e importantes. Medidas de seguridad, gestión de riesgos y notificación de incidentes.', tags: ['Ciberseguridad', 'Sectores críticos', 'Notificación 24h/72h'] },
  { href: '/normativa/dma', icon: 'fas fa-store', color: 'linear-gradient(135deg,#0ea5e9,#38bdf8)', badge: 'UE 2022/1925', title: 'DMA', desc: 'Digital Markets Act. Obligaciones para gatekeepers (Apple, Google, Meta, Amazon, Microsoft, ByteDance) en mercados digitales.', tags: ['Gatekeepers', 'Mercados digitales', 'Interoperabilidad'] },
]

export default function NormativaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-label"><i className="fas fa-balance-scale"></i> Normativa europea</span>
          <h1>Marco Regulatorio Europeo<br />de Privacidad y Datos</h1>
          <p>Toda la normativa europea que afecta a tu organización, explicada de forma clara y práctica. Desde el RGPD hasta el IA Act y el DMA.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Normativa</span>
          </nav>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="normativa-grid fade-in">
            {normativas.map(n => (
              <Link key={n.href} href={n.href} className="normativa-card">
                <div className="normativa-icon" style={{ background: n.color }}><i className={n.icon}></i></div>
                <div className="normativa-badge">{n.badge}</div>
                <h3>{n.title}</h3>
                <p>{n.desc}</p>
                <div className="normativa-tags">
                  {n.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>¿Qué normativa aplica a tu organización?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '540px', margin: '0 auto 2rem' }}>No todas las normativas aplican a todas las organizaciones. Solicita un diagnóstico y te lo decimos con precisión.</p>
          <Link href="/contacto#diagnostico" className="btn btn-accent btn-lg"><i className="fas fa-rocket"></i> Diagnóstico Gratuito</Link>
        </div>
      </section>
    </>
  )
}
