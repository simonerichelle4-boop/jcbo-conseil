import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './images/logo_jcbo.jpeg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  const liens = [
    { label: 'Accueil', path: '/' },
    { label: 'À propos', path: '/a-propos' },
    { label: 'Méthode', path: '/methode' },
    { label: 'Expertises', path: '/expertises' },
    { label: 'Références', path: '/references' },
    { label: 'Contenus', path: '/contenus' },
    { label: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    header: {
      width: '100%',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: isMobile ? '12px 20px' : '12px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none',
    },
    logoImg: {
      height: '48px',
      width: '48px',
      objectFit: 'contain',
    },
    logoTitle: {
      fontWeight: 'bold',
      fontSize: isMobile ? '16px' : '18px',
      color: '#080E24',
      margin: 0,
    },
    logoSubtitle: {
      fontSize: '11px',
      color: '#080E24',
      margin: 0,
    },

    // Navigation Desktop
    nav: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '28px',
    },
    lien: (isActive) => ({
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
      color: isActive ? '#C9A445' : '#080E24',
      transition: 'color 0.2s',
    }),

    // Boutons
    boutons: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    btnDiagnostic: {
      padding: '8px 18px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#080E24',
      backgroundColor: 'transparent',
      border: '1px solid #080E24',
      borderRadius: '8px',
      cursor: 'pointer',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
    },
    btnReserver: {
      padding: '8px 18px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#ffffff',
      backgroundColor: '#C9A445',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
    },

    // Hamburger
    hamburger: {
      display: isMobile ? 'block' : 'none',
      fontSize: '28px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#080E24',
      padding: '5px',
    },

    // Menu Mobile
    mobileMenu: {
      width: '100%',
      backgroundColor: '#ffffff',
      borderTop: '1px solid #f0f0f0',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>

        {/* LOGO */}
        <Link to="/" style={styles.logoContainer}>
          <img src={logo} alt="JCBO Conseil" width="56" height="56" style={styles.logoImg} />
          <div>
            <p style={styles.logoTitle}>JCBO Conseil</p>
            <p style={styles.logoSubtitle}>Conseil • Coaching • Formation</p>
          </div>
        </Link>

        {/* HAMBURGER */}
        <button 
          style={styles.hamburger} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu de navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* NAV DESKTOP */}
        <nav role="navigation" aria-label="Navigation principale" style={styles.nav}>
          {liens.map((lien) => (
            <Link
              key={lien.path}
              to={lien.path}
              style={styles.lien(location.pathname === lien.path)}
            >
              {lien.label}
            </Link>
          ))}
        </nav>

        {/* BOUTONS DESKTOP */}
        <div style={styles.boutons}>
          <Link to="/diagnostic" style={styles.btnDiagnostic}>
            Diagnostic gratuit
          </Link>
          <Link to="/reservation" style={styles.btnReserver}>
            Réserver →
          </Link>
        </div>

      </div>

      {/* MENU MOBILE */}
      {menuOpen && isMobile && (
        <nav role="navigation" aria-label="Menu mobile" style={styles.mobileMenu}>
          {liens.map((lien) => (
            <Link
              key={lien.path}
              to={lien.path}
              onClick={() => setMenuOpen(false)}
              style={styles.lien(location.pathname === lien.path)}
            >
              {lien.label}
            </Link>
          ))}
          <Link to="/diagnostic" style={styles.btnDiagnostic} onClick={() => setMenuOpen(false)}>
            Diagnostic gratuit
          </Link>
          <Link to="/reservation" style={styles.btnReserver} onClick={() => setMenuOpen(false)}>
            Réserver →
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;