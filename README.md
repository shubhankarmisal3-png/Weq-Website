# WEQ Technologies - Next.js Website

A production-ready Next.js 14 conversion of [weqtechnologies.com](https://weqtechnologies.com), built with:

- ⚡ **Next.js 14** (App Router)
- 🎨 **Tailwind CSS** (pixel-perfect dark theme)
- 📦 **TypeScript** (fully typed)
- 🚀 **Static content** (no WordPress API dependency)
- 📱 **Fully responsive** (mobile-first)
- 🔍 **SEO optimized** (metadata, OpenGraph, Twitter cards)

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 📁 Project Structure

```
weq-technologies/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Homepage
│   ├── about-us/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── case-studies/
│   │   └── page.tsx
│   └── contact-us/
│       └── page.tsx
├── components/
│   ├── Navbar.tsx              # Sticky nav with dropdowns
│   ├── Hero.tsx                # Hero section with badges
│   ├── ClientLogos.tsx         # Animated logo marquee (hero)
│   ├── Stats.tsx               # Animated counter stats
│   ├── Services.tsx            # Services grid (4 cards)
│   ├── Industries.tsx          # Industries we serve (8 tiles)
│   ├── Process.tsx             # Discover → Design → Deliver
│   ├── CaseStudies.tsx         # 3 featured case studies
│   ├── Testimonials.tsx        # Testimonial slider (5 reviews)
│   ├── Clientele.tsx           # Full client logo marquee
│   ├── FAQ.tsx                 # Accordion FAQ (15 questions)
│   ├── CTA.tsx                 # Call-to-action banner
│   ├── Footer.tsx              # Full footer with links
│   └── WhatsAppButton.tsx      # Floating WhatsApp button
├── lib/
│   └── data.ts                 # All static site content
├── styles/
│   └── globals.css             # Global styles + animations
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

## 🎨 Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--dark-bg` | `#1e1b18` | Page background |
| `--dark-card` | `#262220` | Card backgrounds |
| `--dark-section` | `#231f1c` | Alternating sections |
| `--dark-border` | `#3a3330` | Borders |
| `--orange-primary` | `#e8622a` | Brand orange accent |

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

## ➕ Adding WordPress API (Optional)

If you want to fetch blog posts or dynamic pages from WordPress later:

1. Enable **Settings → Permalinks → Post name** in WordPress
2. Install **WP REST API** plugin (usually built-in with WP 4.7+)
3. Test your API: `https://weqtechnologies.com/wp-json/wp/v2/posts`
4. Add fetch calls in `lib/api.ts`:

```ts
export async function getPosts() {
  const res = await fetch('https://weqtechnologies.com/wp-json/wp/v2/posts')
  return res.json()
}
```

5. Use in Server Components:
```tsx
// app/blogs/page.tsx
import { getPosts } from '../../lib/api'
export default async function BlogsPage() {
  const posts = await getPosts()
  return <div>{posts.map(p => <article key={p.id}>{p.title.rendered}</article>)}</div>
}
```

## 📄 Pages Included

| Page | Route | Status |
|------|-------|--------|
| Home | `/` | ✅ Complete |
| About Us | `/about-us` | ✅ Complete |
| Services | `/services` | ✅ Complete |
| Case Studies | `/case-studies` | ✅ Complete |
| Contact Us | `/contact-us` | ✅ Complete |

## 🔧 Customization

All content is managed from a single file:

```
lib/data.ts
```

Update navigation, stats, services, testimonials, FAQs, and footer links here — no API needed.

---

Built with ❤️ — Pixel-perfect conversion of weqtechnologies.com
