import Link from "next/link";
import Section from "@/components/Section";
import { posts } from "@/lib/data";
import { notFound } from "next/navigation";

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: slugify(p.title) }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => slugify(p.title) === params.slug);
  if (!post) return { title: "Blog" };
  return {
    title: `${post.title} – Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => slugify(p.title) === params.slug);
  if (!post) return notFound();

  return (
    <Section id="post" title={post.title}>
      <div className="max-w-3xl">
        {post.date && <p className="text-sm text-zinc-500 dark:text-zinc-400">{new Date(post.date).toLocaleDateString()}</p>}
        {Array.isArray(post.tags) && post.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {post.tags.map((t: string) => (
              <span key={t} className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">{t}</span>
            ))}
          </div>
        )}
        <div className="prose prose-zinc mt-6 max-w-none dark:prose-invert">
          {post.content
            ? post.content.split("\n\n").map((para, i) => <p key={i}>{para}</p>)
            : <p>{post.excerpt}</p>}
        </div>
        <p className="mt-8 text-sm">
          <Link href="/blog" className="underline">← Back to Blog</Link>
        </p>
      </div>
    </Section>
  );
}


