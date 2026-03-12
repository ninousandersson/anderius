"use client";

import { motion } from "framer-motion";
import { fadeInVariant } from "@/lib/constants";

interface SectionLabelProps {
  label: string;
  centered?: boolean;
}

export default function SectionLabel({
  label,
  centered = false,
}: SectionLabelProps) {
  return (
    <motion.span
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`block font-sans text-[11px] uppercase tracking-[0.14em] text-text-tertiary mb-8 ${
        centered ? "text-center" : ""
      }`}
      style={{ fontWeight: 400 }}
    >
      {label}
    </motion.span>
  );
}
