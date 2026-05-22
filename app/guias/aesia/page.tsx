import Link from 'next/link'

export const metadata = {
  title: 'Las 16 Guías AESIA – Inteligencia Artificial · PRIDATO',
  description: 'Las 16 Guías de la Agencia Española de Supervisión de Inteligencia Artificial: clasificación de riesgos, transparencia, gobernanza y más.',
}

const guiasAesia = [
  { id: 'G1', title: 'Ámbito de aplicación del IA Act', desc: 'Determina si tu organización está sujeta al IA Act: proveedores, usuarios, operadores de sistemas de IA y entidades excluidas del ámbito de aplicación.', tags: ['Ámbito', 'Proveedores', 'Usuarios'] },
  { id: 'G2', title: 'Sistemas de IA de alto riesgo', desc: 'Identificación y clasificación de sistemas de IA de alto riesgo según el Anexo III del IA Act: empleo, crédito, biometría, educación, justicia y sectores críticos.', tags: ['Alto riesgo', 'Anexo III', 'Clasificación'] },
  { id: 'G3', title: 'Transparencia en sistemas de IA', desc: 'Obligaciones de información para sistemas de IA de riesgo limitado: chatbots, deepfakes, detección de emociones y sistemas de recomendación.', tags: ['Transparencia', 'Chatbots', 'Deepfakes'] },
  { id: 'G4', title: 'Prácticas de IA prohibidas', desc: 'Detalla las prácticas de IA prohibidas desde febrero de 2025: manipulación subliminal, social scoring, reconocimiento facial en espacios públicos.', tags: ['Prohibiciones', 'Art. 5', 'Feb 2025'] },
  { id: 'G5', title: 'Gobernanza y supervisión humana', desc: 'Diseño e implementación de mecanismos de supervisión humana efectiva en sistemas de IA de alto riesgo según el artículo 14 del IA Act.', tags: ['Gobernanza', 'Supervisión', 'Art. 14'] },
  { id: 'G6', title: 'Datos y gobernanza de datos en IA', desc: 'Requisitos para los datos de entrenamiento, validación y prueba: pertinencia, representatividad, ausencia de sesgos y privacidad desde el diseño.', tags: ['Datos', 'Sesgos', 'Art. 10'] },
  { id: 'G7', title: 'Documentación técnica', desc: 'Contenido y formato de la documentación técnica obligatoria para sistemas de alto riesgo (art. 11): descripción, datos, métricas, limitaciones.', tags: ['Documentación', 'Art. 11', 'Registro UE'] },
  { id: 'G8', title: 'Gestión de riesgos en IA', desc: 'Sistema continuo de gestión de riesgos según el art. 9 del IA Act: identificación, análisis, evaluación y mitigación de riesgos durante todo el ciclo de vida.', tags: ['Gestión riesgos', 'Art. 9', 'Ciclo de vida'] },
  { id: 'G9', title: 'Evaluación de conformidad', desc: 'Procedimientos de evaluación de conformidad para sistemas de IA de alto riesgo: autoevaluación vs. evaluación por tercero notificado.', tags: ['Conformidad', 'Certificación', 'Organismo notificado'] },
  { id: 'G10', title: 'Registro y notificación', desc: 'Obligaciones de registro en la base de datos UE de sistemas de IA de alto riesgo (EUDRAIS) y notificación a las autoridades competentes.', tags: ['Registro', 'EUDRAIS', 'Notificación'] },
  { id: 'G11', title: 'Medidas de ciberseguridad en IA', desc: 'Requisitos de ciberseguridad para sistemas de IA de alto riesgo (art. 15): robustez, resistencia a ataques adversariales y medidas de protección.', tags: ['Ciberseguridad', 'Robustez', 'Art. 15'] },
  { id: 'G12', title: 'Derechos fundamentales e IA', desc: 'Evaluación del impacto en derechos fundamentales (FRIA, art. 27) para entidades públicas y organismos de derecho privado que usen sistemas de alto riesgo.', tags: ['DDHH', 'FRIA', 'Art. 27'] },
  { id: 'G13', title: 'Modelos de IA de propósito general (GPAI)', desc: 'Obligaciones para proveedores de modelos GPAI (GPT, Gemini, Claude): documentación, política de derechos de autor y evaluación de riesgos sistémicos.', tags: ['GPAI', 'Modelos fundacionales', 'Código conducta'] },
  { id: 'G14', title: 'Sandboxes regulatorios de IA', desc: 'Marco para los espacios controlados de pruebas (sandboxes) donde desarrollar y probar sistemas de IA innovadores bajo la supervisión de la AESIA.', tags: ['Sandbox', 'Innovación', 'Pruebas'] },
  { id: 'G15', title: 'Proveedores y usuarios de IA', desc: 'Delimitación de responsabilidades entre proveedores (developers) y usuarios (deployers) de sistemas de IA: cuándo se convierte un usuario en proveedor.', tags: ['Proveedores', 'Usuarios', 'Responsabilidades'] },
  { id: 'G16', title: 'Sistemas de IA en el sector público', desc: 'Obligaciones específicas para las Administraciones Públicas como usuarias de sistemas de IA de alto riesgo: evaluación de impacto en DDHH y transparencia.', tags: ['Sector público', 'AAPP', 'FRIA obligatoria'] },
]

export default function AesiaPage() {
  return (
    <>
      <style>{`
        .aesia-card { background: white; border-radius: 14px; padding: 1.5rem; border: 1px solid #e2e8f0; transition: all 0.25s; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
        .aesia-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.12); border-color: #f59e0b; }
        .aesia-badge { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: linear-gradient(135deg,#f59e0b,#d97706); color: white; border-radius: 10px; font-weight: 800; font-size: 0.82rem; margin-bottom: 0.75rem; flex-shrink: 0; }
        .aesia-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
        .aesia-tag { padding: 0.2rem 0.55rem; background: #fef3c7; border-radius: 20px; font-size: 0.77rem; color: #92400e; }
      `}</style>

      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-label"><i className="fas fa-microchip"></i> Guías AESIA · 16 Guías</span>
          <h1>Las 16 Guías AESIA<br />de Inteligencia Artificial</h1>
          <p>La Agencia Española de Supervisión de la Inteligencia Artificial (AESIA) ha publicado 16 guías para facilitar la aplicación del IA Act en España.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <i className="fas fa-chevron-right"></i>
            <Link href="/guias/aepd">Guías</Link>
            <i className="fas fa-chevron-right"></i>
            <span>AESIA</span>
          </nav>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="stats-bar fade-in" style={{ marginBottom: '3rem' }}>
            <div className="stat-item">
              <div className="stat-number">16</div>
              <div className="stat-label">Guías publicadas</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">2024</div>
              <div className="stat-label">Año de publicación</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number"><span data-count="35" data-suffix="M€">0M€</span></div>
              <div className="stat-label">Multa máxima IA Act</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">AESIA</div>
              <div className="stat-label">Supervisor español IA</div>
            </div>
          </div>

          <div className="section-header fade-in">
            <span className="section-label"><i className="fas fa-robot"></i> IA Act en España</span>
            <h2>Las 16 Guías AESIA</h2>
            <p>Cada guía aborda un aspecto específico del IA Act. En PRIDATO analizamos cada guía y te explicamos qué significa para tu organización.</p>
          </div>

          <div className="aesia-grid fade-in">
            {guiasAesia.map(g => (
              <div key={g.id} className="aesia-card">
                <div className="aesia-badge">{g.id}</div>
                <h4 style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>{g.title}</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>{g.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                  {g.tags.map(t => <span key={t} className="aesia-tag">{t}</span>)}
                </div>
                <Link href="/contacto#diagnostico" className="btn btn-outline btn-sm" style={{ fontSize: '0.82rem' }}>Aplicar en mi empresa <i className="fas fa-arrow-right"></i></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="content-grid fade-in">
            <div>
              <span className="section-label"><i className="fas fa-building"></i> Sobre la AESIA</span>
              <h2>La Agencia Española de Supervisión de IA</h2>
              <p>La AESIA es la autoridad de supervisión española para la aplicación del IA Act. Fue creada en 2024 y tiene su sede en A Coruña. Es la autoridad de referencia para la supervisión de sistemas de IA de propósito general (GPAI) a nivel europeo.</p>
              <ul style={{ marginTop: '1rem' }}>
                {[
                  'Supervisión del cumplimiento del IA Act en España',
                  'Supervisión europea de modelos GPAI',
                  'Publicación de guías y orientaciones técnicas',
                  'Gestión de los sandboxes regulatorios de IA',
                  'Coordinación con otras autoridades europeas (EDPB, ENISA)',
                  'Punto de contacto para el mercado único de la IA',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', listStyle: 'none' }}>
                    <i className="fas fa-check-circle" style={{ color: '#f59e0b', marginTop: '0.2rem', flexShrink: 0 }}></i>
                    <span style={{ fontSize: '0.9rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contacto#diagnostico" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                <i className="fas fa-rocket"></i> Prepararte para el IA Act
              </Link>
            </div>
            <div>
              <div className="card card-body" style={{ background: 'linear-gradient(135deg,#f59e0b,#d97706)', border: 'none' }}>
                <h4 style={{ color: 'white', marginBottom: '1rem' }}><i className="fas fa-calendar-alt"></i> Fechas clave IA Act</h4>
                {[
                  { date: 'Agosto 2024', event: 'Entrada en vigor del IA Act', done: true },
                  { date: 'Febrero 2025', event: 'Prohibiciones de riesgo inaceptable', done: true },
                  { date: 'Agosto 2025', event: 'Obligaciones modelos GPAI', done: false },
                  { date: 'Agosto 2026', event: 'Aplicación plena alto riesgo (Anexo III)', done: false },
                  { date: 'Agosto 2027', event: 'Alto riesgo Anexo I (productos regulados)', done: false },
                ].map(item => (
                  <div key={item.date} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.65rem', padding: '0.5rem', background: 'rgba(255,255,255,0.15)', borderRadius: '8px' }}>
                    <i className={item.done ? 'fas fa-check-circle' : 'fas fa-clock'} style={{ color: item.done ? '#86efac' : 'rgba(255,255,255,0.6)', flexShrink: 0 }}></i>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'white' }}>{item.date}</div>
                      <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)' }}>{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>¿Tu organización usa IA?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '540px', margin: '0 auto 2rem' }}>Clasificamos tus sistemas de IA, determinamos tus obligaciones bajo el IA Act y las guías AESIA, y preparamos el plan de cumplimiento.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/servicios#ia" className="btn btn-accent btn-lg"><i className="fas fa-robot"></i> Servicio IA Act</Link>
            <Link href="/contacto#diagnostico" className="btn btn-glass btn-lg"><i className="fas fa-rocket"></i> Diagnóstico Gratuito</Link>
          </div>
        </div>
      </section>
    </>
  )
}
