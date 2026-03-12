import type { Variants } from "framer-motion";

export const colors = {
  stone: "#F7F5F0",
  stoneDeep: "#EFECE6",
  textPrimary: "#1A1A1A",
  textSecondary: "#6B6560",
  textTertiary: "#A09A93",
  accent: "#2C2C2C",
  camel: "#B8A48E",
  keyword: "#C4897C",
  white: "#FFFFFF",
} as const;

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export const navItems = [
  { label: "Portfolio", href: "/work" },
  { label: "Philosophie", href: "/about" },
  { label: "Karriere", href: "/karriere" },
];

export const services = [
  {
    title: "Patientengewinnung",
    description:
      "Google Ads, Meta, TikTok — gezielt für ästhetische Eingriffe. Wir bauen Paid-Media-Strukturen, die qualifizierte Patientenanfragen generieren und planbar skalieren.",
  },
  {
    title: "Brand Identity",
    description:
      "Markenidentität, die auf den ersten Blick Vertrauen und Kompetenz ausstrahlt. Von der visuellen Positionierung bis zur konsistenten Praxiskommunikation.",
  },
  {
    title: "Website & Conversion Design",
    description:
      "Praxis-Websites und Landingpages, die Besucher zu Patienten machen. Jedes Element ist auf Vertrauen, Ästhetik und Anfragen optimiert.",
  },
  {
    title: "Social Media & Content",
    description:
      "Instagram, TikTok, YouTube — strategischer Aufbau von Sichtbarkeit und Expertise für ästhetische Chirurgen und Kliniken. Content, der Patienten überzeugt.",
  },
  {
    title: "SEO & Lokale Sichtbarkeit",
    description:
      "Organische Reichweite für Suchbegriffe, die Patienten tatsächlich eingeben. Lokale SEO, Bewertungsmanagement und Content-Strategie für nachhaltige Sichtbarkeit.",
    isLast: true,
  },
];

export const projects = [
  {
    name: "Dr. Müller Ästhetik",
    type: "Ästhetische Chirurgie · Patientengewinnung & Brand Identity",
    description:
      "Kompletter Markenaufbau und Paid-Media-Struktur für eine etablierte ästhetische Klinik. Von der Positionierung bis zu monatlich 80+ qualifizierten Patientenanfragen.",
    metric: "+340%",
    metricLabel: "Patientenanfragen",
    filter: ["Performance", "Branding"],
  },
  {
    name: "Clinic Beauté",
    type: "Schönheitschirurgie · Social Media & Brand Repositioning",
    description:
      "Repositionierung und digitale Sichtbarkeit für eine Boutique-Klinik. Instagram von 2.000 auf 24.000 Follower in 6 Monaten — und eine Warteliste mit 3 Monaten Vorlauf.",
    metric: "12x",
    metricLabel: "Social Reichweite",
    filter: ["Branding", "Digital"],
  },
  {
    name: "Praxis Dr. Vogt",
    type: "Ästhetische Medizin · Performance Marketing",
    description:
      "Von 0 auf planbare Patientenströme. Lokale Google Ads und Meta-Kampagnen für eine Praxis für ästhetische Medizin in drei deutschen Städten.",
    metric: "€2.1M",
    metricLabel: "Umsatz in 9 Monaten",
    filter: ["Performance", "Digital"],
  },
];

export const additionalProjects = [
  {
    name: "Aesthetica Lounge",
    type: "Kosmetische Chirurgie · Website & SEO",
    description:
      "Kompletter Website-Relaunch und SEO-Strategie für eine Premium-Klinik. Organischer Traffic verdreifacht, Bewertungsschnitt von 3.8 auf 4.9 verbessert.",
    metric: "+280%",
    metricLabel: "Organischer Traffic",
    filter: ["Branding", "Digital"],
  },
  {
    name: "Institut Elara",
    type: "Ästhetische Medizin · Launch & Brand Identity",
    description:
      "Markteinführung und Markenidentität für eine neue Premium-Klinik. Von der Namensgebung bis zur ersten skalierbaren Patientenkampagne.",
    metric: "€1.4M",
    metricLabel: "Umsatz im 1. Jahr",
    filter: ["Performance", "Branding"],
  },
  {
    name: "Dr. Lindner Praxis",
    type: "Schönheitschirurgie · Content & Social Media",
    description:
      "Content-Strategie und Social-Media-Aufbau für einen renommierten Schönheitschirurgen. Positionierung als Thought Leader mit messbarer Patientengewinnung.",
    metric: "4.2x",
    metricLabel: "ROAS in Q2",
    filter: ["Branding", "Digital"],
  },
];

export const testimonials = [
  {
    quote:
      "Wir hatten vorher keinen klaren Plan für unser Marketing — alles war zufällig. Anderius hat unsere Praxis als Marke neu positioniert und uns ein System gebaut, das monatlich konstant qualifizierte Patienten bringt. In 8 Monaten hat sich unser Umsatz verdoppelt.",
    name: "Dr. med. Katharina Vogt",
    role: "Fachärztin für Plastische Chirurgie",
  },
  {
    quote:
      "Was mich überzeugt hat: Anderius versteht, wie Patienten im ästhetischen Bereich Entscheidungen treffen. Keine generischen Marketing-Strategien — sondern gezielt auf unsere Zielgruppe abgestimmt. Unsere digitale Präsenz hat sich in 6 Monaten komplett gewandelt.",
    name: "Dr. Michael Sommer",
    role: "Praxisinhaber, Clinic Beauté",
  },
  {
    quote:
      "In unserem Bereich ist Vertrauen alles. Anderius hat verstanden, wie man als Chirurg authentisch kommuniziert, ohne aufdringlich zu wirken. Die Ergebnisse sprechen für sich — mehr Anfragen, bessere Qualität, und Patienten, die wirklich zu uns passen.",
    name: "Dr. med. Lena Fischer",
    role: "Leitende Ärztin, Dr. Müller Ästhetik",
  },
];

export const teamMembers = [
  { name: "Maren Vogt", role: "Gründerin & Strategie" },
  { name: "Jonas Keller", role: "Performance Lead" },
  { name: "Lina Bauer", role: "Brand Direction" },
  { name: "Erik Sommer", role: "Analytics & Daten" },
  { name: "Nora Engel", role: "Creative Direction" },
  { name: "Felix Richter", role: "Growth Engineering" },
];

export const clientNames = [
  "Dr. Müller Ästhetik",
  "Clinic Beauté",
  "Praxis Dr. Vogt",
  "Aesthetica Lounge",
  "Institut Elara",
  "Dr. Lindner Praxis",
];

export const processSteps = [
  {
    number: "01",
    title: "Erstberatung",
    description:
      "Ein kostenloses 30-Minuten-Gespräch — unverbindlich und ohne Pitch. Wir hören zu, stellen die richtigen Fragen und geben Ihnen eine ehrliche Einschätzung Ihrer aktuellen Situation.",
  },
  {
    number: "02",
    title: "Strategie & Konzept",
    description:
      "Wir analysieren Ihre Praxis, Ihr Umfeld und Ihre Zielgruppe. Daraus entsteht ein klarer Fahrplan: positioniert, differenziert und messbar.",
  },
  {
    number: "03",
    title: "Umsetzung & Wachstum",
    description:
      "Wir setzen um, messen, optimieren — und Sie sehen die Ergebnisse. Keine langen Reports. Klare Zahlen, klare Fortschritte.",
  },
];

export const principles = [
  {
    title: "Vertrauen als Fundament",
    description:
      "Patienten wählen ihren Chirurgen nicht wegen der lautesten Werbung — sondern wegen Vertrauen. Wir bauen Marken, die dieses Vertrauen auf den ersten Blick kommunizieren.",
  },
  {
    title: "Spezialisierung statt Breite",
    description:
      "Wir arbeiten ausschließlich mit ästhetischen Chirurgen und Kliniken. Diese Fokussierung macht uns zu dem Partner, der Ihre Branche, Ihre Patienten und Ihre Herausforderungen wirklich versteht.",
  },
];
