import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Play } from 'lucide-react';

export function Reel() {
const ref = useRef(null);
const isInView = useInView(ref, { once: true, amount: 0.3 });

return ( <section id="reel" ref={ref} className="py-24 px-6"> <div className="max-w-[1440px] mx-auto">
<motion.div
initial={{ opacity: 0, y: 30 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.6 }}
className="text-center mb-12"
>
<h2
className="text-4xl md:text-5xl mb-3"
style={{ fontFamily: 'var(--font-heading)' }}
>
Motion Reel </h2>

```
      <p className="text-muted-foreground text-lg">
        2024 — 2025
      </p>
    </motion.div>

    <motion.a
      href="https://www.youtube.com/watch?v=5Qjm7knYp2o"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative aspect-video bg-card rounded overflow-hidden group cursor-pointer block"
      style={{ borderRadius: '4px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30" />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-all"
        >
          <Play className="w-8 h-8 text-white ml-1" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent">
        <p className="text-sm text-muted-foreground">
          Click to play showreel
        </p>
      </div>
    </motion.a>
  </div>
</section>
```

);
}
