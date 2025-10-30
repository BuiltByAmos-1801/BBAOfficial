import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";

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

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: slugify(p.title) }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => slugify(p.title) === params.slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} – Project`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => slugify(p.title) === params.slug);
  if (!project) return notFound();

  return (
    <Section id="project" title={project.title}>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <div className="relative h-64 w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
            {/* Try multiple extensions in /images by title; fallback to provided image/placeholder */}
            <Image src={buildImageCandidates(project.title, project.image)[0]} alt={project.title} fill className="object-contain p-8 dark:invert" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-zinc-700 dark:text-zinc-300">{project.details}</p>
          <div className="mt-6 flex gap-3">
            <a href={project.links.live} target="_blank" className="rounded-md bg-zinc-900 px-4 py-2 text-sm text-white transition-all duration-200 will-change-transform hover:scale-[1.03] hover:bg-zinc-700 active:scale-[0.98] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300">Live Demo</a>
            <a href={project.links.github} target="_blank" className="rounded-md border border-zinc-300 px-4 py-2 text-sm text-zinc-800 transition-all duration-200 will-change-transform hover:scale-[1.03] hover:bg-zinc-50 active:scale-[0.98] dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900">GitHub</a>
          </div>
          <div className="mt-8 text-sm">
            <Link href="/" className="underline">← Back to Home</Link>
          </div>
        </div>
      </div>
    </Section>
  );
}


