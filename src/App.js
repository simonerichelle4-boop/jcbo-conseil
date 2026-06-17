import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';

const Footer = lazy(() => import('./components/Footer'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Contenus = lazy(() => import('./components/Contenus'));
const Diagnostic = lazy(() => import('./components/Diagnostic'));
const Expertises = lazy(() => import('./components/Expertises'));
const Method = lazy(() => import('./components/Method'));
const References = lazy(() => import('./components/References'));
const Reservation = lazy(() => import('./components/Reservation'));
const Formation = lazy(() => import('./components/Formation'));

const Article1 = lazy(() => import('./components/articles/article1'));
const Article2 = lazy(() => import('./components/articles/article2'));
const Article3 = lazy(() => import('./components/articles/article3'));
const Article4 = lazy(() => import('./components/articles/article4'));

const pageLoaderStyle = {
  minHeight: '45vh',
  display: 'grid',
  placeItems: 'center',
  color: '#080E24',
};

function App() {
  return (
    <Router>
      <div>
        <Header />

        <main>
          <Suspense fallback={<div style={pageLoaderStyle}>Chargement...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/methode" element={<Method />} />
              <Route path="/expertises" element={<Expertises />} />
              <Route path="/references" element={<References />} />
              <Route path="/contenus" element={<Contenus />} />
              <Route path="/contenus/posture-commerciale" element={<Article1 />} />
              <Route path="/contenus/5-techniques-vente-independant" element={<Article2 />} />
              <Route path="/contenus/comment-convaincre-client-sans-forcer" element={<Article3 />} />
              <Route path="/contenus/pourquoi-entrepreneur-narrive-pas-a-vendre" element={<Article4 />} />
              <Route path="/diagnostic" element={<Diagnostic />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/formation" element={<Formation />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
