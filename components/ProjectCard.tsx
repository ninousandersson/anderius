"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/constants";

interface ProjectCardProps {
  name: string;
  type: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export default function ProjectCard({
  name,
  type,
  description,
  metric,
  metricLabel,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="bg-white rounded-lg mb-4"
      style={{
        padding: "clamp(32px, 4vw, 48px)",
        border: "1px solid rgba(0,0,0,0.04)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-center">
        <div>
          <h3 className="font-serif text-[28px] text-text-primary">{name}</h3>
          <span className="font-sans text-[13px] text-text-tertiary mt-1 block" style={{ fontWeight: 400 }}>
            {type}
          </span>
          <p className="font-sans text-[15px] text-text-secondary leading-[1.7] mt-4 max-w-[440px]" style={{ fontWeight: 400 }}>
            {description}
          </p>
        </div>
        <div className="text-left md:text-right">
          <span className="font-serif text-[56px] text-text-primary block leading-none">
            {metric}
          </span>
          <span className="font-sans text-[12px] text-text-tertiary font-light mt-2 block">
            {metricLabel}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
