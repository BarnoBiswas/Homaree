/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
            colors: {
        bg: "#FAFAF7",
        bgDark: "#111714",

        text: "#111714",
        textDark: "#FAFAF7",

        primary: "#3f7d5b",
        secondary: "#33664a",
        muted: "#677E72",

        input: "#dce5e0",
        inputDark: "#1B221E",

        border: "#dce5e0",
        borderDark: "#2C3933",

        destructive: "#ef4343",
      },
    },
  },
  plugins: [],
}