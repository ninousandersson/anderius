"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/constants";

interface ServiceRowProps {
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ServiceRow({
  title,
  description,
  isLast = false,
}: ServiceRowProps) {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="group grid grid-cols-1 md:grid-cols-[40%_60%] gap-4 md:gap-8"
      style={{
        padding: "40px 0",
        borderBottom: isLast ? "none" : "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <h3 className="font-serif text-[24px] text-text-primary transition-transform duration-300 group-hover:translate-x-1">
        {title}
      </h3>
      <p className="font-sans text-[15px] text-text-secondary leading-[1.7] max-w-[480px]" style={{ fontWeight: 400 }}>
        {description}
      </p>
    </motion.div>
  );
}
