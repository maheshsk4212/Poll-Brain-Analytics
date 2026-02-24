# Poll Brain Analytics Website

Premium corporate website for Poll Brain Analytics built with Next.js 14 App Router.

## Stack
- Next.js 14 + React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- Email: Resend or SendGrid (server API)

## Run Locally
1. Install dependencies
   ```bash
   npm install
   ```
2. Start dev server
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`

## Pages
- `/` Home
- `/about`
- `/services`
- `/case-studies`
- `/insights`
- `/contact`
- `/privacy`

## Contact API
- Endpoint: `POST /api/contact`
- Validation: Zod
- Includes basic in-memory rate limiting
- Provider priority: Resend first, then SendGrid fallback
- Required env vars: see `.env.example`

## Hero Video
- Path: `public/videos/hero.mp4`
- Current setup already includes a default hero video file.

## Vercel Deployment
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables from `.env.example`
4. Set verified sender (`CONTACT_FROM_EMAIL`) in Resend/SendGrid
5. Deploy and connect `pollbrainanalytics.com`

### Included Vercel Config
- `vercel.json`
- Primary region set to `bom1` (Mumbai)
- API function max duration configured for contact route
