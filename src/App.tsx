import { lazy, Suspense } from 'react';
import { About } from '@/components/about/About';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/footer/Footer';
import { Hero } from '@/components/hero/Hero';
import { Navbar } from '@/components/navbar/Navbar';
import { Process } from '@/components/process/Process';
// import { Services } from '@/components/services/Services';
import { Marquee } from '@/components/ui/Marquee';
import { StatsTicker } from '@/components/ui/StatsTicker';
import { Comparison } from '@/components/ui/Comparison';

const Technologies = lazy(() =>
  import('@/components/technologies/Technologies').then((mod) => ({ default: mod.Technologies }))
);
const Portfolio = lazy(() =>
  import('@/components/projects/Portfolio').then((mod) => ({ default: mod.Portfolio }))
);

const marqueeTools = [
  "vite",
  'React',
  'Next.js',
  'Node.js',
  'Supabase',
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'Spring Boot',
  'Tauri',
  'Docker',
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "React Native",
  "Expo",
] as const;

function App() {
  return (
    <div className="scanlines noise min-h-screen bg-bg text-text-primary">
      <Navbar />
      <Hero />
      
      {/* Tech Stack Sliding Banner */}
      <Marquee items={marqueeTools} />

      {/* Stats Counter Section */}
      <section className="py-12 bg-bg-2 border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4 px-5 text-center md:px-8">
          <div>
            <StatsTicker end={10} suffix="x" />
            <div className="mt-2 font-mono text-[0.5rem] tracking-[0.15em] text-text-secondary uppercase">
              Faster Delivery
            </div>
          </div>
          <div>
            <StatsTicker end={24} suffix="/7" />
            <div className="mt-2 font-mono text-[0.5rem] tracking-[0.15em] text-text-secondary uppercase">
              AI Agents Working
            </div>
          </div>
          <div>
            <StatsTicker end={4} suffix="" />
            <div className="mt-2 font-mono text-[0.5rem] tracking-[0.15em] text-text-secondary uppercase">
              Domains
            </div>
          </div>
        </div>
      </section>

      <div className="red-line" />

      <About />
      
      <div className="red-line" />

      {/* <Services /> */}

      <div className="red-line" />

      <Suspense fallback={null}>
        <Portfolio />
      </Suspense>

      <Comparison />

      <div className="red-line" />

      <Process />

      <div className="red-line" />

      <Suspense fallback={null}>
        <Technologies />
      </Suspense>

      <div className="red-line" />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
