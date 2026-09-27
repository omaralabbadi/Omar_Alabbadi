import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, MapPin, Calendar, User, Briefcase } from 'lucide-react';
import { projects } from '../data/projects';

const fadeUp = {
  initial: { opacity: 0, y: 35 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

export default function CaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-offwhite mb-4">Project Not Found</h1>
          <Link to="/" className="text-gold hover:underline">← Back Home</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ═══════════════════════════════════════
         HERO
         ═══════════════════════════════════════ */}
      <section className="relative min-h-[60vh] lg:min-h-[85vh] flex items-end overflow-hidden">
        {/* Cover Image */}
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            src={project.coverImage}
            alt={`${project.client} — ${project.title}`}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/40 to-transparent" />
        </div>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute top-28 lg:top-32 left-0 z-20 container-custom"
        >
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              setTimeout(() => {
                const el = document.querySelector('#projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center gap-2 text-offwhite/60 hover:text-gold transition-colors duration-300 font-heading uppercase tracking-[0.15em] font-medium"
            style={{ fontSize: 'clamp(0.6rem, 0.9vw, 0.75rem)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Content */}
        <div className="container-custom relative z-10" style={{ paddingBottom: 'var(--gap-lg)' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 border border-gold/30 font-heading font-bold uppercase tracking-[0.25em] text-gold" style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}>
                {project.year}
              </span>
              <span className="px-3 py-1 border border-white/10 font-heading font-medium uppercase tracking-[0.2em] text-offwhite/60" style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}>
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display font-light text-offwhite leading-[0.95] mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}>
              {project.title}
            </h1>

            {/* Client */}
            <p className="font-heading font-light text-gold/80 tracking-wide" style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.25rem)' }}>
              {project.client}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
         OVERVIEW BAR
         ═══════════════════════════════════════ */}
      <section className="border-y border-white/5 bg-charcoal/30">
        <div className="container-custom" style={{ paddingTop: 'var(--gap-md)', paddingBottom: 'var(--gap-md)' }}>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 'var(--gap-md)' }}
          >
            <div className="flex items-start gap-3">
              <User className="w-4 h-4 text-gold/60 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-heading font-bold uppercase tracking-[0.2em] text-offwhite/45 mb-1" style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}>
                  Role
                </p>
                <p className="text-offwhite/90" style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)' }}>{project.role}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-gold/60 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-heading font-bold uppercase tracking-[0.2em] text-offwhite/45 mb-1" style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}>
                  Duration
                </p>
                <p className="text-offwhite/90" style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)' }}>{project.dateRange}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Briefcase className="w-4 h-4 text-gold/60 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-heading font-bold uppercase tracking-[0.2em] text-offwhite/45 mb-1" style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}>
                  Client
                </p>
                <p className="text-offwhite/90" style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)' }}>{project.client}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold/60 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-heading font-bold uppercase tracking-[0.2em] text-offwhite/45 mb-1" style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}>
                  Associated With
                </p>
                <p className="text-offwhite/90" style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)' }}>{project.associatedWith}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
         EDITORIAL CONTENT
         ═══════════════════════════════════════ */}
      <div className="container-custom">
        <div className="max-w-3xl mx-auto" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)', display: 'flex', flexDirection: 'column', gap: 'var(--section-py)' }}>

          {/* ── THE CHALLENGE ── */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4" style={{ marginBottom: 'var(--gap-md)' }}>
              <span className="font-heading font-bold uppercase tracking-[0.3em] text-gold" style={{ fontSize: 'clamp(0.55rem, 0.8vw, 0.688rem)' }}>
                01
              </span>
              <div className="flex-1 h-[1px] bg-gold/15" />
            </div>
            <h2 className="font-display font-light text-offwhite leading-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: 'var(--gap-md)' }}>
              The Challenge
            </h2>
            <p className="text-offwhite/80 leading-[1.9] font-light" style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.35rem)' }}>
              {project.challenge}
            </p>
          </motion.section>

          {/* ── THE EXECUTION ── */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4" style={{ marginBottom: 'var(--gap-md)' }}>
              <span className="font-heading font-bold uppercase tracking-[0.3em] text-gold" style={{ fontSize: 'clamp(0.55rem, 0.8vw, 0.688rem)' }}>
                02
              </span>
              <div className="flex-1 h-[1px] bg-gold/15" />
            </div>
            <h2 className="font-display font-light text-offwhite leading-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: 'var(--gap-md)' }}>
              The Execution
            </h2>
            <p className="text-offwhite/80 leading-[1.9] font-light" style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.35rem)' }}>
              {project.execution}
            </p>
          </motion.section>

          {/* ── THE RESULT ── */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4" style={{ marginBottom: 'var(--gap-md)' }}>
              <span className="font-heading font-bold uppercase tracking-[0.3em] text-gold" style={{ fontSize: 'clamp(0.55rem, 0.8vw, 0.688rem)' }}>
                03
              </span>
              <div className="flex-1 h-[1px] bg-gold/15" />
            </div>
            <h2 className="font-display font-light text-offwhite leading-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: 'var(--gap-md)' }}>
              The Result
            </h2>
            <div className="border-l-2 border-gold/30 bg-charcoal/20" style={{ padding: 'clamp(1.25rem, 2vw, 2.5rem)' }}>
              <p className="text-offwhite/90 leading-[1.9] font-light italic font-display" style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.35rem)' }}>
                {project.result}
              </p>
            </div>
          </motion.section>

          {/* ── SKILLS USED ── */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4" style={{ marginBottom: 'var(--gap-md)' }}>
              <span className="font-heading font-bold uppercase tracking-[0.3em] text-gold" style={{ fontSize: 'clamp(0.55rem, 0.8vw, 0.688rem)' }}>
                04
              </span>
              <div className="flex-1 h-[1px] bg-gold/15" />
            </div>
            <h2 className="font-display font-light text-offwhite leading-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: 'var(--gap-md)' }}>
              Skills & Expertise
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="px-4 py-2 border border-gold/15 font-heading font-medium uppercase tracking-[0.15em] text-gold/80 hover:border-gold/40 hover:text-gold hover:bg-gold/5 transition-all duration-300 cursor-default"
                  style={{ fontSize: 'clamp(0.55rem, 0.8vw, 0.688rem)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      {/* ═══════════════════════════════════════
         PROJECT GALLERY
         ═══════════════════════════════════════ */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="container-custom">
          <div className="max-w-4xl mx-auto" style={{ paddingBottom: 'var(--section-py)' }}>
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4" style={{ marginBottom: 'var(--gap-md)' }}>
                <span className="font-heading font-bold uppercase tracking-[0.3em] text-gold" style={{ fontSize: 'clamp(0.55rem, 0.8vw, 0.688rem)' }}>
                  05
                </span>
                <div className="flex-1 h-[1px] bg-gold/15" />
              </div>
              <h2 className="font-display font-light text-offwhite leading-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: 'var(--gap-md)' }}>
                Project Documentation
              </h2>
              <div className="columns-1 md:columns-2 gap-4 space-y-4">
                {project.gallery.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative w-full rounded-sm overflow-hidden break-inside-avoid"
                  >
                    <img
                      src={img}
                      alt={`${project.title} documentation ${i + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════
         NAVIGATION
         ═══════════════════════════════════════ */}
      <section className="border-t border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2">
            {/* Prev */}
            <div className={`pr-8 border-r border-white/5 ${!prevProject ? 'opacity-30 pointer-events-none' : ''}`} style={{ paddingTop: 'var(--gap-md)', paddingBottom: 'var(--gap-md)' }}>
              {prevProject ? (
                <Link
                  to={`/project/${prevProject.slug}`}
                  className="group flex flex-col"
                >
                  <span className="flex items-center gap-2 font-heading font-bold uppercase tracking-[0.2em] text-offwhite/45 group-hover:text-gold/60 transition-colors mb-3" style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}>
                    <ArrowLeft className="w-3 h-3" />
                    Previous Project
                  </span>
                  <span className="font-display font-light text-offwhite/80 group-hover:text-offwhite transition-colors" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>
                    {prevProject.title}
                  </span>
                  <span className="font-heading text-xs text-offwhite/45 mt-1">
                    {prevProject.client}
                  </span>
                </Link>
              ) : (
                <div>
                  <span className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-offwhite/30">
                    Previous Project
                  </span>
                </div>
              )}
            </div>

            {/* Next */}
            <div className={`pl-8 text-right ${!nextProject ? 'opacity-30 pointer-events-none' : ''}`} style={{ paddingTop: 'var(--gap-md)', paddingBottom: 'var(--gap-md)' }}>
              {nextProject ? (
                <Link
                  to={`/project/${nextProject.slug}`}
                  className="group flex flex-col items-end"
                >
                  <span className="flex items-center gap-2 font-heading font-bold uppercase tracking-[0.2em] text-offwhite/45 group-hover:text-gold/60 transition-colors mb-3" style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}>
                    Next Project
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <span className="font-display font-light text-offwhite/80 group-hover:text-offwhite transition-colors" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>
                    {nextProject.title}
                  </span>
                  <span className="font-heading text-xs text-offwhite/45 mt-1">
                    {nextProject.client}
                  </span>
                </Link>
              ) : (
                <div>
                  <span className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-offwhite/30">
                    Next Project
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.article>
  );
}
