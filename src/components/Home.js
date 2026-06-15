import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrendingUp, FiCast, FiBookOpen } from 'react-icons/fi';
import heroBg from "./images/couverture_modifiee.png";
import boyangImg from "./images/boyang.jpeg";

function Accueil() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    hero: {
      minHeight: isMobile ? '100vh' : '155vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      backgroundImage: `url(${heroBg})`,
      backgroundSize: isMobile ? 'cover' : 'cover',
      backgroundPosition: isMobile ? 'center 35%' : 'center',
      backgroundRepeat: isMobile ? 'no-repeat' : 'no-repeat',
      backgroundColor: isMobile ? '#080E24' : 'transparent',
      color: 'white',
      textAlign: 'center',
      padding: '0 20px',
    },
    heroOverlay: {
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.15)',
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '900px',
    },
    h1: {
      fontSize: isMobile ? '2rem' : '3.8rem',
      lineHeight: '1.1',
      marginBottom: '25px',
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: '600',
    },
    subtitle: {
      fontSize: isMobile ? '1rem' : '1.6rem',
      marginBottom: '15px',
      color: '#e5e7eb',
    },
    credibility: {
      fontSize: isMobile ? '0.9rem' : '1.2rem',
      marginBottom: '40px',
      color: '#d1d5db',
    },
    buttons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    btnPrimary: {
      padding: isMobile ? '12px 24px' : '16px 32px',
      backgroundColor: '#C9A445',
      color: '#080E24',
      border: 'none',
      borderRadius: '12px',
      fontSize: isMobile ? '1rem' : '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    btnSecondary: {
      padding: isMobile ? '12px 24px' : '16px 32px',
      backgroundColor: 'transparent',
      color: 'white',
      border: '2px solid white',
      borderRadius: '12px',
      fontSize: isMobile ? '1rem' : '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },

    // Chiffres clés
    chiffres: {
      backgroundColor: '#C9A445',
      color: '#080E24',
      padding: isMobile ? '40px 20px' : '70px 20px',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 20px',
    },
    chiffresGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: isMobile ? '20px' : '40px',
      textAlign: 'center',
    },
    chiffreNumber: {
      fontSize: isMobile ? '2rem' : '3.2rem',
      fontWeight: 'bold',
      fontFamily: "'Cormorant Garamond', serif",
    },
    chiffreText: {
      fontSize: isMobile ? '0.9rem' : '1.1rem',
      marginTop: '8px',
    },

    // Services
    services: {
      padding: isMobile ? '60px 20px' : '100px 20px',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '40px',
    },
    serviceCard: {
      border: '1px solid #e5e7eb',
      padding: '40px 30px',
      textAlign: 'center',
      transition: 'border 0.3s',
    },
    serviceIcon: {
      width: '70px',
      height: '70px',
      backgroundColor: '#080E24',
      borderRadius: '50%',
      margin: '0 auto 25px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    // À propos
    apropos: {
      padding: isMobile ? '60px 20px' : '100px 20px',
      backgroundColor: '#f9fafb',
    },
    aproposGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '30px' : '60px',
      alignItems: 'center',
    },
    aproposImage: {
      borderRadius: '12px',
      overflow: 'hidden',
      width: '100%',
    },
    aproposImageImg: {
      width: '100%',
      height: isMobile ? '300px' : '100%',
      objectFit: 'cover',
    },
  };

  return (
    <div role="main">
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.h1}>
            Transformez vos ambitions commerciales<br />
            en résultats concrets
          </h1>
          <p style={styles.subtitle}>
            Stratégie Commerciale • Business Development • Coaching Exécutif
          </p>
          <p style={styles.credibility}>
            +30 ans d'expérience terrain — Des dizaines de dirigeants et d'entreprises accompagnés
          </p>
          <div style={styles.buttons}>
            <Link to="/diagnostic" style={styles.btnPrimary}>
              Diagnostic gratuit
            </Link>
            <Link to="/reservation" style={styles.btnSecondary}>
              Réserver une séance
            </Link>
          </div>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section style={styles.chiffres}>
        <div style={styles.container}>
          <div style={styles.chiffresGrid}>
            <div>
              <div style={styles.chiffreNumber}>30+</div>
              <div style={styles.chiffreText}>ans d'expérience</div>
            </div>
            <div>
              <div style={styles.chiffreNumber}>98%</div>
              <div style={styles.chiffreText}>clients satisfaits</div>
            </div>
            <div>
              <div style={styles.chiffreNumber}>500+</div>
              <div style={styles.chiffreText}>pros accompagnés</div>
            </div>
            <div>
              <div style={styles.chiffreNumber}>35%</div>
              <div style={styles.chiffreText}>CA moyen en +</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / EXPERTISES */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '2.8rem',
            fontFamily: "'Cormorant Garamond', serif",
            textAlign: 'center',
            marginBottom: '70px',
            color: '#080E24'
          }}>
            Nos expertises
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '30px'
          }}>
            {/* 1. Coaching Stratégique */}
            <div style={{
              backgroundColor: 'white',
              padding: '45px 30px',
              borderRadius: '12px',
              boxShadow: '0 6px 25px rgba(0,0,0,0.08)',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-12px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={styles.serviceIcon}>
                <FiTrendingUp style={{ color: '#C9A445', fontSize: '28px' }} />
              </div>
              <h3 style={{ fontSize: '1.55rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '15px' }}>
                Coaching Stratégique
              </h3>
              <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '30px' }}>
                Développez votre business avec une stratégie claire et des actions concrètes
              </p>
              <Link to="/expertises#coaching-strategique" style={{ color: '#C9A445', fontWeight: '600', textDecoration: 'none' }}>
                Découvrir →
              </Link>
            </div>

            {/* 2. Coaching en ligne */}
            <div style={{
              backgroundColor: 'white',
              padding: '45px 30px',
              borderRadius: '12px',
              boxShadow: '0 6px 25px rgba(0,0,0,0.08)',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-12px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={styles.serviceIcon}>
                <FiCast style={{ color: '#C9A445', fontSize: '28px' }} />
              </div>
              <h3 style={{ fontSize: '1.55rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '15px' }}>
                Coaching en ligne
              </h3>
              <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '30px' }}>
                Accédez à nos modules de coaching où que vous soyez, à votre rythme
              </p>
              <Link to="/expertises#coaching-en-ligne" style={{ color: '#C9A445', fontWeight: '600', textDecoration: 'none' }}>
                Découvrir →
              </Link>
            </div>

            {/* 3. Formation */}
            <div style={{
              backgroundColor: 'white',
              padding: '45px 30px',
              borderRadius: '12px',
              boxShadow: '0 6px 25px rgba(0,0,0,0.08)',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-12px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={styles.serviceIcon}>
                <FiBookOpen style={{ color: '#C9A445', fontSize: '28px' }} />
              </div>
              <h3 style={{ fontSize: '1.55rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '15px' }}>
                Formation
              </h3>
              <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '30px' }}>
                Formez vos équipes aux meilleures pratiques commerciales et managériales
              </p>
              <Link to="/expertises#seminaire-groupes" style={{ color: '#C9A445', fontWeight: '600', textDecoration: 'none' }}>
                Découvrir →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* À PROPOS */}
      <section style={styles.apropos}>
        <div style={styles.container}>
          <div style={styles.aproposGrid}>
            <div style={styles.aproposImage}>
              <img
                src={boyangImg}
                alt="Jean-Christophe Boyang-Tsang"
                loading="lazy"
                style={styles.aproposImageImg}
              />
            </div>
            <div>
              <h2 style={{
                fontSize: isMobile ? '1.8rem' : '2.8rem',
                fontFamily: "'Cormorant Garamond', serif",
                marginBottom: '25px'
              }}>
                Jean-Christophe Boyang-Tsang
              </h2>
              <p style={{ fontSize: isMobile ? '1rem' : '1.15rem', lineHeight: '1.7', marginBottom: '30px' }}>
                Fondateur de JCBO Conseil, je mets à votre service plus de 30 ans d'expérience en développement commercial, coaching et formation. Mon approche pragmatique et personnalisée a permis à des dizaines de dirigeants et d'entreprises d'accélérer leur croissance et de révéler leur potentiel.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px' }}>✓ Consultant certifié</li>
                <li style={{ marginBottom: '12px' }}>✓ Coach professionnel</li>
                <li style={{ marginBottom: '12px' }}>✓ Partenaire AKOMCA</li>
                <li style={{ marginBottom: '12px' }}>✓ Formateur en ESC</li>
                <li style={{ marginBottom: '12px' }}>✓ Expérience internationale</li>
              </ul>
              <Link
                to="/a-propos"
                style={{
                  ...styles.btnPrimary,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none'
                }}
              >
                En savoir plus sur mon parcours
                <span style={{ fontSize: '1.3rem' }}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '2.8rem',
            fontFamily: "'Cormorant Garamond', serif",
            textAlign: 'center',
            marginBottom: '60px',
            color: '#080E24'
          }}>
            Ils m'ont fait confiance
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '30px'
          }}>
            {/* Témoignage 1 */}
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '40px 30px',
              borderRadius: '8px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
              border: '1px solid #f0f0f0',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.06)';
              }}
            >
              <div style={{ color: '#C9A445', fontSize: '1.8rem', marginBottom: '20px' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', lineHeight: '1.75', marginBottom: '25px', color: '#374151', fontSize: '1.05rem' }}>
                "Sa passion pour le sujet et sa capacité à transmettre des concepts de manière claire ont grandement enrichi mon apprentissage. Une expérience solide dans la vente. Je recommande!!"
              </p>
              <div>
                <div style={{ fontWeight: '600', color: '#080E24', marginBottom: '4px' }}>Jean-Philippe L.</div>
                <div style={{ fontSize: '0.95rem', color: '#6b7280' }}>Consultant & Chef d'entreprise</div>
              </div>
            </div>

            {/* Témoignage 2 */}
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '40px 30px',
              borderRadius: '8px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
              border: '1px solid #f0f0f0',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.06)';
              }}
            >
              <div style={{ color: '#C9A445', fontSize: '1.8rem', marginBottom: '20px' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', lineHeight: '1.75', marginBottom: '25px', color: '#374151', fontSize: '1.05rem' }}>
                "Mon carnet d'adresses s'est considérablement étoffé grâce aux contacts d'experts recommandés par Jean-Christophe. Entièrement satisfaite."
              </p>
              <div>
                <div style={{ fontWeight: '600', color: '#080E24', marginBottom: '4px' }}>Sandra L.R.</div>
                <div style={{ fontSize: '0.95rem', color: '#6b7280' }}>Etudiante en Marketing</div>
              </div>
            </div>

            {/* Témoignage 3 */}
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '40px 30px',
              borderRadius: '8px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
              border: '1px solid #f0f0f0',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.06)';
              }}
            >
              <div style={{ color: '#C9A445', fontSize: '1.8rem', marginBottom: '20px' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', lineHeight: '1.75', marginBottom: '25px', color: '#374151', fontSize: '1.05rem' }}>
                "Il a identifié rapidement les axes d'amélioration de notre stratégie. Son approche pragmatique et son expérience terrain ont permis d'augmenter notre CA de 35% en un an."
              </p>
              <div>
                <div style={{ fontWeight: '600', color: '#080E24', marginBottom: '4px' }}>David A.</div>
                <div style={{ fontSize: '0.95rem', color: '#6b7280' }}>Dirigeant d'entreprise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{
        padding: isMobile ? '60px 20px' : '120px 20px',
        backgroundColor: '#080E24',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontSize: isMobile ? '1.8rem' : '2.8rem',
            fontFamily: "'Cormorant Garamond', serif",
            marginBottom: '20px'
          }}>
            Prêt à accélérer votre croissance ?
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.3rem',
            maxWidth: '700px',
            margin: '0 auto 40px',
            color: '#d1d5db',
            lineHeight: '1.6'
          }}>
            Réservez un premier échange gratuit et découvrez comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/reservation"
              style={{
                padding: isMobile ? '12px 24px' : '18px 40px',
                backgroundColor: '#C9A445',
                color: '#080E24',
                fontWeight: '700',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: isMobile ? '1rem' : '1.1rem',
                transition: 'all 0.3s'
              }}
            >
              Réserver une séance
            </Link>
            <Link
              to="/contact"
              style={{
                padding: isMobile ? '12px 24px' : '18px 40px',
                backgroundColor: 'transparent',
                color: 'white',
                fontWeight: '700',
                textDecoration: 'none',
                border: '2px solid white',
                borderRadius: '8px',
                fontSize: isMobile ? '1rem' : '1.1rem',
                transition: 'all 0.3s'
              }}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Accueil;