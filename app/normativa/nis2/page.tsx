import Link from 'next/link'

export const metadata = {
  title: 'NIS2 – Directiva (UE) 2022/2555 de Ciberseguridad · PRIDATO',
  description: 'Guía de la Directiva NIS2: sectores obligados, medidas de ciberseguridad, notificación de incidentes y régimen sancionador.',
}

export default function Nis2Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-label"><i className="fas fa-lock"></i> Normativa · UE 2022/2555</span>
          <h1>NIS2 – Directiva de<br />Ciberseguridad</h1>
          <p>La Directiva NIS2 establece medidas de ciberseguridad para entidades esenciales e importantes en sectores críticos de la UE.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <i className="fas fa-chevron-right"></i>
            <Link href="/normativa">Normativa</Link>
            <i className="fas fa-chevron-right"></i>
            <span>NIS2</span>
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
                  <div><strong>Nombre oficial</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Directiva (UE) 2022/2555 (NIS2)</span></div>
                  <div><strong>Transposición obligatoria</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>17 de octubre de 2024</span></div>
                  <div><strong>Sustituye a</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Directiva NIS (UE 2016/1148)</span></div>
                  <div><strong>Sanción esenciales</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>10.000.000€ o 2% facturación</span></div>
                  <div><strong>Sanción importantes</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>7.000.000€ o 1,4% facturación</span></div>
                </div>
              </div>

              <h2 id="que-es">¿Qué es la NIS2?</h2>
              <p>La Directiva (UE) 2022/2555, conocida como NIS2, es la revisión y ampliación de la primera Directiva NIS de 2016. Establece medidas de ciberseguridad para sectores críticos, amplía el número de entidades obligadas y endurece el régimen sancionador.</p>
              <p>A diferencia del RGPD, la NIS2 no trata específicamente datos personales, sino la seguridad de redes y sistemas de información. Sin embargo, ambas normativas se complementan: un incidente de seguridad puede suponer tanto una brecha NIS2 como una brecha de datos RGPD.</p>

              <h2 id="sectores">Sectores Obligados</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <h4 style={{ color: '#dc2626', marginBottom: '0.75rem' }}><i className="fas fa-exclamation-circle"></i> Entidades Esenciales</h4>
                  <ul style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <li style={{ marginBottom: '0.3rem' }}>Energía (electricidad, gas, petróleo, hidrógeno)</li>
                    <li style={{ marginBottom: '0.3rem' }}>Transporte (aéreo, ferroviario, acuático, por carretera)</li>
                    <li style={{ marginBottom: '0.3rem' }}>Banca e infraestructuras de mercados financieros</li>
                    <li style={{ marginBottom: '0.3rem' }}>Salud (hospitales, laboratorios, fabricación de medicamentos)</li>
                    <li style={{ marginBottom: '0.3rem' }}>Agua potable y aguas residuales</li>
                    <li style={{ marginBottom: '0.3rem' }}>Infraestructura digital (DNS, IXP, cloud, CDN, datacenters)</li>
                    <li style={{ marginBottom: '0.3rem' }}>Administración pública (central y regional)</li>
                    <li>Espacio</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#d97706', marginBottom: '0.75rem' }}><i className="fas fa-exclamation-triangle"></i> Entidades Importantes</h4>
                  <ul style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <li style={{ marginBottom: '0.3rem' }}>Servicios postales y de mensajería</li>
                    <li style={{ marginBottom: '0.3rem' }}>Gestión de residuos</li>
                    <li style={{ marginBottom: '0.3rem' }}>Fabricación de productos críticos (química, alimentos, dispositivos médicos)</li>
                    <li style={{ marginBottom: '0.3rem' }}>Fabricación de ordenadores, electrónica y maquinaria</li>
                    <li style={{ marginBottom: '0.3rem' }}>Proveedores de servicios digitales (mercados online, buscadores, redes sociales)</li>
                    <li>Investigación</li>
                  </ul>
                </div>
              </div>

              <div className="info-box" style={{ marginBottom: '1.5rem' }}>
                <strong><i className="fas fa-ruler"></i> Criterios de tamaño</strong>
                <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem' }}>La NIS2 aplica a <strong>medianas y grandes empresas</strong> de los sectores listados: más de 50 empleados o 10 millones € de facturación. Sin embargo, algunas entidades están sujetas independientemente de su tamaño (administraciones públicas, operadores críticos, proveedores DNS, etc.).</p>
              </div>

              <h2 id="medidas">Medidas de Seguridad Obligatorias</h2>
              <p>El art. 21 de la NIS2 establece medidas de gestión de riesgos de ciberseguridad. Las organizaciones deben adoptar medidas técnicas, operativas y organizativas apropiadas. Principales obligaciones:</p>
              <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {[
                  { icon: 'fas fa-sitemap', title: 'Políticas de seguridad', desc: 'Política de seguridad de redes y sistemas de información, análisis de riesgos y gestión de incidentes.' },
                  { icon: 'fas fa-history', title: 'Continuidad de negocio', desc: 'Gestión de copias de seguridad, recuperación ante desastres y gestión de crisis.' },
                  { icon: 'fas fa-link', title: 'Seguridad cadena de suministro', desc: 'Seguridad en la relación con proveedores y prestadores de servicios, incluyendo acuerdos contractuales.' },
                  { icon: 'fas fa-shield-alt', title: 'Seguridad en adquisición y desarrollo', desc: 'Gestión y divulgación de vulnerabilidades. Procedimientos para evaluar la efectividad de las medidas.' },
                  { icon: 'fas fa-key', title: 'Criptografía y cifrado', desc: 'Políticas de uso de criptografía y cifrado. Autenticación multifactor (MFA) obligatoria para todos los accesos.' },
                  { icon: 'fas fa-graduation-cap', title: 'Formación en ciberseguridad', desc: 'Capacitación básica en ciberseguridad para todo el personal. Obligación de los órganos de dirección.' },
                ].map(m => (
                  <div key={m.title} style={{ display: 'flex', gap: '0.75rem', padding: '0.85rem', background: '#f8fafc', borderRadius: '8px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'linear-gradient(135deg,#dc2626,#f87171)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, fontSize: '0.9rem' }}>
                      <i className={m.icon}></i>
                    </div>
                    <div>
                      <strong style={{ fontSize: '0.9rem', color: 'var(--primary-dark)', display: 'block', marginBottom: '0.2rem' }}>{m.title}</strong>
                      <p style={{ margin: 0, fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 id="incidentes">Notificación de Incidentes</h2>
              <p>La NIS2 establece plazos muy estrictos para la notificación de incidentes significativos a la autoridad competente:</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  { time: '24h', label: 'Alerta temprana', desc: 'Notificación inicial de que se ha producido un incidente significativo', color: '#f97316' },
                  { time: '72h', label: 'Notificación del incidente', desc: 'Notificación con evaluación inicial del incidente, gravedad e indicadores de compromiso', color: '#dc2626' },
                  { time: '1 mes', label: 'Informe final', desc: 'Informe completo del incidente, causa raíz, impacto y medidas adoptadas', color: '#7c3aed' },
                ].map(p => (
                  <div key={p.time} style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: '10px', border: `2px solid ${p.color}`, textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: p.color }}>{p.time}</div>
                    <div style={{ fontWeight: 600, color: 'var(--primary-dark)', marginBottom: '0.35rem', fontSize: '0.9rem' }}>{p.label}</div>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{p.desc}</p>
                  </div>
                ))}
              </div>

              <h2 id="responsabilidad">Responsabilidad de la Dirección</h2>
              <p>Una de las novedades más relevantes de la NIS2 es que <strong>los órganos de dirección</strong> (consejo de administración, dirección general) son personalmente responsables de la implementación de las medidas de ciberseguridad. Pueden ser suspendidos temporalmente si incumplen reiteradamente.</p>
              <ul style={{ marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Aprobación de las políticas de seguridad de la información</li>
                <li style={{ marginBottom: '0.5rem' }}>Formación obligatoria en ciberseguridad para directivos</li>
                <li style={{ marginBottom: '0.5rem' }}>Responsabilidad directa por incumplimientos</li>
                <li style={{ marginBottom: '0.5rem' }}>Supervisión de la implementación de medidas</li>
              </ul>

              <h2 id="sanciones">Sanciones</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '1.25rem', background: '#fee2e2', borderRadius: '10px', border: '1px solid #fca5a5' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#dc2626' }}>10M€ / 2%</div>
                  <div style={{ fontWeight: 600, color: '#991b1b', marginBottom: '0.3rem' }}>Entidades esenciales</div>
                  <p style={{ fontSize: '0.82rem', color: '#7f1d1d', margin: 0 }}>El mayor de los dos importes: 10M€ o 2% de la facturación global anual.</p>
                </div>
                <div style={{ padding: '1.25rem', background: '#fef3c7', borderRadius: '10px', border: '1px solid #fcd34d' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#d97706' }}>7M€ / 1,4%</div>
                  <div style={{ fontWeight: 600, color: '#92400e', marginBottom: '0.3rem' }}>Entidades importantes</div>
                  <p style={{ fontSize: '0.82rem', color: '#78350f', margin: 0 }}>El mayor de los dos importes: 7M€ o 1,4% de la facturación global anual.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link href="/contacto#diagnostico" className="btn btn-primary"><i className="fas fa-rocket"></i> Diagnóstico NIS2</Link>
                <Link href="/normativa/rgpd" className="btn btn-outline">Ver RGPD</Link>
              </div>
            </article>

            <aside className="sidebar-sticky">
              <div className="toc-card">
                <h4><i className="fas fa-list"></i> En esta página</h4>
                <nav>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[['#que-es','¿Qué es NIS2?'],['#sectores','Sectores obligados'],['#medidas','Medidas de seguridad'],['#incidentes','Notificación incidentes'],['#responsabilidad','Responsabilidad dirección'],['#sanciones','Sanciones']].map(([href,label]) => (
                      <li key={href} style={{ marginBottom: '0.5rem' }}>
                        <a href={href} style={{ color: 'var(--primary)', fontSize: '0.88rem', textDecoration: 'none' }}>{label as string}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="toc-card" style={{ background: 'linear-gradient(135deg,#dc2626,#f87171)', border: 'none' }}>
                <h4 style={{ color: 'white' }}><i className="fas fa-lock"></i> ¿Aplica NIS2 a tu empresa?</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', marginBottom: '1rem' }}>Determinamos si estás en el ámbito de aplicación y qué medidas necesitas.</p>
                <Link href="/contacto#diagnostico" className="btn btn-sm" style={{ background: 'white', color: '#dc2626', width: '100%', justifyContent: 'center' }}>Diagnóstico NIS2</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
