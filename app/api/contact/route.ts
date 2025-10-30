import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.text();
  // Placeholder: integrate email provider or webhook here
  console.log("Contact form submission:", body);
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "Content-Type": "application/json" } });
}


