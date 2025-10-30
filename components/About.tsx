import Section from "./Section";
import Image from "next/image";
import { education, certifications, profile } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-3">
        <div className="sm:col-span-1">
          <div className="relative h-40 w-40 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
            <Image src={profile.image} alt={`${profile.name} portrait`} fill className="object-cover" />
          </div>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">{profile.location}</p>
        </div>
        <div className="sm:col-span-2">
          <p className="text-zinc-700 dark:text-zinc-300">
            I'm a software engineer passionate about building delightful user experiences and robust
            systems. I enjoy working across the stack, collaborating with teams, and shipping
            products that provide real value.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Education</h3>
              <ul className="mt-3 space-y-3">
                {education.map((e) => (
                  <li key={e.school} className="rounded-md border border-zinc-200 p-4 dark:border-zinc-800">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">{e.school}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{e.degree}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500">{e.period}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Certifications</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                {certifications.map((c) => (
                  <li key={c.name} className="flex items-center justify-between rounded-md border border-zinc-200 p-3 dark:border-zinc-800">
                    <span>{c.name}</span>
                    <span className="text-xs text-zinc-500">{c.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}


