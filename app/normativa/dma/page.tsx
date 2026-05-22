import Link from 'next/link'

export const metadata = {
  title: 'DMA – Digital Markets Act (UE) 2022/1925 · PRIDATO',
  description: 'Guía del Digital Markets Act: gatekeepers, mercados digitales, obligaciones e interoperabilidad para plataformas dominantes.',
}

export default function DmaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-label"><i className="fas fa-store"></i> Normativa · UE 2022/1925</span>
          <h1>DMA – Digital Markets Act</h1>
          <p>El Reglamento de Mercados Digitales regula la conducta de los grandes gatekeepers digitales para garantizar la competencia en los mercados digitales.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <i className="fas fa-chevron-right"></i>
            <Link href="/normativa">Normativa</Link>
            <i className="fas fa-chevron-right"></i>
            <span>DMA</span>
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
                  <div><strong>Nombre oficial</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Reglamento (UE) 2022/1925</span></div>
                  <div><strong>Aplicación</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>2 de mayo de 2023</span></div>
                  <div><strong>Sanción máxima</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>10% facturación global</span></div>
                  <div><strong>Reincidencia</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Hasta 20% facturación</span></div>
                  <div><strong>Desinversión forzosa</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>En caso de infracciones sistemáticas</span></div>
                </div>
              </div>

              <h2 id="que-es">¿Qué es el DMA?</h2>
              <p>El Reglamento de Mercados Digitales (DMA) establece obligaciones y prohibiciones para los <strong>gatekeepers</strong>: las grandes plataformas digitales que actúan como guardianas de acceso a los mercados digitales. Su objetivo es garantizar que los mercados digitales sean contestables y justos.</p>
              <p>A diferencia del RGPD o la NIS2, el DMA no afecta a la mayoría de empresas. Se centra exclusivamente en un grupo reducido de gigantes tecnológicos que controlan los puntos de acceso clave del ecosistema digital.</p>

              <h2 id="gatekeepers">Gatekeepers Designados</h2>
              <p>La Comisión Europea ha designado como gatekeepers a las siguientes empresas (a fecha 2024):</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {['Apple', 'Google / Alphabet', 'Meta', 'Amazon', 'Microsoft', 'ByteDance (TikTok)'].map(g => (
                  <div key={g} style={{ padding: '1rem', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                    <i className="fas fa-building" style={{ color: 'var(--primary)', fontSize: '1.4rem', marginBottom: '0.5rem', display: 'block' }}></i>
                    <strong style={{ fontSize: '0.88rem', color: 'var(--primary-dark)' }}>{g}</strong>
                  </div>
                ))}
              </div>

              <h2 id="umbrales">Umbrales para ser Gatekeeper</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  { amount: '7.500M€', label: 'Facturación anual en la UE', color: '#0891b2' },
                  { amount: '45M', label: 'Usuarios finales mensuales activos en la UE', color: '#7c3aed' },
                  { amount: '10.000', label: 'Usuarios empresariales anuales activos en la UE', color: '#059669' },
                ].map(u => (
                  <div key={u.amount} style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: '10px', border: `2px solid ${u.color}`, textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: u.color }}>{u.amount}</div>
                    <div style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>{u.label}</div>
                  </div>
                ))}
              </div>

              <h2 id="sbp">Servicios Básicos de Plataforma (SBP)</h2>
              <p>El DMA regula los servicios básicos de plataforma (SBP) que los gatekeepers ofrecen. Entre ellos:</p>
              <ul style={{ marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.4rem' }}>Motores de búsqueda en línea</li>
                <li style={{ marginBottom: '0.4rem' }}>Redes sociales</li>
                <li style={{ marginBottom: '0.4rem' }}>Servicios de intermediación en línea (marketplaces)</li>
                <li style={{ marginBottom: '0.4rem' }}>Sistemas operativos</li>
                <li style={{ marginBottom: '0.4rem' }}>Servicios de computación en nube (IaaS, PaaS, SaaS)</li>
                <li style={{ marginBottom: '0.4rem' }}>Servicios de publicidad en línea</li>
                <li style={{ marginBottom: '0.4rem' }}>Servicios de mensajería (WhatsApp, iMessage)</li>
                <li>Navegadores web</li>
              </ul>

              <h2 id="obligaciones-prohibiciones">Obligaciones y Prohibiciones</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <h4 style={{ color: '#dc2626', marginBottom: '0.75rem' }}><i className="fas fa-times-circle"></i> Prohibiciones (arts. 5-7)</h4>
                  <ul style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', background: '#fee2e2', padding: '1rem 1rem 1rem 1.5rem', borderRadius: '8px' }}>
                    <li style={{ marginBottom: '0.5rem' }}>Combinar datos personales entre diferentes SBP sin consentimiento</li>
                    <li style={{ marginBottom: '0.5rem' }}>Favorecer los propios servicios frente a terceros (self-preferencing)</li>
                    <li style={{ marginBottom: '0.5rem' }}>Impedir desinstalar apps preinstaladas</li>
                    <li style={{ marginBottom: '0.5rem' }}>Usar datos de usuarios empresariales para competir contra ellos</li>
                    <li>Impedir acceso a tiendas de aplicaciones de terceros</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#059669', marginBottom: '0.75rem' }}><i className="fas fa-check-circle"></i> Obligaciones (arts. 5-7)</h4>
                  <ul style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', background: '#f0fdf4', padding: '1rem 1rem 1rem 1.5rem', borderRadius: '8px' }}>
                    <li style={{ marginBottom: '0.5rem' }}>Garantizar la interoperabilidad de servicios de mensajería</li>
                    <li style={{ marginBottom: '0.5rem' }}>Permitir portabilidad de datos en tiempo real</li>
                    <li style={{ marginBottom: '0.5rem' }}>Ofrecer a usuarios elegir servicios predeterminados (browsers, motores de búsqueda)</li>
                    <li style={{ marginBottom: '0.5rem' }}>Transparencia en publicidad y algoritmos de ranking</li>
                    <li>Acceso a datos de terceros anunciantes</li>
                  </ul>
                </div>
              </div>

              <div className="info-box" style={{ marginBottom: '1.5rem' }}>
                <strong><i className="fas fa-gavel"></i> Primera multa DMA 2024 – Apple</strong>
                <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem' }}>En marzo de 2024, la Comisión Europea impuso a Apple la primera multa por incumplimiento del DMA: <strong>1.840 millones de euros</strong> por abuso de posición dominante en la distribución de apps de streaming de música. Apple fue obligada a modificar el App Store para permitir a los desarrolladores dirigir a los usuarios a ofertas fuera de la tienda.</p>
              </div>

              <h2 id="sanciones">Sanciones</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  { amount: '10%', label: 'Facturación global por incumplimiento del DMA', color: '#dc2626', bg: '#fee2e2', border: '#fca5a5' },
                  { amount: '20%', label: 'Facturación global en caso de reincidencia', color: '#991b1b', bg: '#fee2e2', border: '#f87171' },
                  { amount: '5%/día', label: 'Multa coercitiva diaria por incumplimiento', color: '#d97706', bg: '#fef3c7', border: '#fcd34d' },
                ].map(s => (
                  <div key={s.amount} style={{ padding: '1.25rem', background: s.bg, borderRadius: '10px', border: `1px solid ${s.border}` }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: s.color }}>{s.amount}</div>
                    <div style={{ fontSize: '0.83rem', color: s.color }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>En caso de infracciones sistemáticas (3 veces en 8 años), la Comisión puede imponer como último recurso la desinversión forzosa de activos o la prohibición de adquisiciones por un período.</p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link href="/contacto#diagnostico" className="btn btn-primary"><i className="fas fa-rocket"></i> Consultar DMA</Link>
                <Link href="/normativa/dsa" className="btn btn-outline">Ver DSA</Link>
              </div>
            </article>

            <aside className="sidebar-sticky">
              <div className="toc-card">
                <h4><i className="fas fa-list"></i> En esta página</h4>
                <nav>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[['#que-es','¿Qué es el DMA?'],['#gatekeepers','Gatekeepers designados'],['#umbrales','Umbrales gatekeeper'],['#sbp','Servicios básicos (SBP)'],['#obligaciones-prohibiciones','Obligaciones y prohibiciones'],['#sanciones','Sanciones']].map(([href,label]) => (
                      <li key={href} style={{ marginBottom: '0.5rem' }}>
                        <a href={href} style={{ color: 'var(--primary)', fontSize: '0.88rem', textDecoration: 'none' }}>{label as string}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="toc-card" style={{ background: 'linear-gradient(135deg,#0ea5e9,#38bdf8)', border: 'none' }}>
                <h4 style={{ color: 'white' }}><i className="fas fa-store"></i> ¿Afecta el DMA?</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', marginBottom: '1rem' }}>El DMA afecta principalmente a gatekeepers, pero también a empresas que dependen de sus plataformas. Analizamos tu situación.</p>
                <Link href="/contacto#diagnostico" className="btn btn-sm" style={{ background: 'white', color: '#0ea5e9', width: '100%', justifyContent: 'center' }}>Consultar</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
