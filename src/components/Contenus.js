import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFilePdf, 
  FaClipboardList, 
  FaFileAlt 
} from 'react-icons/fa';

function Contenus() {

  const articles = [
    {
      id: 1,
      slug: "posture-commerciale",
      title: "Qu'est-ce que la posture commerciale ? (et pourquoi elle change tout)",
      excerpt: "Vous pouvez maîtriser toutes les techniques de vente du monde. Si votre posture commerciale est mauvaise, vous perdrez des clients que vous auriez pu convaincre.",
      date: "18 Mai 2026",
      image: "https://media.licdn.com/dms/image/v2/D4E22AQHw0m4PTg2FNg/feedshare-shrink_800/feedshare-shrink_800/0/1726464317368?e=2147483647&v=beta&t=2KtTHGp_fELQ7ERd-92kPrfYghdAXEz6fdNusHxb_JE"
    },
    {
      id: 2,
      slug: "5-techniques-vente-independant",
      title: "5 techniques de vente que tout indépendant doit maîtriser (sans jamais forcer)",
      excerpt: "Beaucoup d'entrepreneurs pensent qu'ils ne sont « pas faits pour vendre ». La bonne nouvelle ? Vendre, ça s'apprend.",
      date: "25 Mai 2026",
      image: "https://f.hubspotusercontent30.net/hubfs/2100380/0%20-%20Couverture%20Blog/technique-de-vente-couverture.jpg"
    },
    {
      id: 3,
      slug: "comment-convaincre-client-sans-forcer",
      title: "Comment convaincre un client d'acheter ? Les vraies clés pour vendre sans forcer",
      excerpt: "Convaincre un client n'est pas une question de bagout. C'est une question de méthode, de timing et de compréhension profonde.",
      date: "1er Juin 2026",
      image: "https://img.freepik.com/photos-gratuite/mentor-expliquant-projet-specifique-au-stagiaire_74855-2043.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 4,
      slug: "pourquoi-entrepreneur-narrive-pas-a-vendre",
      title: "Entrepreneur : pourquoi vous n'arrivez pas à vendre vos offres (et comment y remédier)",
      excerpt: "Vous avez une offre solide et pourtant les ventes ne décollent pas. Voici les 5 freins les plus courants et comment les lever.",
      date: "05 Juin 2026",
      image: "https://thumbs.dreamstime.com/b/entrepreneur-triste-avec-l-ordinateur-portable-se-plaignant-la-nuit-%C3%A0-maison-femme-d-si%C3%A9ger-pour-sur-un-bureau-hier-184039544.jpg"
    }
  ];

  const styles = {
    container: { maxWidth: '1280px', margin: '0 auto', padding: '0 20px' },

    hero: { 
      padding: '140px 20px 100px', 
      backgroundColor: '#080E24', 
      color: 'white', 
      textAlign: 'center' 
    },
    heroLabel: {
      fontSize: '1rem',
      textTransform: 'uppercase',
      color: '#C9A445',
      letterSpacing: '0.18em',
      marginBottom: '18px',
      fontWeight: '700'
    },
    heroTitle: { 
      fontSize: '3.5rem', 
      fontFamily: "'Cormorant Garamond', serif", 
      marginBottom: '20px' 
    },
    heroSubtitle: { 
      fontSize: '1.35rem', 
      maxWidth: '700px', 
      margin: '0 auto', 
      color: '#d1d5db' 
    },
    heroLine: {
      width: '80px',
      height: '3px',
      backgroundColor: '#C9A445',
      margin: '0 auto 30px'
    },

    section: { padding: '100px 20px' },
    sectionTitle: { 
      fontSize: '2.8rem', 
      fontFamily: "'Cormorant Garamond', serif", 
      textAlign: 'center', 
      marginBottom: '60px',
      color: '#080E24'
    },

    articleCard: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease'
    },
    resourceCard: {
      backgroundColor: '#0B122D',
      color: 'white',
      padding: '40px 30px',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '360px'
    },
    ctaButton: {
      backgroundColor: '#C9A445',
      color: 'white',
      borderRadius: '14px',
      padding: '12px 24px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '700',
      fontSize: '0.95rem',
      transition: 'transform 0.2s ease'
    },
    downloadButton: {
      backgroundColor: '#C9A445',
      color: 'white',
      borderRadius: '14px',
      padding: '14px 24px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '700',
      fontSize: '0.95rem',
      transition: 'transform 0.2s ease',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none'
    }
  };

  return (
    <div>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroLabel}>BIBLIOTHEQUE GRATUITE</div>
          <h1 style={styles.heroTitle}>
            <span style={{ color: 'white' }}>Nos</span>{' '}
            <span style={{ color: '#C9A445' }}>Ressources </span>
          </h1>
          <div style={styles.heroLine}></div>
          <p style={styles.heroSubtitle}>
            Guides PDF, Checklists & Templates pour vous aider à développer votre entreprise et maîtriser la prospection commerciale. Gratuit, concret et téléchargeable immédiatement.
          </p>
        </div>
      </section>

      {/* Derniers Articles */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Articles récents</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '30px'
          }}>
            {articles.map((article) => (
              <div key={article.id} style={styles.articleCard}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img 
                  src={article.image} 
                  alt={article.title}
                  style={{ height: '220px', width: '100%', objectFit: 'cover' }}
                />
                
                <div style={{ padding: '28px' }}>
                  <div style={{ color: '#C9A445', fontSize: '0.95rem', marginBottom: '12px' }}>
                    {article.date}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.65rem', 
                    fontFamily: "'Cormorant Garamond', serif", 
                    marginBottom: '12px',
                    lineHeight: '1.3'
                  }}>
                    {article.title}
                  </h3>
                  <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                    {article.excerpt}
                  </p>

                  <Link 
                    to={`/contenus/${article.slug}`}
                    style={{ 
                      ...styles.ctaButton,
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}
                  >
                    Lire l'article →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ressources gratuites */}
      
      <section style={{ padding: '100px 20px', backgroundColor: '#f8fafc' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Ressources gratuites</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '30px'
          }}>

            {/* Guide 1 */}
            <div style={styles.resourceCard}>
              <FaFilePdf size={48} color="#C9A445" style={{ marginBottom: '20px' }} />
              <div style={{ color: '#C9A445', fontWeight: '600', marginBottom: '12px' }}>Guide PDF</div>
              <h3 style={{ fontSize: '1.45rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '12px' }}>
                Les 5 clés du Mindset Entrepreneurial
              </h3>
              <p style={{ color: 'white', lineHeight: '1.65', marginBottom: '30px' }}>
                Les fondamentaux pour adopter l'état d'esprit gagnant d'un entrepreneur performant.
              </p>
              <a href="/ressources/GUIDE1.pdf" download style={styles.downloadButton}>Télécharger le guide</a>
            </div>

            {/* Guide 2 */}
            <div style={styles.resourceCard}>
              <FaFilePdf size={48} color="#C9A445" style={{ marginBottom: '20px' }} />
              <div style={{ color: '#C9A445', fontWeight: '600', marginBottom: '12px' }}>Guide PDF</div>
              <h3 style={{ fontSize: '1.45rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '12px' }}>
                Vendeur Attitude
              </h3>
              <p style={{ color: 'white', lineHeight: '1.65', marginBottom: '30px' }}>
                Comment développer une mentalité de vendeur performant et authentique.
              </p>
              <a href="/ressources/GUIDE2.pdf" download style={styles.downloadButton}>Télécharger le guide</a>
            </div>

            {/* Checklist 1 */}
            <div style={styles.resourceCard}>
              <FaClipboardList size={48} color="#C9A445" style={{ marginBottom: '20px' }} />
              <div style={{ color: '#C9A445', fontWeight: '600', marginBottom: '12px' }}>Checklist</div>
              <h3 style={{ fontSize: '1.45rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '12px' }}>
                Auto-évaluez votre posture commerciale en 10 questions
              </h3>
              <p style={{ color: 'white', lineHeight: '1.65', marginBottom: '30px' }}>
                Évaluez rapidement votre niveau et identifiez vos axes d'amélioration.
              </p>
              <a href="/ressources/checklist1.pdf" download style={styles.downloadButton}>Télécharger la checklist</a>
            </div>

            {/* Checklist 2 */}
            <div style={styles.resourceCard}>
              <FaClipboardList size={48} color="#C9A445" style={{ marginBottom: '20px' }} />
              <div style={{ color: '#C9A445', fontWeight: '600', marginBottom: '12px' }}>Checklist</div>
              <h3 style={{ fontSize: '1.45rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '12px' }}>
                7 étapes pour structurer votre stratégie commerciale
              </h3>
              <p style={{ color: 'white', lineHeight: '1.65', marginBottom: '30px' }}>
                Un plan clair et actionnable pour organiser votre développement commercial.
              </p>
              <a href="/ressources/checklist2.pdf" download style={styles.downloadButton}>Télécharger la checklist</a>
            </div>

            {/* Template */}
            <div style={styles.resourceCard}>
              <FaFileAlt size={48} color="#C9A445" style={{ marginBottom: '20px' }} />
              <div style={{ color: '#C9A445', fontWeight: '600', marginBottom: '12px' }}>Template</div>
              <h3 style={{ fontSize: '1.45rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '12px' }}>
                Plan d'action Mindset sur 30 jours
              </h3>
              <p style={{ color: 'white', lineHeight: '1.65', marginBottom: '30px' }}>
                Programme quotidien pour transformer votre mentalité entrepreneuriale en 30 jours.
              </p>
              <a href="/ressources/template.pdf" download style={styles.downloadButton}>Télécharger le template</a>
            </div>

          </div>
        </div>
      </section>
            {/* CTA Facebook */}
      <section style={{ 
        padding: '120px 20px', 
        backgroundColor: '#080E24', 
        color: 'white', 
        textAlign: 'center' 
      }}>
        <div style={styles.container}>
          <h2 style={{ 
            fontSize: '2.6rem', 
            fontFamily: "'Cormorant Garamond', serif", 
            marginBottom: '20px' 
          }}>
            Recevez nos conseils directement
          </h2>
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '40px', 
            color: '#d1d5db',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Suivez notre page Facebook professionnelle et recevez chaque semaine des conseils concrets, astuces et analyses pour développer votre entreprise.
          </p>

          <a 
            href="https://www.facebook.com/profile.php?id=61553882894803"   
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '18px 40px',
              backgroundColor: '#C9A445',
              color: '#080E24',
              fontWeight: '600',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#b89339'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#C9A445'}
          >
            Suivre notre page Facebook →
          </a>

          <p style={{ 
            fontSize: '0.95rem', 
            marginTop: '25px', 
            color: '#94a3b8' 
          }}>
            Conseils réguliers • Astuces terrain • Actualités business
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contenus;