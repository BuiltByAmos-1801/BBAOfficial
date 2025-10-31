"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">✅ Message Sent Successfully!</h1>
      <p className="text-lg text-gray-600 mb-6">
        Thank you for reaching out. I’ll get back to you soon.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
