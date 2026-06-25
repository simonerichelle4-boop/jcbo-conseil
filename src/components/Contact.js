import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Contact() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const preselectedService = query.get('service') || '';

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
    typeClient: '',
    niveauActivite: '',
    objetDemande: [],
    description: '',
    urgence: '',
    pretInvestir: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        objetDemande: checked 
          ? [...prev.objetDemande, value]
          : prev.objetDemande.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire envoyé :", { ...formData, service: preselectedService });
    alert("Merci ! Votre demande a bien été envoyée. Nous vous recontacterons rapidement.");
    
    // Réinitialiser le formulaire
    setFormData({
      nomPrenom: '',
      fonction: '',
      entreprise: '',
      email: '',
      telephone: '',
      paysVille: '',
      typeClient: '',
      niveauActivite: '',
      objetDemande: [],
      description: '',
      urgence: '',
      pretInvestir: '',
    });
    
    // Réinitialiser le formulaire HTML
    e.target.reset();
  };

  return (
    <div style={{ padding: isMobile ? '40px 16px' : '80px 20px', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '60px' }}>
          <h1 style={{ fontSize: isMobile ? '2.2rem' : '3rem', fontFamily: "'Cormorant Garamond', serif", color: '#080E24', marginBottom: '15px' }}>
            Contactez JCBO Conseil
          </h1>
          <p style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', color: '#555', maxWidth: '600px', margin: '0 auto' }}>
            Chaque demande est étudiée avec attention pour vous proposer une solution adaptée et orientée résultats.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: isMobile ? '24px 16px' : '50px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>

          {/* SECTION 1 */}
          <h2 style={{ color: '#080E24', marginBottom: '25px', fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '1.5rem' : '1.8rem' }}>1. Informations personnelles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
            <input type="text" name="nomPrenom" placeholder="Nom & Prénom *" required onChange={handleChange} style={inputStyle} />
            <input type="text" name="fonction" placeholder="Fonction / Poste" onChange={handleChange} style={inputStyle} />
            <input type="text" name="entreprise" placeholder="Nom de l'entreprise / Projet" onChange={handleChange} style={inputStyle} />
            <input type="email" name="email" placeholder="Email *" required onChange={handleChange} style={inputStyle} />
            <input type="tel" name="telephone" placeholder="Téléphone *" required onChange={handleChange} style={inputStyle} />
            <input type="text" name="paysVille" placeholder="Pays / Ville" onChange={handleChange} style={inputStyle} />
          </div>

          {/* SECTION 2 */}
          <h2 style={{ color: '#080E24', margin: isMobile ? '35px 0 20px' : '50px 0 25px', fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '1.5rem' : '1.8rem' }}>2. Votre situation actuelle</h2>
          <div style={{ marginBottom: '30px' }}>
            <p style={{ marginBottom: '15px', fontWeight: '600' }}>Vous êtes :</p>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
              {['Entrepreneur', 'Dirigeant PME', 'Business Developer', 'Porteur de projet', 'Autre'].map((item) => (
                <label key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="radio" name="typeClient" value={item} onChange={handleChange} /> {item}
                </label>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <p style={{ marginBottom: '15px', fontWeight: '600' }}>Niveau d’activité :</p>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', flexWrap: 'wrap', gap: '15px' }}>
              {['Idée', 'Lancement', 'En croissance', 'En difficulté'].map((niveau) => (
                <label key={niveau} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="radio" name="niveauActivite" value={niveau} onChange={handleChange} /> {niveau}
                </label>
              ))}
            </div>
          </div>

          {/* SECTION 3 */}
          <h2 style={{ color: '#080E24', margin: isMobile ? '35px 0 20px' : '50px 0 25px', fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '1.5rem' : '1.8rem' }}>3. Votre besoin</h2>
          <p style={{ marginBottom: '15px', fontWeight: '600' }}>Objet de votre demande :</p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginBottom: '30px' }}>
            {['Coaching stratégique', 'Développement commercial', 'Structuration d\'offre', 'Mindset entrepreneurial', 'Formation', 'Autre'].map((item) => (
              <label key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" value={item} onChange={handleChange} /> {item}
              </label>
            ))}
          </div>

          <textarea 
            name="description" 
            placeholder="Décrivez votre besoin en quelques lignes..." 
            rows="6" 
            onChange={handleChange}
            style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1.05rem', boxSizing: 'border-box' }}
          />

          {/* SECTION 4 */}
          <h2 style={{ color: '#080E24', margin: isMobile ? '35px 0 20px' : '50px 0 25px', fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '1.5rem' : '1.8rem' }}>4. Urgence & Intention</h2>
          <div style={{ marginBottom: '25px' }}>
            <p style={{ fontWeight: '600' }}>Votre besoin est :</p>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '12px' : '20px', marginTop: '10px' }}>
              {['Urgent', 'À court terme (1-3 mois)', 'À moyen terme'].map((u) => (
                <label key={u} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><input type="radio" name="urgence" value={u} onChange={handleChange} /> {u}</label>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontWeight: '600' }}>Êtes-vous prêt à investir dans un accompagnement ?</p>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '12px' : '20px', marginTop: '10px' }}>
              {['Oui', 'Non', 'Je souhaite en discuter'].map((rep) => (
                <label key={rep} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><input type="radio" name="pretInvestir" value={rep} onChange={handleChange} /> {rep}</label>
              ))}
            </div>
          </div>

          {/* SECTION 5 */}
          <div style={{ margin: isMobile ? '35px 0 20px' : '50px 0 30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" required /> J’accepte d’être recontacté par JCBO Conseil
            </label>
          </div>

          <button 
            type="submit"
            style={{
              width: '100%',
              padding: isMobile ? '14px' : '18px',
              backgroundColor: '#C9A445',
              color: '#080E24',
              fontWeight: '700',
              fontSize: isMobile ? '1.05rem' : '1.2rem',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Être recontacté par JCBO Conseil
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '14px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '1.05rem',
  width: '100%',
  boxSizing: 'border-box'
};

export default Contact;