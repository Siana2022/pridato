import Link from 'next/link'

export const metadata = {
  title: 'LSSI-CE – Ley 34/2002 de Servicios de la Sociedad de la Información · PRIDATO',
  description: 'Guía de la LSSI-CE: obligaciones para webs y servicios digitales, cookies, comercio electrónico y avisos legales en España.',
}

export default function LssiPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-label"><i className="fas fa-globe"></i> Normativa · Ley 34/2002</span>
          <h1>LSSI-CE – Ley de Servicios<br />de la Sociedad de la Información</h1>
          <p>Obligaciones para páginas web, tiendas online, aplicaciones y servicios digitales en España: aviso legal, cookies y comunicaciones comerciales.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <i className="fas fa-chevron-right"></i>
            <Link href="/normativa">Normativa</Link>
            <i className="fas fa-chevron-right"></i>
            <span>LSSI-CE</span>
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
                  <div><strong>Nombre oficial</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Ley 34/2002, de 11 de julio</span></div>
                  <div><strong>Ámbito</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>España (transposición Directiva 2000/31/CE)</span></div>
                  <div><strong>Aplicación</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Servicios de la sociedad de la información</span></div>
                  <div><strong>Autoridad</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>AEPD, Secretaría de Estado Digitalización</span></div>
                </div>
              </div>

              <h2 id="que-es">¿Qué es la LSSI-CE?</h2>
              <p>La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE) regula el régimen jurídico de los servicios de la sociedad de la información y de la contratación por vía electrónica.</p>
              <p>Afecta a cualquier empresa o profesional que ofrezca servicios online a través de internet, incluyendo tiendas online, portales web, aplicaciones, plataformas SaaS y cualquier servicio digital dirigido a usuarios en España.</p>

              <h2 id="ambito">Ámbito de aplicación</h2>
              <p>La LSSI-CE se aplica a los <strong>prestadores de servicios de la sociedad de la información</strong>, que son las personas físicas o jurídicas que prestan un servicio normalmente a título oneroso, a distancia, por vía electrónica y a petición individual del destinatario.</p>
              <ul style={{ marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Tiendas online y e-commerce</li>
                <li style={{ marginBottom: '0.5rem' }}>Sitios web empresariales con servicios o contratación</li>
                <li style={{ marginBottom: '0.5rem' }}>Aplicaciones móviles y plataformas SaaS</li>
                <li style={{ marginBottom: '0.5rem' }}>Plataformas de intermediación (marketplaces)</li>
                <li style={{ marginBottom: '0.5rem' }}>Redes sociales y plataformas de contenido</li>
                <li style={{ marginBottom: '0.5rem' }}>Servicios de publicidad online</li>
              </ul>

              <h2 id="aviso-legal">Obligación de Aviso Legal</h2>
              <p>Todo prestador de servicios debe disponer de un <strong>aviso legal</strong> accesible de forma permanente en su web o aplicación. El art. 10 LSSI-CE establece la información mínima obligatoria:</p>
              <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {[
                  { icon: 'fas fa-user', label: 'Nombre o denominación social', desc: 'Nombre completo o razón social del prestador.' },
                  { icon: 'fas fa-map-marker-alt', label: 'Domicilio y dirección postal', desc: 'Dirección completa donde está establecido el prestador.' },
                  { icon: 'fas fa-envelope', label: 'Datos de contacto', desc: 'Dirección de correo electrónico u otro medio de contacto directo y efectivo.' },
                  { icon: 'fas fa-id-card', label: 'NIF/CIF', desc: 'Número de Identificación Fiscal de la empresa o profesional.' },
                  { icon: 'fas fa-certificate', label: 'Datos de registro (si aplica)', desc: 'Si la empresa está inscrita en el Registro Mercantil u otro registro público.' },
                  { icon: 'fas fa-gavel', label: 'Colegios profesionales (si aplica)', desc: 'Para profesiones liberales: colegio profesional, número de colegiado y normas deontológicas.' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '0.75rem', padding: '0.85rem', background: '#f8fafc', borderRadius: '8px' }}>
                    <i className={item.icon} style={{ color: 'var(--primary)', marginTop: '0.2rem', width: '16px', flexShrink: 0 }}></i>
                    <div>
                      <strong style={{ fontSize: '0.9rem', color: 'var(--primary-dark)' }}>{item.label}</strong>
                      <p style={{ margin: '0.2rem 0 0', fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 id="cookies">Régimen de Cookies</h2>
              <p>El art. 22.2 LSSI-CE regula las cookies y dispositivos de almacenamiento y recuperación de datos. La AEPD desarrolló la Guía sobre el uso de Cookies (actualizada en 2023).</p>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4>Tipos de cookies según necesidad de consentimiento</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ padding: '1rem', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #86efac' }}>
                    <strong style={{ color: '#166534' }}><i className="fas fa-check-circle"></i> Exentas de consentimiento</strong>
                    <ul style={{ marginTop: '0.5rem', marginBottom: 0, fontSize: '0.85rem', color: '#14532d' }}>
                      <li>Cookies técnicas (sesión, carrito)</li>
                      <li>Cookies de preferencias (idioma)</li>
                      <li>Cookies de seguridad</li>
                    </ul>
                  </div>
                  <div style={{ padding: '1rem', background: '#fee2e2', borderRadius: '8px', border: '1px solid #fca5a5' }}>
                    <strong style={{ color: '#991b1b' }}><i className="fas fa-times-circle"></i> Requieren consentimiento</strong>
                    <ul style={{ marginTop: '0.5rem', marginBottom: 0, fontSize: '0.85rem', color: '#7f1d1d' }}>
                      <li>Cookies analíticas</li>
                      <li>Cookies de marketing</li>
                      <li>Cookies de redes sociales</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 id="comunicaciones">Comunicaciones Comerciales</h2>
              <p>El art. 21 LSSI-CE prohíbe el envío de comunicaciones comerciales no solicitadas por correo electrónico u otras vías equivalentes de comunicación electrónica, salvo que:</p>
              <ul style={{ marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>El destinatario haya dado su consentimiento previo y expreso</li>
                <li style={{ marginBottom: '0.5rem' }}>El remitente haya obtenido los datos en el contexto de una relación contractual previa (para productos similares)</li>
                <li style={{ marginBottom: '0.5rem' }}>En todo caso, el destinatario debe poder oponerse fácilmente al envío futuro</li>
              </ul>

              <h2 id="sanciones">Sanciones</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  { color: '#fee2e2', borderColor: '#fca5a5', textColor: '#dc2626', amount: '600.001€', level: 'Muy graves', desc: 'Incumplimientos que afecten la seguridad nacional, salud pública o derechos fundamentales.' },
                  { color: '#fef3c7', borderColor: '#fcd34d', textColor: '#d97706', amount: '150.001€ – 600.000€', level: 'Graves', desc: 'Incumplimiento de obligaciones de información, envío de spam.' },
                  { color: '#f0fdf4', borderColor: '#86efac', textColor: '#16a34a', amount: 'Hasta 30.000€', level: 'Leves', desc: 'Irregularidades en los datos del aviso legal o en el procedimiento de comunicaciones.' },
                ].map(s => (
                  <div key={s.level} style={{ padding: '1.25rem', background: s.color, borderRadius: '10px', border: `1px solid ${s.borderColor}` }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: s.textColor }}>{s.amount}</div>
                    <div style={{ fontWeight: 600, marginBottom: '0.3rem', color: s.textColor }}>{s.level}</div>
                    <p style={{ fontSize: '0.82rem', margin: 0, color: s.textColor }}>{s.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link href="/contacto#diagnostico" className="btn btn-primary"><i className="fas fa-rocket"></i> Auditar mi web</Link>
                <Link href="/normativa/rgpd" className="btn btn-outline">Ver guía RGPD</Link>
              </div>
            </article>

            <aside className="sidebar-sticky">
              <div className="toc-card">
                <h4><i className="fas fa-list"></i> En esta página</h4>
                <nav>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[['#que-es','¿Qué es la LSSI-CE?'],['#ambito','Ámbito de aplicación'],['#aviso-legal','Aviso Legal'],['#cookies','Cookies'],['#comunicaciones','Comunicaciones comerciales'],['#sanciones','Sanciones']].map(([href,label]) => (
                      <li key={href} style={{ marginBottom: '0.5rem' }}>
                        <a href={href} style={{ color: 'var(--primary)', fontSize: '0.88rem', textDecoration: 'none' }}>{label as string}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="toc-card" style={{ background: 'linear-gradient(135deg,var(--primary-dark),var(--primary))', border: 'none' }}>
                <h4 style={{ color: 'white' }}><i className="fas fa-globe"></i> ¿Tu web cumple la LSSI?</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1rem' }}>Auditamos tu web y preparamos el aviso legal y política de cookies.</p>
                <Link href="/contacto#diagnostico" className="btn btn-accent btn-sm" style={{ width: '100%', justifyContent: 'center' }}>Auditar mi web</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
