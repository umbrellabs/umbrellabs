import { useEffect, useState } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled ? 'bg-black/95' : 'bg-[#0a0a0ae0]'}`} aria-label="Main">
        <a href="#" className="nav-logo" aria-label="Umbrella Labs">
          <img
            alt="Umbrella logo"
            width="24"
            height="24"
            style={{ width: '24px', height: '24px' }}
            src="/logo.png"
          />
          <span>Umbrella Labs</span>
        </a>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          {/* <a href="#services" className="nav-link">Pipeline</a> */}
          <a href="#projects" className="nav-link">Domains</a>
          <a href="#process" className="nav-link">Pipeline</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <a
          href="https://t.me/umbrella_labs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="font-mono text-[0.65rem] text-primary tracking-[0.1em] no-underline px-3 py-2 border border-primary-dark transition-all duration-300 hover:text-primary-bright hover:border-primary-bright hover:shadow-[0_0_10px_var(--red-glow)]"
        >
          @UMBRELLA_LABS
        </a>
      </nav>
      {/* Warning Tape under Navbar */}
      <div className="warning-tape fixed left-0 right-0 z-[999] top-[56px] md:top-[64px]" />
    </>
  );
}
