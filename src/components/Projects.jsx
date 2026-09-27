import { useRef, memo } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

function Projects() {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth > 1024 ? window.innerWidth * 0.45 : window.innerWidth * 0.85;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth > 1024 ? window.innerWidth * 0.45 : window.innerWidth * 0.85;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div className="container-custom" ref={sectionRef}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between" style={{ marginBottom: 'var(--gap-lg)' }}>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="section-label" style={{ marginBottom: 'var(--gap-sm)' }}
            >
              Selected Work
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light text-offwhite"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
            >
              Projects & <span className="italic text-gradient-gold">Case Studies</span>
            </motion.h2>
          </div>

          {/* Navigation Arrows */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex items-center gap-4 mt-6 lg:mt-0"
          >
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-offwhite/50 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-offwhite/50 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
              aria-label="Next project"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Projects Carousel - Full Bleed */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-12"
        style={{ 
          paddingLeft: 'max(clamp(1.5rem, 4vw, 4rem), calc((100vw - 1400px) / 2))',
          paddingRight: 'max(clamp(1.5rem, 4vw, 4rem), calc((100vw - 1400px) / 2))',
          gap: 'var(--gap-md)' 
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.2 + i * 0.1,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] snap-center lg:snap-start"
          >
            <Link
              to={`/project/${project.slug}`}
              className="group block relative overflow-hidden rounded-sm aspect-[4/3] lg:aspect-[16/10] w-full"
            >
              {/* Image */}
              <img
                src={project.coverImage}
                alt={`${project.client} — ${project.title}`}
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />

              {/* Gold overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Top tag */}
              <div className="absolute top-4 left-4 lg:top-5 lg:left-5 flex flex-wrap items-center gap-1.5 lg:gap-2 pr-12">
                <span className="px-1.5 py-0.5 lg:px-3 lg:py-1 bg-navy/70 backdrop-blur-sm border border-gold/15 text-[8px] lg:text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-gold whitespace-nowrap">
                  {project.year}
                </span>
                <span className="px-1.5 py-0.5 lg:px-3 lg:py-1 bg-navy/70 backdrop-blur-sm border border-white/5 text-[8px] lg:text-[10px] font-heading font-medium uppercase tracking-[0.15em] text-offwhite/70 whitespace-nowrap">
                  {project.category.split('/')[0].trim()}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-8">
                <p className="font-heading text-[8px] lg:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E5C158] drop-shadow-md mb-1 lg:mb-2">
                  {project.client}
                </p>
                <h3 className="font-display font-light text-offwhite mb-0 lg:mb-2 leading-tight" style={{ fontSize: 'clamp(1.1rem, 3.5vw, 2rem)' }}>
                  {project.title}
                </h3>
                <p className="text-offwhite/70 leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 hidden md:block" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)' }}>
                  {project.oneLiner}
                </p>
              </div>

              {/* Arrow */}
              <div className="absolute top-3 right-3 lg:top-5 lg:right-5 w-8 h-8 lg:w-12 lg:h-12 rounded-full border border-white/10 flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 group-hover:border-gold/40 group-hover:bg-gold/5 transform lg:translate-x-4 lg:group-hover:translate-x-0 transition-all duration-500 bg-navy/30 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
                <ArrowUpRight className="w-3 h-3 lg:w-5 lg:h-5 text-gold" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default memo(Projects);
