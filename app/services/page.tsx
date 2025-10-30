"use client";

import Section from "@/components/Section";
import { fadeUp, staggerContainer, cardReveal } from "@/lib/anim";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { title: "Web App Development", desc: "Modern, scalable apps with Next.js/React.", icon: "🧭" },
  { title: "API & Backend", desc: "Robust REST/GraphQL services.", icon: "⚙️" },
  { title: "UI/UX Implementation", desc: "Pixel-perfect, accessible interfaces.", icon: "🎨" },
  { title: "Performance Tuning", desc: "Profiling, code-splitting, caching.", icon: "⚡" },
];

export default function ServicesPage() {
  return (
    <Section id="services" title="Services">
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.08)}
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={cardReveal}
            className="rounded-xl border border-zinc-200 bg-white/60 p-5 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40"
          >
            <div className="text-3xl">{s.icon}</div>
            <h3 className="mt-3 font-semibold text-zinc-900 dark:text-zinc-100">{s.title}</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mt-8"
      >
        <Link href="/#contact" scroll={true} className="inline-block rounded-full bg-zinc-900 px-6 py-3 text-white transition-all duration-200 will-change-transform hover:scale-[1.03] hover:bg-zinc-700 active:scale-[0.98] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300">
          Start a project
        </Link>
      </motion.div>
    </Section>
  );
}


