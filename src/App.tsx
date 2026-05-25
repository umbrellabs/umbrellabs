import { lazy, Suspense } from 'react';
import { About } from '@/components/about/About';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/footer/Footer';
import { Hero } from '@/components/hero/Hero';
import { Navbar } from '@/components/navbar/Navbar';
import { Process } from '@/components/process/Process';
import { Services } from '@/components/services/Services';

const Technologies = lazy(() => import('@/components/technologies/Technologies').then((mod) => ({ default: mod.Technologies })));
const Portfolio = lazy(() => import('@/components/projects/Portfolio').then((mod) => ({ default: mod.Portfolio })));

function App() {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Suspense fallback={null}>
        <Technologies />
        <Portfolio />
      </Suspense>
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
