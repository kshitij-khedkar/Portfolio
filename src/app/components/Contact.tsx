import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-muted/30"
    >
      <div className="max-w-[1440px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2
            className="text-5xl md:text-7xl lg:text-8xl leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Let's Build
            <br />
            Something Great.
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Open to freelance, collaborations, and full-time roles.
          </p>

          <motion.a
            href="mailto:kzhitix@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground text-lg mt-8 hover:bg-primary/90 transition-all"
            style={{ borderRadius: '2px' }}
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-6 pt-12"
          >
            <a
              href="https://www.instagram.com/kzhitix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wide flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/kshitij-khedkar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wide flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
