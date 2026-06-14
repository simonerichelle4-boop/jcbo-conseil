import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function References() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const styles = {
    container: { maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '0 20px' : '0 40px' },
    sectionTitle: { 
      fontSize: isMobile ? '2rem' : '2.8rem', 
      fontFamily: "'Cormorant Garamond', serif", 
      textAlign: 'center', 
      marginBottom: '20px',
      color: '#080E24'
    },
    sectionSubtitle: {
      fontSize: isMobile ? '1rem' : '1.3rem',
      textAlign: 'center',
      marginBottom: isMobile ? '40px' : '60px',
      color: '#666',
      maxWidth: '800px',
      margin: '0 auto ' + (isMobile ? '40px' : '60px')
    }
  };

  const imagesContext = require.context('./images', false, /\.(png|jpe?g|webp|svg)$/);
  // Show only WhatsApp images for the References gallery.
  const imageKeys = imagesContext.keys()
    .filter((path) => path.toLowerCase().includes('whatsapp'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  const coverImageIds = [9, 10, 11, 15];
  const preuvesImages = imageKeys.map((path, index) => ({
    id: index + 1,
    src: imagesContext(path),
    alt: path.replace('./', '').replace(/\.(png|jpe?g|webp|svg)$/i, '').replace(/[-_]/g, ' ')
  }));

  return (
    <div>
      {/* HERO */}
      <section style={{ padding: isMobile ? '80px 20px 60px' : '140px 20px 100px', backgroundColor: '#080E24', color: 'white', textAlign: 'center' }}>
        <div style={styles.container}>
          <h1 style={{ fontSize: isMobile ? '2rem' : '3.2rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '20px',  color: '#C9A445' }}>
            Ils m'ont fait confiance
          </h1>
          <p style={{ fontSize: isMobile ? '1rem' : '1.4rem', maxWidth: '700px', margin: '0 auto', color: '#d1d5db' }}>
            Découvrez nos résultats concrets et les témoignages de nos clients
          </p>
        </div>
      </section>

      {/* SECTION 1 - PREUVES TERRAIN */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Preuves terrain</h2>
          <p style={styles.sectionSubtitle}>
            Nos résultats en images, séminaires, formations et événements internationaux. 
            Une preuve concrète de notre expertise et de notre impact.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
            alignItems: 'start'
          }}>
            {preuvesImages.map((image) => (
              <div key={image.id} style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 12px 36px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 22px 46px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.08)';
                }}
              >
                <div style={{ width: '100%', height: '340px', position: 'relative', backgroundColor: '#fafafa' }}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: coverImageIds.includes(image.id) ? 'cover' : 'contain',
                      objectPosition: coverImageIds.includes(image.id) ? 'center 35%' : 'center center',
                      transition: 'transform 0.5s',
                      display: 'block'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 - PREUVE SOCIALE */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 20px', backgroundColor: 'white' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Preuve sociale</h2>
          <p style={styles.sectionSubtitle}>
            Ce que nos clients disent de leur accompagnement
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: isMobile ? '24px' : '40px'
          }}>
            
            {/* Témoignage 1 */}
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: isMobile ? '24px' : '40px', 
              borderRadius: '12px', 
              boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #C9A445'
            }}>
              <div style={{ color: '#C9A445', fontSize: '1.8rem', marginBottom: '20px' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', lineHeight: '1.75', marginBottom: '25px', color: '#333' }}>
                "Sa passion pour le sujet et sa capacité à transmettre des concepts de manière claire ont grandement enrichi mon apprentissage. Une expérience solide dans la vente. Je recommande!!"
              </p>
              <div>
                <strong style={{ color: '#080E24' }}>Jean-Philippe L.</strong><br />
                <span style={{ color: '#666' }}>Consultant & Chef d4entreprise</span>
              </div>
            </div>

            {/* Témoignage 2 */}
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: isMobile ? '24px' : '40px', 
              borderRadius: '12px', 
              boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #C9A445'
            }}>
              <div style={{ color: '#C9A445', fontSize: '1.8rem', marginBottom: '20px' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', lineHeight: '1.75', marginBottom: '25px', color: '#333' }}>
                "Mon carnet d'adresses s'est étoffé des coordonnées d'experts qui me sont utiles aujourd'hui. Entièrement satisfaite. Un grand merci à Jean-Christophe BOYANG."
              </p>
              <div>
                <strong style={{ color: '#080E24' }}>Sandra L.R.</strong><br />
                <span style={{ color: '#666' }}>Etudiante en Marketing</span>
              </div>
            </div>

            {/* Témoignage 3 */}
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: isMobile ? '24px' : '40px', 
              borderRadius: '12px', 
              boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #C9A445'
            }}>
              <div style={{ color: '#C9A445', fontSize: '1.8rem', marginBottom: '20px' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', lineHeight: '1.75', marginBottom: '25px', color: '#333' }}>
                "La formation de nos équipes commerciales a été un véritable tournant. Les résultats sont mesurables et durables. Je recommande sans hésitation."
              </p>
              <div>
                <strong style={{ color: '#080E24' }}>David A.</strong><br />
                <span style={{ color: '#666' }}>Dirigeant d'entreprise</span>
              </div>
            </div>

            {/* Témoignage 4 */}
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: isMobile ? '24px' : '40px', 
              borderRadius: '12px', 
              boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #C9A445'
            }}>
              <div style={{ color: '#C9A445', fontSize: '1.8rem', marginBottom: '20px' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', lineHeight: '1.75', marginBottom: '25px', color: '#333' }}>
                "L'approche pratique et les méthodologies approuvées m'ont permis de développer des compétences directement applicables. Un investissement qui vaut chaque centime."
              </p>
              <div>
                <strong style={{ color: '#080E24' }}>Marie L.</strong><br />
                <span style={{ color: '#666' }}>Responsable commerciale</span>
              </div>
            </div>
            
            {/* Témoignage 5 */}
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '40px', 
              borderRadius: '12px', 
              boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #C9A445'
            }}>
              <div style={{ color: '#C9A445', fontSize: '1.8rem', marginBottom: '20px' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', lineHeight: '1.75', marginBottom: '25px', color: '#333' }}>
                "Grâce à l'accompagnement, nous avons amélioré notre prospection et augmenté notre taux de conversion de manière claire et durable."
              </p>
              <div>
                <strong style={{ color: '#080E24' }}>Lucie T.</strong><br />
                <span style={{ color: '#666' }}>Responsable développement</span>
              </div>
            </div>

            {/* Témoignage 6 */}
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '40px', 
              borderRadius: '12px', 
              boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #C9A445'
            }}>
              <div style={{ color: '#C9A445', fontSize: '1.8rem', marginBottom: '20px' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', lineHeight: '1.75', marginBottom: '25px', color: '#333' }}>
                "Interventions structurées, conseils pragmatiques — l'équipe a gagné en confiance et en efficacité commerciale."
              </p>
              <div>
                <strong style={{ color: '#080E24' }}>Marc D.</strong><br />
                <span style={{ color: '#666' }}>Directeur commercial</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '120px 20px', backgroundColor: '#080E24', color: 'white', textAlign: 'center' }}>
        <div style={styles.container}>
          <h2 style={{ fontSize: '2.8rem', fontFamily: "'Cormorant Garamond', serif", marginBottom: '25px' }}>
            Rejoignez nos clients satisfaits 
          </h2>
          <p style={{ fontSize: '1.35rem', maxWidth: '700px', margin: '0 auto 40px', color: '#d1d5db', lineHeight: '1.6' }}>
            Vous aussi, transformez votre activité avec un accompagnement expert.
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            
            <Link 
              to="/contact" 
              style={{
                padding: '18px 40px',
                backgroundColor: 'transparent',
                color: '#C9A445',
                fontWeight: '700',
                textDecoration: 'none',
                border: '2px solid #C9A445',
                borderRadius: '8px',
                fontSize: '1.1rem',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C9A445';
                e.currentTarget.style.color = '#080E24';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#C9A445';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
             Contactez-nous 
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default References;
