import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'PRIDATO · Consultoría en Privacidad y Cumplimiento Normativo Digital',
  description: 'PRIDATO es tu consultoría especializada en RGPD, LOPDGDD, IA Act, DSA, eIDAS 2, NIS2 y toda la normativa de protección de datos. DPO externo, adecuación, auditorías y formación.',
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge"><i className="fas fa-shield-alt"></i> Expertos en Cumplimiento Normativo Digital</div>
              <h1 className="hero-title">
                Tu empresa, protegida.<br />
                Tu privacidad,<br />
                <span className="highlight">garantizada.</span>
              </h1>
              <p className="hero-subtitle">
                Consultoría especializada en RGPD, LOPDGDD, IA Act, DSA, eIDAS 2 y toda la normativa europea de privacidad y datos. Adaptamos tu organización a la regulación vigente con garantías reales y sin burocracia innecesaria.
              </p>
              <div className="hero-actions">
                <Link href="/contacto#diagnostico" className="btn btn-primary btn-lg"><i className="fas fa-rocket"></i> Diagnóstico Gratuito</Link>
                <Link href="/servicios" className="btn btn-outline btn-lg"><i className="fas fa-briefcase"></i> Ver Servicios</Link>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="hero-stat-number" data-count="200" data-suffix="+">0+</span>
                  <span className="hero-stat-label">Empresas asesoradas</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number" data-count="98" data-suffix="%">0%</span>
                  <span className="hero-stat-label">Tasa de satisfacción</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number" data-count="8" data-suffix=" norm.">0</span>
                  <span className="hero-stat-label">Normativas cubiertas</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number" data-count="10" data-suffix=" años">0</span>
                  <span className="hero-stat-label">De experiencia</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-float-card hero-float-card-1" style={{ color: '#10b981' }}>
                <i className="fas fa-check-circle" style={{ color: '#10b981' }}></i> RGPD Certificado
              </div>
              <div className="hero-card-main">
                <div className="hero-card-icon"><i className="fas fa-shield-halved"></i></div>
                <h3>Estado de Cumplimiento</h3>
                <p>Normativas que cubrimos para tu organización</p>
                <div className="compliance-list">
                  <div className="compliance-item"><i className="fas fa-check-circle"></i> Reglamento General de Protección de Datos <span className="compliance-tag">RGPD</span></div>
                  <div className="compliance-item"><i className="fas fa-check-circle"></i> Ley Orgánica 3/2018 Protección de Datos <span className="compliance-tag">LOPDGDD</span></div>
                  <div className="compliance-item"><i className="fas fa-check-circle"></i> Ley de Servicios Sociedad Información <span className="compliance-tag">LSSI</span></div>
                  <div className="compliance-item"><i className="fas fa-check-circle"></i> Reglamento de Inteligencia Artificial UE <span className="compliance-tag">IA Act</span></div>
                  <div className="compliance-item"><i className="fas fa-check-circle"></i> Digital Services Act <span className="compliance-tag">DSA</span></div>
                  <div className="compliance-item"><i className="fas fa-check-circle"></i> Identidad Digital Europea <span className="compliance-tag">eIDAS 2</span></div>
                </div>
              </div>
              <div className="hero-float-card hero-float-card-2" style={{ color: 'var(--primary)' }}>
                <i className="fas fa-balance-scale" style={{ color: 'var(--accent)' }}></i> +8 Normativas UE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS / CONFIANZA */}
      <section className="section-sm bg-white" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="text-center text-muted mb-3" style={{ fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Normativa que dominamos</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1.5rem 2.5rem' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--gray-400)', whiteSpace: 'nowrap' }}>🇪🇺 RGPD 2016/679</span>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--gray-400)', whiteSpace: 'nowrap' }}>🇪🇸 LOPDGDD 3/2018</span>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--gray-400)', whiteSpace: 'nowrap' }}>🇪🇸 LSSI-CE 34/2002</span>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--gray-400)', whiteSpace: 'nowrap' }}>🤖 IA Act 2024/1689</span>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--gray-400)', whiteSpace: 'nowrap' }}>📡 DSA 2022/2065</span>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--gray-400)', whiteSpace: 'nowrap' }}>🔐 eIDAS 2 2024/1183</span>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--gray-400)', whiteSpace: 'nowrap' }}>🔒 NIS2 2022/2555</span>
            <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--gray-400)', whiteSpace: 'nowrap' }}>🏪 DMA 2022/1925</span>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="section bg-gradient-light" id="servicios">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label"><i className="fas fa-briefcase"></i> Nuestros Servicios</span>
            <h2 className="section-title">Todo lo que necesitas para <span>cumplir con garantías</span></h2>
            <p className="section-desc">Ofrecemos soluciones integrales y personalizadas para empresas de cualquier tamaño, desde pymes hasta grandes corporaciones.</p>
          </div>
          <div className="services-grid">
            <article className="service-card fade-in">
              <div className="service-icon icon-blue"><i className="fas fa-user-shield"></i></div>
              <h3>DPO Externo Certificado</h3>
              <p>Servicio de Delegado de Protección de Datos externo, certificado y con disponibilidad continua. Cumplimos con los arts. 37–39 del RGPD y actuamos como punto de contacto con la AEPD.</p>
              <div className="service-tags">
                <span className="service-tag">Art. 37-39 RGPD</span>
                <span className="service-tag">AEPD</span>
                <span className="service-tag">Brecha de seguridad</span>
              </div>
            </article>
            <article className="service-card fade-in">
              <div className="service-icon icon-cyan"><i className="fas fa-clipboard-check"></i></div>
              <h3>Adecuación RGPD &amp; LOPDGDD</h3>
              <p>Análisis completo de tu organización, elaboración del Registro de Actividades de Tratamiento (RAT), políticas internas, cláusulas informativas y toda la documentación necesaria.</p>
              <div className="service-tags">
                <span className="service-tag">RAT</span>
                <span className="service-tag">Análisis de riesgos</span>
                <span className="service-tag">EIPD</span>
              </div>
            </article>
            <article className="service-card fade-in">
              <div className="service-icon icon-green"><i className="fas fa-search-plus"></i></div>
              <h3>Auditoría &amp; Diagnóstico de Privacidad</h3>
              <p>Evaluamos el nivel de cumplimiento actual de tu organización, identificamos brechas, riesgos y elaboramos un plan de acción priorizado con plazos realistas.</p>
              <div className="service-tags">
                <span className="service-tag">Gap Analysis</span>
                <span className="service-tag">Informe ejecutivo</span>
                <span className="service-tag">Plan de acción</span>
              </div>
            </article>
            <article className="service-card fade-in">
              <div className="service-icon icon-purple"><i className="fas fa-robot"></i></div>
              <h3>Cumplimiento IA &amp; Automatización</h3>
              <p>Clasificación de sistemas de IA según el IA Act, evaluaciones de conformidad, análisis de sesgos y discriminación algorítmica, y adecuación a las guías de la AESIA.</p>
              <div className="service-tags">
                <span className="service-tag">IA Act</span>
                <span className="service-tag">AESIA</span>
                <span className="service-tag">Sesgos</span>
                <span className="service-tag">Automatización</span>
              </div>
            </article>
            <article className="service-card fade-in">
              <div className="service-icon icon-gold"><i className="fas fa-handshake"></i></div>
              <h3>Encargados &amp; Corresponsables</h3>
              <p>Elaboración y revisión de contratos de Encargado del Tratamiento (art. 28 RGPD), acuerdos de Corresponsabilidad (art. 26), gestión de subencargados y garantías de cumplimiento.</p>
              <div className="service-tags">
                <span className="service-tag">Art. 28 RGPD</span>
                <span className="service-tag">Art. 26 RGPD</span>
                <span className="service-tag">Subencargados</span>
              </div>
            </article>
            <article className="service-card fade-in">
              <div className="service-icon icon-orange"><i className="fas fa-graduation-cap"></i></div>
              <h3>Formación &amp; Concienciación</h3>
              <p>Programas formativos a medida para empleados, directivos y responsables de tratamiento. Talleres prácticos, e-learning, test de evaluación y certificación de formación.</p>
              <div className="service-tags">
                <span className="service-tag">E-learning</span>
                <span className="service-tag">Talleres</span>
                <span className="service-tag">Certificación</span>
              </div>
            </article>
            <article className="service-card fade-in">
              <div className="service-icon icon-teal"><i className="fas fa-globe"></i></div>
              <h3>Cumplimiento Web &amp; LSSI</h3>
              <p>Adecuación de webs, apps y plataformas digitales a la LSSI-CE, DSA y normativa de cookies. Políticas de privacidad, aviso legal, banners de consentimiento conformes.</p>
              <div className="service-tags">
                <span className="service-tag">LSSI-CE</span>
                <span className="service-tag">Cookies</span>
                <span className="service-tag">DSA</span>
              </div>
            </article>
            <article className="service-card fade-in">
              <div className="service-icon icon-red"><i className="fas fa-lock"></i></div>
              <h3>Ciberseguridad &amp; NIS2</h3>
              <p>Adecuación al Reglamento NIS2, análisis de riesgos de seguridad, protocolos de notificación de brechas de seguridad y acompañamiento ante incidentes.</p>
              <div className="service-tags">
                <span className="service-tag">NIS2</span>
                <span className="service-tag">Brechas</span>
                <span className="service-tag">Incident Response</span>
              </div>
            </article>
          </div>
          <div className="text-center mt-4">
            <Link href="/servicios" className="btn btn-primary btn-lg"><i className="fas fa-arrow-right"></i> Ver todos los servicios</Link>
          </div>
        </div>
      </section>

      {/* POR QUÉ PRIDATO */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="responsive-grid-1">
            <div>
              <span className="section-label"><i className="fas fa-star"></i> ¿Por qué PRIDATO?</span>
              <h2 className="section-title">Experiencia, rigor y <span>enfoque práctico</span></h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>En PRIDATO no vendemos documentación. Construimos sistemas reales de cumplimiento que funcionan y se sostienen en el tiempo.</p>
              <div className="checklist">
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span><strong>Equipo jurídico-técnico:</strong> Abogados especializados y consultores técnicos trabajando juntos.</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span><strong>Actualización continua:</strong> Seguimos cada cambio normativo de la UE y España al día.</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span><strong>Sin letra pequeña:</strong> Presupuestos claros, plazos reales y entregables concretos.</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span><strong>Servicio integral:</strong> Desde el diagnóstico hasta el mantenimiento continuo.</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span><strong>Sector público y privado:</strong> Experiencia en ambos entornos y sus particularidades.</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span><strong>Cobertura europea:</strong> Asesoramiento en toda la UE, con sede en España.</span></div>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/contacto" className="btn btn-primary"><i className="fas fa-users"></i> Conoce al equipo</Link>
              </div>
            </div>
            <div>
              <div className="stats-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="stat-card">
                  <div className="stat-value accent" data-count="200" data-suffix="+">0+</div>
                  <div className="stat-label">Empresas asesoradas</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value" data-count="10" data-suffix=" años">0</div>
                  <div className="stat-label">Años de experiencia</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value gold" data-count="98" data-suffix="%">0%</div>
                  <div className="stat-label">Satisfacción clientes</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value danger" data-count="0" data-suffix=" sanciones">0</div>
                  <div className="stat-label">Sanciones en clientes activos</div>
                </div>
              </div>
              <div className="info-box info mt-4">
                <i className="fas fa-info-circle"></i>
                <div className="info-box-content">
                  <div className="info-box-title">Multas RGPD en España 2024</div>
                  <p>La AEPD impuso más de <strong>27 millones de euros</strong> en multas durante 2024. La mayoría de sanciones afectan a empresas sin sistemas de cumplimiento adecuados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NORMATIVAS */}
      <section className="section bg-gradient-light" id="normativas">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label"><i className="fas fa-balance-scale"></i> Marco Normativo</span>
            <h2 className="section-title">Toda la normativa que <span>necesitas conocer</span></h2>
            <p className="section-desc">Cubrimos el ecosistema regulatorio completo: normativa española, europea y guías de autoridades supervisoras.</p>
          </div>
          <div className="norma-grid">
            <Link href="/normativa/rgpd" className="norma-card fade-in">
              <div className="norma-card-header">
                <div className="service-icon icon-blue" style={{ width: '40px', height: '40px', fontSize: '1rem', margin: 0 }}><i className="fas fa-shield-alt"></i></div>
                <span className="norma-badge badge-eu">🇪🇺 UE · 2016</span>
              </div>
              <h3>RGPD – Reglamento General de Protección de Datos</h3>
              <p>Reglamento (UE) 2016/679. Base del sistema europeo de protección de datos personales. Principios, derechos, obligaciones y régimen sancionador.</p>
            </Link>
            <Link href="/normativa/lopdgdd" className="norma-card fade-in">
              <div className="norma-card-header">
                <div className="service-icon icon-red" style={{ width: '40px', height: '40px', fontSize: '1rem', margin: 0 }}><i className="fas fa-flag"></i></div>
                <span className="norma-badge badge-es">🇪🇸 ES · 2018</span>
              </div>
              <h3>LOPDGDD – Ley Orgánica 3/2018</h3>
              <p>Protección de Datos Personales y garantía de los derechos digitales. Adapta el RGPD al ordenamiento jurídico español con importantes especialidades.</p>
            </Link>
            <Link href="/normativa/lssi" className="norma-card fade-in">
              <div className="norma-card-header">
                <div className="service-icon icon-teal" style={{ width: '40px', height: '40px', fontSize: '1rem', margin: 0 }}><i className="fas fa-globe"></i></div>
                <span className="norma-badge badge-es">🇪🇸 ES · 2002</span>
              </div>
              <h3>LSSI-CE – Ley 34/2002</h3>
              <p>Ley de Servicios de la Sociedad de la Información y del Comercio Electrónico. Webs, cookies, comunicaciones comerciales y contratación online.</p>
            </Link>
            <Link href="/normativa/ia-act" className="norma-card fade-in">
              <div className="norma-card-header">
                <div className="service-icon icon-purple" style={{ width: '40px', height: '40px', fontSize: '1rem', margin: 0 }}><i className="fas fa-robot"></i></div>
                <span className="norma-badge badge-eu">🇪🇺 UE · 2024</span>
              </div>
              <h3>IA Act – Reglamento (UE) 2024/1689</h3>
              <p>Primer marco regulatorio mundial sobre Inteligencia Artificial. Clasificación por riesgos, requisitos de transparencia, prohibiciones y gobernanza de la IA.</p>
            </Link>
            <Link href="/normativa/dsa" className="norma-card fade-in">
              <div className="norma-card-header">
                <div className="service-icon icon-cyan" style={{ width: '40px', height: '40px', fontSize: '1rem', margin: 0 }}><i className="fas fa-network-wired"></i></div>
                <span className="norma-badge badge-eu">🇪🇺 UE · 2022</span>
              </div>
              <h3>DSA – Digital Services Act (UE) 2022/2065</h3>
              <p>Servicios digitales, moderación de contenidos, publicidad dirigida, plataformas VLOP y obligaciones de transparencia para intermediarios en línea.</p>
            </Link>
            <Link href="/normativa/eidas2" className="norma-card fade-in">
              <div className="norma-card-header">
                <div className="service-icon icon-gold" style={{ width: '40px', height: '40px', fontSize: '1rem', margin: 0 }}><i className="fas fa-id-card"></i></div>
                <span className="norma-badge badge-eu">🇪🇺 UE · 2024</span>
              </div>
              <h3>eIDAS 2 – Reglamento (UE) 2024/1183</h3>
              <p>Identidad digital europea, Billetera de Identidad Digital de la UE (EUDI Wallet), firmas electrónicas cualificadas y confianza digital transfronteriza.</p>
            </Link>
            <Link href="/normativa/nis2" className="norma-card fade-in">
              <div className="norma-card-header">
                <div className="service-icon icon-orange" style={{ width: '40px', height: '40px', fontSize: '1rem', margin: 0 }}><i className="fas fa-lock"></i></div>
                <span className="norma-badge badge-eu">🇪🇺 UE · 2022</span>
              </div>
              <h3>NIS2 – Directiva (UE) 2022/2555</h3>
              <p>Seguridad de las redes y sistemas de información. Obligaciones ampliadas a nuevos sectores, medidas de gestión de riesgos y notificación de incidentes.</p>
            </Link>
            <Link href="/normativa/dma" className="norma-card fade-in">
              <div className="norma-card-header">
                <div className="service-icon icon-green" style={{ width: '40px', height: '40px', fontSize: '1rem', margin: 0 }}><i className="fas fa-store"></i></div>
                <span className="norma-badge badge-eu">🇪🇺 UE · 2022</span>
              </div>
              <h3>DMA – Digital Markets Act (UE) 2022/1925</h3>
              <p>Mercados digitales, gatekeepers, interoperabilidad y competencia en el ecosistema digital europeo. Obligaciones para plataformas dominantes.</p>
            </Link>
          </div>
          <div className="text-center mt-4">
            <Link href="/normativa" className="btn btn-primary"><i className="fas fa-arrow-right"></i> Ver todas las normativas</Link>
          </div>
        </div>
      </section>

      {/* GUÍAS AEPD / AESIA */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label"><i className="fas fa-book-open"></i> Guías Oficiales</span>
            <h2 className="section-title">Guías AEPD y <span>AESIA</span></h2>
            <p className="section-desc">Aplicamos las guías oficiales de la Agencia Española de Protección de Datos y de la Agencia Española de Supervisión de Inteligencia Artificial.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="responsive-grid-1">
            {/* AEPD */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div className="service-icon icon-blue" style={{ width: '44px', height: '44px', fontSize: '1rem', margin: 0, flexShrink: 0 }}><i className="fas fa-shield-alt"></i></div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.05rem' }}>Guías AEPD</h3>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)' }}>Agencia Española de Protección de Datos</p>
                </div>
              </div>
              <div className="accordion">
                <div className="accordion-item">
                  <button className="accordion-header">
                    <span className="accordion-title"><i className="fas fa-file-alt"></i> Protección de datos &amp; IA (2024)</span>
                    <i className="fas fa-chevron-down accordion-chevron"></i>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-content">Guía sobre cómo aplicar el RGPD en el desarrollo y uso de sistemas de inteligencia artificial. Incluye análisis de riesgo, EIPD y principios de privacidad desde el diseño.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-header">
                    <span className="accordion-title"><i className="fas fa-handshake"></i> Encargados del Tratamiento (art. 28)</span>
                    <i className="fas fa-chevron-down accordion-chevron"></i>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-content">Guía completa sobre la figura del Encargado del Tratamiento: selección, contratos, garantías, subencargados y responsabilidades según el RGPD y la LOPDGDD.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-header">
                    <span className="accordion-title"><i className="fas fa-cookie-bite"></i> Guía sobre el uso de cookies</span>
                    <i className="fas fa-chevron-down accordion-chevron"></i>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-content">Requisitos para el uso de cookies y tecnologías de rastreo: tipos, bases jurídicas, banners de consentimiento, rechazo y auditoría de cumplimiento.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-header">
                    <span className="accordion-title"><i className="fas fa-exclamation-triangle"></i> Brechas de seguridad y notificación</span>
                    <i className="fas fa-chevron-down accordion-chevron"></i>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-content">Guía práctica sobre la gestión, evaluación y notificación de brechas de datos personales a la AEPD y a los afectados en los plazos establecidos.</div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <Link href="/guias/aepd" className="btn btn-outline btn-sm"><i className="fas fa-arrow-right"></i> Ver todas las Guías AEPD</Link>
              </div>
            </div>
            {/* AESIA */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div className="service-icon icon-purple" style={{ width: '44px', height: '44px', fontSize: '1rem', margin: 0, flexShrink: 0 }}><i className="fas fa-microchip"></i></div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.05rem' }}>16 Guías AESIA</h3>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)' }}>Agencia Española de Supervisión de Inteligencia Artificial</p>
                </div>
              </div>
              <div className="accordion">
                <div className="accordion-item">
                  <button className="accordion-header">
                    <span className="accordion-title"><i className="fas fa-robot"></i> G1 – Ámbito de aplicación del IA Act</span>
                    <i className="fas fa-chevron-down accordion-chevron"></i>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-content">Guía para determinar qué sistemas entran en el ámbito del Reglamento de IA, cómo definir sistema de IA según el anexo I y qué exclusiones aplican.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-header">
                    <span className="accordion-title"><i className="fas fa-exclamation-circle"></i> G2 – Sistemas de IA de alto riesgo</span>
                    <i className="fas fa-chevron-down accordion-chevron"></i>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-content">Clasificación de sistemas de IA de alto riesgo según el Anexo III del IA Act, criterios de evaluación y obligaciones específicas para proveedores y usuarios.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-header">
                    <span className="accordion-title"><i className="fas fa-eye"></i> G3 – Transparencia en sistemas de IA</span>
                    <i className="fas fa-chevron-down accordion-chevron"></i>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-content">Obligaciones de transparencia hacia usuarios e interesados, información mínima que debe proporcionarse y requisitos de explicabilidad de decisiones automatizadas.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-header">
                    <span className="accordion-title"><i className="fas fa-ban"></i> G4 – Prácticas de IA prohibidas</span>
                    <i className="fas fa-chevron-down accordion-chevron"></i>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-content">Análisis de las prácticas de IA expresamente prohibidas por el art. 5 del IA Act: manipulación subliminal, puntuación social, identificación biométrica en tiempo real en espacios públicos, etc.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-header">
                    <span className="accordion-title"><i className="fas fa-building"></i> G5 – Gobernanza y supervisión humana</span>
                    <i className="fas fa-chevron-down accordion-chevron"></i>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-content">Estructuras de gobernanza requeridas, mecanismos de supervisión humana efectiva y responsabilidades en la cadena de valor de los sistemas de IA.</div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <Link href="/guias/aesia" className="btn btn-outline btn-sm"><i className="fas fa-arrow-right"></i> Ver las 16 Guías AESIA</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label" style={{ background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.9)' }}><i className="fas fa-rocket"></i> Empieza hoy</span>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>¿Tu empresa cumple con la normativa vigente?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto 2.5rem' }}>Solicita tu diagnóstico gratuito y descubre el nivel real de cumplimiento de tu organización. Sin compromisos, con informe detallado incluido.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contacto#diagnostico" className="btn btn-accent btn-lg"><i className="fas fa-rocket"></i> Diagnóstico Gratuito</Link>
            <Link href="/contacto" className="btn btn-outline-white btn-lg"><i className="fas fa-phone"></i> Hablar con un experto</Link>
          </div>
        </div>
      </section>

      <style>{`
        .responsive-grid-1 { display: grid; }
        @media(max-width:768px) { .responsive-grid-1 { grid-template-columns: 1fr !important; gap: 2rem !important; } }
      `}</style>
    </>
  )
}
