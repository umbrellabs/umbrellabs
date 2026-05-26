import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--bg-2)',
        'bg-card': 'var(--bg-card)',
        primary: 'var(--red)',
        'primary-bright': 'var(--red-bright)',
        'primary-dark': 'var(--red-dark)',
        text: {
          primary: 'var(--text)',
          secondary: 'var(--text-dim)',
          muted: 'var(--text-muted)',
        },
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
