import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Composants partagés
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Contenus from './components/Contenus';
import Diagnostic from './components/Diagnostic';
import Expertises from './components/Expertises';
import Method from './components/Method';
import References from './components/References';
import Reservation from './components/Reservation';
import Formation from './components/Formation';

// Import des pages d'articles
import Article1 from './components/articles/article1';
import Article2 from './components/articles/article2';
import Article3 from './components/articles/article3';
import Article4 from './components/articles/article4';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/methode" element={<Method />} />
            <Route path="/expertises" element={<Expertises />} />
            <Route path="/references" element={<References />} />
            <Route path="/contenus" element={<Contenus />} />
            
            {/* Routes des articles individuels */}
            <Route path="/contenus/posture-commerciale" element={<Article1 />} />
            <Route path="/contenus/5-techniques-vente-independant" element={<Article2 />} />
            <Route path="/contenus/comment-convaincre-client-sans-forcer" element={<Article3 />} />
            <Route path="/contenus/pourquoi-entrepreneur-narrive-pas-a-vendre" element={<Article4 />} />

            <Route path="/diagnostic" element={<Diagnostic />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;