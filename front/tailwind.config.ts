import type { Config } from "tailwindcss";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navbar: "#001276",
        div:"#D9E0E5",
        circle: "#004D76",
        footer: "#B0BEC5",
        littleCircle: "#f5f5f5",
        button: "#002082",
        landingbg: "#81001F",
        bg: "#f9f2ec",
        text: "#242433"

      },
    },
  },
  darkMode: "class",
  plugins: []
} satisfies Config;
