import { Mail, ArrowUp } from 'lucide-react';

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-navy">
      <div className="container-custom" style={{ paddingTop: 'var(--gap-md)', paddingBottom: 'var(--gap-md)' }}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display font-light tracking-wider text-offwhite" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}>
              O
            </span>
            <span className="w-[1px] h-5 bg-gold-muted mx-0.5" />
            <span className="font-display font-light tracking-wider text-offwhite" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}>
              A
            </span>
          </div>

          {/* Center links */}
          <div className="flex items-center gap-6 text-offwhite/60">
            <a
              href="mailto:Omar.3bb@gmail.com"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold/30 hover:text-gold transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/omar-alabbadi-"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold/30 hover:text-gold transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Right: copyright + back to top */}
          <div className="flex items-center gap-6">
              <p className="font-heading text-offwhite/50 tracking-wider" style={{ fontSize: 'clamp(0.55rem, 0.8vw, 0.688rem)' }}>
              © {new Date().getFullYear()} Omar Alabbadi
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-offwhite/60 hover:border-gold/30 hover:text-gold transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
