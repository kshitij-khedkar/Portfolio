import { motion } from 'motion/react';

export function Marquee() {
  const items = [
    'Brand Identity',
    'Motion Graphics',
    'Visual Development',
    'Type Design',
    '2D Animation',
    'Art Direction',
    'Social Media Creatives',
    'Video Editing',
  ];

  const duplicatedItems = [...items, ...items];

  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <motion.div
        animate={{
          x: [0, -50 + '%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        className="flex gap-8 whitespace-nowrap"
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="text-2xl md:text-4xl tracking-wide uppercase text-muted-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {item}
            <span className="mx-8 text-primary">•</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
