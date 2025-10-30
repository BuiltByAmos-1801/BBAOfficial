import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { cardReveal, staggerContainer } from "@/lib/anim";

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export const metadata = {
  title: "Projects",
  description: "Featured projects and case studies",
};

export default function ProjectsIndexPage() {
  return (
    <Section id="projects-index" title="Projects">
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.08)}
      >
        {projects.map((p) => (
          <motion.article key={p.title} className="rounded-lg border border-zinc-200 dark:border-zinc-800" variants={cardReveal}>
            <Link href={`/projects/${slugify(p.title)}`} className="group block">
              <div className="relative h-44 w-full overflow-hidden bg-zinc-50 dark:bg-zinc-900">
                <Image src={p.image} alt={p.title} fill className="object-contain p-6 transition-transform duration-300 group-hover:scale-105 dark:invert" />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <a href={p.links.github} target="_blank" className="rounded-md border border-zinc-300 px-3 py-1.5 text-xs text-zinc-800 transition-all duration-200 will-change-transform hover:scale-[1.03] hover:bg-zinc-50 active:scale-[0.98] dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900">View on GitHub</a>
                  {p.links.live && (
                    <a href={p.links.live} target="_blank" className="rounded-md bg-zinc-900 px-3 py-1.5 text-xs text-white transition-all duration-200 will-change-transform hover:scale-[1.03] hover:bg-zinc-700 active:scale-[0.98] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300">Live Demo</a>
                  )}
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}


