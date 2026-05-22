import Link from 'next/link'

export const metadata = {
  title: 'Guías AEPD · Agencia Española de Protección de Datos · PRIDATO',
  description: 'Guías prácticas de la AEPD: encargados del tratamiento, cookies, brechas de seguridad, IA, transferencias internacionales y más.',
}

const guias = [
  {
    id: 'ia',
    num: '2024',
    icon: 'fas fa-robot',
    color: '#f59e0b',
    title: 'Protección de datos e Inteligencia Artificial',
    year: '2024',
    desc: 'Guía de la AEPD sobre la aplicación del RGPD en el desarrollo y uso de sistemas de inteligencia artificial. Complementa el IA Act.',
    tags: ['IA', 'RGPD', 'Datos de entrenamiento', 'Impacto'],
  },
  {
    id: 'encargados',
    num: 'Art.28',
    icon: 'fas fa-handshake',
    color: 'var(--primary)',
    title: 'Encargados del Tratamiento (art. 28)',
    year: '2023',
    desc: 'Guía práctica para la relación responsable-encargado: contratos, cláusulas tipo, subcontratación, diligencia debida y auditorías.',
    tags: ['Art. 28', 'Contratos', 'Subcontratación', 'Due diligence'],
  },
  {
    id: 'cookies',
    num: '2023',
    icon: 'fas fa-cookie',
    color: '#0891b2',
    title: 'Guía sobre el uso de cookies',
    year: '2023',
    desc: 'Requisitos de consentimiento, tipos de cookies, diseño de banners, rechazar con la misma facilidad que aceptar.',
    tags: ['Cookies', 'Consentimiento', 'Banners', 'LSSI'],
  },
  {
    id: 'corresponsables',
    num: 'Art.26',
    icon: 'fas fa-users',
    color: '#7c3aed',
    title: 'Corresponsables del tratamiento (art. 26)',
    year: '2023',
    desc: 'Identificación de la figura del corresponsable, acuerdos entre corresponsables e información a los interesados.',
    tags: ['Art. 26', 'Corresponsabilidad', 'Acuerdos'],
  },
  {
    id: 'brechas',
    num: 'Art.33-34',
    icon: 'fas fa-exclamation-triangle',
    color: '#dc2626',
    title: 'Brechas de seguridad y notificación',
    year: '2022',
    desc: 'Procedimiento completo para gestionar y notificar brechas de seguridad a la AEPD y a los interesados en las 72 horas.',
    tags: ['Brechas', '72 horas', 'Notificación', 'Registro'],
  },
  {
    id: 'eipd',
    num: 'Art.35',
    icon: 'fas fa-search',
    color: '#059669',
    title: 'Análisis de riesgo y EIPD',
    year: '2021',
    desc: 'Guía metodológica para la evaluación de impacto en la protección de datos (EIPD/DPIA): cuándo, cómo y qué debe incluir.',
    tags: ['EIPD', 'DPIA', 'Análisis de riesgo', 'Art. 35'],
  },
  {
    id: 'anonimizacion',
    num: 'Técnico',
    icon: 'fas fa-mask',
    color: '#6366f1',
    title: 'Anonimización y seudonimización',
    year: '2020',
    desc: 'Técnicas de anonimización y seudonimización: k-anonimato, l-diversidad, privacidad diferencial. Cuándo los datos dejan de ser personales.',
    tags: ['Anonimización', 'Seudonimización', 'Privacidad diferencial'],
  },
  {
    id: 'transferencias',
    num: 'Cap.V',
    icon: 'fas fa-globe-europe',
    color: '#0ea5e9',
    title: 'Transferencias internacionales (CCT)',
    year: '2022',
    desc: 'Guía sobre transferencias de datos fuera de la UE: países adecuados, cláusulas contractuales tipo (CCT), evaluación de transferencias (TIA).',
    tags: ['Transferencias', 'CCT', 'TIA', 'Cap. V RGPD'],
  },
]

export default function AepdPage() {
  return (
    <>
      <style>{`
        .guia-card { background: white; border-radius: 14px; padding: 1.5rem; border: 1px solid #e2e8f0; transition: all 0.25s; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
        .guia-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.12); border-color: var(--primary); }
        .guia-num { display: inline-block; padding: 0.2rem 0.6rem; background: var(--bg-light); border-radius: 6px; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.75rem; }
        .guia-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.3rem; margin-bottom: 1rem; }
        .guia-title { font-size: 1rem; font-weight: 700; color: var(--primary-dark); margin-bottom: 0.5rem; }
        .guia-desc { font-size: 0.87rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.6; }
        .guia-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
        .guia-tag { padding: 0.2rem 0.55rem; background: var(--bg-light); border-radius: 20px; font-size: 0.77rem; color: var(--text-muted); }
        .guias-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
      `}</style>

      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-label"><i className="fas fa-file-alt"></i> Guías AEPD</span>
          <h1>Guías de la AEPD<br />Interpretadas para ti</h1>
          <p>La Agencia Española de Protección de Datos publica guías técnicas esenciales. En PRIDATO las analizamos y te explicamos cómo aplicarlas en tu organización.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Guías AEPD</span>
          </nav>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label"><i className="fas fa-book-open"></i> Recursos oficiales</span>
            <h2>Guías prácticas de la AEPD</h2>
            <p>La AEPD publica regularmente guías y recomendaciones técnicas para facilitar el cumplimiento del RGPD y la LOPDGDD.</p>
          </div>
          <div className="guias-grid fade-in">
            {guias.map(g => (
              <div key={g.id} className="guia-card" id={g.id}>
                <div className="guia-num">{g.num}</div>
                <div className="guia-icon" style={{ background: g.color }}>
                  <i className={g.icon}></i>
                </div>
                <div className="guia-title">{g.title}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Publicada: {g.year}</div>
                <div className="guia-desc">{g.desc}</div>
                <div className="guia-tags">
                  {g.tags.map(t => <span key={t} className="guia-tag">{t}</span>)}
                </div>
                <div style={{ marginTop: '1.25rem' }}>
                  <Link href="/contacto#diagnostico" className="btn btn-outline btn-sm">Cómo aplicarla <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label"><i className="fas fa-lightbulb"></i> Cómo usamos las guías</span>
            <h2>Las guías AEPD en tu organización</h2>
          </div>
          <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
            {[
              { icon: 'fas fa-search', color: '#059669', title: 'Diagnóstico basado en guías', desc: 'Usamos las guías de la AEPD como referencia para evaluar tu nivel de cumplimiento y detectar brechas.' },
              { icon: 'fas fa-file-alt', color: 'var(--primary)', title: 'Documentación conforme', desc: 'Preparamos toda la documentación siguiendo las indicaciones y plantillas de las guías oficiales.' },
              { icon: 'fas fa-graduation-cap', color: '#f59e0b', title: 'Formación práctica', desc: 'Nuestros programas de formación incluyen el estudio y aplicación práctica de las guías más relevantes para tu sector.' },
            ].map(item => (
              <div key={item.title} className="card card-body" style={{ textAlign: 'center' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'white', fontSize: '1.3rem' }}>
                  <i className={item.icon}></i>
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>¿Necesitas ayuda para aplicar estas guías?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '540px', margin: '0 auto 2rem' }}>Nuestro equipo de especialistas te ayuda a implementar las recomendaciones de la AEPD en tu organización.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contacto#diagnostico" className="btn btn-accent btn-lg"><i className="fas fa-rocket"></i> Diagnóstico Gratuito</Link>
            <Link href="/guias/aesia" className="btn btn-glass btn-lg"><i className="fas fa-microchip"></i> Ver Guías AESIA</Link>
          </div>
        </div>
      </section>
    </>
  )
}
