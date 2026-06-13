import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function Reservation() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');

  const [selected, setSelected] = useState(null);
  const [faqOuvert, setFaqOuvert] = useState(null);
  const [paiementEffectue, setPaiementEffectue] = useState(false);
  const [tokenAcces, setTokenAcces] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const prestations = [
    {
      id: 'diagnostic-strategique',
      nom: 'Diagnostic Stratégique',
      duree: 'Session de 2h',
      prix: '490€',
      description: 'Analyse complète de votre positionnement concurrentiel et stratégique',
      calendlyUrl: 'https://calendly.com/simonerichelle4/diagnostic-strategique',
    },
    {
      id: 'coaching-strategique',
      nom: 'Coaching Stratégique',
      duree: 'Session de 1h30',
      prix: '250€ / séance',
      description: 'Accompagnement individuel pour lever vos blocages et développer votre leadership',
      recommande: true,
      calendlyUrl: 'https://calendly.com/simonerichelle4/coaching-strategique',
    },
    {
      id: 'accompagnement-premium',
      nom: 'Accompagnement Premium',
      duree: 'Sur-mesure',
      prix: '2 400€',
      description: 'Accompagnement complet et personnalisé sur la durée',
      calendlyUrl: 'https://calendly.com/simonerichelle4/accompagnement-premium',
    },
    {
      id: 'programme-complet',
      nom: 'Programme Complet',
      duree: '6 modules / 3 niveaux',
      prix: 'À partir de 800€',
      description: 'Formation certifiante complète du fondamental au leadership',
      calendlyUrl: 'https://calendly.com/simonerichelle4/programme-complet',
    },
    {
      id: 'coaching-en-ligne',
      nom: 'Pack Coaching en Ligne',
      duree: '3 séances de 1h30',
      prix: '650€',
      description: 'Coaching 100% en ligne pour avancer à votre rythme',
      calendlyUrl: 'https://calendly.com/simonerichelle4/coaching-en-ligne',
    },
    {
      id: 'seminaire',
      nom: 'Séminaire',
      duree: 'Sur-mesure',
      prix: 'Sur devis',
      description: 'Séminaires et formations en entreprise',
      calendlyUrl: 'https://calendly.com/simonerichelle4/seminaire',
    },
  ];

  const getInitialService = () => {
    if (!serviceParam) return prestations[1].id;
    const found = prestations.find(p =>
      p.nom.toLowerCase() === serviceParam.toLowerCase() ||
      p.id === serviceParam.toLowerCase().replace(/\s+/g, '-')
    );
    return found ? found.id : prestations[1].id;
  };

  // Initialiser selected après le premier rendu
  useEffect(() => {
    setSelected(getInitialService());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceParam]);

  const prestationSelectionnee = prestations.find(p => p.id === selected);

  // Écouter les événements Calendly (note: Calendly envoie confirmation par email)
  useEffect(() => {
    // Note: Les détails du rendez-vous seront confirmés par email Calendly
    // L'intégration iframe standard est utilisée pour la simplicité
  }, []);

  // Générer un token d'accès unique
  const genererToken = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 15);
    const random2 = Math.random().toString(36).substring(2, 15);
    return `${timestamp}-${random}-${random2}`;
  };

  // Simuler le paiement et générer le lien d'accès
  const handlePaiement = () => {
    if (prestationSelectionnee?.id === 'programme-complet') {
      const token = genererToken();
      setTokenAcces(token);
      setPaiementEffectue(true);
    } else {
      setPaiementEffectue(true);
    }
  };

  const faqs = [
    {
      question: 'Comment puis-je annuler ou reporter ma réservation ?',
      reponse: 'Vous pouvez annuler ou reporter votre réservation jusqu\'à 48h avant la séance en nous contactant par email ou en utilisant le lien de gestion envoyé par Calendly.',
    },
    {
      question: 'Quels sont les modes de paiement acceptés ?',
      reponse: 'Nous acceptons toutes les cartes bancaires (Visa, Mastercard, American Express) via notre système de paiement sécurisé Stripe.',
    },
    {
      question: 'La séance peut-elle se faire en visioconférence ?',
      reponse: 'Oui, toutes nos séances peuvent se dérouler en présentiel à Toulouse ou en visioconférence selon votre préférence.',
    },
    {
      question: 'Que se passe-t-il après le paiement ?',
      reponse: 'Vous recevez immédiatement un email de confirmation avec votre facture PDF et les détails de votre rendez-vous.',
    },
    {
      question: 'Puis-je obtenir une facture ?',
      reponse: 'Oui, une facture PDF est automatiquement générée et envoyée à votre adresse email dès confirmation du paiement.',
    },
  ];

  const styles = {
    page: {
      backgroundColor: '#ffffff',
      minHeight: '100vh',
    },

    // HERO
    hero: {
      backgroundColor: '#080E24',
      padding: isMobile ? '40px 20px' : '60px 40px',
      textAlign: 'center',
    },
    heroTitle: {
      fontFamily: 'Georgia, serif',
      fontSize: isMobile ? '28px' : '42px',
      fontWeight: '300',
      color: '#C9A445',
      marginBottom: '16px',
      margin: '0 0 16px 0',
    },
    heroSubtitle: {
      fontSize: isMobile ? '16px' : '23px',
      color: 'rgba(255,255,255,0.7)',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.7',
    },

    // SECTIONS
    section: {
      padding: isMobile ? '40px 20px' : '60px 40px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionCentree: {
      padding: isMobile ? '40px 20px' : '60px 40px',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
    },
    sectionGrise: {
      backgroundColor: '#f9f9f9',
      padding: isMobile ? '40px 20px' : '60px 40px',
    },
    sectionTitre: {
      fontFamily: 'Georgia, serif',
      fontSize: '32px',
      fontWeight: '400',
      color: '#080E24',
      marginBottom: '40px',
    },
    sectionTitreCentre: {
      fontFamily: 'Georgia, serif',
      fontSize: '32px',
      fontWeight: '400',
      color: '#080E24',
      marginBottom: '40px',
      textAlign: 'center',
    },

    // CARTES PRESTATIONS
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '24px',
    },
    card: (isSelected) => ({
      border: isSelected ? '2px solid #C9A445' : '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '28px 24px',
      cursor: 'pointer',
      backgroundColor: isSelected ? '#FDFAF2' : '#ffffff',
      transition: 'all 0.2s',
      position: 'relative',
    }),
    recommandeBadge: {
      display: 'inline-block',
      backgroundColor: '#C9A445',
      color: '#ffffff',
      fontSize: '12px',
      fontWeight: '600',
      padding: '4px 12px',
      borderRadius: '4px',
      marginBottom: '12px',
    },
    cardNom: {
      fontFamily: 'Georgia, serif',
      fontSize: '18px',
      color: '#080E24',
      marginBottom: '6px',
      margin: '0 0 6px 0',
    },
    cardDuree: {
      fontSize: '13px',
      color: '#888888',
      marginBottom: '12px',
      margin: '0 0 12px 0',
    },
    cardPrix: {
      fontFamily: 'Georgia, serif',
      fontSize: '24px',
      fontWeight: '400',
      color: '#080E24',
      marginBottom: '12px',
      margin: '0 0 12px 0',
    },
    cardDesc: {
      fontSize: '13px',
      color: '#666666',
      lineHeight: '1.6',
      marginBottom: '20px',
      margin: '0 0 20px 0',
    },
    btnSelect: (isSelected) => ({
      width: '100%',
      padding: '12px',
      backgroundColor: isSelected ? '#080E24' : 'transparent',
      color: isSelected ? '#ffffff' : '#080E24',
      border: '1px solid #080E24',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s',
    }),

    // CALENDLY
    calendlyContainer: {
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden',
      minHeight: '700px',
    },
    calendlyPlaceholder: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '400px',
      backgroundColor: '#f9f9f9',
      gap: '12px',
    },

    // RÉCAPITULATIF
    recapBox: {
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '28px',
      marginBottom: '24px',
      maxWidth: '600px',
    },
    recapTitre: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#080E24',
      marginBottom: '20px',
      margin: '0 0 20px 0',
    },
    recapLigne: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: '1px solid #f0f0f0',
      fontSize: '14px',
    },
    recapLabel: {
      color: '#666666',
    },
    recapValeur: {
      fontWeight: '600',
      color: '#080E24',
    },
    recapTotal: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 0 0 0',
      fontSize: '16px',
      fontWeight: '700',
      color: '#080E24',
    },
    stripeBox: {
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '40px',
      textAlign: 'center',
      maxWidth: '600px',
      backgroundColor: '#fafafa',
    },
    stripeTitre: {
      fontSize: '15px',
      color: '#080E24',
      fontWeight: '500',
      marginBottom: '8px',
      margin: '16px 0 8px 0',
    },
    stripeDesc: {
      fontSize: '13px',
      color: '#888888',
      margin: '0',
    },
    btnPayer: {
      marginTop: '20px',
      padding: '14px 40px',
      backgroundColor: '#C9A445',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '15px',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '600px',
    },

    // FAQ
    faqItem: {
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      marginBottom: '12px',
      overflow: 'hidden',
    },
    faqQuestion: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 24px',
      cursor: 'pointer',
      backgroundColor: '#ffffff',
    },
    faqQuestionTexte: {
      fontSize: '15px',
      color: '#080E24',
      fontWeight: '400',
      margin: 0,
    },
    faqPlus: {
      fontSize: '22px',
      color: '#C9A445',
      fontWeight: '300',
      flexShrink: 0,
    },
    faqReponse: {
      padding: '0 24px 20px 24px',
      fontSize: '14px',
      color: '#666666',
      lineHeight: '1.7',
      margin: 0,
    },

    // GARANTIES
    garantiesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '32px',
      maxWidth: '800px',
      margin: '0 auto',
    },
    garantieItem: {
      textAlign: 'center',
    },
    garantieIcone: {
      fontSize: '36px',
      marginBottom: '12px',
    },
    garantieTitre: {
      fontSize: '15px',
      fontWeight: '600',
      color: '#080E24',
      marginBottom: '8px',
      margin: '0 0 8px 0',
    },
    garantieDesc: {
      fontSize: '13px',
      color: '#888888',
      margin: 0,
    },
  };

  if (!selected) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Chargement...</div>;
  }

  return (
    <div style={styles.page}>

      {/* ── HERO ── */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Réservez votre séance</h1>
        <p style={styles.heroSubtitle}>
          Choisissez votre prestation, sélectionnez votre créneau
          et procédez au paiement sécurisé.
        </p>
      </div>

      {/* ── SECTION 1 : Sélection prestation ── */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitre}>Sélectionnez votre prestation</h2>
        <div style={styles.grid}>
          {prestations.map((p) => (
            <div
              key={p.id}
              style={styles.card(selected === p.id)}
              onClick={() => setSelected(p.id)}
            >
              {p.recommande && (
                <span style={styles.recommandeBadge}>Recommandé</span>
              )}
              <h3 style={styles.cardNom}>{p.nom}</h3>
              <p style={styles.cardDuree}>{p.duree}</p>
              <p style={styles.cardPrix}>{p.prix}</p>
              <p style={styles.cardDesc}>{p.description}</p>
              <button style={styles.btnSelect(selected === p.id)}>
                {selected === p.id ? '✓ Sélectionnée' : 'Sélectionner'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION 2 : Calendly ── */}
      <div style={{ ...styles.sectionGrise }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={styles.sectionTitreCentre}>Choisissez votre créneau</h2>
          <div style={styles.calendlyContainer}>
            <iframe
              src={prestationSelectionnee?.calendlyUrl || 'https://calendly.com/simonerichelle4/coaching-strategique'}
              width="100%"
              height="700px"
              frameBorder="0"
              title={`Calendly ${prestationSelectionnee?.nom || 'JCBO Conseil'}`}
              style={{ display: 'block' }}
            />
          </div>
          <div style={{ 
            marginTop: '20px', 
            padding: '16px', 
            backgroundColor: '#e3f2fd', 
            borderRadius: '8px',
            border: '1px solid #2196f3',
            color: '#1976d2',
            textAlign: 'center',
            fontSize: '14px'
          }}>
            ℹ️ Après avoir sélectionné votre créneau, vous recevrez une confirmation par email Calendly avec tous les détails du rendez-vous.
          </div>
        </div>
      </div>

      {/* ── SECTION 3 : Paiement ── */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitre}>Paiement sécurisé</h2>

        {/* Récapitulatif */}
        <div style={styles.recapBox}>
          <p style={styles.recapTitre}>Récapitulatif de votre réservation</p>
          <div style={styles.recapLigne}>
            <span style={styles.recapLabel}>Prestation</span>
            <span style={styles.recapValeur}>{prestationSelectionnee?.nom}</span>
          </div>
          <div style={styles.recapLigne}>
            <span style={styles.recapLabel}>Date & Heure</span>
            <span style={styles.recapValeur}>Confirmée par email Calendly</span>
          </div>
          <div style={styles.recapLigne}>
            <span style={styles.recapLabel}>Durée</span>
            <span style={styles.recapValeur}>{prestationSelectionnee?.duree}</span>
          </div>
          <div style={styles.recapTotal}>
            <span>Total</span>
            <span style={{ color: '#C9A445' }}>{prestationSelectionnee?.prix}</span>
          </div>
        </div>

        {/* Stripe */}
        <div style={styles.stripeBox}>
          <p style={{ fontSize: '32px', margin: '0' }}>💳</p>
          <p style={styles.stripeTitre}>Formulaire de paiement Stripe</p>
          <p style={styles.stripeDesc}>Paiement 100% sécurisé</p>
        </div>

        <button 
          style={styles.btnPayer}
          onClick={handlePaiement}
        >
          Confirmer et payer — {prestationSelectionnee?.prix}
        </button>

        {/* Lien d'accès à la formation pour Programme Complet */}
        {paiementEffectue && prestationSelectionnee?.id === 'programme-complet' && tokenAcces && (
          <div style={{
            marginTop: '32px',
            padding: '32px',
            backgroundColor: '#f1f8f4',
            border: '2px solid #4caf50',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
            <h3 style={{ 
              fontFamily: 'Georgia, serif', 
              fontSize: '24px', 
              color: '#080E24', 
              marginBottom: '12px',
              margin: '0 0 12px 0'
            }}>
              Paiement confirmé !
            </h3>
            <p style={{ fontSize: '15px', color: '#666666', marginBottom: '20px', lineHeight: '1.6' }}>
              Félicitations ! Vous avez accès au Programme Complet. 
              Voici votre lien personnel pour accéder à la formation :
            </p>
            <div style={{
              backgroundColor: '#ffffff',
              padding: '16px',
              borderRadius: '4px',
              marginBottom: '16px',
              wordBreak: 'break-all'
            }}>
              <code style={{ fontSize: '14px', color: '#080E24' }}>
                {window.location.origin}/formation?token={tokenAcces}
              </code>
            </div>
            <p style={{ fontSize: '13px', color: '#888888', marginBottom: '16px', margin: '0 0 16px 0' }}>
              Ce lien vous a également été envoyé par email. Conservez-le précieusement.
            </p>
            <button
              style={{
                padding: '12px 24px',
                backgroundColor: '#4caf50',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
              onClick={() => window.open(`/formation?token=${tokenAcces}`, '_blank')}
            >
              Accéder à la formation
            </button>
          </div>
        )}

        {/* Confirmation de paiement pour autres prestations */}
        {paiementEffectue && prestationSelectionnee?.id !== 'programme-complet' && (
          <div style={{
            marginTop: '32px',
            padding: '32px',
            backgroundColor: '#f1f8f4',
            border: '2px solid #4caf50',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
            <h3 style={{ 
              fontFamily: 'Georgia, serif', 
              fontSize: '24px', 
              color: '#080E24', 
              marginBottom: '12px',
              margin: '0 0 12px 0'
            }}>
              Paiement confirmé !
            </h3>
            <p style={{ fontSize: '15px', color: '#666666', lineHeight: '1.6' }}>
              Votre réservation a été confirmée. Vous recevrez un email de confirmation 
              avec tous les détails de votre rendez-vous.
            </p>
          </div>
        )}
      </div>

      {/* ── SECTION 4 : FAQ ── */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '60px 40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={styles.sectionTitreCentre}>Questions fréquentes</h2>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              <div
                style={styles.faqQuestion}
                onClick={() => setFaqOuvert(faqOuvert === index ? null : index)}
              >
                <p style={styles.faqQuestionTexte}>{faq.question}</p>
                <span style={styles.faqPlus}>
                  {faqOuvert === index ? '−' : '+'}
                </span>
              </div>
              {faqOuvert === index && (
                <p style={styles.faqReponse}>{faq.reponse}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION 5 : Garanties ── */}
      <div style={{ padding: '60px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={styles.garantiesGrid}>
            <div style={styles.garantieItem}>
              <div style={styles.garantieIcone}>🔒</div>
              <p style={styles.garantieTitre}>Paiement sécurisé</p>
              <p style={styles.garantieDesc}>
                Transactions protégées par Stripe
              </p>
            </div>
            <div style={styles.garantieItem}>
              <div style={styles.garantieIcone}>✓</div>
              <p style={styles.garantieTitre}>Satisfait ou remboursé</p>
              <p style={styles.garantieDesc}>Garantie 30 jours</p>
            </div>
            <div style={styles.garantieItem}>
              <div style={styles.garantieIcone}>⚡</div>
              <p style={styles.garantieTitre}>Réponse sous 24h</p>
              <p style={styles.garantieDesc}>
                Confirmation rapide de votre réservation
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Reservation;
