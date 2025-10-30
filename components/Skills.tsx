"use client";

import Section from "./Section";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

const badgeColors = [
  "from-sky-500/15 to-sky-500/5 text-sky-700 dark:text-sky-300",
  "from-fuchsia-500/15 to-fuchsia-500/5 text-fuchsia-700 dark:text-fuchsia-300",
  "from-emerald-500/15 to-emerald-500/5 text-emerald-700 dark:text-emerald-300",
  "from-amber-500/15 to-amber-500/5 text-amber-700 dark:text-amber-300",
  "from-indigo-500/15 to-indigo-500/5 text-indigo-700 dark:text-indigo-300",
  "from-rose-500/15 to-rose-500/5 text-rose-700 dark:text-rose-300",
];

function SkillBadge({ label, index }: { label: string; index: number }) {
  const color = badgeColors[index % badgeColors.length];
  return (
    <motion.span
      className={`inline-flex items-center rounded-full border border-zinc-200 bg-gradient-to-b ${color} px-3 py-1 text-sm shadow-sm ring-1 ring-inset ring-black/0 transition hover:-translate-y-0.5 hover:ring-black/5 dark:border-zinc-800`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3) }}
    >
      {label}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
      >
        {(
          [
            ["Frontend", skills.frontend],
            ["Backend", skills.backend],
            ["Tools", skills.tools],
            ["Database", skills.database],
            ["Cloud", skills.cloud],
            ["Soft Skills", skills.soft],
          ] as const
        ).map(([title, list]) => (
          <motion.div
            key={title}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
            className="rounded-2xl border border-zinc-200 bg-white/60 p-5 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {list.map((s, i) => (
                <SkillBadge key={s} label={s} index={i} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}


