import { useEffect, useRef, memo } from 'react';
import { motion } from 'framer-motion';

/* ─── Gold Particle Canvas (Optimized: max 40, 30fps) ─── */
const GoldParticles = memo(function GoldParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    let lastFrameTime = 0;
    const frameInterval = 1000 / 30; // 30fps cap

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.15 - 0.1;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.fadeSpeed = Math.random() * 0.003 + 0.001;
        this.growing = Math.random() > 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.growing) {
          this.opacity += this.fadeSpeed;
          if (this.opacity >= 0.6) this.growing = false;
        } else {
          this.opacity -= this.fadeSpeed;
          if (this.opacity <= 0.05) this.reset();
        }
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${this.opacity})`;
        ctx.fill();
        // glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${this.opacity * 0.15})`;
        ctx.fill();
      }
    }

    // Max 40 particles
    const count = Math.min(40, Math.floor((canvas.width * canvas.height) / 25000));
    for (let i = 0; i < count; i++) particles.push(new Particle());

    const loop = (timestamp) => {
      animId = requestAnimationFrame(loop);

      // Throttle to 30fps
      const delta = timestamp - lastFrameTime;
      if (delta < frameInterval) return;
      lastFrameTime = timestamp - (delta % frameInterval);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => { p.update(); p.draw(); });
    };
    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ willChange: 'auto' }}
      aria-hidden="true"
    />
  );
});

/* ─── Letter Stagger ─── */
function StaggeredText({ text, className, delay = 0 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, rotateX: -40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: delay + i * 0.04,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: 'bottom', willChange: 'transform, opacity' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

function Hero() {
  const scrollToWork = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Particles */}
      <GoldParticles />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 pt-16 lg:pt-20 pb-32 lg:pb-0">
        <div className="max-w-4xl">

          {/* Name */}
          <h1 className="mb-4 lg:mb-8">
            <StaggeredText
              text="OMAR"
              className="block font-display text-hero font-light text-offwhite"
              delay={0.4}
            />
            <StaggeredText
              text="ALABBADI"
              className="block font-display text-hero font-light text-gold"
              delay={0.7}
            />
          </h1>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 lg:w-32 h-[1px] bg-gold origin-left mb-6 lg:mb-10"
            style={{ willChange: 'transform' }}
          />

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-heading text-hero-sub font-medium text-offwhite/90 tracking-wide">
              Event Coordinator
            </p>
            <p className="font-heading text-hero-sub font-medium text-offwhite/90 tracking-wide">
              & Project Manager{' '}
              <span className="text-gold/80 font-light italic font-display text-[1.1em]">
                (Artistic Works)
              </span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 lg:mt-8 text-offwhite/70 font-light max-w-lg leading-relaxed"
            style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)' }}
          >
            Delivering Seamless Experiences
            <br />
            From Music Festivals to Corporate Events
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 mt-8 lg:mt-14"
          >
            <button
              onClick={scrollToWork}
              className="group flex items-center gap-3 px-8 py-4 bg-gold text-navy font-heading text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-gold-light transition-all duration-500"
            >
              View My Work
              <svg
                className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <button
              onClick={scrollToContact}
              className="group flex items-center gap-3 px-8 py-4 border border-offwhite/20 text-offwhite font-heading text-[13px] font-medium uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-all duration-500"
            >
              Let's Talk
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-gold/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-gold/60 to-transparent"
          style={{ willChange: 'transform' }}
        />
      </motion.div>
    </section>
  );
}

export default memo(Hero);
