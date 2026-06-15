import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "./images/logo_jcbo.jpeg";

function Footer() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Helper link component to provide gold hover effect for footer links
  const HoverLink = ({ to, href, children, style: baseStyle }) => {
    const [hover, setHover] = React.useState(false);
    const merged = { ...(baseStyle || {}), color: hover ? '#C9A445' : (baseStyle && baseStyle.color) };
    const common = { style: merged, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) };
    if (to) return <Link to={to} {...common}>{children}</Link>;
    return <a href={href} {...common}>{children}</a>;
  };
  const styles = {
    footer: {
      backgroundColor: "#020B3A",
      color: "#ffffff",
      padding: isMobile ? "40px 20px 20px" : "80px 60px 30px",
    },

    container: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: isMobile ? "30px" : "60px",
      maxWidth: "1280px",
      margin: "0 auto",
    },

    column: {
      flex: isMobile ? "1 1 100%" : "1",
      minWidth: isMobile ? "100%" : "220px",
    },

    logo: {
      width: "90px",
      marginBottom: isMobile ? "15px" : "25px",
    },

    slogan: {
      color: "#D4A437",
      fontSize: isMobile ? "20px" : "25px",
      lineHeight: "1.5",
      marginBottom: isMobile ? "15px" : "25px",
      fontFamily: "serif",
      fontWeight: "400",
    },

    description: {
      color: "#D6D6D6",
      lineHeight: "1.8",
      maxWidth: "300px",
    },

    title: {
      fontSize: isMobile ? "22px" : "30px",
      marginBottom: isMobile ? "15px" : "30px",
      fontFamily: "serif",
      fontWeight: "400",
    },

    list: {
      listStyle: "none",
      padding: 0,
    },

    listItem: {
      marginBottom: "18px",
      color: "#D6D6D6",
    },

    link: {
      color: "#D6D6D6",
      textDecoration: "none",
    },

    paragraph: {
      color: "#D6D6D6",
      lineHeight: "1.8",
      marginBottom: "18px",
    },

    socialContainer: {
      display: "flex",
      justifyContent: isMobile ? "center" : "flex-start",
      gap: "15px",
      marginTop: "25px",
    },

    socialIcon: {
      width: "50px",
      height: "50px",
      border: "1px solid #666",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "18px",
    },

    bottom: {
      borderTop: "1px solid #2C3568",
      marginTop: isMobile ? "40px" : "60px",
      paddingTop: "25px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "20px",
      maxWidth: "1280px",
      marginLeft: "auto",
      marginRight: "auto",
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "center" : "stretch",
      textAlign: isMobile ? "center" : "left",
    },

    footerLinks: {
      display: "flex",
      gap: "30px",
      flexWrap: "wrap",
      justifyContent: isMobile ? "center" : "flex-start",
      width: isMobile ? "100%" : "auto",
    },
  };

  return (
    <footer style={styles.footer}>

      <div style={styles.container}>

        {/* Logo */}
        <div style={styles.column}>
          <img
            src={logo}
            alt="JCBO Conseil"
            loading="lazy"
            width="90"
            height="90"
            style={styles.logo}
          />

          <h2 style={styles.slogan}>
            Accélérez votre croissance.
            <br />
            Révélez votre potentiel.
          </h2>

          <p style={styles.description}>
            Cabinet de conseil, coaching et formation
            pour dirigeants et chefs d'entreprise.
          </p>
        </div>

        {/* Navigation */}
        <div style={styles.column}>
          <h3 style={styles.title}>Navigation</h3>

          <ul style={styles.list}>
            <li style={styles.listItem}>
              <HoverLink to="/" style={styles.link}>Accueil</HoverLink>
            </li>
            <li style={styles.listItem}>
              <HoverLink to="/a-propos" style={styles.link}>À propos</HoverLink>
            </li>
            <li style={styles.listItem}>
              <HoverLink to="/methode" style={styles.link}>Méthode</HoverLink>
            </li>
            <li style={styles.listItem}>
              <HoverLink to="/expertises" style={styles.link}>Expertises</HoverLink>
            </li>
            <li style={styles.listItem}>
              <HoverLink to="/references" style={styles.link}>Références</HoverLink>
            </li>
            <li style={styles.listItem}>
              <HoverLink to="/contenus" style={styles.link}>Contenus</HoverLink>
            </li>
            <li style={styles.listItem}>
              <HoverLink to="/contact" style={styles.link}>Contact</HoverLink>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div style={styles.column}>
          <h3 style={styles.title}>Nos services</h3>

          <ul style={styles.list}>
            <li style={styles.listItem}>
              <HoverLink to="/expertises#conseil-strategique" style={styles.link}>Conseil Stratégique</HoverLink>
            </li>
            <li style={styles.listItem}>
              <HoverLink to="/expertises#coaching-en-ligne" style={styles.link}>Coaching</HoverLink>
            </li>
            <li style={styles.listItem}>
              <HoverLink to="/expertises#seminaire-groupes" style={styles.link}>Formation</HoverLink>
            </li>
            <li style={styles.listItem}>
              <HoverLink to="/diagnostic" style={styles.link}>Diagnostic gratuit</HoverLink>
            </li>
            <li style={styles.listItem}>
              <HoverLink to="/reservation" style={styles.link}>Réserver une séance</HoverLink>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div style={styles.column}>
          <h3 style={styles.title}>Contact</h3>

          <p style={styles.paragraph}>jcboyang@gmail.com</p>
          <p style={styles.paragraph}>+33 6 15 63 09 38</p>

          <p style={styles.paragraph}>
            87 Rue Achille Viadieu 31400 Toulouse,
            France
          </p>

          <p style={styles.paragraph}>
            Horaires : Lun–Ven 9h–18h
          </p>

          <div style={styles.socialContainer}>
            <a href="https://www.facebook.com/profile.php?id=61553882894803" style={styles.socialIcon}>
              <FaFacebookF />
            </a>

            <a href="https://www.linkedin.com/in/jean-christophe-boyang-tsang-business-b16a08a6/?isSelfProfile=false" style={styles.socialIcon}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      {/* Bas footer */}
      <div style={styles.bottom}>

        <p>
          © 2026 JCBO Conseil. Tous droits réservés.
        </p>

        <div style={styles.footerLinks}>
          <HoverLink href="/" style={styles.link}>
            Mentions légales
          </HoverLink>

          <HoverLink href="/" style={styles.link}>
            Politique de confidentialité
          </HoverLink>
        </div>

      </div>

    </footer>
  );
}

export default Footer;