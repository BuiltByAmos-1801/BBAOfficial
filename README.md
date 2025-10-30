Personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. Includes dark/light mode, animated sections, projects with modals, timeline experience, blog, testimonials, and a contact form.

## Getting Started

1. Install dependencies
```bash
npm install
```

2. Run the dev server
```bash
npm run dev
```

3. Open http://localhost:3000

## Customize Content

- Update profile and site data in `lib/data.ts` (name, title, socials, education, skills, projects, experience, posts, testimonials).
- Replace placeholder images in `public/` and place your `public/resume.pdf` if using the resume link.
- Edit sections under `components/` and layout in `app/layout.tsx`.

## SEO

- Adjust `metadata` in `app/layout.tsx` (title, description, open graph, twitter) and set your canonical domain in `metadataBase`.

## Contact Form

- The API endpoint `app/api/contact/route.ts` currently logs messages. Integrate an email provider (Resend, SendGrid) or an external forms service when ready.

## Deploy

- Deploy to Vercel. Ensure environment variables (if you add any) are set in your project.
