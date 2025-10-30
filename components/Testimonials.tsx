"use client";

import Section from "./Section";
import { testimonials } from "@/lib/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <Section id="testimonials" title="Testimonials">
      <div className="relative mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg text-zinc-800 dark:text-zinc-200">“{testimonials[index].quote}”</p>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">— {testimonials[index].name}, {testimonials[index].role}</p>
          </motion.div>
        </div>
        <div className="mt-4 flex justify-center gap-3">
          <button onClick={prev} className="rounded-full border px-3 py-1 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">Prev</button>
          <button onClick={next} className="rounded-full border px-3 py-1 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">Next</button>
        </div>
      </div>
    </Section>
  );
}


