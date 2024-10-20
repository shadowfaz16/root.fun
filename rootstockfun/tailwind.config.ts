import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        rosa: "#ff74e4",
        naranja: "#ff9404",
        verde: "#79c600",
        morado: "#9e76ff",
        verdeFosfo: "#e0fc1c",
        aqua: "#10fcd4",
      },
    },
  },
  plugins: [],
};
export default config;
