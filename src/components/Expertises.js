import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUserTie, FaCrown, FaUsers, FaCertificate, FaArrowRight, FaLaptop, FaPlus, FaMinus, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';

function Expertises() {
    const [openFAQ, setOpenFAQ] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
      
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const faq = [
      { q: "Quelle est la durée moyenne d'un accompagnement ?", a: "La durée dépend du programme choisi : une séance unique pour le diagnostic, 1 à 3 jours pour la formation, ou 3 mois pour l'accompagnement premium." },
      { q: "Puis-je combiner plusieurs expertises ?", a: "Oui — nos offres sont modulables. Nous construisons un parcours adapté à vos besoins." },
      { q: "Comment se déroule la première séance ?", a: "La première séance commence par un état des lieux, suivi d'un plan d'actions priorisé et d'objectifs clairs." },
      { q: "Quels sont les modes de paiement acceptés ?", a: "Paiements sécurisés en ligne avec Stripe." },
      { q: "Proposez-vous des formations sur-mesure ?", a: "Oui — contactez-nous pour une proposition sur-mesure et un devis détaillé." }
    ];

    const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

    const styles = {
      container: { maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '0 20px' : '0 40px' },
      hero: {
        padding: isMobile ? '80px 20px 60px' : '140px 20px 90px',
        backgroundColor: '#080E24',
        color: 'white',
        textAlign: 'center'
      },
      heroTitle: { fontSize: isMobile ? '2rem' : '3.2rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '18px', color: '#C9A445' },
      heroSubtitle: { fontSize: isMobile ? '1rem' : '1.15rem', maxWidth: '900px', margin: '0 auto', lineHeight: '1.7', color: '#d1d5db' },
      grid: { display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' },
      card: {
        backgroundColor: '#0F172A', color: 'white', padding: isMobile ? '20px' : '30px', borderRadius: '14px', border: '1px solid #C9A445', transition: 'all 0.3s ease', minHeight: isMobile ? 'auto' : '320px'
      },
      titleAccent: { color: '#C9A445', fontWeight: 700, marginBottom: '6px' },
      price: { fontSize: isMobile ? '1.2rem' : '1.4rem', fontWeight: 800, color: '#080E24', backgroundColor: '#C9A445', padding: '8px 12px', borderRadius: '12px', display: 'inline-block', margin: '12px 0' },
      btn: { width: '100%', padding: '12px 14px', backgroundColor: '#C9A445', color: '#080E24', borderRadius: '8px', fontWeight: 700, border: 'none', cursor: 'pointer' },
      pill: { display: 'inline-block', padding: '6px 10px', border: '1px solid #C9A445', borderRadius: '10px', marginTop: '10px', color: '#C9A445' },
      smallMuted: { color: '#9CA3AF', fontSize: '0.95rem' },
      modulesBox: { backgroundColor: '#0B1220', padding: '18px', borderRadius: '10px', marginTop: '14px' },
      certBox: { background: 'linear-gradient(180deg,#0b1220 0%, #081021 100%)', border: '1px solid rgba(201,164,69,0.18)', padding: '36px', borderRadius: '14px', textAlign: 'center', boxShadow: '0 8px 30px rgba(3,7,18,0.6)' },
      certRibbon: { display: 'inline-block', background: 'linear-gradient(90deg,#C9A445,#F7D67A)', color: '#081021', padding: '6px 12px', borderRadius: '20px', fontWeight: 800, marginBottom: '12px' }
    };

    return (
      <div>
        <section style={styles.hero}>
          <div style={styles.container}>
            <h1 style={styles.heroTitle}>Nos Prestations  </h1>
            <p style={styles.heroSubtitle}>
              Des solutions concrètes avec des prix transparents. Chaque prestation est pensée pour produire des résultats
              mesurables et s'adapter précisément à votre réalité de dirigeant.
            </p>
          </div>
        </section>

        <section style={{ padding: isMobile ? '40px 20px' : '60px 20px', backgroundColor: '#f8fafc' }}>
          <div style={styles.container}>
            <div style={styles.grid}>

              {/* 1 Diagnostic Stratégique */}
              <div style={styles.card} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <FaSearch size={40} color="#C9A445" style={{ marginBottom: '10px' }} />
                <div style={styles.titleAccent}>DIAGNOSTIC STRATÉGIQUE</div>
                <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.25rem', margin: '6px 0' }}>Audit complet</h3>
                <div style={styles.price}>490€ <span style={{fontSize:'0.85rem', marginLeft:'8px', color:'#081021', fontWeight: 600}}></span></div>
                <p style={styles.smallMuted}>Analyse complète de votre positionnement, marché et concurrence.</p>
                <div style={{ marginTop: '12px' }}>
                  <ul style={{ lineHeight: '1.9', margin: '12px 0 18px 0' }}>
                    <div style={{ border: '1px dashed #C9A445', padding: '8px 10px', borderRadius: '8px', display: 'inline-block', marginBottom: '14px' }}>vos bénéfices</div>
                    <li><FaArrowRight style={{ marginRight: '8px' }} />Vision claire de vos forces et blocages</li>
                    <li><FaArrowRight style={{ marginRight: '8px' }} />Plan d'action en 5 points</li>
                    <li><FaArrowRight style={{ marginRight: '8px' }} />Recommandations personnalisées</li>
                    <li><FaArrowRight style={{ marginRight: '8px' }} />Rapport écrit détaillé</li>
                  </ul>
                  <div style={{ border: '1px dashed #C9A445', padding: '8px 10px', borderRadius: '8px', display: 'inline-block', marginBottom: '14px' }}>Séance unique • 2h</div>
                </div>
                <Link to="/reservation?service=Diagnostic%20strat%C3%A9gique" style={{ ...styles.btn, display: 'inline-block', textDecoration: 'none' }}>Réservez</Link>
              </div>
              {/* 2 Coaching Stratégique */}
              <div style={styles.card} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <FaUserTie size={40} color="#C9A445" style={{ marginBottom: '10px' }} />
                <div style={styles.titleAccent}>COACHING STRATÉGIQUE</div>
                <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.25rem', margin: '6px 0' }}>Accompagnement individuel</h3>
                <div style={styles.price}>250€ <span style={{fontSize:'0.85rem', marginLeft:'8px', color:'#081021', fontWeight: 600}}></span> </div>
                <p style={styles.smallMuted}>Accompagnement sur-mesure pour structurer et accélérer votre activité.</p>
                <ul style={{ lineHeight: '1.9', margin: '12px 0 14px 0' }}>
                  <div style={{ border: '1px dashed #C9A445', padding: '8px 10px', borderRadius: '8px', display: 'inline-block', marginBottom: '14px' }}>vos bénéfices</div>
                  <li><FaArrowRight style={{ marginRight: '8px' }} />Stratégie commerciale personnalisée</li>
                  <li><FaArrowRight style={{ marginRight: '8px' }} />Suivi entre les séances</li>
                  <li><FaArrowRight style={{ marginRight: '8px' }} />Accès direct au consultant</li>
                </ul>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
                  <div style={styles.pill}>Par séance • 1h30</div>
                  <div style={styles.pill}>Accès prioritaire</div>
                </div>
                <Link to="/reservation?service=Coaching%20strat%C3%A9gique" style={{ ...styles.btn, display: 'inline-block', textDecoration: 'none' }}>Réserver</Link>
              </div>

              {/* 3 Accompagnement Premium */}
              <div style={styles.card} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <FaCrown size={40} color="#C9A445" style={{ marginBottom: '10px' }} />
                <div style={styles.titleAccent}>ACCOMPAGNEMENT PREMIUM</div>
                <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.25rem', margin: '6px 0' }}>Programme 3 mois</h3>
                <div style={styles.price}>2400€ <span style={{fontSize:'0.85rem', marginLeft:'8px', color:'#081021', fontWeight: 600}}></span></div>
                <p style={styles.smallMuted}>Programme intensif: 2 séances par mois, suivi dédié et actions concrètes pour développer votre business.</p>
                <div style={{ border: '1px dashed #C9A445', padding: '8px 10px', borderRadius: '8px', display: 'inline-block', marginBottom: '14px' }}>vos bénéfices</div>
                <ul style={{ lineHeight: '1.9', margin: '12px 0 18px 0' }}>
                  <li><FaArrowRight style={{ marginRight: '8px' }} />Diagnostic + stratégie complète</li>
                  <li><FaArrowRight style={{ marginRight: '8px' }} />6 séances de coaching</li>
                  <li><FaArrowRight style={{ marginRight: '8px' }} />Support illimité par téléphone / mail</li>
                </ul>
                <Link to="/reservation?service=Accompagnement%20premium" style={{ ...styles.btn, display: 'inline-block', textDecoration: 'none' }}>Choisir ce programme</Link>
              </div>

              {/* 4 Formation Équipes */}
              <div style={styles.card} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <FaUsers size={40} color="#C9A445" style={{ marginBottom: '10px' }} />
                <div style={styles.titleAccent}>SÉMINAIRE DE GROUPE</div>
                <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.25rem', margin: '6px 0' }}>Montée en compétences</h3>
                <div style={styles.price}>Sur devis <span style={{fontSize:'0.85rem', marginLeft:'8px', color:'#081021', fontWeight: 600}}>• 1 à 3 jours</span></div>
                <p style={styles.smallMuted}>Programmes adaptés par secteur, mise en situation et outils pratiques pour vos équipes.</p>
                <div style={{ border: '1px dashed #C9A445', padding: '8px 10px', borderRadius: '8px', display: 'inline-block', marginBottom: '14px' }}>vos bénéfices</div>
                <ul style={{ lineHeight: '1.9', margin: '12px 0 18px 0' }}>
                  <li><FaArrowRight style={{ marginRight: '8px' }} />Programmes adaptés à votre secteur</li>
                  <li><FaArrowRight style={{ marginRight: '8px' }} />Mises en situation concrètes</li>
                  <li><FaArrowRight style={{ marginRight: '8px' }} />Supports et outils pratiques</li>
                  <li><FaArrowRight style={{ marginRight: '8px' }} />Suivi post-formation inclus</li>
                </ul>
                <div style={{ backgroundColor: '#081021', padding: '14px', borderRadius: '10px', marginBottom: '18px' }}>
                  <div style={{ fontSize: '0.95rem', color: '#d1d5db', lineHeight: '1.7' }}>
                    <div style={{ color: '#C9A445', fontWeight: 700, marginBottom: '8px' }}>Format flexible</div>
                    Sessions en intra-entreprise ou inter-entreprises, de 1 à 3 jours selon vos besoins spécifiques.
                  </div>
                </div>

                <Link to="/contact?service=S%C3%A9minaire%20de%20groupe" style={{ ...styles.btn, display: 'inline-block', textDecoration: 'none' }}>Echanger avec le dirigeant</Link>
              </div>

              {/* 5 Coaching en ligne */}
              <div style={styles.card} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <FaLaptop size={40} color="#C9A445" style={{ marginBottom: '10px' }} />
                 <div style={{ fontSize: '0.9rem', color:"#C9A445" , fontFamily: "'Helvetica Neue', serif"}}>Nouveau </div>
                <div style={styles.titleAccent}>COACHING EN LIGNE</div> <div style={styles.pill}>650€  </div>
                <p style={styles.smallMuted}>Accédez à nos modules de coaching en ligne où que vous soyez.</p>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '14px', marginTop: '16px', marginBottom: '18px' }}>
                  <div style={{ background: '#081021', padding: '14px', borderRadius: 10, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <FaLightbulb size={28} color="#C9A445" />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Mindset entrepreneurial</div>
                      <div style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Développez la posture mentale du leader</div>
                    </div>
                  </div>

                  <div style={{ background: '#081021', padding: '14px', borderRadius: 10, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <FaHandshake size={28} color="#C9A445" />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Vendeur attitude</div>
                      <div style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Maîtrisez l'art de la vente</div>
                    </div>
                  </div>

                  <div style={{ background: '#081021', padding: '14px', borderRadius: 10, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <FaChartLine size={28} color="#C9A445" />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Stratégie commerciale</div>
                      <div style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Structurez votre offre, ciblez juste, vendez mieux</div>
                    </div>
                  </div>

                  <div style={{ background: '#081021', padding: '14px', borderRadius: 10, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <FaUsers size={28} color="#C9A445" />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Leadership & management</div>
                      <div style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Construisez et pilotez une équipe performante</div>
                    </div>
                  </div>
                </div>

                <div style={{ backgroundColor: '#081021', padding: '14px', borderRadius: '10px', marginBottom: '18px' }}>
                  <div style={{ fontSize: '0.95rem', color: '#d1d5db', lineHeight: '1.7' }}>
                    <div style={{ color: '#C9A445', fontWeight: 700, marginBottom: '8px' }}>Accès illimité</div>
                    Apprenez à votre rythme avec vidéos, fiches pratiques et exercices interactifs.
                  </div>
                  
                </div>
                <div style={{ border: '1px dashed #C9A445', padding: '8px 10px', borderRadius: '8px', display: 'inline-block', marginBottom: '14px' }}>Pack de 3 séances d'1h30</div>

                
                
                <Link to="/reservation?service=Coaching%20en%20ligne" style={{ ...styles.btn, display: 'inline-block', textDecoration: 'none' }}>Réservez</Link>
              </div>
              

              {/* 7 Programme complet */}
              <div style={Object.assign({}, styles.card, { gridColumn: 'span 1' })} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <FaCertificate size={40} color="#C9A445" style={{ marginBottom: '10px' }} />
                <div style={styles.titleAccent}>PROGRAMME COMPLET</div>   <div style={{ border: '1px dashed #C9A445', padding: '8px 10px', borderRadius: '8px', display: 'inline-block', marginBottom: '14px' }}> A partir de 800€ </div>
                <h3 style={{ fontSize: isMobile ? '1rem' : '1.15rem', margin: '6px 0' }}>Nos modules de formation</h3>
                <p style={styles.smallMuted}>Programme structuré en 3 niveaux pour transformer votre approche commerciale et managériale.</p>

                <div style={styles.modulesBox}>
                  <strong>Niveau 1 — Les Fondamentaux</strong>
                  <div style={{ marginTop: '8px' }}>
                    <div><em>Module 1:</em> Mindset et posture commerciale — Travailler l'état d'esprit et l'attitude commerciale.</div>
                    <div><em>Module 2:</em> Techniques de vente — Méthodes et scripts pour convertir plus.</div>
                  </div>
                </div>

                <div style={styles.modulesBox}>
                  <strong>Niveau 2 — Performance commerciale</strong>
                  <div style={{ marginTop: '8px' }}>
                    <div><em>Module 3:</em> Prospection et acquisition client — Outils et process pour générer des leads.</div>
                    <div><em>Module 4:</em> Négociation & closing — Techniques pour conclure et augmenter le panier moyen.</div>
                  </div>
                </div>

                <div style={styles.modulesBox}>
                  <strong>Niveau 3 — Leadership & Business</strong>
                  <div style={{ marginTop: '8px' }}>
                    <div><em>Module 5:</em> Stratégie & développement business — Planification et croissance durable.</div>
                    <div><em>Module 6:</em> Management & leadership — Diriger et faire croître vos équipes.</div>
                  </div>
                </div>

                <div style={{ marginTop: '12px' }}>
                  <div style={{ color: '#d1d5db', marginBottom: '8px' }}>À l'issue des 3 niveaux complétés, vous obtenez une certification officielle.</div>
                  <Link to="/reservation?service=Programme%20complet" style={{ ...styles.btn, display: 'inline-block', textDecoration: 'none' }}>Commencez le parcours</Link>
                </div>
              </div>

              {/* 8 Certification */}
              <div style={styles.card} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={styles.certBox}>
                  <div style={styles.certRibbon}>CERTIFICATION</div>
                  <FaCertificate size={60} color="#C9A445" style={{ marginBottom: '14px', marginTop: '8px' }} />
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Certification Officielle</h3>
                  <p style={{ color: '#d1d5db' }}>Complétez les 3 niveaux et recevez une certification reconnue, attestant de vos compétences acquises.</p>
                  <div style={{ marginTop: '14px' }}>
                    <Link to="/reservation?service=Certification%20officielle" style={{ ...styles.btn, display: 'inline-block', textDecoration: 'none' }}>Obtenir ma certification</Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      {/* FAQ */}
      <section style={{ padding: isMobile ? '40px 20px' : '60px 20px', backgroundColor: '#f8fafc' }}>
        <div style={styles.container}>
          <h2 style={{ textAlign: 'center', fontSize: isMobile ? '1.8rem' : '2.4rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '28px' }}>Questions fréquentes</h2>
          <div>
            {faq.map((item, i) => (
              <div key={i} style={{ background: '#ffffff', borderRadius: 8, padding: isMobile ? '14px 16px' : '18px 22px', marginBottom: 12, boxShadow: '0 2px 6px rgba(2,6,23,0.04)', display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, paddingRight: 12 }}>
                  <div style={{ fontWeight: 700 }}>{item.q}</div>
                  {openFAQ === i && <div style={{ color: '#374151', marginTop: 10 }}>{item.a}</div>}
                </div>
                <button onClick={() => toggleFAQ(i)} aria-expanded={openFAQ === i} style={{ background: 'none', border: 'none', color: '#C9A445', fontSize: 18, cursor: 'pointer' }}>
                  {openFAQ === i ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* CTA before footer */}
        <section style={{ padding: isMobile ? '40px 20px' : '60px 20px', backgroundColor: '#080E24', color: 'white', textAlign: 'center' }}>
          <div style={styles.container}>
            <h2 style={{ fontSize: isMobile ? '1.6rem' : '2rem', marginBottom: '14px' }}>Prêt à transformer votre activité ?</h2>
            <p style={{ color: '#cbd5e1', marginBottom: '20px' }}>Réservez une séance  pour un parcours sur-mesure.</p>
            <Link to="/reservation" style={{ display: 'inline-block', padding: isMobile ? '12px 20px' : '14px 28px', backgroundColor: '#C9A445', color: '#080E24', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }}>Réserver une séance →</Link>
          </div>
        </section>
      </div>
    );
  }

  export default Expertises;