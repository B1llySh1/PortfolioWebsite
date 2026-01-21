import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyber-Retro Palette
        'retro-purple': {
          900: '#1a0b2e',  // Deep background
          800: '#2d1b4e',  // Primary background
          700: '#3d2663',
          600: '#4d3177',
          500: '#6247aa',
        },
        'neon-pink': {
          500: '#ff006e',  // Primary neon
          400: '#ff1a8c',
          300: '#ff4da6',
          200: '#ff80bf',
        },
        'gameboy-green': {
          900: '#0f380f',  // Dark GameBoy green
          800: '#306230',
          700: '#8bac0f',  // Classic GameBoy accent
          600: '#9bbc0f',
          400: '#b5d645',
          300: '#c7e363',
        },
        'terminal-cyan': {
          500: '#00ffff',
          400: '#00e5e5',
          300: '#33ffff',
        },
        'retro-yellow': {
          500: '#ffff00',
          400: '#ffff33',
        },
        'pixel-black': '#0a0a0a',
        'pixel-white': '#fafafa',
      },

      fontFamily: {
        'pixel': ['"Press Start 2P"', 'monospace'],
        'silkscreen': ['Silkscreen', 'monospace'],
      },

      // Pixel Border Utilities
      spacing: {
        'pixel': '4px',
        'pixel-2': '8px',
        'pixel-3': '12px',
        'pixel-4': '16px',
      },

      // Sharp pixel borders (NO border-radius)
      borderWidth: {
        'pixel': '4px',
        'pixel-thin': '2px',
        'pixel-thick': '8px',
      },

      // Stepped animations for retro feel
      transitionTimingFunction: {
        'retro': 'steps(4, end)',
        'retro-slow': 'steps(8, end)',
      },

      transitionDuration: {
        'retro': '200ms',
        'retro-slow': '400ms',
      },

      // Box shadows for pixel depth
      boxShadow: {
        'pixel': '4px 4px 0px 0px rgba(0, 0, 0, 0.8)',
        'pixel-lg': '8px 8px 0px 0px rgba(0, 0, 0, 0.8)',
        'pixel-neon': '0 0 10px rgba(255, 0, 110, 0.5), 0 0 20px rgba(255, 0, 110, 0.3)',
        'pixel-green': '0 0 10px rgba(155, 188, 15, 0.5)',
      },

      // Animation keyframes
      keyframes: {
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'pixelate-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'blink': 'blink 1s steps(1, end) infinite',
        'glitch': 'glitch 0.3s steps(4) infinite',
        'scanline': 'scanline 8s linear infinite',
        'pixelate-in': 'pixelate-in 0.4s steps(4) forwards',
      },
    },
  },
  plugins: [],
};
export default config;
