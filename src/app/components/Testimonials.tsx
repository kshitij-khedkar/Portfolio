import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const testimonials = [
  {
    quote: 'Working with Kshitij was an absolute pleasure. His attention to detail and creative vision brought our brand to life in ways we never imagined.',
    author: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
  },
  {
    quote: 'The motion graphics work exceeded our expectations. Every frame was crafted with precision and artistic flair that truly captured our message.',
    author: 'Michael Chen',
    role: 'Marketing Director, Creative Co.',
  },
  {
    quote: 'His design work transformed our visual identity completely. The results spoke for themselves—our engagement increased by 300%.',
    author: 'Emily Rodriguez',
    role: 'Founder, Brand Studio',
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" ref={ref} className="py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl mb-16 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Kind Words
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-6"
            >
              <p className="text-2xl md:text-3xl italic leading-relaxed" style={{ fontFamily: 'var(--font-heading)' }}>
                "{testimonials[current].quote}"
              </p>
              <div>
                <p className="text-lg mb-1">{testimonials[current].author}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === index ? 'bg-primary w-8' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
