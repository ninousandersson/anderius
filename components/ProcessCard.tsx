"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/constants";

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ProcessCard({
  number,
  title,
  description,
}: ProcessCardProps) {
  return (
    <motion.div
      variants={fadeUpVariant}
      className="bg-white rounded-lg"
      style={{
        padding: "40px 32px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        border: "1px solid rgba(0,0,0,0.04)",
      }}
    >
      <span
        className="font-serif text-[48px] block"
        style={{ color: "rgba(184, 164, 142, 0.4)" }}
      >
        {number}
      </span>
      <h3 className="font-serif text-[22px] text-text-primary mt-5">
        {title}
      </h3>
      <p className="font-sans text-[15px] text-text-secondary leading-[1.7] mt-3" style={{ fontWeight: 400 }}>
        {description}
      </p>
    </motion.div>
  );
}
