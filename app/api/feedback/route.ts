import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.text();
  // For now: just log. You can add Nodemailer/send logic here.
  console.log("Feedback submission:", body);
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "Content-Type": "application/json" } });
}
