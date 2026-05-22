import Link from 'next/link'

export const metadata = {
  title: 'RGPD – Reglamento General de Protección de Datos · PRIDATO',
  description: 'Guía completa del RGPD (Reglamento UE 2016/679): principios, derechos, obligaciones, bases de legitimación, sanciones y claves para el cumplimiento.',
}

export default function RgpdPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-label"><i className="fas fa-shield-alt"></i> Normativa · UE 2016/679</span>
          <h1>RGPD – Reglamento General<br />de Protección de Datos</h1>
          <p>Guía completa del Reglamento (UE) 2016/679: principios, derechos, obligaciones del responsable, bases de legitimación y régimen sancionador.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <i className="fas fa-chevron-right"></i>
            <Link href="/normativa">Normativa</Link>
            <i className="fas fa-chevron-right"></i>
            <span>RGPD</span>
          </nav>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="content-grid">
            <article className="article-body">
              {/* FICHA */}
              <div className="highlight-box" style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--primary-dark)' }}><i className="fas fa-info-circle"></i> Ficha normativa</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem' }}>
                  <div><strong>Nombre oficial</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Reglamento (UE) 2016/679</span></div>
                  <div><strong>Aprobado</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>27 de abril de 2016</span></div>
                  <div><strong>Aplicación</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>25 de mayo de 2018</span></div>
                  <div><strong>Ámbito</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Unión Europea + extraterritorial</span></div>
                  <div><strong>Sanción máxima</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>20.000.000 € o 4% facturación</span></div>
                  <div><strong>Autoridad en España</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>AEPD (Agencia Española)</span></div>
                </div>
              </div>

              <h2 id="que-es">¿Qué es el RGPD?</h2>
              <p>El Reglamento General de Protección de Datos (RGPD) es el principal instrumento jurídico de la Unión Europea en materia de protección de datos personales. Entró en aplicación el 25 de mayo de 2018 y sustituyó a la Directiva 95/46/CE.</p>
              <p>El RGPD establece las normas relativas a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos. Se aplica a cualquier organización que trate datos personales de personas ubicadas en la UE, independientemente de donde esté establecida la organización.</p>

              <div className="info-box" style={{ margin: '1.5rem 0' }}>
                <strong><i className="fas fa-globe"></i> Efecto extraterritorial</strong>
                <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem' }}>El RGPD se aplica a organizaciones establecidas fuera de la UE si ofrecen bienes o servicios a personas en la UE o monitorizan su comportamiento. Una empresa estadounidense que venda a consumidores europeos debe cumplir el RGPD.</p>
              </div>

              <h2 id="principios">7 Principios del RGPD (Art. 5)</h2>
              <p>El artículo 5 del RGPD establece los principios que deben regir todo tratamiento de datos personales:</p>
              <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  { num: '1', title: 'Licitud, lealtad y transparencia', desc: 'Los datos deben tratarse de forma lícita, leal y transparente para el interesado.' },
                  { num: '2', title: 'Limitación de la finalidad', desc: 'Solo pueden recogerse para fines determinados, explícitos y legítimos, y no tratarse de manera incompatible con dichos fines.' },
                  { num: '3', title: 'Minimización de datos', desc: 'Los datos deben ser adecuados, pertinentes y limitados a lo necesario en relación con los fines del tratamiento.' },
                  { num: '4', title: 'Exactitud', desc: 'Los datos deben ser exactos y, si fuera necesario, actualizados. Deben adoptarse medidas razonables para suprimir o rectificar los datos inexactos.' },
                  { num: '5', title: 'Limitación del plazo de conservación', desc: 'Los datos deben conservarse durante no más tiempo del necesario para los fines del tratamiento.' },
                  { num: '6', title: 'Integridad y confidencialidad', desc: 'Deben tratarse garantizando una seguridad adecuada, incluida la protección contra el tratamiento no autorizado o ilícito y contra su pérdida o daño.' },
                  { num: '7', title: 'Responsabilidad proactiva', desc: 'El responsable del tratamiento debe ser capaz de demostrar el cumplimiento de todos los principios anteriores.' },
                ].map(p => (
                  <div key={p.num} style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0, fontSize: '0.9rem' }}>{p.num}</div>
                    <div>
                      <strong style={{ color: 'var(--primary-dark)' }}>{p.title}</strong>
                      <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 id="legitimacion">Bases de Legitimación (Art. 6)</h2>
              <p>Todo tratamiento de datos personales debe tener una base jurídica que lo legitime. El art. 6 del RGPD establece seis bases de legitimación:</p>
              <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--primary-dark)', color: 'white' }}>
                      <th style={{ padding: '0.85rem 1rem', textAlign: 'left' }}>Base jurídica</th>
                      <th style={{ padding: '0.85rem 1rem', textAlign: 'left' }}>Cuándo se aplica</th>
                      <th style={{ padding: '0.85rem 1rem', textAlign: 'left' }}>Ejemplo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Consentimiento (art. 6.1.a)', 'Cuando el interesado ha dado su consentimiento libre, específico, informado e inequívoco', 'Newsletter, cookies de marketing'],
                      ['Ejecución de contrato (art. 6.1.b)', 'Cuando el tratamiento es necesario para ejecutar un contrato con el interesado', 'Datos de envío para un pedido online'],
                      ['Obligación legal (art. 6.1.c)', 'Cuando el tratamiento es necesario para cumplir una obligación legal', 'Conservación de facturas (4 años)'],
                      ['Intereses vitales (art. 6.1.d)', 'Para proteger los intereses vitales del interesado u otra persona física', 'Emergencias médicas'],
                      ['Interés público (art. 6.1.e)', 'Tratamiento necesario para el cumplimiento de una misión de interés público', 'Administraciones públicas'],
                      ['Interés legítimo (art. 6.1.f)', 'Cuando prevalece el interés legítimo del responsable sobre los derechos del interesado', 'Prevención de fraude, seguridad en redes'],
                    ].map(([base, cuando, ejemplo], i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? '#f8fafc' : 'white', borderBottom: '1px solid #e2e8f0' }}>
                        <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: 'var(--primary-dark)' }}>{base}</td>
                        <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>{cuando}</td>
                        <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>{ejemplo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 id="derechos">Derechos de los Interesados</h2>
              <p>El RGPD reconoce a los ciudadanos un conjunto de derechos sobre sus datos personales que las organizaciones deben garantizar y facilitar:</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  { icon: 'fas fa-info-circle', title: 'Derecho de información', desc: 'Arts. 13-14. Información clara sobre el tratamiento en el momento de recogida.' },
                  { icon: 'fas fa-eye', title: 'Derecho de acceso', desc: 'Art. 15. Obtener confirmación del tratamiento y copia de los datos.' },
                  { icon: 'fas fa-edit', title: 'Derecho de rectificación', desc: 'Art. 16. Corregir datos inexactos o incompletos.' },
                  { icon: 'fas fa-trash', title: 'Derecho de supresión', desc: 'Art. 17. Eliminar los datos ("derecho al olvido") cuando ya no sean necesarios.' },
                  { icon: 'fas fa-pause', title: 'Derecho de limitación', desc: 'Art. 18. Suspender el tratamiento en casos específicos.' },
                  { icon: 'fas fa-download', title: 'Portabilidad', desc: 'Art. 20. Recibir los datos en formato estructurado y transmitirlos a otro responsable.' },
                  { icon: 'fas fa-hand-paper', title: 'Derecho de oposición', desc: 'Art. 21. Oponerse al tratamiento basado en interés legítimo o marketing directo.' },
                  { icon: 'fas fa-robot', title: 'Decisiones automatizadas', desc: 'Art. 22. No ser objeto de decisiones basadas únicamente en tratamiento automatizado.' },
                ].map(d => (
                  <div key={d.title} style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <div style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}><i className={d.icon}></i></div>
                    <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--primary-dark)', marginBottom: '0.25rem' }}>{d.title}</strong>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>{d.desc}</p>
                  </div>
                ))}
              </div>

              <h2 id="obligaciones">Obligaciones del Responsable</h2>
              <ul style={{ marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Registro de Actividades (art. 30):</strong> Mantener un registro de todas las operaciones de tratamiento.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Privacy by Design y by Default (art. 25):</strong> Integrar la protección de datos desde el diseño de sistemas y procesos.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Contratos con encargados (art. 28):</strong> Formalizar la relación con todo proveedor que acceda a datos personales.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Notificación de brechas (arts. 33-34):</strong> Comunicar brechas a la autoridad en 72 horas y a los interesados cuando sea necesario.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Evaluación de Impacto (art. 35):</strong> Realizar EIPD para tratamientos de alto riesgo.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>DPO (art. 37):</strong> Designar un delegado de protección de datos cuando sea obligatorio.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Transferencias internacionales (cap. V):</strong> Garantizar un nivel adecuado de protección al transferir datos fuera de la UE.</li>
              </ul>

              <h2 id="sanciones">Régimen Sancionador</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '1.5rem', background: '#fee2e2', borderRadius: '12px', border: '1px solid #fca5a5' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#dc2626', marginBottom: '0.25rem' }}>20M€ / 4%</div>
                  <div style={{ fontWeight: 600, color: '#991b1b', marginBottom: '0.5rem' }}>Sanciones máximas (nivel superior)</div>
                  <p style={{ fontSize: '0.85rem', color: '#7f1d1d', margin: 0 }}>Para las infracciones más graves: principios básicos, bases de legitimación, derechos de los interesados, transferencias internacionales.</p>
                </div>
                <div style={{ padding: '1.5rem', background: '#fef3c7', borderRadius: '12px', border: '1px solid #fcd34d' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#d97706', marginBottom: '0.25rem' }}>10M€ / 2%</div>
                  <div style={{ fontWeight: 600, color: '#92400e', marginBottom: '0.5rem' }}>Sanciones (nivel inferior)</div>
                  <p style={{ fontSize: '0.85rem', color: '#78350f', margin: 0 }}>Para incumplimientos de obligaciones del responsable: registro de actividades, notificación de brechas, DPO, certificaciones.</p>
                </div>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contacto#diagnostico" className="btn btn-primary"><i className="fas fa-rocket"></i> Diagnóstico RGPD Gratuito</Link>
                <Link href="/servicios#adecuacion" className="btn btn-outline">Ver servicio adecuación RGPD</Link>
              </div>
            </article>

            <aside className="sidebar-sticky">
              <div className="toc-card">
                <h4><i className="fas fa-list"></i> En esta página</h4>
                <nav>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      ['#que-es', '¿Qué es el RGPD?'],
                      ['#principios', '7 Principios (Art. 5)'],
                      ['#legitimacion', 'Bases de legitimación'],
                      ['#derechos', 'Derechos de los interesados'],
                      ['#obligaciones', 'Obligaciones del responsable'],
                      ['#sanciones', 'Régimen sancionador'],
                    ].map(([href, label]) => (
                      <li key={href} style={{ marginBottom: '0.5rem' }}>
                        <a href={href} style={{ color: 'var(--primary)', fontSize: '0.88rem', textDecoration: 'none' }}>{label as string}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="toc-card" style={{ background: 'linear-gradient(135deg,var(--primary-dark),var(--primary))', border: 'none' }}>
                <h4 style={{ color: 'white' }}><i className="fas fa-rocket"></i> ¿Cumples el RGPD?</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1rem' }}>Solicita tu diagnóstico gratuito y lo averiguamos juntos.</p>
                <Link href="/contacto#diagnostico" className="btn btn-accent btn-sm" style={{ width: '100%', justifyContent: 'center' }}>Diagnóstico Gratuito</Link>
              </div>
              <div className="toc-card">
                <h4><i className="fas fa-link"></i> Normativa relacionada</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.4rem' }}><Link href="/normativa/lopdgdd" style={{ color: 'var(--primary)', fontSize: '0.88rem', textDecoration: 'none' }}><i className="fas fa-arrow-right" style={{ marginRight: '0.4rem', fontSize: '0.75rem' }}></i>LOPDGDD (España)</Link></li>
                  <li style={{ marginBottom: '0.4rem' }}><Link href="/normativa/ia-act" style={{ color: 'var(--primary)', fontSize: '0.88rem', textDecoration: 'none' }}><i className="fas fa-arrow-right" style={{ marginRight: '0.4rem', fontSize: '0.75rem' }}></i>IA Act (convivencia)</Link></li>
                  <li style={{ marginBottom: '0.4rem' }}><Link href="/guias/aepd" style={{ color: 'var(--primary)', fontSize: '0.88rem', textDecoration: 'none' }}><i className="fas fa-arrow-right" style={{ marginRight: '0.4rem', fontSize: '0.75rem' }}></i>Guías AEPD</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
