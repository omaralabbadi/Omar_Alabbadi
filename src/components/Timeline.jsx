import { useRef, memo } from 'react';
import { motion, useInView } from 'framer-motion';
import { timelineData } from '../data/projects';

function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });


  return (
    <section id="experience" className="relative overflow-hidden" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center" ref={ref} style={{ marginBottom: 'var(--gap-lg)' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center" style={{ marginBottom: 'var(--gap-sm)' }}
          >
            <span className="section-label">Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-offwhite"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
          >
            Experience & <span className="italic text-gradient-gold">Expertise</span>
          </motion.h2>
        </div>

        {/* ═══ DESKTOP TIMELINE (Horizontal) ═══ */}
        <div className="hidden lg:block relative">
          {/* Main line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="timeline-line h-[1px] w-full origin-left"
            style={{ willChange: 'transform' }}
          />

          {/* Timeline items */}
          <div className="relative grid grid-cols-3 mt-[-7px]">
            {timelineData.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${i === 1 ? 'items-center' : i === 2 ? 'items-end' : 'items-start'}`}
              >
                {/* Dot */}
                <div className="timeline-dot mb-4" />

                {/* Year badge */}
                <span className="font-display font-light text-gradient-gold mb-1" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)' }}>
                  {item.year}
                </span>
                <span className="font-heading font-bold uppercase tracking-[0.25em] text-offwhite/45 mb-3" style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}>
                  {item.period}
                </span>

                {/* Content card */}
                <div className={`glass-card rounded-sm p-4 max-w-[220px] ${i === 1 ? 'text-center' : i === 2 ? 'text-right' : 'text-left'}`}>
                  <h3 className="font-heading font-semibold text-offwhite mb-1" style={{ fontSize: 'clamp(0.7rem, 1vw, 0.875rem)' }}>
                    {item.title}
                  </h3>
                  <p className="text-gold/70 font-medium mb-1.5" style={{ fontSize: 'clamp(0.7rem, 0.9vw, 0.875rem)' }}>
                    {item.subtitle}
                  </p>
                  <div className="w-6 h-[1px] bg-gold/20 mb-1.5" style={i === 1 ? { margin: '0 auto 0.375rem' } : i === 2 ? { marginLeft: 'auto', marginBottom: '0.375rem' } : {}} />
                  <p className="text-offwhite/70 leading-relaxed" style={{ fontSize: 'clamp(0.85rem, 1.1vw, 1rem)' }}>
                    {item.description}
                  </p>
                  <p className="text-offwhite/45 mt-1 leading-relaxed italic" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 0.9rem)' }}>
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated progress glow */}
          <motion.div
            initial={{ left: '0%', opacity: 0 }}
            animate={inView ? { left: '100%', opacity: [0, 1, 1, 0] } : {}}
            transition={{ delay: 0.3, duration: 2, ease: 'linear' }}
            className="absolute top-[-4px] w-3 h-3 rounded-full bg-gold shadow-[0_0_20px_rgba(201,168,76,0.8)] pointer-events-none"
            style={{ willChange: 'left, opacity' }}
          />
        </div>

        {/* ═══ MOBILE TIMELINE (Vertical) ═══ */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

          <div className="space-y-10">
            {timelineData.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.7 }}
                className="flex gap-6 pl-0"
              >
                {/* Dot */}
                <div className="flex-shrink-0 mt-1">
                  <div className="timeline-dot" style={{ width: '10px', height: '10px' }} />
                </div>

                <div className="glass-card rounded-sm p-4 flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-display text-xl font-light text-gradient-gold">
                      {item.year}
                    </span>
                    <span className="font-heading text-[9px] font-bold uppercase tracking-[0.2em] text-offwhite/45">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-offwhite mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gold/70 text-sm font-medium mb-1">
                    {item.subtitle}
                  </p>
                  <div className="w-6 h-[1px] bg-gold/20 mb-1.5" />
                  <p className="text-offwhite/60 text-xs leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-offwhite/35 text-xs mt-1 leading-relaxed italic">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}

export default memo(Timeline);
