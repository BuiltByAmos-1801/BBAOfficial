"use client";

import Section from "./Section";
import { posts } from "@/lib/data";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <Section id="blog" title="Blog">
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {posts.map((p) => (
          <motion.a
            key={p.title}
            href={p.href}
            className="group rounded-xl border border-zinc-200 p-5 transition-shadow hover:shadow-md dark:border-zinc-800"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
            whileHover={{ y: -3 }}
          >
            <h3 className="font-medium text-zinc-900 group-hover:underline dark:text-zinc-100">{p.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.excerpt}</p>
            <span className="mt-3 inline-block text-sm text-zinc-900 underline dark:text-zinc-100">Read more →</span>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}


