import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl leading-none tracking-tighter mb-4">
              Kshitij
              <br />
              Khedkar
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-3"
          >
            <h2
              className="text-2xl md:text-3xl text-muted-foreground"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Graphic Designer & Motion Artist
            </h2>

            <p className="text-lg text-muted-foreground">
              Crafting visuals that move — literally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-6"
          >
            <button
              onClick={scrollToWork}
              className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
              style={{ borderRadius: '2px' }}
            >
              View Work
            </button>

            <button
              className="px-8 py-4 border border-border hover:border-primary transition-all hover:scale-105 flex items-center gap-2"
              style={{ borderRadius: '2px' }}
            >
              <Play className="w-4 h-4" />
              Watch Reel
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative aspect-square overflow-hidden bg-card"
          style={{ borderRadius: '12px' }}
        >
          <img
            src="./profile.jpg"
            alt="Kshitij Khedkar"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
