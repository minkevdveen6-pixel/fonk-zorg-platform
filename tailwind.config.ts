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
        sand: "#EFE2CF",
        cream: "#FBF8F1",
        ink: "#2B211F",
        pine: "#173D38",
        petrol: "#0E4A43",
        coral: "#F1725B",
        peach: "#F7B28B",
        rosewarm: "#B94868",
        nude: "#F4E7DA",
        olive: "#7C8F55",
        lime: "#B7D957",
        yellow: "#F8D676",
        mist: "#E8F1EC",
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
