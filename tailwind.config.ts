
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,jsx}',
    './components/**/*.{ts,tsx,jsx}',
    './app/**/*.{ts,tsx,jsx}',
    './src/**/*.{ts,tsx,jsx}',
	], 
  theme: {
    extend: {
      colors: {
        "neutral-10": "#fff",
        
        gray: {
          "100": "#121212",
          "200": "#070127",
          "300": "#070020",
          "400": "rgba(255, 255, 255, 0.6)",
          "500": "rgba(255, 255, 255, 0.4)",
        },
        "neutral-50": "#c2c2c2",
        "neutral-30": "#ededed",
        "data-analysis-color03": "#563feb",
        lightsteelblue: "#bcc4d6",
        yellow: "#dffe0f",
        slategray: "#727280",
        lawngreen: "#86fe0f",
        "neutral-80": "#7e8492",
        royalblue: "rgba(0, 128, 255, 0.13)",
        lavender: {
          "100": "#d9d4e6",
          "200": "rgba(227, 220, 252, 0.6)",
        },
        "basic-app-landing-color": "#f3edff",
        "neutral-100": "#1d1e25",
      },
    
      spacing: {},
      fontFamily: {
        "body-sub-heading-16-bold": "Inter",
        "text-base-semibold": "Sora",
        satoshi: "Satoshi",
        cormorant: "Cormorant",
        "dm-sans": "'DM Sans'",
      },
      borderRadius: {
        "81xl": "100px",
        "21xl": "40px",
        "12xs-5": "0.5px",
        "9xs-9": "3.9px",
        "base-4": "15.4px",
      },
    },
    fontSize: {
      base: "16px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      lg: "18px",
      "29xl": "48px",
      "10xl": "29px",
      xs: "12px",
      xl: "20px",
      "15xl": "34px",
      "26xl": "45px",
      "37xl": "56px",
      sm: "14px",
      inherit: "inherit",
    },

  },
  corePlugins: {
    preflight: false,
  },
};