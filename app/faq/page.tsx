"use client";

import Head from "next/head";
import Section from "@/components/Section";
import * as Accordion from "@radix-ui/react-accordion";

const faqs = [
  { q: "Which tech stack do you use?", a: "Next.js, React, TypeScript, Tailwind, Node.js/NestJS, and more." },
  { q: "Do you take freelance projects?", a: "Yes. Use the contact form to reach out with details." },
  { q: "What is your delivery timeline?", a: "Depends on scope. Simple sites: 1–2 weeks. Apps: 3–8+ weeks." },
];

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ</title>
        <meta name="description" content="Frequently asked questions" />
      </Head>

      <Section
        id="faq"
        title="FAQ"
      >
        <Accordion.Root
          type="single"
          collapsible
          className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800"
        >
          {faqs.map((f, i) => (
            <Accordion.Item key={i} value={`item-${i}`}>
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 text-left text-zinc-900 dark:text-zinc-100">
                  {f.q}
                  <span className="ml-4 text-zinc-500">+</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 pb-3 text-sm text-zinc-700 dark:text-zinc-300">
                {f.a}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Section>
    </>
  );
}
