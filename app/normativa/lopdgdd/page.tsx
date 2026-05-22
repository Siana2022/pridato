import Link from 'next/link'

export const metadata = {
  title: 'LOPDGDD – Ley Orgánica 3/2018 de Protección de Datos · PRIDATO',
  description: 'Guía completa de la LOPDGDD: adaptación española del RGPD, derechos digitales, especialidades nacionales y régimen sancionador de la AEPD.',
}

export default function LopdgddPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-label"><i className="fas fa-flag"></i> Normativa · LO 3/2018</span>
          <h1>LOPDGDD – Ley Orgánica 3/2018<br />de Protección de Datos</h1>
          <p>La ley española que adapta el RGPD al ordenamiento jurídico nacional e introduce los derechos digitales del Título X.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <i className="fas fa-chevron-right"></i>
            <Link href="/normativa">Normativa</Link>
            <i className="fas fa-chevron-right"></i>
            <span>LOPDGDD</span>
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
                  <div><strong>Nombre oficial</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Ley Orgánica 3/2018, de 5 de diciembre</span></div>
                  <div><strong>Ámbito</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>España</span></div>
                  <div><strong>Publicación</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>BOE 6 diciembre 2018</span></div>
                  <div><strong>Autoridad</strong><br /><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>AEPD (Agencia Española de PD)</span></div>
                </div>
              </div>

              <h2 id="que-es">¿Qué es la LOPDGDD?</h2>
              <p>La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD) tiene una doble finalidad: adaptar el ordenamiento jurídico español al Reglamento (UE) 2016/679 (RGPD) e incorporar los derechos digitales de los ciudadanos en el Título X.</p>
              <p>La LOPDGDD deroga la antigua LOPD de 1999 y clarifica y complementa el RGPD en los numerosos aspectos que este deja a la discreción de los Estados miembros.</p>

              <h2 id="estructura">Estructura de la LOPDGDD</h2>
              <div className="accordion">
                {[
                  { title: 'Título I · Disposiciones generales', content: 'Objeto, ámbito de aplicación y definiciones. Establece las bases para la aplicación del RGPD en España.' },
                  { title: 'Título II · Principios de protección de datos', content: 'Desarrollo de los principios del RGPD: tratamiento basado en el consentimiento (especialmente de menores de 14 años), tratamientos sin finalidad determinada, datos de terceros.' },
                  { title: 'Título III · Derechos de los interesados', content: 'Procedimientos y plazos para el ejercicio de derechos ARCO+. Sistemas de información crediticia. Sistemas de exclusión publicitaria.' },
                  { title: 'Título IV · Disposiciones aplicables a tratamientos concretos', content: 'Tratamientos con fines de videovigilancia, datos de empleados, sindicales, en actividades de RR.PP., datos de personas fallecidas.' },
                  { title: 'Título V · Responsable y encargado del tratamiento', content: 'Medidas de responsabilidad activa, registro de actividades, evaluación de impacto, delegado de protección de datos en España.' },
                  { title: 'Título VI · Transferencias internacionales', content: 'Régimen de transferencias internacionales: países adecuados, garantías apropiadas, normas corporativas vinculantes.' },
                  { title: 'Título VII · Autoridades de control', content: 'Estatuto y funciones de la AEPD y de las autoridades autonómicas de control (País Vasco y Cataluña).' },
                  { title: 'Título VIII · Procedimientos', content: 'Procedimientos ante la AEPD: reclamaciones, investigaciones, medidas cautelares.' },
                  { title: 'Título IX · Régimen sancionador', content: 'Tipificación de infracciones y sanciones. Prescripción. Publicidad de sanciones.' },
                  { title: 'Título X · Garantía de los derechos digitales', content: 'Derechos digitales de los ciudadanos: neutralidad, acceso universal, seguridad, olvidar, portabilidad, testamento digital, y derechos laborales digitales.' },
                ].map(t => (
                  <div key={t.title}>
                    <div className="accordion-header"><i className="fas fa-book" style={{ marginRight: '0.5rem' }}></i>{t.title}<i className="fas fa-chevron-down" style={{ marginLeft: 'auto' }}></i></div>
                    <div className="accordion-body">{t.content}</div>
                  </div>
                ))}
              </div>

              <h2 id="especialidades" style={{ marginTop: '2rem' }}>Especialidades españolas del RGPD</h2>
              <p>La LOPDGDD introduce importantes especialidades respecto al RGPD en varios ámbitos:</p>
              <ul style={{ marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Edad de consentimiento de menores:</strong> En España se fija en 14 años (el RGPD permite entre 13 y 16). Los menores de 14 años necesitan consentimiento de sus padres o tutores.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>DPO en España:</strong> La LOPDGDD amplía la obligación de DPO a sectores como seguros, entidades financieras, colegios profesionales y partidos políticos.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Videovigilancia:</strong> Regula específicamente el uso de cámaras de vigilancia con cartel informativo homologado y plazos de conservación de 30 días.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Datos de empleados:</strong> Regula el acceso de empleadores a dispositivos digitales, geolocalización y registro de jornada.</li>
              </ul>

              <h2 id="derechos-digitales">Derechos Digitales (Título X)</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  { icon: 'fas fa-wifi', title: 'Derecho de acceso universal a internet', desc: 'Acceso universal, asequible, de calidad y no discriminatorio a internet.' },
                  { icon: 'fas fa-shield-alt', title: 'Seguridad digital', desc: 'Protección de la seguridad en internet para ciudadanos y organizaciones.' },
                  { icon: 'fas fa-trash', title: 'Derecho al olvido en redes sociales', desc: 'Solicitar la eliminación de información publicada durante la minoría de edad.' },
                  { icon: 'fas fa-download', title: 'Portabilidad en redes sociales', desc: 'Transmitir datos de un servicio de red social a otro.' },
                  { icon: 'fas fa-file-alt', title: 'Testamento digital', desc: 'Gestión de los perfiles en redes sociales y servicios de internet tras el fallecimiento.' },
                  { icon: 'fas fa-laptop', title: 'Desconexión digital laboral', desc: 'Derecho a no responder comunicaciones fuera del horario laboral.' },
                  { icon: 'fas fa-user-shield', title: 'Intimidad frente a la videovigilancia', desc: 'Protección de la intimidad en el trabajo frente a sistemas de vigilancia.' },
                  { icon: 'fas fa-mobile-alt', title: 'Control de dispositivos digitales', desc: 'Derecho a la intimidad respecto al uso de dispositivos digitales en el trabajo.' },
                ].map(d => (
                  <div key={d.title} style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <div style={{ color: '#dc2626', fontSize: '1.1rem', marginBottom: '0.4rem' }}><i className={d.icon}></i></div>
                    <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--primary-dark)', marginBottom: '0.25rem' }}>{d.title}</strong>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>{d.desc}</p>
                  </div>
                ))}
              </div>

              <h2 id="sanciones">Sanciones AEPD</h2>
              <p>La LOPDGDD tipifica las infracciones en muy graves, graves y leves, con los siguientes límites sancionadores:</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '1.25rem', background: '#fee2e2', borderRadius: '10px', border: '1px solid #fca5a5' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#dc2626' }}>20M€ / 4%</div>
                  <div style={{ fontWeight: 600, color: '#991b1b', marginBottom: '0.3rem' }}>Muy graves</div>
                  <p style={{ fontSize: '0.82rem', color: '#7f1d1d', margin: 0 }}>Principios básicos, derechos, transferencias, tratamiento sin base jurídica.</p>
                </div>
                <div style={{ padding: '1.25rem', background: '#fef3c7', borderRadius: '10px', border: '1px solid #fcd34d' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#d97706' }}>10M€ / 2%</div>
                  <div style={{ fontWeight: 600, color: '#92400e', marginBottom: '0.3rem' }}>Graves</div>
                  <p style={{ fontSize: '0.82rem', color: '#78350f', margin: 0 }}>Registro actividades, encargados, brechas, DPO, certificaciones.</p>
                </div>
                <div style={{ padding: '1.25rem', background: '#f0fdf4', borderRadius: '10px', border: '1px solid #86efac' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#16a34a' }}>40.000€</div>
                  <div style={{ fontWeight: 600, color: '#166534', marginBottom: '0.3rem' }}>Leves</div>
                  <p style={{ fontSize: '0.82rem', color: '#14532d', margin: 0 }}>Incumplimientos de menor entidad tipificados como leves.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <Link href="/contacto#diagnostico" className="btn btn-primary"><i className="fas fa-rocket"></i> Diagnóstico Gratuito</Link>
                <Link href="/normativa/rgpd" className="btn btn-outline">Ver guía RGPD</Link>
              </div>
            </article>

            <aside className="sidebar-sticky">
              <div className="toc-card">
                <h4><i className="fas fa-list"></i> En esta página</h4>
                <nav>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[['#que-es','¿Qué es la LOPDGDD?'],['#estructura','Estructura (10 Títulos)'],['#especialidades','Especialidades españolas'],['#derechos-digitales','Derechos Digitales'],['#sanciones','Sanciones AEPD']].map(([href,label]) => (
                      <li key={href} style={{ marginBottom: '0.5rem' }}>
                        <a href={href} style={{ color: 'var(--primary)', fontSize: '0.88rem', textDecoration: 'none' }}>{label as string}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="toc-card" style={{ background: 'linear-gradient(135deg,var(--primary-dark),var(--primary))', border: 'none' }}>
                <h4 style={{ color: 'white' }}><i className="fas fa-rocket"></i> ¿Cumples la LOPDGDD?</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1rem' }}>Diagnóstico gratuito de cumplimiento.</p>
                <Link href="/contacto#diagnostico" className="btn btn-accent btn-sm" style={{ width: '100%', justifyContent: 'center' }}>Solicitar diagnóstico</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
