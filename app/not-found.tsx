import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">404</h1>
      <p className="mt-2 text-zinc-700 dark:text-zinc-300">Page not found.</p>
      <p className="mt-6">
        <Link href="/" className="rounded-full border border-zinc-300 px-5 py-2 text-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900">Go home</Link>
      </p>
    </div>
  );
}


