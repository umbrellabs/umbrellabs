export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 md:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-2 md:items-end">
        <div className="h-full md:flex-col md:justify-between">
          <div className="h-full">
            <p className="text-lg font-semibold">Umbrella Labs</p>
            <p className="mt-2 text-sm text-text-secondary">Building with Heart ❤️</p>
          </div>
          <div style={{ marginTop: -20 }}>
            {/* <p className="mt-4 text-xs text-text-secondary">Built </p> */}
            <p className="mt-4 text-xs text-text-secondary">© 2026 Umbrella Labs</p>
          </div>
        </div>

        <div className="md:text-right">
          <nav aria-label="Footer links" className="flex flex-col flex-wrap gap-4 text-sm text-text-secondary md:justify-end">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
            <a href="#stack" className="transition hover:text-white">Stack</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
