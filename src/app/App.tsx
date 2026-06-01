import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Reel } from './components/Reel';
import { Tools } from './components/Tools';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Work />
      <Reel />
      <Tools />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
