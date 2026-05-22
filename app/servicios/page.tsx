import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicios · PRIDATO Consultoría en Privacidad y Cumplimiento',
  description: 'DPO Externo, adecuación RGPD, auditorías, IA Act, encargados del tratamiento, formación y cumplimiento web. Servicios integrales de protección de datos.',
}

export default function ServiciosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-label"><i className="fas fa-briefcase"></i> Servicios PRIDATO</span>
          <h1>Servicios de Consultoría en<br />Privacidad y Cumplimiento</h1>
          <p>Soluciones integrales y personalizadas para que tu organización cumpla con toda la normativa de protección de datos y privacidad digital con garantías reales.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <i className="fas fa-chevron-right"></i>
            <span>Servicios</span>
          </nav>
        </div>
      </section>

      {/* STATS */}
      <section className="section-sm bg-white">
        <div className="container">
          <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
            <div className="stat-card"><div className="stat-value accent" data-count="200" data-suffix="+">200+</div><div className="stat-label">Empresas asesoradas</div></div>
            <div className="stat-card"><div className="stat-value" data-count="10" data-suffix=" años">10</div><div className="stat-label">De experiencia</div></div>
            <div className="stat-card"><div className="stat-value gold" data-count="98" data-suffix="%">98%</div><div className="stat-label">Satisfacción</div></div>
            <div className="stat-card"><div className="stat-value danger" data-count="0">0</div><div className="stat-label">Sanciones en clientes activos</div></div>
          </div>
        </div>
      </section>

      {/* DPO EXTERNO */}
      <section className="section bg-gradient-light" id="dpo">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="responsive-grid-1">
            <div>
              <span className="section-label"><i className="fas fa-user-shield"></i> Servicio estrella</span>
              <h2 className="section-title">DPO Externo <span>Certificado</span></h2>
              <p>El Delegado de Protección de Datos (DPO) es una figura obligatoria para muchas organizaciones según el art. 37 del RGPD. PRIDATO ofrece este servicio de forma externa, flexible y con cobertura total.</p>
              <p>Nuestros DPOs están certificados (CIPP/E, CIPM, CDPP) y con experiencia acreditada ante la AEPD. Actuamos como interlocutores con la autoridad de control y gestionamos todas las obligaciones legales del cargo.</p>
              <div className="checklist mt-3">
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Designación formal ante la AEPD (arts. 37-39 RGPD)</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Punto de contacto con la autoridad supervisora</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Supervisión del cumplimiento y registro de actividades</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Asesoramiento en EIPDs y análisis de riesgo</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Gestión de derechos ARSLOP y brechas de seguridad</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Formación a empleados y concienciación</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Informes periódicos a la dirección</span></div>
              </div>
              <div className="info-box warning mt-3">
                <i className="fas fa-exclamation-triangle"></i>
                <div className="info-box-content">
                  <div className="info-box-title">¿Necesitas DPO obligatoriamente?</div>
                  <p>El RGPD obliga a designar DPO a organismos públicos, organizaciones que tratan datos a gran escala y entidades que realizan seguimiento sistemático de personas. La LOPDGDD amplía esta obligación en España.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="card card-body" style={{ background: 'linear-gradient(135deg,var(--primary-dark),var(--primary))', color: 'white', border: 'none' }}>
                <h3 style={{ color: 'white', marginBottom: '1.5rem' }}><i className="fas fa-list-check" style={{ color: 'var(--accent-light)' }}></i> ¿Cuándo es obligatorio el DPO?</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.85rem', background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-sm)' }}>
                    <i className="fas fa-landmark" style={{ color: 'var(--accent-light)', marginTop: '0.2rem', flexShrink: 0 }}></i>
                    <div><strong style={{ color: 'white', fontSize: '0.9rem' }}>Organismos públicos</strong><br /><span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>Toda autoridad u organismo público (salvo tribunales).</span></div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.85rem', background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-sm)' }}>
                    <i className="fas fa-eye" style={{ color: 'var(--accent-light)', marginTop: '0.2rem', flexShrink: 0 }}></i>
                    <div><strong style={{ color: 'white', fontSize: '0.9rem' }}>Vigilancia sistemática a gran escala</strong><br /><span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>Monitoreo habitual y sistemático de personas (p. ej. CCTV masivo, perfilado).</span></div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.85rem', background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-sm)' }}>
                    <i className="fas fa-database" style={{ color: 'var(--accent-light)', marginTop: '0.2rem', flexShrink: 0 }}></i>
                    <div><strong style={{ color: 'white', fontSize: '0.9rem' }}>Datos especiales a gran escala</strong><br /><span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>Tratamiento masivo de categorías especiales (salud, ideología, biometría…).</span></div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.85rem', background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-sm)' }}>
                    <i className="fas fa-gavel" style={{ color: 'var(--accent-light)', marginTop: '0.2rem', flexShrink: 0 }}></i>
                    <div><strong style={{ color: 'white', fontSize: '0.9rem' }}>Sectores específicos en LOPDGDD</strong><br /><span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>Centros educativos, hospitales, operadores de redes, proveedores servicios electrónicos, seguros, etc.</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADECUACIÓN */}
      <section className="section bg-white" id="adecuacion">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label"><i className="fas fa-clipboard-check"></i> Adecuación Normativa</span>
            <h2 className="section-title">Adecuación <span>RGPD &amp; LOPDGDD</span></h2>
            <p className="section-desc">Proceso completo de implementación del marco de protección de datos en tu organización, desde el diagnóstico inicial hasta la entrega de toda la documentación.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }} className="responsive-grid-3">
            <div className="service-card">
              <div className="service-icon icon-blue"><i className="fas fa-search"></i></div>
              <h3>Fase 1: Diagnóstico</h3>
              <p>Análisis exhaustivo del estado actual de la organización: inventario de tratamientos, flujos de datos, sistemas, proveedores y brechas de cumplimiento.</p>
              <div className="service-tags"><span className="service-tag">Gap Analysis</span><span className="service-tag">Inventario</span><span className="service-tag">Informe</span></div>
            </div>
            <div className="service-card">
              <div className="service-icon icon-cyan"><i className="fas fa-file-alt"></i></div>
              <h3>Fase 2: Documentación</h3>
              <p>Elaboración del Registro de Actividades (RAT), políticas internas, procedimientos, cláusulas informativas, consentimientos y toda la documentación legal requerida.</p>
              <div className="service-tags"><span className="service-tag">RAT</span><span className="service-tag">Políticas</span><span className="service-tag">Cláusulas</span></div>
            </div>
            <div className="service-card">
              <div className="service-icon icon-green"><i className="fas fa-cog"></i></div>
              <h3>Fase 3: Implementación</h3>
              <p>Puesta en marcha de medidas técnicas y organizativas: gestión de derechos ARSLOP, procesos de brechas, formación al personal y protocolos internos.</p>
              <div className="service-tags"><span className="service-tag">ARSLOP</span><span className="service-tag">Medidas técnicas</span><span className="service-tag">Formación</span></div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="mb-4">Entregables del proceso de adecuación</h3>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Documento / Entregable</th>
                    <th>Base legal</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Registro de Actividades de Tratamiento (RAT)</td><td>Art. 30 RGPD</td><td>Inventario completo de todos los tratamientos de datos personales de la organización.</td></tr>
                  <tr><td>Análisis de Riesgo</td><td>Art. 24 RGPD</td><td>Evaluación de probabilidad e impacto de riesgos en los tratamientos realizados.</td></tr>
                  <tr><td>Evaluación de Impacto (EIPD/DPIA)</td><td>Art. 35 RGPD</td><td>Para tratamientos de alto riesgo. Obligatoria antes de iniciar el tratamiento.</td></tr>
                  <tr><td>Política de Privacidad interna</td><td>Art. 24 RGPD</td><td>Marco normativo interno de gestión de la privacidad en la organización.</td></tr>
                  <tr><td>Cláusulas informativas (arts. 13-14)</td><td>Arts. 13-14 RGPD</td><td>Información a interesados: empleados, clientes, proveedores, usuarios web.</td></tr>
                  <tr><td>Procedimiento ARSLOP</td><td>Arts. 15-22 RGPD</td><td>Protocolo de atención y gestión de derechos de los interesados.</td></tr>
                  <tr><td>Protocolo de Brechas de Seguridad</td><td>Arts. 33-34 RGPD</td><td>Procedimiento de detección, evaluación, notificación y gestión de brechas.</td></tr>
                  <tr><td>Contratos Encargados del Tratamiento</td><td>Art. 28 RGPD</td><td>DPA con todos los proveedores que acceden a datos personales.</td></tr>
                  <tr><td>Política de Retención y Supresión</td><td>Art. 5.1.e RGPD</td><td>Plazos de conservación por categoría de datos y procedimientos de supresión.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* AUDITORÍA */}
      <section className="section bg-gradient-light" id="auditoria">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="responsive-grid-1">
            <div>
              <span className="section-label"><i className="fas fa-search"></i> Diagnóstico y control</span>
              <h2 className="section-title">Auditoría &amp; <span>Diagnóstico de Privacidad</span></h2>
              <p>Evaluación independiente y objetiva del estado real de cumplimiento de tu organización. Identificamos brechas, valoramos riesgos y proponemos un plan de mejora concreto y priorizado.</p>
              <div className="accordion mt-3">
                <div className="accordion-item">
                  <button className="accordion-header">
                    <span className="accordion-title"><i className="fas fa-clipboard-list"></i> Auditoría inicial / Diagnóstico rápido</span>
                    <i className="fas fa-chevron-down accordion-chevron"></i>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-content">Evaluación básica del estado de cumplimiento con entrega de informe ejecutivo en 48-72h. Ideal para conocer el punto de partida sin grandes inversiones. Incluye semáforo de riesgo por áreas.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-header">
                    <span className="accordion-title"><i className="fas fa-search-plus"></i> Auditoría completa de cumplimiento</span>
                    <i className="fas fa-chevron-down accordion-chevron"></i>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-content">Revisión exhaustiva de toda la documentación, sistemas, procesos y contratos. Incluye entrevistas con responsables de área, revisión técnica de sistemas y plan de acción detallado con prioridades y plazos.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-header">
                    <span className="accordion-title"><i className="fas fa-redo"></i> Auditoría de mantenimiento anual</span>
                    <i className="fas fa-chevron-down accordion-chevron"></i>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-content">Revisión periódica para organizaciones ya adaptadas. Verifica que el sistema de cumplimiento sigue siendo eficaz ante cambios organizativos, nuevos tratamientos o modificaciones normativas.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-header">
                    <span className="accordion-title"><i className="fas fa-handshake"></i> Auditoría de proveedores/encargados</span>
                    <i className="fas fa-chevron-down accordion-chevron"></i>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-content">Evaluación del cumplimiento de los Encargados del Tratamiento (art. 28 RGPD): verificación de contratos DPA, garantías ofrecidas, medidas de seguridad y subencargados utilizados.</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card card-body mb-3">
                <h4 style={{ marginBottom: '1rem' }}><i className="fas fa-chart-bar" style={{ color: 'var(--accent)' }}></i> Áreas que evaluamos</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    ['Documentación y registro', 'RAT · Políticas · Cláusulas'],
                    ['Bases de legitimación', 'Consentimiento · Contrato · Interés legítimo'],
                    ['Derechos de los interesados', 'ARSLOP · Plazos · Procedimientos'],
                    ['Seguridad de los datos', 'Medidas técnicas · Brechas · Cifrado'],
                    ['Encargados y subencargados', 'Contratos DPA · Garantías · Transferencias'],
                    ['Transferencias internacionales', 'CCT · Adecuación · Garantías'],
                    ['Presencia web y cookies', 'LSSI · Consentimiento · Banner'],
                  ].map(([label, value]) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>
                      <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{label}</span>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary-light)' }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="info-box success">
                <i className="fas fa-trophy"></i>
                <div className="info-box-content">
                  <div className="info-box-title">Entregable garantizado</div>
                  <p>Informe ejecutivo + informe técnico detallado + plan de acción priorizado con plazos y responsables. Presentación a dirección incluida.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IA & AUTOMATIZACIÓN */}
      <section className="section bg-white" id="ia">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label"><i className="fas fa-robot"></i> Inteligencia Artificial</span>
            <h2 className="section-title">Cumplimiento <span>IA &amp; Automatización</span></h2>
            <p className="section-desc">El IA Act es ya una realidad. Ayudamos a tu organización a entender sus obligaciones, clasificar sus sistemas y prepararse para el cumplimiento con la nueva regulación europea.</p>
          </div>
          <div className="services-grid">
            {[
              { icon: 'fas fa-sitemap', color: 'icon-purple', title: 'Clasificación por nivel de riesgo', desc: 'Análisis y clasificación de todos tus sistemas de IA según el marco de riesgos del IA Act: inaceptable, alto, limitado y mínimo.', tags: ['IA Act', 'Anexo III', 'Evaluación'] },
              { icon: 'fas fa-clipboard-check', color: 'icon-blue', title: 'Evaluación de Conformidad', desc: 'Proceso de evaluación de conformidad para sistemas de alto riesgo: documentación técnica, registros, gestión de calidad, transparencia y supervisión humana.', tags: ['Alto riesgo', 'Conformidad', 'Documentación'] },
              { icon: 'fas fa-balance-scale-left', color: 'icon-orange', title: 'Análisis de sesgos y discriminación', desc: 'Evaluación de sesgos algorítmicos, impacto discriminatorio y cumplimiento del principio de no discriminación en sistemas de IA que afectan a personas.', tags: ['Sesgo algorítmico', 'RGPD Art.22', 'Equidad'] },
              { icon: 'fas fa-eye', color: 'icon-cyan', title: 'Transparencia y explicabilidad', desc: 'Implementación de obligaciones de transparencia hacia usuarios: información clara sobre el uso de IA, derecho a explicación de decisiones automatizadas (art. 22 RGPD).', tags: ['XAI', 'Art.22 RGPD', 'AESIA'] },
              { icon: 'fas fa-file-contract', color: 'icon-green', title: 'Documentación técnica IA Act', desc: 'Preparación de toda la documentación exigida por el IA Act para sistemas de alto riesgo: instrucciones de uso, documentación técnica, logs y registros de supervisión.', tags: ['Annexo IV', 'Registros', 'Documentación'] },
              { icon: 'fas fa-microchip', color: 'icon-gold', title: 'Adecuación a guías AESIA', desc: 'Aplicación práctica de las 16 Guías de la Agencia Española de Supervisión de IA para adaptar sistemas y procesos a los criterios supervisores nacionales.', tags: ['AESIA', '16 Guías', 'Supervisión'] },
            ].map(s => (
              <div key={s.title} className="service-card">
                <div className={`service-icon ${s.color}`}><i className={s.icon}></i></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-tags">{s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENCARGADOS */}
      <section className="section bg-gradient-light" id="encargados">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label"><i className="fas fa-handshake"></i> Gestión de terceros</span>
            <h2 className="section-title">Encargados, Corresponsables <span>y Subencargados</span></h2>
            <p className="section-desc">La correcta gestión de las relaciones con terceros que acceden a datos personales es clave para el cumplimiento. Te ayudamos a estructurarlas con garantías.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="responsive-grid-3">
            <div className="card card-body">
              <div className="service-icon icon-blue" style={{ marginBottom: '1rem' }}><i className="fas fa-handshake"></i></div>
              <h3 id="contratos-encargados">Encargados del Tratamiento (Art. 28)</h3>
              <p>Elaboración y revisión de contratos DPA con todos los proveedores que acceden a datos personales en nombre del responsable.</p>
              <div className="checklist mt-2">
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Cláusulas obligatorias art. 28 RGPD</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Garantías de cumplimiento del encargado</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Cláusulas sobre subencargados</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Derecho de auditoría del responsable</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Transferencias internacionales (CCT)</span></div>
              </div>
            </div>
            <div className="card card-body" id="corresponsables">
              <div className="service-icon icon-cyan" style={{ marginBottom: '1rem' }}><i className="fas fa-users"></i></div>
              <h3>Corresponsables del Tratamiento (Art. 26)</h3>
              <p>Cuando dos o más organizaciones determinan conjuntamente los fines y medios del tratamiento, deben firmar un acuerdo de corresponsabilidad.</p>
              <div className="checklist mt-2">
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Identificación de corresponsabilidad</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Reparto de responsabilidades y roles</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Punto de contacto para interesados</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Distribución de información (art. 13-14)</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Gestión conjunta de derechos</span></div>
              </div>
            </div>
            <div className="card card-body">
              <div className="service-icon icon-gold" style={{ marginBottom: '1rem' }}><i className="fas fa-network-wired"></i></div>
              <h3>Subencargados y cadena de custodia</h3>
              <p>Gestión de la cadena de subencargados: autorización previa del responsable, contratos con mismas garantías, notificación de cambios y control efectivo.</p>
              <div className="checklist mt-2">
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Inventario de subencargados</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Autorización específica o general</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Contratos en cascada con mismas garantías</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Notificación de cambios al responsable</span></div>
                <div className="checklist-item"><i className="fas fa-check-circle"></i><span>Verificación periódica de cumplimiento</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMACIÓN */}
      <section className="section bg-white" id="formacion">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="responsive-grid-1">
            <div>
              <span className="section-label"><i className="fas fa-graduation-cap"></i> Formación</span>
              <h2 className="section-title">Formación y <span>Concienciación</span></h2>
              <p>El 85% de las brechas de seguridad tienen un factor humano. La formación continua es la inversión más rentable en materia de protección de datos. Diseñamos programas a medida para cada tipo de perfil.</p>
              <div className="accordion mt-3">
                <div className="accordion-item">
                  <button className="accordion-header">
                    <span className="accordion-title"><i className="fas fa-users"></i> Formación general para empleados</span>
                    <i className="fas fa-chevron-down accordion-chevron"></i>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-content">Programa básico de concienciación sobre protección de datos para toda la plantilla. Cubre principios del RGPD, qué son los datos personales, obligaciones del empleado, qué hacer ante una brecha y cómo atender solicitudes de derechos.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-header">
                    <span className="accordion-title"><i className="fas fa-user-tie"></i> Formación avanzada para DPOs y responsables</span>
                    <i className="fas fa-chevron-down accordion-chevron"></i>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-content">Programa especializado para el DPO o responsable de cumplimiento: análisis jurídico profundo, gestión de EIPDs, relación con la AEPD, elaboración de documentación y resolución de casos prácticos complejos.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-header">
                    <span className="accordion-title"><i className="fas fa-robot"></i> Formación en IA y privacidad</span>
                    <i className="fas fa-chevron-down accordion-chevron"></i>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-content">Para equipos de desarrollo y producto: privacidad desde el diseño (PbD), anonimización y seudonimización, IA Act y obligaciones del proveedor/usuario de IA, art. 22 RGPD y decisiones automatizadas.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-header">
                    <span className="accordion-title"><i className="fas fa-laptop"></i> E-learning a medida</span>
                    <i className="fas fa-chevron-down accordion-chevron"></i>
                  </button>
                  <div className="accordion-body">
                    <div className="accordion-content">Desarrollo de cursos online adaptados a la realidad de tu organización, con test de evaluación, certificados de superación y seguimiento de la participación de la plantilla.</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card card-body">
                <h4 style={{ marginBottom: '1.5rem' }}><i className="fas fa-star" style={{ color: 'var(--gold)' }}></i> Modalidades de formación</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { icon: 'fas fa-chalkboard-teacher', color: 'icon-blue', title: 'Presencial / Taller', desc: 'Sesiones en tus instalaciones, adaptadas al sector y perfil del equipo.' },
                    { icon: 'fas fa-video', color: 'icon-cyan', title: 'Videoconferencia / Online en directo', desc: 'Sesiones síncronas con grupos de trabajo, preguntas y casos reales.' },
                    { icon: 'fas fa-laptop', color: 'icon-green', title: 'E-learning asíncrono', desc: 'Cursos a tu ritmo con evaluación y certificado. Ideal para grandes plantillas.' },
                    { icon: 'fas fa-certificate', color: 'icon-gold', title: 'Certificación acreditada', desc: 'Preparación para certificaciones profesionales CIPP/E, CIPM, ENS y otras.' },
                  ].map(m => (
                    <div key={m.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div className={`service-icon ${m.color}`} style={{ width: '40px', height: '40px', fontSize: '0.9rem', margin: 0, flexShrink: 0 }}><i className={m.icon}></i></div>
                      <div><strong style={{ fontSize: '0.9rem' }}>{m.title}</strong><br /><span style={{ fontSize: '0.83rem', color: 'var(--text-muted)' }}>{m.desc}</span></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="info-box info mt-3">
                <i className="fas fa-info-circle"></i>
                <div className="info-box-content">
                  <div className="info-box-title">Certificado de formación</div>
                  <p>Todos los participantes reciben certificado de superación que acredita la formación en protección de datos, válido como evidencia de cumplimiento ante la AEPD.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>¿Listo para proteger tu organización?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '0 auto 2rem' }}>Solicita una consulta inicial gratuita y te explicamos qué servicios se adaptan mejor a las necesidades de tu organización.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contacto#diagnostico" className="btn btn-accent btn-lg"><i className="fas fa-rocket"></i> Diagnóstico Gratuito</Link>
            <Link href="/contacto" className="btn btn-outline-white btn-lg"><i className="fas fa-phone"></i> Contactar ahora</Link>
          </div>
        </div>
      </section>

      <style>{`
        .responsive-grid-1 { display: grid; }
        .responsive-grid-3 { display: grid; }
        @media(max-width:768px) {
          .responsive-grid-1 { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .responsive-grid-3 { grid-template-columns: 1fr !important; gap: 1rem !important; }
        }
      `}</style>
    </>
  )
}
