"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/constants";

const POSITIONS = [
  "Position wählen",
  "Performance Marketing Manager",
  "Brand & Creative Director",
  "Social Media Strategist",
  "Web Designer / Developer",
  "Account Manager",
  "Initiativbewerbung",
];

const VALUES = [
  {
    title: "Fokus statt Breite",
    text: "Wir arbeiten ausschließlich in einer Nische — und werden dort außergewöhnlich gut. Wir suchen Menschen, die Tiefe dem Überblick vorziehen.",
  },
  {
    title: "Ergebnis zählt",
    text: "Kein Agentur-Theater, keine leeren Reportings. Wir messen alles und feiern echte Fortschritte — nicht Aktivität.",
  },
  {
    title: "Schönheit mit Substanz",
    text: "Ästhetik ist keine Spielerei. Wir glauben, dass gutes Design und starke Strategie zusammengehören — und das lebt sich in unserer Arbeit.",
  },
];

export default function KarrierePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    portfolio: "",
    motivation: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    backgroundColor: "#FFFFFF",
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: 8,
    padding: "14px 18px",
    fontSize: 15,
    fontWeight: 400 as const,
    width: "100%",
    color: "#1A1A1A",
  };

  const labelClass =
    "font-sans text-[11px] uppercase tracking-[0.12em] text-text-tertiary font-light block mb-2";

  return (
    <>
      {/* Hero */}
      <section className="bg-stone" style={{ paddingTop: 160, paddingBottom: "clamp(80px, 10vw, 120px)" }}>
        <div className="container-narrow" style={{ maxWidth: 1200 }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="block font-sans text-[12px] uppercase tracking-[0.12em] text-text-tertiary mb-8"
            style={{ fontWeight: 400 }}
          >
            Karriere
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-serif text-text-primary"
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 700,
            }}
          >
            Werden Sie Teil eines Teams, das{" "}
            <span style={{ color: "var(--color-keyword)", fontStyle: "italic" }}>
              Schönheit sichtbar
            </span>{" "}
            macht.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-sans text-[18px] text-text-secondary leading-[1.7] mt-7"
            style={{ maxWidth: 560, fontWeight: 400 }}
          >
            Wir suchen Menschen, die Marketing als Handwerk verstehen — die Strategie lieben, Ästhetik ernst nehmen und Ergebnisse über Aktivität stellen.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone-deep section-padding">
        <div className="container-narrow" style={{ maxWidth: 1200 }}>
          <motion.span
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="block font-sans text-[11px] uppercase tracking-[0.14em] text-text-tertiary mb-8"
            style={{ fontWeight: 400 }}
          >
            Wie wir arbeiten
          </motion.span>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {VALUES.map((v) => (
              <motion.div key={v.title} variants={fadeUpVariant}>
                <h3 className="font-serif text-[20px] text-text-primary mb-3">
                  {v.title}
                </h3>
                <p className="font-sans text-[15px] text-text-secondary leading-[1.7]" style={{ fontWeight: 400 }}>
                  {v.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-stone section-padding">
        <div className="container-narrow" style={{ maxWidth: 1200 }}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{ maxWidth: 540 }}
            >
              <h2 className="font-serif text-text-primary" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
                Vielen Dank für Ihre Bewerbung.
              </h2>
              <p className="font-sans text-[16px] text-text-secondary leading-[1.75] mt-5" style={{ fontWeight: 400 }}>
                Wir melden uns innerhalb von 5 Werktagen bei Ihnen. Wir freuen uns darauf, Sie kennenzulernen.
              </p>
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mb-12"
              >
                <h2 className="font-serif text-text-primary" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>
                  Jetzt bewerben.
                </h2>
                <p className="font-sans text-[15px] text-text-secondary leading-[1.7] mt-4" style={{ fontWeight: 400, maxWidth: 500 }}>
                  Kein Motivationsschreiben in Romanform. Sagen Sie uns, wer Sie sind, was Sie bewegt — und zeigen Sie uns Ihre Arbeit.
                </p>
              </motion.div>

              <motion.form
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                onSubmit={handleSubmit}
                className="space-y-6"
                style={{ maxWidth: 640 }}
              >
                <motion.div variants={fadeUpVariant}>
                  <label className={labelClass} htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="font-sans"
                    style={inputStyle}
                    required
                  />
                </motion.div>

                <motion.div variants={fadeUpVariant}>
                  <label className={labelClass} htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="font-sans"
                    style={inputStyle}
                    required
                  />
                </motion.div>

                <motion.div variants={fadeUpVariant}>
                  <label className={labelClass} htmlFor="position">Position</label>
                  <select
                    id="position"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="font-sans"
                    style={{ ...inputStyle, cursor: "pointer" }}
                    required
                  >
                    {POSITIONS.map((p) => (
                      <option key={p} value={p === "Position wählen" ? "" : p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div variants={fadeUpVariant}>
                  <label className={labelClass} htmlFor="portfolio">
                    Portfolio / LinkedIn / Arbeitsproben
                  </label>
                  <input
                    id="portfolio"
                    type="url"
                    placeholder="https://"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    className="font-sans"
                    style={inputStyle}
                  />
                </motion.div>

                <motion.div variants={fadeUpVariant}>
                  <label className={labelClass} htmlFor="motivation">
                    Warum Anderius? (kurz und ehrlich)
                  </label>
                  <textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    placeholder="Was bewegt Sie? Was können Sie besonders gut? Was erwarten Sie von uns?"
                    className="font-sans resize-none"
                    style={{ ...inputStyle, height: 160 }}
                    required
                  />
                </motion.div>

                <motion.div variants={fadeUpVariant}>
                  <button
                    type="submit"
                    className="font-sans text-[13px] uppercase tracking-[0.1em] font-medium text-stone bg-text-primary rounded-lg transition-colors duration-300 hover:bg-camel"
                    style={{ padding: "14px 32px" }}
                  >
                    Bewerbung einreichen &rarr;
                  </button>
                </motion.div>
              </motion.form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
