/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#050810',
          surface: '#0a1020',
          panel: '#0d1525',
          card: '#111b30',
          border: '#1a2842',
          'border-bright': '#233655',
          text: '#e2e8f0',
          muted: '#64748b',
          dim: '#475569',
          glow: '#00f0ff',
          primary: '#00d4ff',
          accent: '#0ea5e9',
          success: '#22c55e',
          warning: '#f59e0b',
          danger: '#ef4444',
          critical: '#dc2626',
          gold: '#fbbf24',
        },
        threat: {
          low: '#22c55e',
          medium: '#f59e0b',
          high: '#fb923c',
          critical: '#ef4444',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-right': 'slideRight 0.4s ease-out',
        'blink': 'blink 1s step-end infinite',
        'data-flow': 'dataFlow 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'flicker': 'flicker 3s linear infinite',
        'ping-slow': 'pingSlow 3s cubic-bezier(0,0,0.2,1) infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        dataFlow: {
          '0%': { strokeDashoffset: '20' },
          '100%': { strokeDashoffset: '0' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '41.99%': { opacity: '1' },
          '42%': { opacity: '0.5' },
          '43%': { opacity: '1' },
          '44.99%': { opacity: '0.3' },
          '45%': { opacity: '1' },
        },
        pingSlow: {
          '75%, 100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 8px rgba(0, 212, 255, 0.3)',
        'glow': '0 0 16px rgba(0, 212, 255, 0.4)',
        'glow-lg': '0 0 32px rgba(0, 212, 255, 0.5)',
        'glow-danger': '0 0 16px rgba(239, 68, 68, 0.4)',
        'glow-success': '0 0 16px rgba(34, 197, 94, 0.4)',
        'glow-warning': '0 0 16px rgba(245, 158, 11, 0.4)',
      },
    },
  },
  plugins: [],
};
