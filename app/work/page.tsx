"use client";

import { motion } from "framer-motion";
import {
  projects,
  additionalProjects,
  fadeUpVariant,
  staggerContainer,
} from "@/lib/constants";

const allProjects = [...projects, ...additionalProjects];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone" style={{ paddingTop: 160, paddingBottom: 56 }}>
        <div className="container-narrow" style={{ maxWidth: 1200 }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="block font-sans text-[12px] uppercase tracking-[0.12em] text-text-tertiary mb-8"
            style={{ fontWeight: 400 }}
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-serif text-text-primary"
            style={{
              fontSize: "clamp(40px, 7vw, 72px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Portfolio.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-sans text-[16px] text-text-secondary mt-4"
            style={{ fontWeight: 400 }}
          >
            Ausgewählte Projekte und Ergebnisse für ästhetische Chirurgen und Kliniken.
          </motion.p>
        </div>
      </section>

      {/* Project grid */}
      <section className="bg-stone section-padding" style={{ paddingTop: 0 }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container-narrow grid grid-cols-1 md:grid-cols-2 gap-4"
          style={{ maxWidth: 1200 }}
        >
          {allProjects.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUpVariant}
              className="group bg-white rounded-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{
                padding: 36,
                border: "1px solid rgba(0,0,0,0.04)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 1px 3px rgba(0,0,0,0.04)";
              }}
            >
              <span className="font-sans text-[12px] uppercase tracking-[0.12em] text-text-tertiary block mb-3" style={{ fontWeight: 400 }}>
                {p.type}
              </span>
              <h2 className="font-serif text-[24px] text-text-primary">
                {p.name}
              </h2>
              <p className="font-sans text-[15px] text-text-secondary leading-[1.7] mt-3 mb-5" style={{ fontWeight: 400 }}>
                {p.description}
              </p>
              <span className="font-serif text-[34px] block" style={{ color: "var(--color-keyword)" }}>
                {p.metric}
              </span>
              <span className="font-sans text-[12px] text-text-tertiary font-light">
                {p.metricLabel}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
