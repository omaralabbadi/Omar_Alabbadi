import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-xl shadow-[0_1px_0_rgba(201,168,76,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' });
              else navigate('/');
            }}
            className="relative z-50 flex items-center gap-1 group"
          >
            <span className="font-display text-2xl lg:text-3xl font-light tracking-wider text-offwhite group-hover:text-gold transition-colors duration-500">
              O
            </span>
            <span className="w-[1px] h-5 bg-gold-muted mx-0.5 group-hover:bg-gold transition-colors duration-500" />
            <span className="font-display text-2xl lg:text-3xl font-light tracking-wider text-offwhite group-hover:text-gold transition-colors duration-500">
              A
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="gold-underline font-heading text-[13px] font-medium uppercase tracking-[0.15em] text-offwhite/80 hover:text-offwhite transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => handleNavClick('#contact')}
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 border border-gold/30 text-gold font-heading text-[12px] font-semibold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-500 rounded-none"
          >
            Let's Talk
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1px] bg-offwhite origin-center transition-colors"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-4 h-[1px] bg-gold origin-center"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1px] bg-offwhite origin-center transition-colors"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-navy/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-4xl font-light text-offwhite hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                onClick={() => handleNavClick('#contact')}
                className="mt-4 px-8 py-3 border border-gold/40 text-gold font-heading text-sm font-semibold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-500"
              >
                Let's Talk
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
