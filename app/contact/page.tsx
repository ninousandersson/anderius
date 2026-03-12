"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/constants";

const TIME_SLOTS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

const MONTH_NAMES = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];
const DAY_NAMES = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

function CalendarPicker({
  selectedDate,
  onSelectDate,
}: {
  selectedDate: Date | null;
  onSelectDate: (d: Date) => void;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  function prevMonth() {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
  }

  // Build calendar grid
  const firstDay = new Date(viewYear, viewMonth, 1);
  // Monday-based: 0=Mo, 6=So
  const startOffset = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(viewYear, viewMonth, d));

  function isDisabled(d: Date) {
    if (d < today) return true;
    const dow = d.getDay();
    return dow === 0 || dow === 6; // weekends
  }

  function isSameDay(a: Date, b: Date) {
    return a.getDate() === b.getDate() &&
      a.getMonth() === b.getMonth() &&
      a.getFullYear() === b.getFullYear();
  }

  return (
    <div>
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={prevMonth}
          className="font-sans text-[12px] uppercase tracking-[0.1em] text-text-tertiary hover:text-text-primary transition-colors duration-200"
          style={{ fontWeight: 400 }}
        >
          ←
        </button>
        <span className="font-sans text-[13px] text-text-primary" style={{ fontWeight: 500 }}>
          {MONTH_NAMES[viewMonth]} {viewYear}
        </span>
        <button
          type="button"
          onClick={nextMonth}
          className="font-sans text-[12px] uppercase tracking-[0.1em] text-text-tertiary hover:text-text-primary transition-colors duration-200"
          style={{ fontWeight: 400 }}
        >
          →
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-2">
        {DAY_NAMES.map((d) => (
          <div key={d} className="text-center font-sans text-[11px] uppercase tracking-[0.08em] text-text-tertiary py-1" style={{ fontWeight: 400 }}>
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-y-1">
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} />;
          const disabled = isDisabled(day);
          const active = selectedDate && isSameDay(day, selectedDate);
          return (
            <button
              key={day.toISOString()}
              type="button"
              disabled={disabled}
              onClick={() => onSelectDate(day)}
              className="flex items-center justify-center font-sans text-[13px] rounded-md transition-all duration-150"
              style={{
                height: 36,
                fontWeight: 400,
                backgroundColor: active ? "var(--color-keyword)" : "transparent",
                color: disabled
                  ? "rgba(160, 154, 147, 0.35)"
                  : active
                  ? "#FFFFFF"
                  : "var(--color-text-primary)",
                cursor: disabled ? "default" : "pointer",
              }}
              onMouseEnter={(e) => {
                if (!disabled && !active) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(107, 143, 174, 0.12)";
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                }
              }}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const contactInfo = [
  { label: "Email", value: "hello@anderius.de", href: "mailto:hello@anderius.de" },
  { label: "Telefon", value: "+49 69 XXX XXXXX" },
  { label: "Standort", value: "Frankfurt am Main, Deutschland" },
  { label: "Antwortzeit", value: "Innerhalb von 24 Stunden" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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

  const labelClass = "font-sans text-[11px] uppercase tracking-[0.12em] text-text-tertiary font-light block mb-2";

  return (
    <section className="bg-stone" style={{ paddingTop: 160, paddingBottom: "clamp(80px, 12vw, 140px)" }}>
      <div className="container-narrow" style={{ maxWidth: 1200 }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="font-serif text-text-primary"
          style={{
            fontSize: "clamp(40px, 6vw, 64px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Lassen Sie uns sprechen.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.4, 0.25, 1] }}
          className="font-sans text-[16px] text-text-secondary mt-4 mb-16"
          style={{ maxWidth: 520, fontWeight: 400 }}
        >
          Kein Pitch. Kein Druck. Nur ein ehrliches Gespräch über Ihre Praxis und wie wir gemeinsam mehr Patienten gewinnen können.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-16">
          {/* Left — Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {contactInfo.map((item) => (
              <motion.div key={item.label} variants={fadeUpVariant}>
                <span className={labelClass}>{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-sans text-[16px] text-text-primary hover:text-text-secondary transition-colors duration-300"
                    style={{ fontWeight: 400 }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="font-sans text-[16px] text-text-primary" style={{ fontWeight: 400 }}>
                    {item.value}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right — Form */}
          <motion.form
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="space-y-6"
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
              <label className={labelClass} htmlFor="company">Praxis / Klinik</label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="font-sans"
                style={inputStyle}
              />
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <label className={labelClass} htmlFor="message">Nachricht</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="font-sans resize-none"
                style={{ ...inputStyle, height: 120 }}
              />
            </motion.div>

            {/* Calendar */}
            <motion.div variants={fadeUpVariant}>
              <span className={labelClass}>
                Wunschtermin — kostenlose Erstberatung (30 Min.)
              </span>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 8,
                  padding: "20px 24px",
                }}
              >
                <CalendarPicker
                  selectedDate={selectedDate}
                  onSelectDate={(d) => {
                    setSelectedDate(d);
                    setSelectedTime(null);
                  }}
                />

                {/* Time slots */}
                {selectedDate && (
                  <div className="mt-5 pt-5" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <p className="font-sans text-[11px] uppercase tracking-[0.1em] text-text-tertiary mb-3" style={{ fontWeight: 400 }}>
                      Uhrzeit wählen
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className="font-sans text-[13px] rounded-md transition-all duration-150"
                          style={{
                            padding: "7px 16px",
                            fontWeight: 400,
                            backgroundColor:
                              selectedTime === slot
                                ? "var(--color-keyword)"
                                : "rgba(0,0,0,0.04)",
                            color:
                              selectedTime === slot
                                ? "#FFFFFF"
                                : "var(--color-text-primary)",
                            border: "1px solid transparent",
                          }}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                    {selectedDate && selectedTime && (
                      <p className="font-sans text-[13px] text-text-secondary mt-4" style={{ fontWeight: 400 }}>
                        Gewählt:{" "}
                        <span style={{ color: "var(--color-keyword)", fontWeight: 500 }}>
                          {selectedDate.toLocaleDateString("de-DE", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                          })}{" "}
                          um {selectedTime} Uhr
                        </span>
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <button
                type="submit"
                className="font-sans text-[13px] uppercase tracking-[0.1em] font-medium text-stone bg-text-primary rounded-lg transition-colors duration-300 hover:bg-camel"
                style={{ padding: "14px 32px" }}
              >
                Anfrage senden &rarr;
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
