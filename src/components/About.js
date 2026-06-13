import React from 'react';
import boyangImg from "./images/jcb.jpeg";
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaFire, FaChartLine, FaEye, FaTrophy } from 'react-icons/fa';

function APropos() {

  const styles = {
    container: { maxWidth: '1280px', margin: '0 auto', padding: '0 20px' },
    hero: { padding: '140px 20px 80px', textAlign: 'center' },
    name: { fontSize: '3.5rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '8px', color: '#080E24' },
    subtitle: { fontSize: '1.35rem', color: '#C9A445', fontWeight: '500' },
    
    contentGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' },
    image: { width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' },
    
    textContent: { fontSize: '1.08rem', lineHeight: '1.85', color: '#374151' },
    quote: { 
      borderLeft: '4px solid #C9A445', 
      paddingLeft: '25px', 
      margin: '35px 0', 
      fontStyle: 'italic',
      color: '#080E24' 
    },

    // Compétences
    skills: { padding: '80px 20px', backgroundColor: '#f9fafb' },
    skillsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '30px', textAlign: 'center' },
    skillItem: { fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' },

    // Valeurs
    values: { padding: '100px 20px' },
    valuesGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' },
    valueCard: { 
      backgroundColor: '#ffffff', 
      padding: '40px 25px', 
      borderRadius: '8px', 
      boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
      textAlign: 'center',
      transition: 'all 0.3s ease'
    },

    // CTA Final
    cta: { 
      padding: '70px 40px', 
      backgroundColor: '#080E24', 
      color: 'white', 
      textAlign: 'center' 
    },
    ctaButton: { 
      padding: '18px 40px', 
      backgroundColor: '#C9A445', 
      color: '#080E24', 
      border: 'none', 
      borderRadius: '12px',
      fontSize: '1.1rem', 
      fontWeight: '600',
      cursor: 'pointer'
    }
  };

  return (
    <div>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.name}>Jean-Christophe Boyang-Tsang</h1>
          <p style={styles.subtitle}>Expert en Business Development</p>
        </div>
      </section>

      {/* Présentation */}
      <section style={{ padding: '40px 20px 100px' }}>
        <div style={styles.container}>
          <div style={styles.contentGrid}>
            <div>
              <img src={boyangImg} alt="Jean-Christophe Boyang-Tsang" style={styles.image} />
            </div>
            <div style={styles.textContent}>
              <p>JCBO, ce sont les initiales de Jean-Christophe Boyang-Tsang, fondateur et unique force motrice derrière notre entreprise. Pas un théoricien - un homme de terrain.</p>
              <p>Professionnel expérimenté avec 30 années de pratique dans les domaines du consulting, de la formation et du coaching.
                Expert en Business Development, coach et formateur professionnel en écoles supérieures de commerce en France.
              </p>
              <div style={styles.quote}>
                "Mon objectif est simple : transformer votre vision en résultats concrets et durables."
                

              </div>
              <div style={styles.textContent}>
              <p>Son expérience couvre la définition et la mise en oeuvre de stratégies commerciale pour plusieurs PME et TPE. Il organise également des séminaires, formations et évènements internationaux.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section style={styles.skills}>
        <div style={styles.container}>
          <div style={styles.skillsGrid}>
          <div style={styles.skillItem}><FaCheckCircle size={18} color="#C9A445" style={{marginRight: '8px'}}/> Formateur ESC</div>
            <div style={styles.skillItem}><FaCheckCircle size={18} color="#C9A445" style={{marginRight: '8px'}}/> Coach professionnel</div>
            <div style={styles.skillItem}><FaCheckCircle size={18} color="#C9A445" style={{marginRight: '8px'}}/> Consultant certifié</div>
            <div style={styles.skillItem}><FaCheckCircle size={18} color="#C9A445" style={{marginRight: '8px'}}/> Partenaire AKOMCA</div>
            <div style={styles.skillItem}><FaCheckCircle size={18} color="#C9A445" style={{marginRight: '8px'}}/> Expérience internationale</div>
          </div>
        </div>
      </section>

      {/* Mes Valeurs */}
      <section style={styles.values}>
  <div style={styles.container}>
    <h2 style={{ 
      textAlign: 'center', 
      fontSize: '2.6rem', 
      fontFamily: "'Cormorant Garamond', serif", 
      marginBottom: '60px' 
    }}>
      Mes valeurs
    </h2>
    
    <div style={styles.valuesGrid}>
      
      <div style={styles.valueCard}>
        <div style={{ fontSize: '3.2rem', marginBottom: '20px' }}><FaFire color="#C9A445" size={40}/></div>
        <h3>Engagement</h3>
        <p>Je m'investis pleinement dans votre réussite avec détermination et rigueur.</p>
      </div>

      <div style={styles.valueCard}>
        <div style={{ fontSize: '3.2rem', marginBottom: '20px' }}><FaChartLine color="#C9A445" size={40}/></div>
        <h3>Résultats</h3>
        <p>Chaque action est orientée vers des résultats mesurables et concrets.</p>
      </div>

      <div style={styles.valueCard}>
        <div style={{ fontSize: '3.2rem', marginBottom: '20px' }}><FaEye color="#C9A445" size={40}/></div>
        <h3>Transparence</h3>
        <p>Une communication claire et honnête à chaque étape de notre collaboration.</p>
      </div>

      <div style={styles.valueCard}>
        <div style={{ fontSize: '3.2rem', marginBottom: '20px' }}><FaTrophy color="#C9A445" size={40}/></div>
        <h3>Excellence</h3>
        <p>Une exigence constante pour vous offrir le meilleur accompagnement.</p>
      </div>

    </div>
  </div>
</section>

      {/* CTA Final */}
      <section style={{
        padding: '120px 20px',
        backgroundColor: '#080E24',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            fontSize: '2.4rem', 
            fontFamily: "'Cormorant Garamond', serif", 
            marginBottom: '20px' 
          }}>
            Travaillons ensemble
          </h2>
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '40px',
            color: '#d1d5db'
          }}>
            Prêt à passer à l'action ? Réservons un premier échange.
          </p>
          
          <Link 
            to="/reservation" 
            style={{
              display: 'inline-block',
              padding: '18px 40px',
              backgroundColor: '#C9A445',
              color: '#080E24',
              fontWeight: '600',
              textDecoration: 'none',
              borderRadius: '12px',
              fontSize: '1.1rem',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#b89339'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#C9A445'}
          >
            Réserver une séance
          </Link>
        </div>
      </section>
    </div>
  );
}

export default APropos;