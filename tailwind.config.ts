import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#06070A',
        surface: '#0F1117',
        primary: '#5B8CFF',
        secondary: '#7A5CFA',
        highlight: '#4ADEDE',
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A8B8',
        },
      },
      boxShadow: {
        glow: '0 0 50px rgba(91, 140, 255, 0.25)',
        soft: '0 10px 30px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #5B8CFF 0%, #7A5CFA 100%)',
        'accent-glow': 'linear-gradient(90deg, rgba(91,140,255,.25), rgba(74,222,222,.15))',
        'radial-mesh':
          'radial-gradient(circle at 20% 20%, rgba(91,140,255,0.2), transparent 40%), radial-gradient(circle at 80% 10%, rgba(122,92,250,0.18), transparent 45%), radial-gradient(circle at 50% 80%, rgba(74,222,222,0.12), transparent 35%)',
      },
    },
  },
  plugins: [],
};

export default config;
