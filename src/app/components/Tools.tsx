import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const tools = [
  'Adobe After Effects',
  'Adobe Illustrator',
  'Adobe Photoshop',
  'Premiere Pro',
  'Figma',
];

export function Tools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="tools" ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl mb-12 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          My Toolkit
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-24 h-24 mb-4 bg-card rounded flex items-center justify-center border border-border hover:border-primary transition-all" style={{ borderRadius: '4px' }}>
                <div className="w-12 h-12 bg-primary/20 rounded" style={{ borderRadius: '2px' }} />
              </div>
              <p className="text-sm text-muted-foreground">{tool}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
