"use client";

import Section from "./Section";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { profile } from "@/lib/data";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Please provide a message"),
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const [showModal, setShowModal] = useState(false);

  // FEEDBACK SECTION STATE
  const [rating, setRating] = useState<number>(0);
  const [pending, setPending] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [showFeedbackThanks, setShowFeedbackThanks] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      setShowModal(true);
      const t = setTimeout(() => setShowModal(false), 2500);
      return () => clearTimeout(t);
    }
  }, [isSubmitSuccessful]);

  async function onSubmit(values: FormValues) {
    await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) });
    reset();
  }

  async function handleFeedback(e: React.FormEvent) {
    e.preventDefault();
    if (!rating) return;
    setPending(true);
    await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ rating, feedback }),
      headers: { "Content-Type": "application/json" },
    });
    setRating(0); setFeedback("");
    setShowFeedbackThanks(true);
    setPending(false);
    setTimeout(() => setShowFeedbackThanks(false), 2200);
  }

  return (
    <Section id="contact" title="Contact">
      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
        >
          <div>
            <label className="text-sm text-zinc-700 dark:text-zinc-300">Name</label>
            <input {...register("name")} className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-300 dark:border-zinc-700" />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>
          <div>
            <label className="text-sm text-zinc-700 dark:text-zinc-300">Email</label>
            <input type="email" {...register("email")} className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-300 dark:border-zinc-700" />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>
          <div>
            <label className="text-sm text-zinc-700 dark:text-zinc-300">Message</label>
            <textarea rows={5} {...register("message")} className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-300 dark:border-zinc-700" />
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
          </div>
          <button disabled={isSubmitting} className="rounded-md bg-zinc-900 px-5 py-2.5 text-white transition-all duration-200 will-change-transform hover:scale-[1.03] active:scale-[0.98] disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-900">
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
        <motion.div
          className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300"
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: 0.05 } } }}
        >
          <p>Prefer email? <a href={profile.social.email} className="underline">builtbiamos@gmail.com</a></p>
          <div className="flex gap-4">
            <a className="underline" href={profile.social.github} target="_blank">GitHub</a>
            <a className="underline" href={profile.social.linkedin} target="_blank">LinkedIn</a>
            <a className="underline" href={profile.social.twitter} target="_blank">Twitter</a>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400">{profile.location}</p>
        </motion.div>
      </motion.div>
      {/* Feedback section */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mt-10 max-w-md rounded-xl border border-zinc-200 bg-white/60 px-6 py-7 text-center shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/50"
      >
        <div className="mb-2 text-lg font-semibold">We value your feedback!</div>
        <form onSubmit={handleFeedback}>
          <div className="mb-4 flex items-center justify-center gap-1" aria-label="Feedback rating">
            {[1,2,3,4,5].map((n) => (
              <button type="button" key={n} tabIndex={0}
                className={clsx("text-2xl px-0.5 transition", n <= rating ? "text-yellow-400" : "text-zinc-300 hover:text-yellow-400 focus:text-yellow-400")}
                onClick={() => setRating(n)}
                aria-label={`${n} star${n>1?'s':''}`}
                onKeyDown={e => (e.key==="Enter"||e.key===" ")&&setRating(n)}
                >★</button>
            ))}
          </div>
          <textarea
            className="mb-3 w-full rounded border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-300 dark:border-zinc-700"
            rows={3}
            value={feedback}
            placeholder="Additional feedback (optional)"
            onChange={e => setFeedback(e.target.value)}
            disabled={pending}
          />
          <button
            type="submit"
            disabled={pending || !rating}
            className="rounded-md bg-zinc-900 px-5 py-2.5 text-white transition-all duration-200 will-change-transform hover:scale-[1.03] active:scale-[0.98] disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-900"
          >
            {pending ? "Sending..." : "Send Feedback"}
          </button>
        </form>
        {showFeedbackThanks && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-auto absolute inset-0 z-10 flex items-center justify-center bg-black/40"
          >
            <div className="rounded-md bg-white px-6 py-5 text-zinc-900 shadow-xl dark:bg-zinc-900 dark:text-zinc-100">
              <div className="text-lg font-semibold mb-1">Thank you!</div>
              <div>Your feedback has been received.</div>
            </div>
          </motion.div>
        )}
      </motion.div>
      {/* Modal for thank you popup */}
      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[2px] bg-black/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="alertdialog"
          tabIndex={-1}
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className="rounded-lg bg-white px-10 py-7 text-center shadow-xl dark:bg-zinc-900"
            initial={{ scale: 0.92, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            <div className="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">Thank You!</div>
            <p className="text-zinc-700 dark:text-zinc-300">Your message was sent successfully.<br />I'll get back to you soon.</p>
          </motion.div>
        </motion.div>
      )}
    </Section>
  );
}


