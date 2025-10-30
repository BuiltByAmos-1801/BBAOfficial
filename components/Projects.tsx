"use client";

import Section from "./Section";
import Image from "next/image";
import { projects } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { cardReveal, staggerContainer } from "@/lib/anim";

type Project = (typeof projects)[number];

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function buildImageCandidates(title: string, fallback?: string) {
  const base = `/images/${slugify(title)}`;
  const candidates = [
    `${base}.jpg`,
    `${base}.png`,
    `${base}.jpeg`,
    `${base}.webp`,
  ];
  if (fallback) candidates.push(fallback);
  candidates.push("/window.svg");
  return candidates;
}

function ProjectCard({ project }: { project: Project }) {
  const candidates = buildImageCandidates(project.title, project.image);
  const [idx, setIdx] = useState<number>(0);
  const imgSrc = candidates[Math.min(idx, candidates.length - 1)];
  return (
    <motion.div
      className="group text-left"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="overflow-hidden rounded-lg border border-zinc-200 transition-shadow hover:shadow-md dark:border-zinc-800">
        <div className="relative h-40 w-full bg-zinc-50 dark:bg-zinc-900">
          <Image
            src={imgSrc || project.image}
            alt={project.title}
            fill
            className="object-contain p-6 transition-transform duration-300 group-hover:scale-105 dark:invert"
            onError={() => setIdx((i) => i + 1)}
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{project.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.08)}
      >
        {projects.map((p) => (
          <motion.div key={p.title} variants={cardReveal}>
            <Link href={`/projects/${slugify(p.title)}`} className="block">
              <ProjectCard project={p} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}


