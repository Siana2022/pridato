import Link from 'next/link'

export const metadata = {
  title: 'eIDAS 2 – Reglamento (UE) 2024/1183 de Identidad Digital · PRIDATO',
  description: 'Guía del Reglamento eIDAS 2: identidad digital europea, EUDI Wallet, firmas electrónicas cualificadas y confianza digital.',
}

export default function Eidas2Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-label"><i className="fas fa-id-card"></i> Normativa · UE 2024/1183</span>
          <h1>eIDAS 2 – Identidad Digital<br />Europea</h1>
          <p>El Reglamento eIDAS 2 introduce la Billetera de Identidad Digital Europea (EUDI Wallet) y moderniza el marco de confianza digital para toda la UE.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <i className="fas fa-chevron-right"></i>
            <Link href="/normativa">Normativa</Link>
            <i className="fas fa-chevron-right"></i>
            <span>eIDAS 2</span>
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
                  <div><strong>Nombre oficial</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Reglamento (UE) 2024/1183</span></div>
                  <div><strong>Publicación</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Abril 2024, DOUE</span></div>
                  <div><strong>Sustituye a</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>eIDAS original (UE 910/2014)</span></div>
                  <div><strong>EUDI Wallet</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Disponibilidad: 2026</span></div>
                </div>
              </div>

              <h2 id="que-es">¿Qué es eIDAS 2?</h2>
              <p>El Reglamento (UE) 2024/1183, conocido como eIDAS 2, moderniza el marco europeo de identidad y confianza digital. Sustituye al Reglamento eIDAS de 2014 e introduce como principal novedad la <strong>Billetera de Identidad Digital Europea (EUDI Wallet)</strong>.</p>
              <p>El objetivo es que para 2026, todos los ciudadanos de la UE puedan disponer de una cartera de identidad digital que les permita identificarse y firmar electrónicamente en cualquier Estado miembro y ante servicios públicos y privados.</p>

              <h2 id="eudi-wallet">EUDI Wallet – Billetera de Identidad Digital</h2>
              <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  { icon: 'fas fa-mobile-alt', title: '¿Qué es el EUDI Wallet?', desc: 'Una aplicación (app) proporcionada por cada Estado miembro que permite a los ciudadanos almacenar y gestionar su identidad digital, atributos personales y credenciales.' },
                  { icon: 'fas fa-shield-alt', title: '¿Qué se puede guardar?', desc: 'DNI/pasaporte digitales, permiso de conducir, diplomas y títulos académicos, recetas médicas, tarjetas de identificación profesional, y otros atributos certificados.' },
                  { icon: 'fas fa-globe', title: '¿Dónde se puede usar?', desc: 'Para identificarse ante administraciones públicas en toda la UE, acceder a servicios bancarios, plataformas online, seguros, y en cualquier servicio que lo acepte.' },
                  { icon: 'fas fa-user-lock', title: 'Control del usuario', desc: 'El ciudadano tiene control total sobre qué datos comparte, con quién y cuándo. No es necesario revelar más datos de los estrictamente necesarios (data minimization).' },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #86efac' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, fontSize: '1.1rem' }}>
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <strong style={{ color: '#166534', display: 'block', marginBottom: '0.3rem' }}>{item.title}</strong>
                      <p style={{ margin: 0, fontSize: '0.88rem', color: '#14532d' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 id="firmas">Firmas Electrónicas Cualificadas</h2>
              <p>eIDAS 2 mantiene y refuerza el marco de firmas electrónicas, que tiene tres niveles:</p>
              <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  { title: 'Firma electrónica simple', color: '#f0fdf4', border: '#22c55e', textColor: '#166534', desc: 'Cualquier dato en formato electrónico que se añade a otros datos y que sirve para firmar. Bajo nivel de garantía.' },
                  { title: 'Firma electrónica avanzada', color: '#eff6ff', border: '#3b82f6', textColor: '#1e40af', desc: 'Vinculada de forma unívoca al firmante, capaz de identificarle, creada con datos bajo su control exclusivo, y detecta cualquier modificación posterior.' },
                  { title: 'Firma electrónica cualificada', color: '#f0fdf4', border: '#059669', textColor: '#065f46', desc: 'Equivalente jurídico a la firma manuscrita en toda la UE. Basada en certificado cualificado y creada con dispositivo cualificado de creación de firma.' },
                ].map(f => (
                  <div key={f.title} style={{ padding: '1rem', background: f.color, borderRadius: '8px', border: `2px solid ${f.border}` }}>
                    <strong style={{ color: f.textColor }}>{f.title}</strong>
                    <p style={{ margin: '0.4rem 0 0', fontSize: '0.88rem', color: f.textColor }}>{f.desc}</p>
                  </div>
                ))}
              </div>

              <h2 id="obligaciones">Obligaciones para Servicios Privados</h2>
              <p>Una de las grandes novedades del eIDAS 2 es que <strong>los grandes servicios privados online</strong> (plataformas con más de 45 millones de usuarios en la UE) estarán obligados a aceptar el EUDI Wallet como método de identificación.</p>
              <ul style={{ marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Plataformas de muy gran tamaño bajo el DSA</li>
                <li style={{ marginBottom: '0.5rem' }}>Servicios bancarios y financieros regulados</li>
                <li style={{ marginBottom: '0.5rem' }}>Servicios de salud digitales</li>
                <li style={{ marginBottom: '0.5rem' }}>Transporte y utilities</li>
              </ul>

              <h2 id="calendario">Calendario de Implementación</h2>
              <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {[
                  { date: 'Abril 2024', event: 'Publicación del Reglamento eIDAS 2 en el DOUE', color: '#059669' },
                  { date: 'Noviembre 2024', event: 'Publicación de especificaciones técnicas del EUDI Wallet', color: '#0891b2' },
                  { date: '2025', event: 'Pilotos de referencia (Large Scale Pilots)', color: '#d97706' },
                  { date: '2026', event: 'Estados miembros deben ofrecer EUDI Wallet a sus ciudadanos', color: '#dc2626' },
                ].map(item => (
                  <div key={item.date} style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px', borderLeft: `4px solid ${item.color}` }}>
                    <div style={{ minWidth: '100px', fontWeight: 700, color: item.color, fontSize: '0.88rem' }}>{item.date}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{item.event}</div>
                  </div>
                ))}
              </div>

              <h2 id="confianza">Servicios de Confianza</h2>
              <p>eIDAS 2 amplía el catálogo de servicios de confianza cualificados, incluyendo nuevos servicios como:</p>
              <ul style={{ marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.4rem' }}>Gestión de atributos electrónicos cualificados</li>
                <li style={{ marginBottom: '0.4rem' }}>Archivado electrónico cualificado</li>
                <li style={{ marginBottom: '0.4rem' }}>Libros de registro electrónicos (blockchain)</li>
                <li style={{ marginBottom: '0.4rem' }}>Emisión de credenciales electrónicas</li>
              </ul>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link href="/contacto#diagnostico" className="btn btn-primary"><i className="fas fa-rocket"></i> Consultar eIDAS 2</Link>
                <Link href="/normativa/nis2" className="btn btn-outline">Ver NIS2</Link>
              </div>
            </article>

            <aside className="sidebar-sticky">
              <div className="toc-card">
                <h4><i className="fas fa-list"></i> En esta página</h4>
                <nav>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[['#que-es','¿Qué es eIDAS 2?'],['#eudi-wallet','EUDI Wallet'],['#firmas','Firmas electrónicas'],['#obligaciones','Obligaciones servicios'],['#calendario','Calendario'],['#confianza','Servicios de confianza']].map(([href,label]) => (
                      <li key={href} style={{ marginBottom: '0.5rem' }}>
                        <a href={href} style={{ color: 'var(--primary)', fontSize: '0.88rem', textDecoration: 'none' }}>{label as string}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="toc-card" style={{ background: 'linear-gradient(135deg,#059669,#10b981)', border: 'none' }}>
                <h4 style={{ color: 'white' }}><i className="fas fa-id-card"></i> ¿Listo para eIDAS 2?</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', marginBottom: '1rem' }}>Analizamos el impacto del eIDAS 2 en tu organización.</p>
                <Link href="/contacto#diagnostico" className="btn btn-sm" style={{ background: 'white', color: '#059669', width: '100%', justifyContent: 'center' }}>Consultar ahora</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
