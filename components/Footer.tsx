import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white/60 backdrop-blur dark:border-zinc-800 dark:bg-black/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-4 px-4 py-8 text-sm text-zinc-600 sm:grid-cols-3 dark:text-zinc-400">
        <div className="order-2 sm:order-1">
          <p>© {new Date().getFullYear()} Amos Anand. All rights reserved.</p>
        </div>
        <div className="order-1 justify-self-start sm:order-2 sm:justify-self-center">
          <span className="rounded-full border border-zinc-200 px-3 py-1 text-zinc-800 shadow-sm dark:border-zinc-800 dark:text-zinc-200">
            Amos Anand — Portfolio
          </span>
        </div>
        <div className="order-3 flex items-center justify-start gap-3 sm:justify-end">
          <Link
            href="https://github.com/BuiltByAmos-1801"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            <FaGithub />
            <span>GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/amos-anand-a1a57b390"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="https://www.instagram.com/builtbyamos.0"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            <FaInstagram />
            <span>Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}


