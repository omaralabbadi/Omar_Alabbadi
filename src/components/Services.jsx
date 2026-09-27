import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, CalendarCheck, Building2 } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Artistic Project Management',
    items: [
      'Planning and managing artistic projects from concept to completion.',
      'Developing project timelines and managing budgets.',
      'Negotiating and contracting with artists and performers.',
      'Curating and scheduling artistic performances and program flow.',
      'Coordinating with artists, creative teams, and stakeholders.',
      'Overseeing project execution and ensuring quality standards.',
      'Managing project resources and resolving operational challenges.',
      'Ensuring project objectives are delivered on time and within scope.',
    ],
  },
  {
    icon: CalendarCheck,
    title: 'Event Coordination',
    items: [
      'Planning and coordinating events from preparation to execution.',
      'Managing event logistics, schedules, and venue setup.',
      'Coordinating artist bookings and entertainment arrangements.',
      'Coordinating with vendors, suppliers, artists, and event staff.',
      'Supervising on-site operations during events.',
      'Ensuring a seamless experience for guests and participants.',
      'Solving on-site issues efficiently to ensure successful event delivery.',
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative bg-charcoal/30" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <div className="text-center" style={{ marginBottom: 'var(--gap-lg)' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center" style={{ marginBottom: 'var(--gap-sm)' }}
          >
            <span className="section-label">Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-offwhite"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
          >
            What I <span className="italic text-gradient-gold">Bring</span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 max-w-5xl mx-auto" style={{ gap: 'var(--gap-lg)' }}>
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.2 + i * 0.15,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-card animated-border rounded-sm group cursor-default"
                style={{ padding: 'clamp(1.25rem, 2vw, 2.5rem)' }}
              >
                {/* Icon */}
                <div className="w-12 h-12 2xl:w-14 2xl:h-14 rounded-full border border-gold/15 flex items-center justify-center mb-5 group-hover:border-gold/40 group-hover:shadow-[0_0_30px_rgba(201,168,76,0.1)] transition-all duration-500">
                  <Icon className="w-6 h-6 text-gold/70 group-hover:text-gold transition-colors duration-500" />
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-offwhite mb-4 tracking-tight" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.35rem)' }}>
                  {service.title}
                </h3>

                {/* Divider */}
                <div className="w-12 h-[1px] bg-gold/30 mb-4 group-hover:w-20 transition-all duration-700" />

                {/* Items */}
                <ul className="space-y-3">
                  {service.items.map((item, index) => (
                    <li
                      key={index}
                      className="text-offwhite/60 flex items-start gap-3 group-hover:text-offwhite/80 transition-colors duration-300"
                      style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)' }}
                    >
                      <span className="w-1 h-1 mt-2 rounded-full bg-gold/40 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
    </section>
  );
}
