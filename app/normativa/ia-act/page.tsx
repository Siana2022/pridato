import Link from 'next/link'

export const metadata = {
  title: 'IA Act – Reglamento (UE) 2024/1689 de Inteligencia Artificial · PRIDATO',
  description: 'Guía completa del IA Act: clasificación por riesgo, prácticas prohibidas, obligaciones sistemas alto riesgo, GPAI y calendario de aplicación.',
}

export default function IaActPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-label"><i className="fas fa-robot"></i> Normativa · UE 2024/1689</span>
          <h1>IA Act – Reglamento de<br />Inteligencia Artificial</h1>
          <p>El primer reglamento mundial de inteligencia artificial. Clasifica los sistemas de IA por nivel de riesgo y establece obligaciones específicas para proveedores y usuarios.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <i className="fas fa-chevron-right"></i>
            <Link href="/normativa">Normativa</Link>
            <i className="fas fa-chevron-right"></i>
            <span>IA Act</span>
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
                  <div><strong>Nombre oficial</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Reglamento (UE) 2024/1689</span></div>
                  <div><strong>Publicación</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Julio 2024, DOUE</span></div>
                  <div><strong>Entrada en vigor</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Agosto 2024</span></div>
                  <div><strong>Aplicación plena</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Agosto 2026</span></div>
                  <div><strong>Sanción máxima</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>35.000.000 € o 7% facturación</span></div>
                  <div><strong>Ámbito</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Unión Europea + extraterritorial</span></div>
                </div>
              </div>

              <div className="info-box" style={{ marginBottom: '2rem' }}>
                <strong><i className="fas fa-calendar-alt"></i> Calendario de aplicación progresiva</strong>
                <div style={{ display: 'grid', gap: '0.5rem', marginTop: '0.75rem' }}>
                  {[
                    { date: 'Agosto 2024', desc: 'Entrada en vigor del Reglamento', color: '#16a34a' },
                    { date: 'Febrero 2025', desc: 'Prohibiciones de IA de riesgo inaceptable', color: '#d97706' },
                    { date: 'Agosto 2025', desc: 'Obligaciones para modelos GPAI', color: '#d97706' },
                    { date: 'Agosto 2026', desc: 'Aplicación plena para sistemas de alto riesgo (Anexo III)', color: '#dc2626' },
                    { date: 'Agosto 2027', desc: 'Sistemas de alto riesgo Anexo I (productos regulados)', color: '#dc2626' },
                  ].map(item => (
                    <div key={item.date} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <div style={{ minWidth: '120px', fontWeight: 600, fontSize: '0.85rem', color: item.color }}>{item.date}</div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 id="que-es">¿Qué es el IA Act?</h2>
              <p>El Reglamento (UE) 2024/1689, también conocido como IA Act, es la primera regulación integral sobre inteligencia artificial en el mundo. Adopta un enfoque basado en el riesgo: cuanto mayor sea el riesgo de un sistema de IA, más estrictas son las obligaciones.</p>
              <p>El IA Act se aplica a proveedores (quienes desarrollan sistemas de IA), usuarios (quienes los despliegan) e importadores y distribuidores. También se aplica a sistemas de IA utilizados en la UE aunque el proveedor esté fuera del territorio europeo.</p>

              <h2 id="clasificacion">Clasificación por Nivel de Riesgo</h2>
              <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '1.25rem', background: '#fee2e2', borderRadius: '10px', border: '2px solid #dc2626' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, flexShrink: 0 }}>🚫</div>
                    <h4 style={{ margin: 0, color: '#991b1b' }}>Riesgo Inaceptable – PROHIBIDO (Art. 5)</h4>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#7f1d1d', marginBottom: '0.5rem' }}>Sistemas prohibidos por vulnerar derechos fundamentales. Su uso está completamente vetado desde febrero 2025.</p>
                  <ul style={{ fontSize: '0.85rem', color: '#7f1d1d', marginBottom: 0 }}>
                    <li>Manipulación subliminal del comportamiento humano</li>
                    <li>Explotación de vulnerabilidades de grupos específicos</li>
                    <li>Sistemas de puntuación social (social scoring) por autoridades públicas</li>
                    <li>Reconocimiento facial en tiempo real en espacios públicos (con excepciones)</li>
                    <li>Inferencia de emociones en lugares de trabajo y centros educativos</li>
                  </ul>
                </div>
                <div style={{ padding: '1.25rem', background: '#fff7ed', borderRadius: '10px', border: '2px solid #f97316' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, flexShrink: 0 }}>⚠️</div>
                    <h4 style={{ margin: 0, color: '#c2410c' }}>Alto Riesgo – Obligaciones estrictas (Anexo III)</h4>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#9a3412', marginBottom: '0.5rem' }}>Sistemas que pueden tener impacto significativo en la vida de las personas. Requieren conformidad antes de su despliegue.</p>
                  <ul style={{ fontSize: '0.85rem', color: '#9a3412', marginBottom: 0 }}>
                    <li>Sistemas biométricos de identificación remota</li>
                    <li>IA en infraestructuras críticas (energía, agua, transporte)</li>
                    <li>Sistemas educativos (admisión, evaluación)</li>
                    <li>IA en empleo (reclutamiento, evaluación, ascensos)</li>
                    <li>Acceso a servicios esenciales (crédito, seguros, asistencia social)</li>
                    <li>IA en justicia y procesos democráticos</li>
                  </ul>
                </div>
                <div style={{ padding: '1.25rem', background: '#eff6ff', borderRadius: '10px', border: '2px solid #3b82f6' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, flexShrink: 0 }}>ℹ️</div>
                    <h4 style={{ margin: 0, color: '#1e40af' }}>Riesgo Limitado – Transparencia</h4>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#1e3a8a', marginBottom: 0 }}>Chatbots, deepfakes, sistemas de detección emocional: obligaciones de transparencia e información al usuario sobre la naturaleza artificial del sistema.</p>
                </div>
                <div style={{ padding: '1.25rem', background: '#f0fdf4', borderRadius: '10px', border: '2px solid #22c55e' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, flexShrink: 0 }}>✅</div>
                    <h4 style={{ margin: 0, color: '#166534' }}>Riesgo Mínimo – Sin obligaciones específicas</h4>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#14532d', marginBottom: 0 }}>La mayoría de los sistemas de IA: filtros de spam, videojuegos con IA, herramientas de productividad. Solo se anima a seguir los códigos de conducta voluntarios.</p>
                </div>
              </div>

              <h2 id="obligaciones">Obligaciones Sistemas Alto Riesgo</h2>
              <div className="accordion">
                {[
                  { title: 'Art. 9 · Sistema de gestión de riesgos', content: 'Proceso continuo de identificación, análisis y mitigación de riesgos durante todo el ciclo de vida del sistema de IA.' },
                  { title: 'Art. 10 · Gobernanza de datos', content: 'Los datos de entrenamiento, validación y prueba deben ser pertinentes, representativos, no sesgados y apropiados para los fines del sistema.' },
                  { title: 'Art. 11 · Documentación técnica', content: 'Documentación completa que demuestre el cumplimiento antes de la comercialización. Debe mantenerse actualizada durante todo el ciclo de vida.' },
                  { title: 'Art. 12 · Registro de eventos (logs)', content: 'Los sistemas de alto riesgo deben ser capaces de registrar automáticamente los eventos relevantes durante su funcionamiento.' },
                  { title: 'Art. 13 · Transparencia e información', content: 'Los usuarios deben recibir información clara y comprensible sobre las capacidades y limitaciones del sistema. Instrucciones de uso.' },
                  { title: 'Art. 14 · Supervisión humana', content: 'Diseño que permita a personas naturales supervisar eficazmente el funcionamiento y poder intervenir o anular el sistema.' },
                  { title: 'Art. 15 · Exactitud, robustez y ciberseguridad', content: 'Niveles apropiados de exactitud, robustez y ciberseguridad durante todo el ciclo de vida, con medidas contra adversarial attacks.' },
                ].map(o => (
                  <div key={o.title}>
                    <div className="accordion-header"><i className="fas fa-cog" style={{ marginRight: '0.5rem' }}></i>{o.title}<i className="fas fa-chevron-down" style={{ marginLeft: 'auto' }}></i></div>
                    <div className="accordion-body">{o.content}</div>
                  </div>
                ))}
              </div>

              <h2 id="gpai" style={{ marginTop: '2rem' }}>Modelos de IA de Propósito General (GPAI)</h2>
              <p>El IA Act regula específicamente los modelos de IA de propósito general (General Purpose AI, GPAI) como GPT-4, Gemini o Claude. Se distinguen dos categorías:</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '1rem', background: '#fef3c7', borderRadius: '8px', border: '1px solid #fcd34d' }}>
                  <strong style={{ color: '#92400e' }}>GPAI estándar</strong>
                  <ul style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#78350f' }}>
                    <li>Documentación técnica</li>
                    <li>Política de derechos de autor</li>
                    <li>Resumen de datos de entrenamiento</li>
                  </ul>
                </div>
                <div style={{ padding: '1rem', background: '#fee2e2', borderRadius: '8px', border: '1px solid #fca5a5' }}>
                  <strong style={{ color: '#991b1b' }}>GPAI de alto impacto sistémico (&gt;10²⁵ FLOPs)</strong>
                  <ul style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#7f1d1d' }}>
                    <li>Todo lo anterior más evaluación de riesgos sistémicos</li>
                    <li>Incidentes graves a la Comisión</li>
                    <li>Ciberseguridad reforzada</li>
                  </ul>
                </div>
              </div>

              <h2 id="sanciones">Sanciones</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  { amount: '35M€ / 7%', level: 'Prácticas prohibidas', color: '#dc2626', bg: '#fee2e2', border: '#fca5a5' },
                  { amount: '15M€ / 3%', level: 'Alto riesgo y GPAI', color: '#d97706', bg: '#fef3c7', border: '#fcd34d' },
                  { amount: '7.5M€ / 1.5%', level: 'Información incorrecta', color: '#16a34a', bg: '#f0fdf4', border: '#86efac' },
                ].map(s => (
                  <div key={s.level} style={{ padding: '1.25rem', background: s.bg, borderRadius: '10px', border: `1px solid ${s.border}` }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: s.color }}>{s.amount}</div>
                    <div style={{ fontWeight: 600, color: s.color, fontSize: '0.88rem' }}>{s.level}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link href="/servicios#ia" className="btn btn-primary"><i className="fas fa-robot"></i> Servicio IA Act</Link>
                <Link href="/contacto#diagnostico" className="btn btn-outline">Diagnóstico IA Act</Link>
              </div>
            </article>

            <aside className="sidebar-sticky">
              <div className="toc-card">
                <h4><i className="fas fa-calendar"></i> Calendario clave</h4>
                <div style={{ fontSize: '0.83rem' }}>
                  {[['Feb 2025','Prohibiciones aplicables'],['Ago 2025','Obligaciones GPAI'],['Ago 2026','Alto riesgo Anexo III'],['Ago 2027','Anexo I productos']].map(([d,l]) => (
                    <div key={d} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', padding: '0.4rem 0' }}>
                      <span style={{ fontWeight: 600, color: 'var(--primary-dark)' }}>{d}</span>
                      <span style={{ color: 'var(--text-muted)', maxWidth: '140px', textAlign: 'right' }}>{l}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="toc-card">
                <h4><i className="fas fa-list"></i> En esta página</h4>
                <nav>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[['#que-es','¿Qué es el IA Act?'],['#clasificacion','Clasificación por riesgo'],['#obligaciones','Obligaciones alto riesgo'],['#gpai','Modelos GPAI'],['#sanciones','Sanciones']].map(([href,label]) => (
                      <li key={href} style={{ marginBottom: '0.5rem' }}>
                        <a href={href} style={{ color: 'var(--primary)', fontSize: '0.88rem', textDecoration: 'none' }}>{label as string}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="toc-card" style={{ background: 'linear-gradient(135deg,#f59e0b,#d97706)', border: 'none' }}>
                <h4 style={{ color: 'white' }}><i className="fas fa-robot"></i> ¿Cumples el IA Act?</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', marginBottom: '1rem' }}>Clasificamos tus sistemas y preparamos el plan de cumplimiento.</p>
                <Link href="/servicios#ia" className="btn btn-sm" style={{ background: 'white', color: '#d97706', width: '100%', justifyContent: 'center' }}>Ver servicio IA Act</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
