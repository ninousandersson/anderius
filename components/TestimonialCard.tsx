"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/constants";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  isLast?: boolean;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  isLast = false,
}: TestimonialCardProps) {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="text-center"
    >
      <blockquote
        className="font-serif italic text-[20px] text-text-primary leading-[1.5] max-w-[640px] mx-auto"
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      <p className="font-sans text-[13px] text-text-tertiary mt-5" style={{ fontWeight: 400 }}>
        — {name}, {role}
      </p>
      {!isLast && (
        <div
          className="w-[40px] h-px mx-auto"
          style={{
            backgroundColor: "rgba(0,0,0,0.08)",
            marginTop: 48,
            marginBottom: 48,
          }}
        />
      )}
    </motion.div>
  );
}
