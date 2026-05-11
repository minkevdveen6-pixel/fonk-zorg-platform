import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#F1CFAE",
        cream: "#FFF8F2",
        ink: "#2B211F",
        pine: "#173D38",
        petrol: "#0E4A43",
        coral: "#F36B57",
        peach: "#FFB287",
        rosewarm: "#C83E6A",
        nude: "#E9D7F2",
        lilac: "#D8B8EA",
        violet: "#7E4B9E",
        blush: "#F7C4D8",
        olive: "#708A45",
        lime: "#A9D95A",
        yellow: "#FFD86A",
        mist: "#DDEFE4",
        night: "#102A2B",
        hotpink: "#F1725B",
        orange: "#F6A45D",
        blue: "#2F6F68",
        purple: "#173D38",
        green: "#28D17C",
      },
      boxShadow: {
        soft: "0 18px 54px rgba(16, 42, 43, 0.10)",
        premium: "0 22px 64px rgba(43, 33, 31, 0.13)",
        neon: "0 18px 54px rgba(241, 114, 91, 0.10)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
