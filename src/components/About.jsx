import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Globe } from 'lucide-react';

/* ─── Count-Up Number ─── */
function CountUp({ value, suffix = '', label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="text-center lg:text-left">
      <div className="flex items-baseline justify-center lg:justify-start gap-1">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-display font-light text-gradient-gold"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}
        >
          {inView ? value : '0'}
        </motion.span>
        {suffix && (
          <span className="font-display font-light text-gold/60" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>{suffix}</span>
        )}
      </div>
      <p className="font-heading font-bold uppercase tracking-[0.25em] text-offwhite/50 mt-2" style={{ fontSize: 'clamp(0.55rem, 0.8vw, 0.625rem)' }}>
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative overflow-hidden" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-charcoal/20 hidden lg:block" />

      <div className="container-custom relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 items-start" style={{ gap: 'var(--gap-lg)' }}>
          {/* ─── LEFT: Text Content ─── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="section-label" style={{ marginBottom: 'var(--gap-sm)' }}
            >
              About
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light text-offwhite" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', marginBottom: 'var(--gap-sm)' }}
            >
              Crafting Events
              <br />
              <span className="text-gradient-gold italic">That Resonate</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-offwhite/70 leading-relaxed max-w-lg" style={{ fontSize: 'clamp(0.85rem, 1.1vw, 1.125rem)', marginBottom: 'var(--gap-sm)' }}
            >
              Event & Project Management professional with 4+ years of experience
              delivering seamless, high-impact events across entertainment, cultural,
              and corporate sectors.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-offwhite/60 leading-relaxed max-w-lg" style={{ fontSize: 'clamp(0.85rem, 1.1vw, 1rem)', marginBottom: 'var(--gap-md)' }}
            >
              I specialize in two worlds — bringing together the creative chaos of
              artistic productions with the precision of corporate event delivery.
            </motion.p>

            {/* Specializations */}
            <div style={{ marginBottom: 'var(--gap-md)', display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)' }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold">
                  <span className="text-lg">🎭</span>
                </div>
                <div>
                  <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-offwhite mb-1">
                    Artistic Project Management
                  </h3>
                  <p className="text-offwhite/70 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)' }}>
                    Music festivals, live performances, cultural programming, artist relations
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.75, duration: 0.7 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold">
                  <span className="text-lg">🏢</span>
                </div>
                <div>
                  <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-offwhite mb-1">
                    Event Coordination
                  </h3>
                  <p className="text-offwhite/70 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)' }}>
                    End-to-end logistics, venue operations, technical production, stakeholder management
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Education & Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="border-t border-b border-white/5 py-5 space-y-4"
            >
              <div className="flex items-center gap-3 text-offwhite/60">
                <GraduationCap className="w-4 h-4 text-gold/60" />
                <div>
                  <p className="text-offwhite/90" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)' }}>Bachelor's Degree — Ports & Marine Transportation</p>
                  <p className="text-xs text-offwhite/50 mt-0.5">King Abdulaziz University, 2018</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-offwhite/60">
                <Globe className="w-4 h-4 text-gold/60" />
                <p style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)' }}>
                  <span className="text-offwhite/90">Arabic</span>{' '}
                  <span className="text-offwhite/60">(Native)</span>
                  <span className="text-gold/30 mx-2">·</span>
                  <span className="text-offwhite/90">English</span>{' '}
                  <span className="text-offwhite/60">(Professional)</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* ─── RIGHT: Visual + Stats ─── */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative w-full lg:ml-8 flex items-center justify-center min-h-[400px]">
                {/* Subtle background glow to blend the image beautifully */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-gold/5 blur-[80px] rounded-full pointer-events-none" />

                <img
                  src="https://res.cloudinary.com/dgqequjgk/image/upload/v1790540446/about_img_gpjivv.png"
                  alt="Omar - Event Manager"
                  className="relative z-10 w-[105%] max-w-none h-auto object-contain max-h-[700px] drop-shadow-2xl -ml-2 lg:-ml-4"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)'
                  }}
                  loading="lazy"
                />

                {/* Decorative floating elements */}
                <motion.div
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                  className="absolute top-10 -right-4 w-32 h-32 border border-gold/10 rounded-full z-0 pointer-events-none"
                />
                <motion.div
                  animate={{ y: [15, -15, 15] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                  className="absolute bottom-10 -left-4 w-20 h-20 bg-gold/5 rounded-full z-0 pointer-events-none"
                />
              </div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-3 lg:ml-8" style={{ gap: 'var(--gap-sm)', marginTop: 'var(--gap-md)' }}
            >
              <CountUp value="4" suffix="+" label="Years Exp." />
              <CountUp value="4" label="Major Projects" />
              <CountUp value="2" label="Sectors Covered" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
