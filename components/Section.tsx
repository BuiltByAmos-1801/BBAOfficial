"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/anim";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  noAnimation?: boolean;
};

export default function Section({ id, title, children, noAnimation }: SectionProps) {
  const shouldAnimate = !noAnimation;

  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {shouldAnimate ? (
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            {title}
          </motion.h2>
        ) : (
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{title}</h2>
        )}

        {shouldAnimate ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mt-8"
          >
            {children}
          </motion.div>
        ) : (
          <div className="mt-8">{children}</div>
        )}
      </div>
    </section>
  );
}


