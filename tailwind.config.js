/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        void: {
          700: "#1a2533",
          800: "#121a24",
          900: "#0a1017",
          950: "#05080f",
        },
        neon: {
          300: "#5df2ff",
          400: "#00e5ff",
          500: "#00b8d4",
          600: "#00849a",
        },
        secure: {
          400: "#10b981",
          500: "#059669",
        },
        warn: { 400: "#f59e0b" },
        danger: { 400: "#ef4444" },
      },
      keyframes: {
        blink: {
          "0%,49%": { opacity: 1 },
          "50%,100%": { opacity: 0 },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(0,229,255,0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(0,229,255,0)" },
        },
        flow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        gridPan: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 40px" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        scan: "scan 8s linear infinite",
        pulseGlow: "pulseGlow 2s ease-in-out infinite",
        flow: "flow 3s linear infinite",
        ticker: "ticker 30s linear infinite",
        float: "float 5s ease-in-out infinite",
        gridPan: "gridPan 20s linear infinite",
      },
    },
  },
  plugins: [],
};