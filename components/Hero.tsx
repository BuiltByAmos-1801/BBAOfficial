"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[80vh] items-center">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:grid-cols-2 sm:py-24">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-lg font-medium text-zinc-700 dark:text-zinc-300"
          >
            {profile.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400"
          >
            {profile.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="#contact"
              className="rounded-full bg-zinc-900 px-6 py-3 text-white transition-all duration-200 will-change-transform hover:scale-[1.03] hover:bg-zinc-700 active:scale-[0.98] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              Hire Me
            </Link>
            <Link
              href="#projects"
              className="rounded-full border border-zinc-300 px-6 py-3 text-zinc-800 transition-all duration-200 will-change-transform hover:scale-[1.03] hover:bg-zinc-50 active:scale-[0.98] dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              View Projects
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="justify-self-center"
        >
          <motion.div
            className="relative h-48 w-48 overflow-hidden rounded-full border border-zinc-200 shadow-sm dark:border-zinc-800 sm:h-56 sm:w-56"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src={profile.image} alt={`${profile.name} portrait`} fill className="object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


