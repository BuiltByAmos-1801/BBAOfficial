import Link from "next/link";
import Section from "@/components/Section";
import { posts } from "@/lib/data";
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
  title: "Blog",
  description: "Articles and notes",
};

export default function BlogIndexPage() {
  return (
    <Section id="blog-index" title="Blog">
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.08)}
      >
        {posts.map((p) => (
          <motion.article key={p.title} variants={cardReveal} className="rounded-xl border border-zinc-200 p-5 transition-shadow hover:shadow-md dark:border-zinc-800">
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
              <Link href={`/blog/${slugify(p.title)}`} className="hover:underline">
                {p.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.excerpt}</p>
            <div className="mt-3">
              <Link href={`/blog/${slugify(p.title)}`} className="rounded-md border border-zinc-300 px-3 py-1.5 text-xs text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900">Read more →</Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}


