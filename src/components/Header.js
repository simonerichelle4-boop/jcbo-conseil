import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './images/logo_jcbo.jpeg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const liens = [
    { label: 'Accueil', path: '/' },
    { label: 'À propos', path: '/a-propos' },
    { label: 'Méthode', path: '/methode' },
    { label: 'Expertises', path: '/expertises' },
    { label: 'Références', path: '/references' },
    { label: 'Contenus', path: '/contenus' },
    { label: 'Contact', path: '/contact' },        // ← Ajouté ici
  ];

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
      padding: '12px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none',
    },
    logoImg: {
      height: '56px',
      width: '56px',
      objectFit: 'contain',
    },
    logoTitle: {
      fontWeight: 'bold',
      fontSize: '18px',
      color: '#080E24',
      margin: 0,
    },
    logoSubtitle: {
      fontSize: '12px',
      color: '#080E24',
      margin: 0,
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px',
    },
    lien: (isActive) => ({
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
      color: isActive ? '#C9A445' : '#080E24',
      transition: 'color 0.2s',
    }),
    boutons: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    btnDiagnostic: {
      padding: '10px 20px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#080E24',
      backgroundColor: 'transparent',
      border: '1px solid #080E24',
      borderRadius: '12px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    btnReserver: {
      padding: '10px 20px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#ffffff',
      backgroundColor: '#C9A445',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    hamburger: {
      display: 'none',
      fontSize: '24px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#080E24',
    },
    mobileMenu: {
      backgroundColor: '#ffffff',
      borderTop: '1px solid #f0f0f0',
      padding: '16px 40px',
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
          <img src={logo} alt="JCBO Conseil" style={styles.logoImg} />
          <div>
            <p style={styles.logoTitle}>JCBO-Conseil</p>
            <p style={styles.logoSubtitle}>Conseil • Coaching • Formation</p>
          </div>
        </Link>

        {/* HAMBURGER MENU (Mobile only) */}
        <button 
          style={styles.hamburger} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* LIENS DE NAVIGATION (Desktop only) */}
        <nav style={styles.nav}>
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

        {/* BOUTONS (Desktop only) */}
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
      {menuOpen && (
        <div style={styles.mobileMenu}>
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
          <Link to="/diagnostic" style={styles.btnDiagnostic}>
            Diagnostic gratuit
          </Link>
          <Link to="/reservation" style={styles.btnReserver}>
            Réserver →
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;