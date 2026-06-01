import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { PenTool, Film, Layers, PlayCircle } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Brand Identity',
    description: 'Logos, visual systems, color guides, and brand guidelines built to last.',
  },
  {
    icon: Film,
    title: 'Motion Graphics',
    description: 'Animated logos, explainer videos, social content, and broadcast-ready motion.',
  },
  {
    icon: Layers,
    title: 'Visual Design',
    description: 'Posters, packaging, editorial layouts, and digital assets that demand attention.',
  },
  {
    icon: PlayCircle,
    title: 'Video Editing',
    description: 'Cuts, color grading, and motion overlays for reels, ads, and short films.',
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" ref={ref} className="py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl mb-16 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          What I Do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-card p-8 border border-border hover:border-primary transition-all cursor-pointer group"
                style={{ borderRadius: '4px' }}
              >
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-12 h-12 mb-6 text-primary" />
                </motion.div>

                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {service.title}
                </h3>

                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredIndex === index ? 'auto' : 0,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-muted-foreground overflow-hidden"
                >
                  {service.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
