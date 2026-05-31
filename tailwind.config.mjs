import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-fixed-dim": "#bac8dc",
        "on-primary-fixed": "#00201c",
        "on-tertiary-fixed-variant": "#3e4948",
        "primary-container": "#008378",
        "on-surface": "#191c1d",
        tertiary: "#535e5d",
        "surface-variant": "#e1e3e4",
        "on-tertiary": "#ffffff",
        primary: "#00685e",
        error: "#ba1a1a",
        "on-primary-fixed-variant": "#005049",
        "error-container": "#ffdad6",
        "inverse-on-surface": "#eff1f2",
        "surface-bright": "#f8fafb",
        "on-secondary": "#ffffff",
        "surface-container-low": "#f2f4f5",
        "on-background": "#191c1d",
        "primary-fixed-dim": "#68d9ca",
        "on-secondary-fixed": "#0f1c2c",
        surface: "#f8fafb",
        "surface-dim": "#d8dadb",
        "surface-container-high": "#e6e8e9",
        "surface-container": "#eceeef",
        "secondary-container": "#d3e1f6",
        "on-tertiary-container": "#f3fffd",
        "on-surface-variant": "#3d4947",
        "inverse-primary": "#68d9ca",
        secondary: "#525f71",
        "surface-container-lowest": "#ffffff",
        "on-error-container": "#93000a",
        "on-error": "#ffffff",
        "on-secondary-fixed-variant": "#3a4859",
        "tertiary-fixed": "#d9e5e3",
        "surface-tint": "#006a61",
        "outline-variant": "#bcc9c6",
        outline: "#6d7a77",
        "on-secondary-container": "#566475",
        "primary-fixed": "#85f5e6",
        "secondary-fixed": "#d6e4f9",
        "on-tertiary-fixed": "#131d1d",
        "on-primary-container": "#f4fffc",
        background: "#f8fafb",
        "tertiary-fixed-dim": "#bdc9c7",
        "on-primary": "#ffffff",
        "tertiary-container": "#6b7775",
        "inverse-surface": "#2e3132",
        "surface-container-highest": "#e1e3e4"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        gutter: "clamp(16px, 2vw, 24px)",
        "element-gap": "clamp(12px, 1.5vw, 16px)",
        "margin-x": "clamp(16px, 4vw, 32px)",
        "section-padding": "clamp(48px, 8vw, 96px)",
        "container-max": "1200px"
      },
      fontFamily: {
        "label-md": ["Plus Jakarta Sans"],
        "body-md": ["Plus Jakarta Sans"],
        "headline-md": ["Plus Jakarta Sans"],
        "display-lg-mobile": ["Plus Jakarta Sans"],
        "body-lg": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"],
        "display-lg": ["Plus Jakarta Sans"]
      },
      fontSize: {
        "label-md": ["clamp(12px, 0.9vw, 14px)", { lineHeight: "1.2", letterSpacing: "0.02em", fontWeight: "600" }],
        "body-md": ["clamp(15px, 1.1vw, 16px)", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["clamp(20px, 2.2vw, 24px)", { lineHeight: "1.2", fontWeight: "700" }],
        "display-lg-mobile": ["clamp(32px, 5vw, 40px)", { lineHeight: "1.2", fontWeight: "800" }],
        "body-lg": ["clamp(16px, 1.4vw, 18px)", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-lg": ["clamp(30px, 3.6vw, 42px)", { lineHeight: "1.1", fontWeight: "800" }],
        "display-lg": ["clamp(40px, 5vw, 56px)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }]
      }
    }
  },
  plugins: [forms, containerQueries]
};
