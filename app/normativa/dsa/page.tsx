import Link from 'next/link'

export const metadata = {
  title: 'DSA – Digital Services Act (UE) 2022/2065 · PRIDATO',
  description: 'Guía del Digital Services Act: obligaciones de plataformas digitales, moderación de contenidos, transparencia y protección de menores.',
}

export default function DsaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-label"><i className="fas fa-network-wired"></i> Normativa · UE 2022/2065</span>
          <h1>DSA – Digital Services Act</h1>
          <p>El Reglamento de Servicios Digitales establece obligaciones de transparencia, moderación de contenidos y protección de menores para plataformas digitales.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <i className="fas fa-chevron-right"></i>
            <Link href="/normativa">Normativa</Link>
            <i className="fas fa-chevron-right"></i>
            <span>DSA</span>
          </nav>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="content-grid">
            <article className="article-body">
              <div className="highlight-box" style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--primary-dark)' }}><i className="fas fa-info-circle"></i> Ficha normativa</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem' }}>
                  <div><strong>Nombre oficial</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Reglamento (UE) 2022/2065</span></div>
                  <div><strong>Aplicación total</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>17 de febrero de 2024</span></div>
                  <div><strong>Sanción máxima</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>6% de la facturación global</span></div>
                  <div><strong>Supervisor UE</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Comisión Europea (VLOP/VLOSE)</span></div>
                  <div><strong>Supervisor España</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>SEDIA (Coordinador de SD)</span></div>
                </div>
              </div>

              <h2 id="que-es">¿Qué es el DSA?</h2>
              <p>El Reglamento de Servicios Digitales (DSA) establece un conjunto de obligaciones para los intermediarios de servicios en línea. Su objetivo es crear un espacio digital más seguro y transparente, garantizando la responsabilidad de las plataformas digitales respecto a los contenidos que alojan.</p>

              <h2 id="niveles">4 Niveles de Proveedores</h2>
              <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  { num: '1', title: 'Servicios de conduit, caché y hosting', desc: 'Obligaciones generales mínimas: punto de contacto, cooperación con autoridades, informes de transparencia.', color: '#f0fdf4', border: '#22c55e', textColor: '#166534' },
                  { num: '2', title: 'Plataformas online (+ hosting)', desc: 'Sistemas de notificación y respuesta para contenidos ilegales, transparencia en publicidad, sistemas de recomendación.', color: '#eff6ff', border: '#3b82f6', textColor: '#1e40af' },
                  { num: '3', title: 'VLOP: Plataformas muy grandes (+45M usuarios)', desc: 'Todas las anteriores + evaluación de riesgos sistémicos, medidas de mitigación, auditorías anuales, acceso a datos a investigadores.', color: '#fff7ed', border: '#f97316', textColor: '#c2410c' },
                  { num: '4', title: 'VLOSE: Motores de búsqueda muy grandes', desc: 'Obligaciones equivalentes a VLOP para motores de búsqueda con más de 45 millones de usuarios mensuales en la UE.', color: '#fee2e2', border: '#dc2626', textColor: '#991b1b' },
                ].map(n => (
                  <div key={n.num} style={{ padding: '1.25rem', background: n.color, borderRadius: '10px', border: `2px solid ${n.border}` }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: n.border, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>{n.num}</div>
                      <div>
                        <strong style={{ color: n.textColor, display: 'block', marginBottom: '0.35rem' }}>{n.title}</strong>
                        <p style={{ margin: 0, fontSize: '0.88rem', color: n.textColor }}>{n.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 id="obligaciones">Obligaciones por Capa</h2>
              <div className="accordion">
                {[
                  { title: 'Mecanismo de notificación y respuesta (Notice & Action)', content: 'Las plataformas deben implementar mecanismos para que cualquier persona pueda notificar contenidos ilegales y actuar rápidamente.' },
                  { title: 'Transparencia en publicidad', content: 'Obligación de identificar claramente la publicidad y permitir a los usuarios saber por qué ven un anuncio específico. Prohibición de publicidad segmentada para menores.' },
                  { title: 'Sistemas de recomendación', content: 'Las plataformas que usen algoritmos de recomendación deben ofrecer transparencia sobre su funcionamiento y opciones para desactivarlos.' },
                  { title: 'Evaluación de riesgos sistémicos (VLOP/VLOSE)', content: 'Las plataformas muy grandes deben evaluar anualmente los riesgos sistémicos: contenidos ilegales, efectos negativos en derechos fundamentales, procesos electorales y salud pública.' },
                  { title: 'Auditorías independientes', content: 'Las VLOP/VLOSE deben someterse a auditorías independientes anuales para verificar el cumplimiento del DSA.' },
                  { title: 'Protección de menores', content: 'Prohibición de publicidad dirigida a menores basada en perfilado. Interfaces no diseñadas para engañar. Protocolos especiales para proteger a los menores.' },
                  { title: 'Acceso a datos para investigadores', content: 'Las VLOP/VLOSE deben facilitar acceso a sus datos a investigadores acreditados para el estudio de riesgos sistémicos.' },
                ].map(o => (
                  <div key={o.title}>
                    <div className="accordion-header"><i className="fas fa-layer-group" style={{ marginRight: '0.5rem' }}></i>{o.title}<i className="fas fa-chevron-down" style={{ marginLeft: 'auto' }}></i></div>
                    <div className="accordion-body">{o.content}</div>
                  </div>
                ))}
              </div>

              <h2 id="sedia" style={{ marginTop: '2rem' }}>Coordinador de Servicios Digitales en España</h2>
              <p>En España, la autoridad responsable de la aplicación del DSA es la <strong>SEDIA</strong> (Secretaría de Estado de Digitalización e Inteligencia Artificial), designada como Coordinador de Servicios Digitales.</p>

              <div className="info-box" style={{ marginBottom: '1.5rem' }}>
                <strong><i className="fas fa-building"></i> Casos reales DSA 2024 – Primeras investigaciones</strong>
                <ul style={{ marginTop: '0.5rem', fontSize: '0.88rem', margin: '0.5rem 0 0' }}>
                  <li style={{ marginBottom: '0.3rem' }}><strong>X (Twitter):</strong> Investigada por la Comisión por presunta difusión de contenidos ilegales y datos de transparencia insuficientes.</li>
                  <li style={{ marginBottom: '0.3rem' }}><strong>TikTok:</strong> Primera sanción provisional por contenidos que afectan a menores. Medidas cautelares aplicadas.</li>
                  <li style={{ marginBottom: '0.3rem' }}><strong>Meta (Instagram, Facebook):</strong> Investigada por sistemas de recomendación y publicidad a menores.</li>
                  <li><strong>AliExpress:</strong> Investigada por venta de productos ilegales y peligrosos en su marketplace.</li>
                </ul>
              </div>

              <h2 id="sanciones">Sanciones</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  { amount: '6%', desc: 'Sanción por incumplimientos del DSA', color: '#dc2626', bg: '#fee2e2', border: '#fca5a5' },
                  { amount: '1%', desc: 'Por información incorrecta en auditorías', color: '#d97706', bg: '#fef3c7', border: '#fcd34d' },
                  { amount: '5%/día', desc: 'Multa coercitiva por incumplimiento', color: '#7c3aed', bg: '#f5f3ff', border: '#c4b5fd' },
                ].map(s => (
                  <div key={s.amount} style={{ padding: '1.25rem', background: s.bg, borderRadius: '10px', border: `1px solid ${s.border}` }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: s.color }}>{s.amount}</div>
                    <div style={{ fontSize: '0.85rem', color: s.color }}>{s.desc}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link href="/contacto#diagnostico" className="btn btn-primary"><i className="fas fa-rocket"></i> Diagnóstico DSA</Link>
                <Link href="/normativa/dma" className="btn btn-outline">Ver DMA</Link>
              </div>
            </article>

            <aside className="sidebar-sticky">
              <div className="toc-card">
                <h4><i className="fas fa-list"></i> En esta página</h4>
                <nav>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[['#que-es','¿Qué es el DSA?'],['#niveles','4 niveles de proveedores'],['#obligaciones','Obligaciones por capa'],['#sedia','SEDIA en España'],['#sanciones','Sanciones']].map(([href,label]) => (
                      <li key={href} style={{ marginBottom: '0.5rem' }}>
                        <a href={href} style={{ color: 'var(--primary)', fontSize: '0.88rem', textDecoration: 'none' }}>{label as string}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="toc-card" style={{ background: 'linear-gradient(135deg,#7c3aed,#a78bfa)', border: 'none' }}>
                <h4 style={{ color: 'white' }}><i className="fas fa-network-wired"></i> ¿Aplica el DSA?</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', marginBottom: '1rem' }}>Analizamos si tu plataforma está sujeta al DSA y qué obligaciones te aplican.</p>
                <Link href="/contacto#diagnostico" className="btn btn-sm" style={{ background: 'white', color: '#7c3aed', width: '100%', justifyContent: 'center' }}>Consultar ahora</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
