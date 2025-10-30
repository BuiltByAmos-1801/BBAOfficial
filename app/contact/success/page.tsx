"use client";

import { useEffect } from "react";
import Section from "@/components/Section";
import Link from "next/link";

export const metadata = {
  title: "Message Sent",
};

export default function ContactSuccessPage() {
  useEffect(() => {
    const t = setTimeout(() => {
      window.location.href = "/";
    }, 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <Section id="success" title="Thank you!">
      <p className="text-zinc-700 dark:text-zinc-300">Your message has been sent. I will get back to you shortly.</p>
      <p className="mt-4 text-sm">
        Redirecting to home... or <Link className="underline" href="/">click here</Link>.
      </p>
    </Section>
  );
}


