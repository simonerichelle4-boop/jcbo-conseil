import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function Formation() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('token');
  
  // Vérification du token d'accès
  const isAuthorized = accessToken && accessToken.length > 20; // Validation simple
  
  const [niveauActif, setNiveauActif] = useState(1);
  const [moduleActif, setModuleActif] = useState(null);
  const [pdfActif, setPdfActif] = useState(null);
  const [progression, setProgression] = useState({
    niveau1: { module1: false, module2: false },
    niveau2: { module1: false, module2: false },
    niveau3: { module1: false, module2: false },
  });

  const modules = {
    niveau1: {
      titre: "Niveau 1 — Les Fondamentaux",
      description: "Acquisition des bases essentielles",
      modules: [
        {
          id: "n1-m1",
          titre: "Module 1 : Mindset et posture commerciale",
          description: "Travailler l'état d'esprit et l'attitude commerciale.",
          duree: "2h",
          pdfUrl: "/cours/n1-m1-mindset-posture-commerciale.pdf",
          contenu: [
            "Développer une mentalité de gagnant",
            "L'attitude commerciale qui fait la différence",
            "Confiance en soi et persuasion",
            "Exercices pratiques de posture"
          ],
          valide: progression.niveau1.module1
        },
        {
          id: "n1-m2",
          titre: "Module 2 : Techniques de vente",
          description: "Méthodes et scripts pour convertir plus.",
          duree: "2h",
          pdfUrl: "/cours/n1-m2-techniques-vente.pdf",
          contenu: [
            "Les méthodes de vente modernes",
            "Scripts de vente efficaces",
            "Traitement des objections",
            "Techniques de closing"
          ],
          valide: progression.niveau1.module2,
          debloque: progression.niveau1.module1
        }
      ]
    },
    niveau2: {
      titre: "Niveau 2 — Performance commerciale",
      description: "Développement des compétences avancées",
      modules: [
        {
          id: "n2-m1",
          titre: "Module 3 : Prospection et acquisition client",
          description: "Outils et process pour générer des leads.",
          duree: "3h",
          pdfUrl: "/cours/n2-m1-prospection-acquisition-client.pdf",
          contenu: [
            "Stratégies de prospection moderne",
            "Génération de leads qualifiés",
            "Outils d'acquisition client",
            "Process de qualification"
          ],
          valide: progression.niveau2.module1,
          debloque: progression.niveau1.module1 && progression.niveau1.module2
        },
        {
          id: "n2-m2",
          titre: "Module 4 : Négociation & closing",
          description: "Techniques pour conclure et augmenter le panier moyen.",
          duree: "3h",
          pdfUrl: "/cours/n2-m2-negociation-closing.pdf",
          contenu: [
            "Techniques de négociation avancées",
            "Stratégies de closing efficaces",
            "Augmentation du panier moyen",
            "Gestion des prix et remises"
          ],
          valide: progression.niveau2.module2,
          debloque: progression.niveau2.module1
        }
      ]
    },
    niveau3: {
      titre: "Niveau 3 — Leadership & Business",
      description: "Maîtrise et certification",
      modules: [
        {
          id: "n3-m1",
          titre: "Module 5 : Stratégie & développement business",
          description: "Planification et croissance durable.",
          duree: "4h",
          pdfUrl: "/cours/n3-m1-strategie-developpement-business.pdf",
          contenu: [
            "Planification stratégique",
            "Modèles de croissance durable",
            "Analyse de marché et positionnement",
            "KPIs et suivi de performance"
          ],
          valide: progression.niveau3.module1,
          debloque: progression.niveau2.module1 && progression.niveau2.module2
        },
        {
          id: "n3-m2",
          titre: "Module 6 : Management & leadership",
          description: "Diriger et faire croître vos équipes.",
          duree: "4h",
          pdfUrl: "/cours/n3-m2-management-leadership.pdf",
          contenu: [
            "Leadership transformationnel",
            "Gestion et développement des équipes",
            "Culture d'entreprise et valeurs",
            "Certification finale et remise"
          ],
          valide: progression.niveau3.module2,
          debloque: progression.niveau3.module1,
          certification: true
        }
      ]
    },
  };

  const styles = {
    page: {
      backgroundColor: '#ffffff',
      minHeight: '100vh',
    },
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
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '40px 20px' : '60px 40px',
    },
    navigation: {
      display: 'flex',
      justifyContent: 'center',
      gap: isMobile ? '10px' : '20px',
      marginBottom: '40px',
      flexWrap: 'wrap',
    },
    navButton: (isActive, isDebloque) => ({
      padding: isMobile ? '10px 16px' : '12px 24px',
      backgroundColor: isActive ? '#C9A445' : (isDebloque ? '#080E24' : '#e0e0e0'),
      color: isActive ? '#ffffff' : (isDebloque ? '#ffffff' : '#999999'),
      border: 'none',
      borderRadius: '4px',
      fontSize: isMobile ? '13px' : '15px',
      fontWeight: '500',
      cursor: isDebloque ? 'pointer' : 'not-allowed',
      transition: 'all 0.2s',
    }),
    niveauSection: {
      marginBottom: '60px',
    },
    niveauTitre: {
      fontFamily: 'Georgia, serif',
      fontSize: '28px',
      fontWeight: '400',
      color: '#080E24',
      marginBottom: '12px',
      margin: '0 0 12px 0',
    },
    niveauDescription: {
      fontSize: '16px',
      color: '#666666',
      marginBottom: '24px',
      margin: '0 0 24px 0',
    },
    modulesGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '24px',
    },
    moduleCard: (isDebloque, isValide) => ({
      border: isValide ? '2px solid #4caf50' : (isDebloque ? '1px solid #e0e0e0' : '1px solid #f0f0f0'),
      borderRadius: '8px',
      padding: '28px',
      backgroundColor: isValide ? '#f1f8f4' : (isDebloque ? '#ffffff' : '#fafafa'),
      cursor: isDebloque ? 'pointer' : 'not-allowed',
      transition: 'all 0.2s',
      opacity: isDebloque ? '1' : '0.6',
    }),
    moduleBadge: (isValide) => ({
      display: 'inline-block',
      backgroundColor: isValide ? '#4caf50' : '#C9A445',
      color: '#ffffff',
      fontSize: '12px',
      fontWeight: '600',
      padding: '4px 12px',
      borderRadius: '4px',
      marginBottom: '12px',
    }),
    moduleTitre: {
      fontFamily: 'Georgia, serif',
      fontSize: '18px',
      color: '#080E24',
      marginBottom: '8px',
      margin: '0 0 8px 0',
    },
    moduleDescription: {
      fontSize: '14px',
      color: '#666666',
      marginBottom: '12px',
      margin: '0 0 12px 0',
      lineHeight: '1.6',
    },
    moduleDuree: {
      fontSize: '13px',
      color: '#888888',
      marginBottom: '16px',
      margin: '0 0 16px 0',
    },
    moduleProgress: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginTop: '16px',
    },
    progressIcon: {
      fontSize: '20px',
    },
    progressText: {
      fontSize: '13px',
      color: '#666666',
    },
    modal: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '1000',
    },
    modalContent: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      maxWidth: '800px',
      width: '90%',
      maxHeight: '90vh',
      overflowY: 'auto',
      padding: isMobile ? '24px 16px' : '40px',
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '24px',
    },
    modalTitre: {
      fontFamily: 'Georgia, serif',
      fontSize: '24px',
      color: '#080E24',
      marginBottom: '8px',
      margin: '0 0 8px 0',
    },
    modalClose: {
      fontSize: '28px',
      color: '#999999',
      cursor: 'pointer',
      border: 'none',
      backgroundColor: 'transparent',
      padding: '0',
    },
    contenuList: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
    contenuItem: {
      padding: '12px 0',
      borderBottom: '1px solid #f0f0f0',
      fontSize: '15px',
      color: '#333333',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    contenuIcon: {
      color: '#C9A445',
    },
    btnValider: {
      marginTop: '24px',
      padding: '14px 32px',
      backgroundColor: '#4caf50',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%',
    },
    certificationBadge: {
      display: 'inline-block',
      backgroundColor: '#C9A445',
      color: '#ffffff',
      fontSize: '12px',
      fontWeight: '600',
      padding: '4px 12px',
      borderRadius: '4px',
      marginBottom: '12px',
    },
  };

  const validerModule = (moduleId) => {
    const nouvelleProgression = { ...progression };
    
    if (moduleId === 'n1-m1') {
      nouvelleProgression.niveau1.module1 = true;
    } else if (moduleId === 'n1-m2') {
      nouvelleProgression.niveau1.module2 = true;
    } else if (moduleId === 'n2-m1') {
      nouvelleProgression.niveau2.module1 = true;
    } else if (moduleId === 'n2-m2') {
      nouvelleProgression.niveau2.module2 = true;
    } else if (moduleId === 'n3-m1') {
      nouvelleProgression.niveau3.module1 = true;
    } else if (moduleId === 'n3-m2') {
      nouvelleProgression.niveau3.module2 = true;
    }
    
    setProgression(nouvelleProgression);
    setModuleActif(null);
  };

  const estNiveauDebloque = (niveauNum) => {
    if (niveauNum === 1) return true;
    if (niveauNum === 2) return progression.niveau1.module1 && progression.niveau1.module2;
    if (niveauNum === 3) return progression.niveau2.module1 && progression.niveau2.module2;
    return false;
  };

  const tousModulesValides = () => {
    return progression.niveau1.module1 && progression.niveau1.module2 &&
           progression.niveau2.module1 && progression.niveau2.module2 &&
           progression.niveau3.module1 && progression.niveau3.module2;
  };

  // Page d'accès non autorisé
  if (!isAuthorized) {
    return (
      <div style={styles.page}>
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>Accès non autorisé</h1>
          <p style={styles.heroSubtitle}>
            Cette page est réservée aux participants du Programme Complet.
          </p>
        </div>
        <div style={styles.container}>
          <div style={{
            backgroundColor: '#fff3f3',
            border: '2px solid #f44336',
            borderRadius: '8px',
            padding: '40px',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔒</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', color: '#080E24', marginBottom: '16px', margin: '0 0 16px 0' }}>
              Accès réservé
            </h2>
            <p style={{ fontSize: '16px', color: '#666666', lineHeight: '1.6', marginBottom: '24px' }}>
              Vous devez avoir acheté le Programme Complet et reçu un lien d'accès par email pour accéder à cette formation.
            </p>
            <button
              style={{
                padding: '14px 32px',
                backgroundColor: '#080E24',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
              onClick={() => window.location.href = '/'}
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {/* HERO */}
      <div className="formation-hero" style={styles.hero}>
        <h1 style={styles.heroTitle}>Programme Complet - Formation</h1>
        <p style={styles.heroSubtitle}>
          3 niveaux, 6 modules, une certification officielle. 
          Progressez à votre rythme et validez chaque étape.
        </p>
      </div>

      {/* CONTENU */}
      <div className="formation-container" style={styles.container}>
        {/* Navigation par niveau */}
        <div className="formation-navigation" style={styles.navigation}>
          <button
            className="formation-nav-button"
            style={styles.navButton(niveauActif === 1, estNiveauDebloque(1))}
            onClick={() => estNiveauDebloque(1) && setNiveauActif(1)}
          >
            Niveau 1
          </button>
          <button
            className="formation-nav-button"
            style={styles.navButton(niveauActif === 2, estNiveauDebloque(2))}
            onClick={() => estNiveauDebloque(2) && setNiveauActif(2)}
          >
            Niveau 2
          </button>
          <button
            className="formation-nav-button"
            style={styles.navButton(niveauActif === 3, estNiveauDebloque(3))}
            onClick={() => estNiveauDebloque(3) && setNiveauActif(3)}
          >
            Niveau 3
          </button>
        </div>

        {/* Affichage des modules du niveau actif */}
        {niveauActif === 1 && (
          <div style={styles.niveauSection}>
            <h2 style={styles.niveauTitre}>{modules.niveau1.titre}</h2>
            <p style={styles.niveauDescription}>{modules.niveau1.description}</p>
            <div className="formation-modules-grid" style={styles.modulesGrid}>
              {modules.niveau1.modules.map((module) => (
                <div
                  key={module.id}
                  style={styles.moduleCard(module.debloque !== false, module.valide)}
                  onClick={() => module.debloque !== false && setModuleActif(module)}
                >
                  <span style={styles.moduleBadge(module.valide)}>
                    {module.valide ? '✓ Validé' : 'En cours'}
                  </span>
                  <h3 style={styles.moduleTitre}>{module.titre}</h3>
                  <p style={styles.moduleDescription}>{module.description}</p>
                  <p style={styles.moduleDuree}>Durée : {module.duree}</p>
                  <div style={styles.moduleProgress}>
                    <span style={styles.progressIcon}>
                      {module.valide ? '✅' : (module.debloque !== false ? '📚' : '🔒')}
                    </span>
                    <span style={styles.progressText}>
                      {module.valide ? 'Module validé' : (module.debloque !== false ? 'Disponible' : 'À débloquer')}
                    </span>
                  </div>
                  {module.debloque !== false && (
                    <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                      <button
                        style={{
                          flex: 1,
                          padding: '10px 16px',
                          backgroundColor: '#080E24',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '4px',
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setPdfActif(module.pdfUrl);
                        }}
                      >
                        📖 Voir le cours
                      </button>
                      <button
                        style={{
                          flex: 1,
                          padding: '10px 16px',
                          backgroundColor: '#C9A445',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '4px',
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(module.pdfUrl, '_blank');
                        }}
                      >
                        ⬇️ Télécharger
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {niveauActif === 2 && (
          <div style={styles.niveauSection}>
            <h2 style={styles.niveauTitre}>{modules.niveau2.titre}</h2>
            <p style={styles.niveauDescription}>{modules.niveau2.description}</p>
            <div className="formation-modules-grid" style={styles.modulesGrid}>
              {modules.niveau2.modules.map((module) => (
                <div
                  key={module.id}
                  style={styles.moduleCard(module.debloque, module.valide)}
                  onClick={() => module.debloque && setModuleActif(module)}
                >
                  <span style={styles.moduleBadge(module.valide)}>
                    {module.valide ? '✓ Validé' : 'En cours'}
                  </span>
                  <h3 style={styles.moduleTitre}>{module.titre}</h3>
                  <p style={styles.moduleDescription}>{module.description}</p>
                  <p style={styles.moduleDuree}>Durée : {module.duree}</p>
                  <div style={styles.moduleProgress}>
                    <span style={styles.progressIcon}>
                      {module.valide ? '✅' : (module.debloque ? '📚' : '🔒')}
                    </span>
                    <span style={styles.progressText}>
                      {module.valide ? 'Module validé' : (module.debloque ? 'Disponible' : 'À débloquer')}
                    </span>
                  </div>
                  {module.debloque && (
                    <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                      <button
                        style={{
                          flex: 1,
                          padding: '10px 16px',
                          backgroundColor: '#080E24',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '4px',
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setPdfActif(module.pdfUrl);
                        }}
                      >
                        📖 Voir le cours
                      </button>
                      <button
                        style={{
                          flex: 1,
                          padding: '10px 16px',
                          backgroundColor: '#C9A445',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '4px',
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(module.pdfUrl, '_blank');
                        }}
                      >
                        ⬇️ Télécharger
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {niveauActif === 3 && (
          <div style={styles.niveauSection}>
            <h2 style={styles.niveauTitre}>{modules.niveau3.titre}</h2>
            <p style={styles.niveauDescription}>{modules.niveau3.description}</p>
            <div className="formation-modules-grid" style={styles.modulesGrid}>
              {modules.niveau3.modules.map((module) => (
                <div
                  key={module.id}
                  style={styles.moduleCard(module.debloque, module.valide)}
                  onClick={() => module.debloque && setModuleActif(module)}
                >
                  {module.certification && (
                    <span style={styles.certificationBadge}>🏆 Certification</span>
                  )}
                  <span style={styles.moduleBadge(module.valide)}>
                    {module.valide ? '✓ Validé' : 'En cours'}
                  </span>
                  <h3 style={styles.moduleTitre}>{module.titre}</h3>
                  <p style={styles.moduleDescription}>{module.description}</p>
                  <p style={styles.moduleDuree}>Durée : {module.duree}</p>
                  <div style={styles.moduleProgress}>
                    <span style={styles.progressIcon}>
                      {module.valide ? '✅' : (module.debloque ? '📚' : '🔒')}
                    </span>
                    <span style={styles.progressText}>
                      {module.valide ? 'Module validé' : (module.debloque ? 'Disponible' : 'À débloquer')}
                    </span>
                  </div>
                  {module.debloque && (
                    <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                      <button
                        style={{
                          flex: 1,
                          padding: '10px 16px',
                          backgroundColor: '#080E24',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '4px',
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setPdfActif(module.pdfUrl);
                        }}
                      >
                        📖 Voir le cours
                      </button>
                      <button
                        style={{
                          flex: 1,
                          padding: '10px 16px',
                          backgroundColor: '#C9A445',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '4px',
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(module.pdfUrl, '_blank');
                        }}
                      >
                        ⬇️ Télécharger
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certification finale */}
        {tousModulesValides() && (
          <div className="certification-card" style={{
            backgroundColor: '#ffffff',
            border: '3px solid #C9A445',
            borderRadius: '12px',
            padding: isMobile ? '32px 20px' : '40px',
            marginTop: '40px',
            width: '100%',
            boxShadow: '0 10px 40px rgba(201, 164, 69, 0.2)',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: isMobile ? '24px' : '40px'
          }}>
            <div style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  backgroundColor: '#C9A445',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '35px'
                }}>
                  🏆
                </div>
                <div>
                  <h2 style={{ 
                    fontFamily: 'Georgia, serif', 
                    fontSize: isMobile ? '22px' : '28px', 
                    color: '#080E24', 
                    margin: '0',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    textAlign: isMobile ? 'center' : 'left'
                  }}>
                    CERTIFICAT DE RÉUSSITE
                  </h2>
                </div>
              </div>
              <p style={{ fontSize: '16px', color: '#666666', marginBottom: '12px', lineHeight: '1.6', margin: '0 0 12px 0' }}>
                Ce certificat atteste que l'étudiant a complété avec succès
              </p>
              <h3 style={{ 
                fontSize: '22px', 
                color: '#080E24', 
                marginBottom: '16px',
                fontWeight: '600',
                margin: '0 0 16px 0'
              }}>
                Programme Complet — Leadership & Business
              </h3>
              <p style={{ fontSize: '14px', color: '#888888', marginBottom: '0', lineHeight: '1.5' }}>
                Niveau 1 — Les Fondamentaux<br/>
                Niveau 2 — Performance commerciale<br/>
                Niveau 3 — Leadership & Business
              </p>
            </div>
            <div className="certification-button-container" style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              width: isMobile ? '100%' : 'auto',
              minWidth: isMobile ? 'auto' : '200px'
            }}>
              <button style={{
                padding: '14px 32px',
                backgroundColor: '#C9A445',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 15px rgba(201, 164, 69, 0.3)',
                width: '100%'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#b8943f'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#C9A445'}
              >
                Obtenir ma certification
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal de détail du module */}
      {moduleActif && (
        <div style={styles.modal} onClick={() => setModuleActif(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <div>
                {moduleActif.certification && (
                  <span style={styles.certificationBadge}>🏆 Certification</span>
                )}
                <h2 style={styles.modalTitre}>{moduleActif.titre}</h2>
                <p style={{ fontSize: '14px', color: '#888888', margin: '0' }}>
                  Durée : {moduleActif.duree}
                </p>
              </div>
              <button style={styles.modalClose} onClick={() => setModuleActif(null)}>
                ×
              </button>
            </div>
            <p style={{ fontSize: '15px', color: '#666666', lineHeight: '1.6', marginBottom: '24px' }}>
              {moduleActif.description}
            </p>
            <h3 style={{ fontSize: '18px', color: '#080E24', marginBottom: '16px', margin: '0 0 16px 0' }}>
              Contenu du module :
            </h3>
            <ul style={styles.contenuList}>
              {moduleActif.contenu.map((item, index) => (
                <li key={index} style={styles.contenuItem}>
                  <span style={styles.contenuIcon}>•</span>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
              <button
                style={{
                  flex: 1,
                  padding: '14px 24px',
                  backgroundColor: '#080E24',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setPdfActif(moduleActif.pdfUrl);
                  setModuleActif(null);
                }}
              >
                📖 Voir le cours PDF
              </button>
              <button
                style={{
                  flex: 1,
                  padding: '14px 24px',
                  backgroundColor: '#C9A445',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
                onClick={() => window.open(moduleActif.pdfUrl, '_blank')}
              >
                ⬇️ Télécharger PDF
              </button>
            </div>
            {!moduleActif.valide && (
              <button
                style={styles.btnValider}
                onClick={() => validerModule(moduleActif.id)}
              >
                Valider ce module
              </button>
            )}
            {moduleActif.valide && (
              <div style={{
                marginTop: '24px',
                padding: '16px',
                backgroundColor: '#f1f8f4',
                borderRadius: '4px',
                textAlign: 'center',
                color: '#4caf50',
                fontWeight: '600'
              }}>
                ✓ Module déjà validé
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal visualiseur PDF */}
      {pdfActif && (
        <div style={styles.modal} onClick={() => setPdfActif(null)}>
          <div style={{ 
            ...styles.modalContent, 
            maxWidth: '1000px',
            width: '95%',
            height: '90vh',
            padding: '0',
            display: 'flex',
            flexDirection: 'column'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{
              padding: '20px',
              borderBottom: '1px solid #e0e0e0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h3 style={{ margin: 0, fontSize: '18px', color: '#080E24' }}>
                Visualiseur PDF
              </h3>
              <button 
                style={{ 
                  fontSize: '28px', 
                  color: '#999999', 
                  cursor: 'pointer', 
                  border: 'none', 
                  backgroundColor: 'transparent',
                  padding: '0'
                }}
                onClick={() => setPdfActif(null)}
              >
                ×
              </button>
            </div>
            <div style={{ flex: 1, overflow: 'auto' }}>
              <iframe
                src={pdfActif}
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Visualiseur PDF"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Formation;
