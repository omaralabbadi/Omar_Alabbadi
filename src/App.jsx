import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

/* Lazy-load below-fold components to reduce TBT */
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const CaseStudy = lazy(() => import('./components/CaseStudy'));
const Timeline = lazy(() => import('./components/Timeline'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

/* ─── Home Page ─── */
function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Services />
        <Projects />
        <Timeline />
        <Contact />
      </Suspense>
    </>
  );
}

/* ─── App ─── */
export default function App() {
  const location = useLocation();

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="grain-overlay">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/project/:slug"
            element={
              <Suspense fallback={null}>
                <CaseStudy />
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
