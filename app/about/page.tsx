"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import ServiceRow from "@/components/ServiceRow";
import {
  teamMembers,
  principles,
  fadeUpVariant,
  staggerContainer,
} from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone" style={{ paddingTop: 160, paddingBottom: 48 }}>
        <div className="container-narrow" style={{ maxWidth: 1200 }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="block font-sans text-[12px] uppercase tracking-[0.12em] text-text-tertiary mb-6"
            style={{ fontWeight: 400 }}
          >
            Philosophie
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-serif text-text-primary"
            style={{
              fontSize: "clamp(32px, 4.5vw, 52px)",
              lineHeight: 1.2,
              maxWidth: 680,
              letterSpacing: "-0.02em",
            }}
          >
            Marketing, das so{" "}
            <span style={{ color: "var(--color-keyword)", fontStyle: "italic" }}>
              präzise
            </span>{" "}
            ist wie Ihre Arbeit.
          </motion.h1>
        </div>
      </section>

      {/* Warum wir existieren — direkt nach dem Slogan */}
      <section className="bg-stone" style={{ paddingBottom: "clamp(48px, 7vw, 80px)" }}>
        <div className="container-narrow" style={{ maxWidth: 1200 }}>
          <div style={{ maxWidth: 640 }}>
            <motion.h2
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="font-serif text-text-primary mb-6"
              style={{
                fontSize: "clamp(24px, 3vw, 34px)",
                letterSpacing: "-0.02em",
              }}
            >
              Exzellente Chirurgen verdienen{" "}
              <span style={{ color: "var(--color-keyword)" }}>exzellente Sichtbarkeit.</span>
            </motion.h2>

            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="font-sans text-[16px] text-text-secondary leading-[1.75]" style={{ fontWeight: 400 }}>
                Wir haben erlebt, wie brillante Ärzte mit mittelmäßigem Marketing gegen mittelmäßige Ärzte mit gutem Marketing verloren haben. Das ist nicht fair — und es ist lösbar.
              </p>
              <p className="font-sans text-[16px] text-text-secondary leading-[1.75] mt-4" style={{ fontWeight: 400 }}>
                Anderius arbeitet ausschließlich mit ästhetischen Chirurgen und Kliniken — weil Tiefe wichtiger ist als Breite. Weil wir Ihre Branche, Ihre Patienten und Ihre Herausforderungen wirklich verstehen wollen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unsere Überzeugungen */}
      <section className="bg-stone-deep section-padding">
        <div className="container-narrow" style={{ maxWidth: 1200 }}>
          <SectionLabel label="Unsere Überzeugungen" />

          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-serif text-text-primary mb-12"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              letterSpacing: "-0.02em",
            }}
          >
            Was uns antreibt.
          </motion.h2>

          <div>
            {principles.map((p, i) => (
              <ServiceRow
                key={p.title}
                title={p.title}
                description={p.description}
                isLast={i === principles.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-stone section-padding">
        <div className="container-narrow" style={{ maxWidth: 1200 }}>
          <SectionLabel label="Team" />

          <motion.h2
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-serif text-text-primary mb-12"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              letterSpacing: "-0.02em",
            }}
          >
            Die Menschen hinter Anderius.
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div key={member.name} variants={fadeUpVariant}>
                <h3 className="font-serif text-[18px] text-text-primary">
                  {member.name}
                </h3>
                <span className="font-sans text-[12px] uppercase tracking-[0.12em] text-text-tertiary mt-1 block" style={{ fontWeight: 400 }}>
                  {member.role}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
