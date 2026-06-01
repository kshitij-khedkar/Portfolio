import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const tools = [
  {
    name: 'Adobe After Effects',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg',
  },
  {
    name: 'Adobe Illustrator',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
  },
  {
    name: 'Adobe Photoshop',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
  },
  {
    name: 'Premiere Pro',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg',
  },
  {
    name: 'Figma',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  },
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
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div
                className="w-24 h-24 mb-4 bg-card rounded flex items-center justify-center border border-border hover:border-primary transition-all"
                style={{ borderRadius: '4px' }}
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <p className="text-sm text-muted-foreground">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
