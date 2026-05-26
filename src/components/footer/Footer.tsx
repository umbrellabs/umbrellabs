export function Footer() {
  return (
    <footer className="py-8 bg-bg border-t border-border">
      <div className="section-inner max-w-7xl mx-auto flex flex-col gap-6">
        {/* Warning tape band */}
        <div className="warning-tape mb-4" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo + branding */}
          <div className="flex items-center gap-2">
            {/* <img
              alt="Umbrella logo"
              loading="lazy"
              width="16"
              height="16"
              style={{ width: '16px', height: '16px' }}
              src="/logo-white.svg"
            /> */}
            <span className="font-mono text-[0.55rem] text-text-muted tracking-[0.08em]">
              UMBRELLA LABS © 2025
            </span>
          </div>

          {/* Operational systems status */}
          <span className="font-mono text-[0.5rem] text-text-muted tracking-[0.08em] uppercase">
            2025–2026 — ALL SYSTEMS OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
}
