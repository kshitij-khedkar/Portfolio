import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-square bg-card rounded overflow-hidden"
            style={{ borderRadius: '4px' }}
          >
            <img
              src="https://images.unsplash.com/photo-1610834651684-35c299a31164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Designer workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Design is my language. Motion is my voice.
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a graphic designer and motion artist passionate about creating visual experiences that resonate.
              With a keen eye for detail and a love for storytelling through design, I transform ideas into captivating
              visuals that move audiences—both emotionally and literally.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Intern
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Experience
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  20+
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Projects
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  100%
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Dedication
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
