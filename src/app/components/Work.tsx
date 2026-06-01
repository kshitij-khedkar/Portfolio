import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Brand System Redesign',
    category: 'Branding',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Logo', 'Brand System', 'Guidelines'],
    year: '2024',
    span: 'lg:col-span-2',
  },
  {
    title: 'Motion Logo Animation',
    category: 'Motion',
    thumbnail: 'https://images.unsplash.com/photo-1716471330463-f475b00f0506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Motion Graphics', 'After Effects'],
    year: '2024',
  },
  {
    title: 'Editorial Poster Series',
    category: 'Print',
    thumbnail: 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Poster', 'Typography'],
    year: '2023',
  },
  {
    title: 'Social Campaign',
    category: 'Social Media',
    thumbnail: 'https://images.unsplash.com/photo-1516131206008-dd041a9764fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Social', 'Campaign'],
    year: '2023',
  },
  {
    title: 'Product Animation',
    category: 'Motion',
    thumbnail: 'https://images.unsplash.com/photo-1647675975434-864e1c3fc98d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Animation', '2D'],
    year: '2023',
  },
  {
    title: 'Complete Brand Identity',
    category: 'Branding',
    thumbnail: 'https://images.unsplash.com/photo-1635870224948-01dd421f1cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Brand', 'Identity', 'Packaging'],
    year: '2022',
    span: 'lg:col-span-2',
  },
];

const categories = ['All', 'Branding', 'Motion', 'Print', 'Social Media'];

export function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" ref={ref} className="py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl mb-8 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Selected Work
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm tracking-wide uppercase transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border hover:border-primary'
              }`}
              style={{ borderRadius: '2px' }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-card cursor-pointer ${project.span || ''}`}
              style={{ borderRadius: '4px' }}
            >
              <div className="aspect-video relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{project.category} • {project.year}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-primary/20 border border-primary/30"
                          style={{ borderRadius: '2px' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-primary" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
