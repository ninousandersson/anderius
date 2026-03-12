"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import ProcessCard from "@/components/ProcessCard";
import ServiceRow from "@/components/ServiceRow";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import Button from "@/components/Button";
import {
  projects,
  services,
  testimonials,
  processSteps,
  fadeUpVariant,
  staggerContainer,
} from "@/lib/constants";

/* ── helpers ─────────────────────────────────────── */
function getInitials(name: string) {
  return name
    .split(" ")
    .filter((w) => !["Dr.", "med.", "Dr"].includes(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function truncate(text: string, len = 90) {
  return text.length > len ? text.slice(0, len).trimEnd() + "…" : text;
}

/* ── single floating social card ────────────────── */
const AVATAR_COLORS = ["#6B8FAE", "#8FAEC4", "#5A7D9A"];

const CARD_CONFIG = [
  {
    t: testimonials[0],
    likes: 23,
    stars: 5,
    top: 0,
    left: 120,
    rotate: -1.8,
    zIndex: 2,
    floatY: 5,
    floatX: 3,
    dur: 7.5,
    delay: 0,
    opacity: 1,
    avatarColor: AVATAR_COLORS[0],
  },
  {
    t: testimonials[1],
    likes: 41,
    stars: 5,
    top: 170,
    left: 190,
    rotate: 1.5,
    zIndex: 1,
    floatY: 4,
    floatX: -3,
    dur: 8.8,
    delay: 1.2,
    opacity: 0.92,
    avatarColor: AVATAR_COLORS[1],
  },
  {
    t: testimonials[2],
    likes: 17,
    stars: 5,
    top: 340,
    left: 130,
    rotate: -1.0,
    zIndex: 3,
    floatY: 6,
    floatX: 2,
    dur: 9.2,
    delay: 2.1,
    opacity: 1,
    avatarColor: AVATAR_COLORS[2],
  },
];

function SocialCard({
  t,
  likes,
  stars,
  top,
  left,
  rotate,
  zIndex,
  floatY,
  floatX,
  dur,
  delay,
  opacity,
  avatarColor,
}: (typeof CARD_CONFIG)[number]) {
  const initials = getInitials(t.name);

  return (
    <motion.a
      href="#testimonials"
      style={{
        position: "absolute",
        top,
        left,
        zIndex,
        rotate,
        opacity,
        width: 232,
        display: "block",
        cursor: "pointer",
        textDecoration: "none",
      }}
      animate={{
        y: [0, -floatY, floatY * 0.4, -floatY * 0.6, 0],
        x: [0, floatX, -floatX * 0.5, floatX * 0.3, 0],
      }}
      transition={{
        duration: dur,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      whileHover={{ scale: 1.03 }}
    >
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: 18,
          padding: "14px 16px 12px",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.04)",
          transition: "box-shadow 0.2s ease",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              backgroundColor: avatarColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.05em",
                fontFamily: "var(--font-sans)",
              }}
            >
              {initials}
            </span>
          </div>
          <div style={{ minWidth: 0 }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#1A1A1A",
                fontFamily: "var(--font-sans)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {t.name}
            </p>
            <p
              style={{
                fontSize: 10,
                color: "#A09A93",
                marginTop: 1,
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {t.role}
            </p>
          </div>
        </div>

        {/* Stars */}
        <div style={{ marginBottom: 6, display: "flex", gap: 2 }}>
          {Array.from({ length: stars }).map((_, i) => (
            <span key={i} style={{ color: "#6B8FAE", fontSize: 10 }}>★</span>
          ))}
        </div>

        {/* Quote */}
        <p
          style={{
            fontSize: 12,
            color: "#6B6560",
            lineHeight: 1.65,
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
          }}
        >
          {truncate(t.quote, 88)}
        </p>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            paddingTop: 9,
            borderTop: "1px solid rgba(0,0,0,0.05)",
          }}
        >
          <span
            style={{
              fontSize: 11,
              color: "#A09A93",
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
            }}
          >
            <span style={{ color: "#C4897C" }}>♥</span> {likes}
          </span>
          <span
            style={{
              fontSize: 10,
              color: "#6B8FAE",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            ✓ Verifiziert
          </span>
        </div>
      </div>
    </motion.a>
  );
}

/* ── floating cards container ────────────────────── */
function HeroSocialCards() {
  return (
    <div
      className="hidden lg:block"
      style={{ position: "relative", height: 530, minWidth: 400 }}
    >
      {CARD_CONFIG.map((cfg) => (
        <SocialCard key={cfg.t.name} {...cfg} />
      ))}
    </div>
  );
}

/* ── page ────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-stone" style={{ paddingTop: 160, paddingBottom: 112 }}>
        <div className="container-narrow" style={{ maxWidth: 1200 }}>
          <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] items-center gap-8">
            {/* Left — copy */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                className="block font-sans text-[12px] uppercase tracking-[0.12em] text-text-tertiary mb-8"
                style={{ fontWeight: 400 }}
              >
                Marketing-Agentur für ästhetische Chirurgie
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.4, 0.25, 1] }}
                className="font-serif text-text-primary"
                style={{
                  fontSize: "clamp(38px, 5vw, 64px)",
                  lineHeight: 1.12,
                  letterSpacing: "-0.02em",
                }}
              >
                <span style={{ display: "block", whiteSpace: "nowrap" }}>Ihre Kunst verdient</span>
                <span style={{ whiteSpace: "nowrap" }}>
                  das{" "}
                  <span style={{ color: "var(--color-keyword)", fontStyle: "italic" }}>
                    richtige Publikum.
                  </span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16, ease: [0.25, 0.4, 0.25, 1] }}
                className="font-sans text-[17px] text-text-secondary leading-[1.7] mt-6"
                style={{ maxWidth: 500, fontWeight: 400 }}
              >
                Anderius verbindet strategisches Branding mit gezieltem Digital-Marketing — für Schönheitschirurgen und Kliniken, die nicht nur sichtbar, sondern unverzichtbar werden wollen.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24, ease: [0.25, 0.4, 0.25, 1] }}
                className="flex flex-wrap gap-4 mt-10"
              >
                <Button href="/contact">Erstberatung vereinbaren</Button>
                <Button href="/work" variant="secondary">Portfolio ansehen</Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="font-sans text-[13px] text-text-tertiary font-light mt-10"
              >
                Vertrauen von 30+ Praxen und Kliniken in 5 Ländern
              </motion.p>
            </div>

            {/* Right — floating social cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center justify-center"
            >
              <HeroSocialCards />
            </motion.div>
          </div>
        </div>
      </section>

      {/* DER WEG */}
      <section className="bg-stone-deep section-padding">
        <div className="container-narrow" style={{ maxWidth: 1200 }}>
          <SectionLabel label="Der Weg" centered />

          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-serif text-text-primary text-center mb-14"
            style={{ fontSize: "clamp(28px, 4vw, 38px)", letterSpacing: "-0.02em" }}
          >
            In drei Schritten zu{" "}
            <span style={{ color: "var(--color-keyword)" }}>messbarem Wachstum.</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10"
          >
            {processSteps.map((step) => (
              <ProcessCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mt-12"
          >
            <Button href="/contact">Kostenlose Erstberatung &rarr;</Button>
          </motion.div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="bg-stone section-padding">
        <div className="container-narrow" style={{ maxWidth: 1200 }}>
          <SectionLabel label="Leistungen" />

          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-serif text-text-primary mb-12"
            style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-0.02em" }}
          >
            Was wir für Sie aufbauen.
          </motion.h2>

          <div>
            {services.map((service, i) => (
              <ServiceRow
                key={service.title}
                title={service.title}
                description={service.description}
                isLast={i === services.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AUSGEWÄHLTE PROJEKTE */}
      <section className="bg-stone-deep section-padding">
        <div className="container-narrow" style={{ maxWidth: 1200 }}>
          <SectionLabel label="Ausgewählte Projekte" />

          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-serif text-text-primary mb-12"
            style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-0.02em" }}
          >
            Ergebnisse, die für sich sprechen.
          </motion.h2>

          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              type={project.type}
              description={project.description}
              metric={project.metric}
              metricLabel={project.metricLabel}
            />
          ))}

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8"
          >
            <Link
              href="/work"
              className="group inline-block font-sans text-[14px] font-medium text-text-primary relative"
            >
              Alle Projekte ansehen &rarr;
              <span
                className="absolute bottom-[-4px] left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "var(--color-keyword)" }}
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-stone section-padding">
        <div className="container-narrow" style={{ maxWidth: 1200 }}>
          <SectionLabel label="Stimmen unserer Kunden" centered />

          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-serif text-text-primary text-center mb-12"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", letterSpacing: "-0.02em" }}
          >
            Was Ärzte über die Zusammenarbeit sagen.
          </motion.h2>

          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={t.name}
                quote={t.quote}
                name={t.name}
                role={t.role}
                isLast={i === testimonials.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-text-primary text-center section-padding">
        <div className="container-narrow" style={{ maxWidth: 1200 }}>
          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-serif text-stone"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", lineHeight: 1.15 }}
          >
            Bereit, Ihre Praxis sichtbar zu machen?
          </motion.h2>

          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-sans text-[16px] text-text-tertiary mx-auto mt-5 leading-[1.7]"
            style={{ maxWidth: 480, fontWeight: 400 }}
          >
            Vereinbaren Sie ein kostenloses 30-Minuten-Gespräch. Kein Pitch, kein Druck.
          </motion.p>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-block font-sans text-[13px] uppercase tracking-[0.1em] font-medium text-text-primary bg-stone rounded-lg transition-colors duration-300 hover:bg-camel"
              style={{ padding: "16px 36px" }}
            >
              Erstberatung vereinbaren &rarr;
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="font-sans text-[14px] font-light text-text-secondary mt-4"
          >
            Oder direkt:{" "}
            <a href="mailto:hello@anderius.de" className="hover:text-stone transition-colors duration-300">
              hello@anderius.de
            </a>
          </motion.p>
        </div>
      </section>
    </>
  );
}
