import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// ⬇️ Replace with your Formspree form ID (e.g. "xrgvqkly")
const FORMSPREE_ID = 'xykraorq';

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const formData = new FormData(e.target);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        const data = await res.json();
        setErrorMsg(data?.errors?.map((err) => err.message).join(', ') || 'Something went wrong.');
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative bg-navy" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2" style={{ gap: 'var(--gap-lg)' }}>
          {/* ─── LEFT: Info ─── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="section-label" style={{ marginBottom: 'var(--gap-sm)' }}
            >
              Contact
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light text-offwhite"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', marginBottom: 'var(--gap-md)' }}
            >
              Let's Work <br />
              <span className="italic text-gradient-gold">Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-offwhite/70 leading-relaxed max-w-md"
              style={{ fontSize: 'clamp(0.85rem, 1.1vw, 1.125rem)', marginBottom: 'var(--gap-md)' }}
            >
              Whether you're planning a large-scale festival, a corporate event,
              or an artistic production — I'm here to make it happen.
            </motion.p>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="flex flex-col" style={{ gap: 'var(--gap-sm)' }}
            >
              <a
                href="mailto:Omar.3bb@gmail.com"
                className="group flex items-center gap-4 text-offwhite/75 hover:text-gold transition-colors duration-300"
              >
                <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold/30 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading font-bold uppercase tracking-[0.2em] text-offwhite/45 mb-0.5" style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}>
                    Email
                  </p>
                  <p style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)' }}>Omar.3bb@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+966599951899"
                className="group flex items-center gap-4 text-offwhite/75 hover:text-gold transition-colors duration-300"
              >
                <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold/30 transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading font-bold uppercase tracking-[0.2em] text-offwhite/45 mb-0.5" style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}>
                    Phone
                  </p>
                  <p style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)' }}>+966 599 951 899</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/omar-alabbadi-"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-offwhite/75 hover:text-gold transition-colors duration-300"
              >
                <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold/30 transition-colors duration-300">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading font-bold uppercase tracking-[0.2em] text-offwhite/45 mb-0.5" style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}>
                    LinkedIn
                  </p>
                  <p style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)' }}>Omar Alabbadi</p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* ─── RIGHT: Form ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Subtle card background */}
            <div className="glass-card rounded-sm" style={{ padding: 'clamp(1.25rem, 2.5vw, 3rem)', transform: 'none' }}>
              <h3 className="font-heading font-semibold uppercase tracking-[0.15em] text-offwhite/80" style={{ fontSize: 'clamp(0.7rem, 1vw, 0.875rem)', marginBottom: 'var(--gap-md)' }}>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 'var(--gap-md)' }}>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-heading font-bold uppercase tracking-[0.2em] text-offwhite/45 mb-2"
                    style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="form-input"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-heading font-bold uppercase tracking-[0.2em] text-offwhite/45 mb-2"
                    style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className="form-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-heading font-bold uppercase tracking-[0.2em] text-offwhite/45 mb-2"
                    style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    className="form-input resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className={`group w-full flex items-center justify-center gap-3 py-3 font-heading font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                    status === 'success'
                      ? 'bg-green-600/20 border border-green-500/30 text-green-400 cursor-default'
                      : status === 'error'
                        ? 'bg-red-600/20 border border-red-500/30 text-red-400 cursor-default'
                        : status === 'sending'
                          ? 'bg-gold/60 text-navy cursor-wait'
                          : 'bg-gold text-navy hover:bg-gold-light'
                  }`}
                >
                  {status === 'success' ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : status === 'error' ? (
                    <>
                      <AlertCircle className="w-4 h-4" />
                      {errorMsg || 'Failed to send'}
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
