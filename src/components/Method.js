import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaClipboardList, FaRocket, FaChartBar, FaBullseye, FaCheckCircle } from 'react-icons/fa';

function Methode() {

  const styles = {
    container: { maxWidth: '1280px', margin: '0 auto', padding: '0 20px' },

    hero: { 
      padding: '140px 20px 100px', 
      backgroundColor: '#080E24', 
      color: '#C9A445', 
      textAlign: 'center' 
    },
    heroTitle: { 
      fontSize: '3.2rem', 
      fontFamily: "'Cormorant Garamond', serif", 
      marginBottom: '20px' 
    },
    heroSubtitle: { 
      fontSize: '1.25rem', 
      maxWidth: '900px', 
      margin: '0 auto', 
      lineHeight: '1.7',
      color: '#d1d5db' 
    },

    // Étapes
    steps: { padding: '100px 20px' },
    stepsGrid: { 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
      gap: '30px' 
    },
    stepCard: { 
      backgroundColor: '#ffffff', 
      padding: '35px 25px', 
      borderRadius: '8px', 
      boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
      textAlign: 'center'
    },

    // Tableau Comparatif
    tableSection: { padding: '100px 20px', backgroundColor: '#f9fafb' },
    table: { 
      width: '100%', 
      borderCollapse: 'collapse', 
      margin: '0 auto',
      maxWidth: '1000px'
    },
    th: { 
      padding: '18px', 
      textAlign: 'left', 
      borderBottom: '2px solid #080E24',
      fontSize: '1.1rem'
    },
    td: { 
      padding: '18px', 
      borderBottom: '1px solid #e5e7eb' 
    },
    jcboCell: { 
      backgroundColor: '#fffaf0', 
      fontWeight: '500',
      color: '#080E24'
    },

    // Carte Résultats Attendus
    resultsCard: {
      backgroundColor: '#ffffff',
      padding: '50px 40px',
      borderRadius: '12px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center'
    },

    // CTA Final
    cta: { 
      padding: '120px 20px', 
      backgroundColor: '#080E24', 
      color: 'white', 
      textAlign: 'center' 
    },
    ctaButton: { 
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '18px 40px',
      backgroundColor: '#C9A445',
      color: '#080E24',
      fontWeight: '600',
      textDecoration: 'none',
      borderRadius: '12px',
      fontSize: '1.1rem'
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>NOTRE MÉTHODE </h1>
          <p style={styles.heroSubtitle}>
            L'art de structurer votre activité pour libérer son plein potentiel.<br />
            De la vision au plan d'exécution : nous traduisons vos ambitions floues en une feuille de route claire, méthodique et orientée résultats.
          </p>
        </div>
      </section>

      {/* Les 5 Étapes */}
      <section style={{
        padding: '100px 20px',
        backgroundColor: '#f9fafb'
      }}>
        <div style={styles.container}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.8rem',
            fontFamily: "'Cormorant Garamond', serif",
            marginBottom: '70px',
            color: '#080E24'
          }}>
            La méthode en <span style={{ color: '#C9A445' }}>5 étapes</span>
          </h2>

          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative'
          }}>
            {/* Ligne verticale */}
            <div style={{
              position: 'absolute',
              left: '28px',
              top: '40px',
              bottom: '40px',
              width: '3px',
              backgroundColor: '#C9A445',
              opacity: '0.2'
            }}></div>

            {/* Étape 1 */}
            <div style={{ display: 'flex', gap: '30px', marginBottom: '60px', position: 'relative' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#080E24',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                fontWeight: 'bold',
                flexShrink: 0,
                zIndex: 2
              }}>1</div>
              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                flex: 1
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}><FaEye color="#C9A445" size={32}/></div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Clarifier</h3>
                <p>Comprendre votre situation, vos objectifs et vos blocages.</p>
              </div>
            </div>

            {/* Étape 2 */}
            <div style={{ display: 'flex', gap: '30px', marginBottom: '60px', position: 'relative' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#080E24',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                fontWeight: 'bold',
                flexShrink: 0,
                zIndex: 2
              }}>2</div>
              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                flex: 1
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}><FaClipboardList color="#C9A445" size={32}/></div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Structurer</h3>
                <p>Transformer vos idées en plan d'action concret.</p>
              </div>
            </div>

            {/* Étape 3 */}
            <div style={{ display: 'flex', gap: '30px', marginBottom: '60px', position: 'relative' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#080E24',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                fontWeight: 'bold',
                flexShrink: 0,
                zIndex: 2
              }}>3</div>
              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                flex: 1
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}><FaRocket color="#C9A445" size={32}/></div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Développer</h3>
                <p>Passer à l'action avec des leviers efficaces.</p>
              </div>
            </div>

            {/* Étape 4 */}
            <div style={{ display: 'flex', gap: '30px', marginBottom: '60px', position: 'relative' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#080E24',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                fontWeight: 'bold',
                flexShrink: 0,
                zIndex: 2
              }}>4</div>
              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                flex: 1
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}><FaChartBar color="#C9A445" size={32}/></div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Optimiser</h3>
                <p>Améliorer vos résultats en continu.</p>
              </div>
            </div>

            {/* Étape 5 */}
            <div style={{ display: 'flex', gap: '30px', position: 'relative' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#080E24',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                fontWeight: 'bold',
                flexShrink: 0,
                zIndex: 2
              }}>5</div>
              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                flex: 1
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}><FaBullseye color="#C9A445" size={32}/></div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Autonomiser</h3>
                <p>Vous rendre capable de piloter seul votre croissance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tableau Comparatif */}
      <section style={styles.tableSection}>
        <div style={styles.container}>
          <h2 style={{ textAlign: 'center', fontSize: '2.6rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '50px' }}>
            Ce qui nous différencie
          </h2>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Critère</th>
                <th style={styles.th}>Autres consultants</th>
                <th style={styles.th}>JCBO Conseil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}><strong>Approche</strong></td>
                <td style={styles.td}>Théorique et générique</td>
                <td style={styles.jcboCell}>Pratique et personnalisée</td>
              </tr>
              <tr>
                <td style={styles.td}><strong>Engagement</strong></td>
                <td style={styles.td}>Mission ponctuelle</td>
                <td style={styles.jcboCell}>Partenariat sur la durée</td>
              </tr>
              <tr>
                <td style={styles.td}><strong>Méthode</strong></td>
                <td style={styles.td}>One-size-fits-all</td>
                <td style={styles.jcboCell}>Sur-mesure adaptée</td>
              </tr>
              <tr>
                <td style={styles.td}><strong>Suivi</strong></td>
                <td style={styles.td}>Rapport final uniquement</td>
                <td style={styles.jcboCell}>Accompagnement continu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Carte Résultats Attendus */}
      <section style={{ padding: '100px 20px' }}>
        <div style={styles.container}>
          <div style={styles.resultsCard}>
            <h2 style={{ 
              fontSize: '2.4rem', 
              fontFamily: "'Cormorant Garamond', serif", 
              marginBottom: '30px',
              color: '#080E24'
            }}>
              Résultats attendus
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#374151' }}>
              Avec cette méthode vous serez capable de :
            </p>
            <ul style={{ 
              textAlign: 'left', 
              maxWidth: '600px', 
              margin: '0 auto',
              fontSize: '1.1rem',
              lineHeight: '2'
            }}>
              <li><FaCheckCircle color="#C9A445" style={{marginRight: '8px', display: 'inline'}}/> Prendre des décisions plus rapidement</li>
              <li><FaCheckCircle color="#C9A445" style={{marginRight: '8px', display: 'inline'}}/> Structurer votre activité</li>
              <li><FaCheckCircle color="#C9A445" style={{marginRight: '8px', display: 'inline'}}/> Développer votre chiffre d'affaires</li>
              <li><FaCheckCircle color="#C9A445" style={{marginRight: '8px', display: 'inline'}}/> Gagner en clarté et en confiance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={styles.cta}>
        <div style={styles.container}>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '20px' }}>Prêt à appliquer cette méthode ?</h2>
          <p style={{ fontSize: '1.3rem', marginBottom: '40px' }}>
            Découvrez nos expertises et choisissez l'accompagnement qui vous convient
          </p>
          
          <Link 
            to="/expertises" 
            style={styles.ctaButton}
          >
            Découvrir nos expertises →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Methode;