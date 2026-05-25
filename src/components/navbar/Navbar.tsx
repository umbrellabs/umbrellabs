import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { navItems } from '@/lib/constants';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled ? 'border-b border-white/10 bg-bg/70 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Main navigation">
        <a href="#home" className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide">
          <span className="inline-block h-8 w-8 rounded-xl bg-primary-gradient" aria-hidden />
          Umbrella Labs
        </a>

        <ul className="hidden items-center gap-7 text-sm text-text-secondary lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="transition hover:text-white" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-primary-gradient px-5 py-3 text-sm font-semibold text-white shadow-glow lg:inline-flex"
        >
          Start Project
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg border border-white/15 p-2 text-white lg:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="border-t border-white/10 bg-bg/95 px-5 pb-6 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-2 pt-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-2 text-text-secondary transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary-gradient px-5 py-3 text-sm font-semibold text-white"
            >
              Start Project
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
