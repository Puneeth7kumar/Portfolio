export const designSystem = {
  colors: {
    surface: {
      900: "#060712",
      800: "#101325",
      700: "#1a1f3a",
    },
    text: {
      high: "#f8fafc",
      medium: "#cbd5e1",
      low: "#94a3b8",
    },
    brand: {
      blue: "#3b82f6",
      purple: "#8b5cf6",
      pink: "#ec4899",
    },
    gradient: "linear-gradient(120deg, #3b82f6 0%, #8b5cf6 52%, #ec4899 100%)",
  },
  typography: {
    display1: "4.5rem / 1.05",
    display2: "3.5rem / 1.08",
    h1: "2.75rem / 1.12",
    h2: "2.125rem / 1.2",
    h3: "1.625rem / 1.3",
    lead: "1.125rem / 1.8",
    body: "1rem / 1.75",
  },
  spacing: {
    sectionDesktop: "7.5rem",
    sectionMobile: "5.5rem",
    elementLg: "2rem",
    elementMd: "1.5rem",
    elementSm: "1rem",
  },
} as const;
