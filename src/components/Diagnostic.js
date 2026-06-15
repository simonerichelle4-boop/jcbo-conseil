import React, { useState, useEffect } from 'react';

function Diagnostic() {
  const [sectionError, setSectionError] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [formData, setFormData] = useState({
    nomPrenom: '',
    fonction: '',
    entreprise: '',
    email: '',
    telephone: '',
    paysVille: '',
    activitePrincipale: '',
    propositionValeur: '',
    cible: '',
    differenciation: '',
    caActuel: '',
    strategieClaire: '',
    commentTrouverClients: '',
    canalAcquisition: '',
    principauxDefis: '',
    blocages: '',
    dureeBlocages: '',
    pourquoiNeFonctionnePas: '',
    dejaEssaye: '',
    pourquoiPasMarche: '',
    impactSiRienChange: '',
    consequencesFinancieres: '',
    consequencesPersonnelles: '',
    ouDans6Mois: '',
    resultatAttendu: '',
    revenuCible: '',
    pretAccompagner: '',
    pretInvestir: '',
    priorite: '',
    messageLibre: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (sectionError) setSectionError('');
  };

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const validateTelephone = (value) => {
    return /^\+?[0-9\s.-]{6,}$/.test(value);
  };

  const validateSection = (section, requireAllFields = false) => {
    for (const field of section.fields) {
      if (field.type === 'confirm') continue;
      const value = (formData[field.name] || '').trim();
      if ((field.required || requireAllFields) && !value) {
        return `Veuillez renseigner : ${field.label || field.placeholder}.`;
      }
      if (field.type === 'email' && value && !validateEmail(value)) {
        return 'Veuillez saisir une adresse email valide.';
      }
      if (field.type === 'tel' && value && !validateTelephone(value)) {
        return 'Veuillez saisir un téléphone valide.';
      }
      if (field.type === 'text' && value && ['nomPrenom', 'entreprise'].includes(field.name) && value.length < 2) {
        return 'Veuillez saisir au moins 2 caractères.';
      }
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateSection(currentSectionData, true);
    if (error) {
      setSectionError(error);
      return;
    }

    for (const section of sections) {
      const sectionError = validateSection(section, true);
      if (sectionError) {
        setCurrentSection(sections.indexOf(section) + 1);
        setSectionError(sectionError);
        return;
      }
    }

    console.log("Diagnostic soumis :", formData);
    alert("Merci ! Votre diagnostic personnalisé a bien été envoyé.\nNous vous recontacterons rapidement avec un retour détaillé.");
  };

  const [currentSection, setCurrentSection] = useState(1);
  const sections = [
    {
      title: 'Identification',
      subtitle: 'Pour mieux vous connaître et personnaliser votre diagnostic',
      fields: [
        { type: 'text', name: 'nomPrenom', label: 'Nom et Prénom *', placeholder: 'Jean Dupont', required: true },
        { type: 'email', name: 'email', label: 'Email professionnel *', placeholder: 'jean.dupont@entreprise.com', required: true },
        { type: 'tel', name: 'telephone', label: 'Téléphone *', placeholder: '+33 6 12 34 56 78', required: true },
        { type: 'text', name: 'entreprise', label: 'Entreprise *', placeholder: 'Nom de votre entreprise', required: true },
        { type: 'select', name: 'fonction', label: 'Fonction / Poste', placeholder: 'Sélectionnez votre fonction', options: ['Dirigeant', 'Commercial', 'Marketing', 'Consultant', 'Autre'] },
        { type: 'text', name: 'paysVille', label: 'Pays / Ville', placeholder: 'Pays / Ville' },
      ]
    },
    {
      title: 'Vision & Positionnement',
      fields: [
        { type: 'text', name: 'activitePrincipale', label: 'Activité principale', placeholder: 'Quelle est votre activité principale ?' },
        { type: 'text', name: 'propositionValeur', label: 'Proposition de valeur', placeholder: "Quelle est votre proposition de valeur aujourd'hui ?" },
        { type: 'text', name: 'cible', label: 'Client cible', placeholder: 'À qui vous adressez-vous précisément ?' },
        { type: 'text', name: 'differenciation', label: 'Différenciation', placeholder: "Qu'est-ce qui vous différencie réellement ?" },
      ]
    },
    {
      title: 'Situation actuelle',
      fields: [
        { type: 'text', name: 'caActuel', placeholder: 'Quel est votre chiffre d\'affaires actuel ? (optionnel)' },
        { type: 'radioGroup', name: 'strategieClaire', label: 'Avez-vous une stratégie claire ?', options: ['Oui', 'Non', 'Partiellement'] },
        { type: 'text', name: 'commentTrouverClients', placeholder: 'Comment trouvez-vous vos clients aujourd\'hui ?' },
        { type: 'text', name: 'canalAcquisition', placeholder: 'Quel est votre principal canal d\'acquisition ?' },
      ]
    },
    {
      title: 'Défis actuels',
      fields: [
        { type: 'textarea', name: 'principauxDefis', placeholder: 'Quels sont vos 3 principaux défis actuellement ?', rows: 3 },
        { type: 'textarea', name: 'blocages', placeholder: 'Qu\'est-ce qui vous bloque concrètement aujourd\'hui ?', rows: 3 },
        { type: 'textarea', name: 'pourquoiNeFonctionnePas', placeholder: 'Selon vous, pourquoi cela ne fonctionne pas comme prévu ?', rows: 3 },
      ]
    },
    {
      title: 'Blocages & solutions',
      fields: [
        { type: 'text', name: 'dureeBlocages', placeholder: 'Depuis combien de temps ces blocages existent-ils ?' },
        { type: 'textarea', name: 'dejaEssaye', placeholder: 'Qu\'avez-vous déjà essayé pour avancer ?', rows: 3 },
        { type: 'textarea', name: 'pourquoiPasMarche', placeholder: 'Selon vous, pourquoi cela n\'a pas marché ?', rows: 3 },
      ]
    },
    {
      title: 'Impact & conséquences',
      fields: [
        { type: 'textarea', name: 'impactSiRienChange', placeholder: 'Quel impact si rien ne change ?', rows: 3 },
        { type: 'textarea', name: 'consequencesFinancieres', placeholder: 'Conséquences financières éventuelles', rows: 3 },
        { type: 'textarea', name: 'consequencesPersonnelles', placeholder: 'Conséquences personnelles éventuelles', rows: 3 },
      ]
    },
    {
      title: 'Objectifs',
      fields: [
        { type: 'textarea', name: 'ouDans 6Mois', placeholder: 'Où voulez-vous être dans 6 mois ?', rows: 2 },
        { type: 'textarea', name: 'resultatAttendu', placeholder: 'Quel résultat concret attendez-vous ?', rows: 2 },
        { type: 'text', name: 'revenuCible', placeholder: 'Objectif de revenu / chiffre à atteindre' },
      ]
    },
    {
      title: 'Engagement',
      fields: [
        { type: 'radioGroup', name: 'pretAccompagner', label: 'Êtes-vous prêt à être accompagné ?', options: ['Oui', 'Non', 'Peut-être'] },
        { type: 'text', name: 'pretInvestir', placeholder: 'Êtes-vous prêt à investir dans ce projet ?' },
        { type: 'range', name: 'priorite', label: 'Priorité', min: 1, max: 10 },
      ]
    },
    {
      title: 'Informations complémentaires',
      fields: [
        { type: 'textarea', name: 'messageLibre', placeholder: 'Message libre / informations supplémentaires', rows: 5 },
      ]
    },
    {
      title: 'Vérification & envoi',
      fields: [
        { type: 'confirm', name: 'confirmation', label: 'Vérifiez vos réponses puis cliquez sur Soumettre.' },
      ]
    }
  ];

  const isLastSection = currentSection === sections.length;
  const currentSectionData = sections[currentSection - 1];

  const goPrev = () => {
    if (currentSection > 1) {
      setSectionError('');
      setCurrentSection(prev => prev - 1);
    }
  };

  const goNext = () => {
    const error = validateSection(currentSectionData, true);
    if (error) {
      setSectionError(error);
      return;
    }
    setSectionError('');
    if (currentSection < sections.length) setCurrentSection(prev => prev + 1);
  };

  return (
    <div style={{ padding: isMobile ? '40px 16px' : '80px 20px', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: '920px', margin: '0 auto' }}>
        
        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '50px' }}>
          <h1 style={{ fontSize: isMobile ? '2.2rem' : '3rem', fontFamily: "'Cormorant Garamond', serif", color: '#C9A445', marginBottom: '15px' }}>
            Diagnostic Personnalisé
          </h1>
          <p style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', color: '#555', maxWidth: '720px', margin: '0 auto' }}>
            Une analyse approfondie de votre activité pour transformer vos défis en résultats concrets.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ 
          backgroundColor: 'white', 
          padding: isMobile ? '24px 16px' : '45px', 
          borderRadius: '14px', 
          boxShadow: '0 10px 32px rgba(0,0,0,0.08)' 
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '25px' }}>
            <div>
              <div style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem', color: '#C9A445', fontWeight: '700', marginBottom: '8px' }}>
                Section {currentSection} sur {sections.length}
              </div>
              <h2 style={{ color: '#080E24', margin: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '1.6rem' : '2rem' }}>
                {currentSectionData.title}
              </h2>
            </div>
            <span style={{ color: '#666', fontWeight: '600' }}>Étape {currentSection} / {sections.length}</span>
          </div>

          <div style={{ height: '10px', borderRadius: '999px', backgroundColor: '#e5e7eb', overflow: 'hidden', marginBottom: '40px' }}>
            <div style={{ width: `${(currentSection / sections.length) * 100}%`, height: '100%', backgroundColor: '#C9A445', transition: 'width 0.3s ease' }} />
          </div>

          {sectionError && (
            <div style={{ marginBottom: '25px', padding: '18px 20px', backgroundColor: '#fee2e2', color: '#991b1b', borderRadius: '12px', border: '1px solid #fecaca' }}>
              {sectionError}
            </div>
          )}

          {currentSectionData.fields.map((field) => {
            const commonProps = {
              key: field.name,
              id: field.name,
              name: field.name,
              value: formData[field.name] || '',
              onChange: handleChange,
              style: inputStyle,
              required: field.required || false,
              placeholder: field.placeholder || ''
            };

            const fieldContent = (() => {
              if (field.type === 'textarea') {
                return (
                  <textarea
                    {...commonProps}
                    rows={field.rows}
                    style={textareaStyle}
                  />
                );
              }

              if (field.type === 'select') {
                return (
                  <select
                    {...commonProps}
                    style={{ ...inputStyle, appearance: 'none', backgroundColor: 'white' }}
                  >
                    <option value="" disabled>{field.placeholder}</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                );
              }

              if (field.type === 'radioGroup') {
                return (
                  <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '10px' : '18px', flexWrap: 'wrap' }}>
                    {field.options.map((option) => (
                      <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.97rem', color: '#444' }}>
                        <input
                          type="radio"
                          name={field.name}
                          value={option}
                          checked={formData[field.name] === option}
                          onChange={handleChange}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                );
              }

              if (field.type === 'range') {
                return (
                  <div>
                    <input
                      {...commonProps}
                      type="range"
                      min={field.min}
                      max={field.max}
                      style={{ width: '100%' }}
                    />
                    <div style={{ marginTop: '8px', color: '#666', fontSize: '0.95rem' }}>
                      {formData[field.name] || field.min}
                    </div>
                  </div>
                );
              }

              if (field.type === 'confirm') {
                return (
                  <p style={{ marginBottom: '35px', fontSize: '1rem', color: '#444', lineHeight: '1.7' }}>
                    {field.label}
                  </p>
                );
              }

              return <input {...commonProps} type={field.type} />;
            })();

            return (
              <div key={field.name} style={{ marginBottom: '24px' }}>
                {field.label && (
                  <label htmlFor={field.name} style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: '#1f2937' }}>
                    {field.label}
                  </label>
                )}
                {fieldContent}
              </div>
            );
          })}

          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: '12px', marginTop: '30px' }}>
            {currentSection > 1 && (
              <button
                type="button"
                onClick={goPrev}
                style={{
                  padding: '15px 30px',
                  borderRadius: '10px',
                  border: '1px solid #d1d5db',
                  backgroundColor: 'white',
                  color: '#080E24',
                  cursor: 'pointer',
                  minWidth: isMobile ? '100%' : '160px'
                }}
              >
                ← Précédent
              </button>
            )}

            {!isLastSection && (
              <button
                type="button"
                onClick={goNext}
                style={{
                  marginLeft: isMobile ? '0' : 'auto',
                  padding: '15px 32px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: '#080E24',
                  color: 'white',
                  cursor: 'pointer',
                  minWidth: isMobile ? '100%' : '160px'
                }}
              >
                Suivant →
              </button>
            )}

            {isLastSection && (
              <button
                type="submit"
                style={{
                  marginLeft: isMobile ? '0' : 'auto',
                  padding: '16px 32px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: '#C9A445',
                  color: '#080E24',
                  fontWeight: '700',
                  cursor: 'pointer',
                  minWidth: isMobile ? '100%' : '180px'
                }}
              >
                Soumettre
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '15px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '1.05rem',
  width: '100%',
  boxSizing: 'border-box'
};

const textareaStyle = {
  width: '100%',
  padding: '15px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '1.05rem',
  marginBottom: '20px',
  boxSizing: 'border-box'
};

export default Diagnostic;