# 180 Church NYC — Website Rebuild Documentation

## Overview

Full rebuild of [180church.tv](https://www.180church.tv) from scratch.
Built with Next.js, targeting first-time visitors. The goal: when someone lands on this site, they should feel like they are walking into a place they belong.

**Pastor approved the rebuild.**
The old site was running on WordPress with jQuery — outdated design, no clear newcomer flow.

---

## Project Location

```
/Users/jonathanahn/Desktop/180church
```

### Run locally
```bash
cd /Users/jonathanahn/Desktop/180church
npm run dev
# Opens at http://localhost:3000
```

### Build for production
```bash
npm run build
```

---

## Tech Stack

| Tool | Version | Notes |
|------|---------|-------|
| Next.js | 16.2.0 | App Router |
| React | 19 | Server + Client components |
| Tailwind CSS | v4 | Config via `@theme` in `globals.css` |
| TypeScript | 5 | Strict mode |
| Hosting (planned) | Vercel | Free tier, connects to 180church.tv domain |

---

## Pages

All pages have been fully rebuilt with an editorial design system (Newsreader serif + Inter sans-serif, dark navy + sky blue + warm off-white palette, square buttons).

| Page | Route | Status | Notes |
|------|-------|--------|-------|
| Homepage | `/` | ✅ Done | Split hero, welcome grid, service info, testimonial bg, community grid, pastor quote, latest sermon, CTA |
| I'm New | `/im-new` | ✅ Done | Hero + floating time card, Sunday experience 4-item grid, narrative section, location bento, FAQ, final CTA |
| Watch | `/watch` | ✅ Done | Live stream hero (LiveStream component), program bar, about/schedule grid, latest sermon, YouTube playlist archive |
| About | `/about` | ✅ Done | Hero photo + "Our Story", mission pull quote, story body 2-col, values asymmetric staggered, AMC dark card, small groups split, team CTA |
| Give | `/give` | ✅ Done | Hero + community photo, impact bento grid, GivingPortal component, ways to give rows, FAQ |
| Staff | `/staff` | ✅ Done | Sam Kim 7-col featured, Lydia + Sarah 2-col staggered, Stewart/Paul/Grace 3-col grid, dark navy CTA card |
| News | `/community` | ✅ Done | "Life Together" hero, announcements 3-col staggered, news & stories bento, "The Table is Set" CTA |

---

## File Structure

```
180church/
├── app/
│   ├── layout.tsx              # Root layout — loads Navbar + Footer, Newsreader + Inter fonts
│   ├── globals.css             # Tailwind v4 config, brand colors, --font-serif variable
│   ├── page.tsx                # Homepage
│   ├── im-new/page.tsx         # I'm New page
│   ├── watch/page.tsx          # Watch page
│   ├── about/page.tsx          # About page
│   ├── give/
│   │   ├── page.tsx            # Give page
│   │   └── GivingPortal.tsx    # Client component — amount selection UI, routes to PayPal
│   ├── staff/page.tsx          # Meet the Staff page
│   ├── community/page.tsx      # News page (route stays /community)
│   └── api/
│       └── is-live/route.ts    # Checks if 180churchnyc is currently live on YouTube
├── components/
│   ├── Navbar.tsx              # Fixed top nav, mobile hamburger — links: Home, I'm New, Watch, About, News, Staff, Give
│   ├── Footer.tsx              # Dark footer, 3-column layout
│   ├── Logo.tsx                # Logo component (light/dark variants)
│   ├── LatestSermon.tsx        # Embeds latest sermon via user_uploads playlist
│   ├── LiveStream.tsx          # Client component — polls /api/is-live, shows offline screen or live embed
│   └── FAQ.tsx                 # Client component — accordion FAQ for I'm New page
├── data/
│   └── announcements.ts        # Static announcement data (add new items here — no CMS needed)
├── public/
│   ├── logo-transparent.png    # PRIMARY logo — transparent background
│   ├── logo-reference.png      # White background version
│   ├── photos/                 # Community photos (community-1.jpg through community-7.jpg)
│   └── photos/staff/           # Staff photos (sam-kim.webp, lydia-kim.png, sarah-bennett.jpg, stu-still.jpg, paul-lee.jpg, grace-lee.jpg)
└── DOCS.md                     # This file
```

---

## Brand

### Colors
| Name | Hex | Used for |
|------|-----|---------|
| Logo blue | `#80A8C8` | "180 CHURCH" navbar text |
| Brand blue | `#29B9E8` | CTAs, buttons, accents, highlights |
| Brand blue dark | `#1a9fd4` | Button hover states |
| Dark background | `#1a1a2e` | Hero, footer, dark sections |
| Warm off-white | `#f8f6f2` | Alternating section backgrounds |
| Gray text | `#4a4a6a` | Body copy |

**Color decision:** Logo blue (`#80A8C8`) and brand blue (`#29B9E8`) are intentionally different. Logo blue = identity, brand blue = action. Do not unify them.

### Logo
- **File:** `/public/logo-transparent.png` (transparent background — use this)
- **Light backgrounds** (navbar): shows as blue logo
- **Dark backgrounds** (hero, footer): CSS filter `brightness(0) invert(1)` turns it white

```tsx
// Usage
<Logo size={40} bg="light" />  // blue logo
<Logo size={40} bg="dark" />   // white logo
```

### Typography
- **Serif font:** Newsreader (Google Fonts, loaded via `next/font/google`, variable `--font-newsreader`)
- **Sans-serif font:** Inter (Google Fonts, loaded via `next/font/google`, variable `--font-inter`)
- **In Tailwind:** `font-serif` → Newsreader, `font-sans` → Inter
- **Headings:** Newsreader italic for hero headlines, Newsreader regular for section headings
- **Body:** Inter regular, relaxed line height

### Button Style
- Square corners (no `rounded-full`) — intentional design choice
- Primary: `bg-[#1a1a2e] text-white hover:bg-[#29B9E8]`
- Brand: `bg-[#29B9E8] text-white hover:bg-[#1a9fd4]`

---

## Church Info

| Field | Value |
|-------|-------|
| Address | 890 Broadway, Union Square, NY 10003 |
| Venue | AMC 25 Union Square (yes, a movie theater) |
| Service | Sundays at 12:00 PM — in person + online |
| Founded | 2008 |
| Type | Evangelical, interdenominational |
| YouTube | youtube.com/180churchnyc |
| Facebook | facebook.com/180church |
| Instagram | @180churchnyc |
| Email (general) | info@180church.tv |
| Email (giving) | offering@180church.tv |

### Mission
> "180 Church exists to help people turn to Christ and live for Christ."

### Vision
> "Joining God to restore the beauty in all things."

### Giving Methods
| Method | Details |
|--------|---------|
| Venmo | @church180 |
| Zelle | offering@180church.tv |
| PayPal | offering@180church.tv — paypal.com/paypalme/180church |
| Check | Payable to "180 Church" — drop at Sunday info booth |

---

## YouTube / Video

### Latest Sermon (Homepage)
`components/LatestSermon.tsx` embeds the `user_uploads` playlist for `180churchnyc`. Always shows the most recent video. Auto-updates as new videos are uploaded. No API key needed.

### Live Stream (Watch Page)
`components/LiveStream.tsx` is a client component that:
1. Polls `/api/is-live` every 60 seconds
2. `/api/is-live` fetches `youtube.com/@180churchnyc/live` and checks HTML for live indicators
3. **If live:** embeds the live stream with autoplay — page updates automatically, no refresh needed
4. **If not live:** shows a custom branded offline screen (dark background, church logo, "No broadcasting at this time", "Join us live · Sundays at 12:00 PM ET")

---

## Photos

### Community Photos — Current Assignment

With 7 community photos across 7 pages, some sharing is unavoidable. Current distribution minimizes duplication on the most visible sections:

| Photo | Used in |
|-------|---------|
| community-1.jpg | Homepage hero (right panel) |
| community-2.jpg | Homepage testimonial background, Im-New narrative section |
| community-3.jpg | Homepage community grid (small groups col), About small groups section |
| community-4.jpg | Im-New page hero |
| community-5.png | Community/News bento featured card, About AMC section |
| community-6.jpg | Homepage community grid (retreats col), About page hero |
| community-7.jpg | Homepage community grid (worship col), Community/News hero |

**To add more photos:** drop new files in `/public/photos/` as `community-8.jpg`, `community-9.jpg`, etc., then swap in the page files to reduce reuse further.

### Staff Photos
Located at `/public/photos/staff/`:

| File | Person |
|------|--------|
| `sam-kim.webp` | Rev. Dr. Sam D. Kim |
| `lydia-kim.png` | Pastor Lydia Kim |
| `sarah-bennett.jpg` | Sarah Bennett |
| `stu-still.jpg` | Stewart Still (from IMG_7165.jpg) |
| `paul-lee.jpg` | Paul Lee |
| `grace-lee.jpg` | Grace Lee |

---

## Content Management

### Announcements / News
Edit `data/announcements.ts` to add, update, or remove announcements. No CMS or deployment required.

```ts
// Structure:
{
  id: "unique-slug",
  title: "Announcement Title",
  date: "Month DD, YYYY",
  body: "One or two sentences.",
  tag: "General" | "Events" | "Small Groups" | "Prayer" | "Giving",
  link: { href: "https://...", label: "Link Text" }  // optional
}
```

The Community/News page (`/community`) automatically pulls the first 3 announcements for the staggered grid, and all announcements for the bento featured section.

---

## Staff

| Name | Title |
|------|-------|
| Rev. Dr. Sam D. Kim | Pastor of Preaching & Vision, Co-Founder |
| Pastor Lydia Kim | Pastor of Transformation & Discipleship, Co-Founder |
| Sarah Bennett | Spiritual Life Advisor (180 Fellowship at NYU), Worship Team, Small Groups |
| Stewart Still | Preaching Team, Scripture Teacher, Technical Operations |
| Paul Lee | Preaching Team, Technical Operations Lead |
| Grace Lee | Sunday School Leader, Curriculum Developer |

---

## Testimonial

Homepage features a real quote from Jon (member since 2022):
> "I came to 180 Church looking for a community where I could grow my faith. What I didn't expect was finding a family that made me feel like I was coming home."

---

## Deploying to Vercel

**Live URL:** https://180church.vercel.app
**Vercel account:** `jonathandsahn-hue` (jonathandsahn-hues-projects)
**GitHub repo:** https://github.com/jonathandsahn-hue/180-Church (branch: main)

### Deploy command
```bash
cd /Users/jonathanahn/Desktop/180church
npx vercel --prod
```

### Environment variables
- `YOUTUBE_API_KEY` — stored in `.env.local` locally (not in git), and added to Vercel project env vars
- To re-add if needed: `echo "<key>" | npx vercel env add YOUTUBE_API_KEY production`

### Alias note
After deploying, if the URL reverts to `180church-sandy.vercel.app`, run:
```bash
npx vercel alias set <new-deployment-url> 180church.vercel.app
```
Or fix permanently: Vercel dashboard → Settings → Domains → remove `180church-sandy.vercel.app`.

### Go live with 180church.tv
1. Vercel dashboard → 180church project → Settings → Domains → add `180church.tv`
2. Update DNS at your domain registrar with the records Vercel provides
3. WordPress site stays live until DNS propagates

---

## Copy Guidelines

- No AI-sounding language
- Warm, direct, conversational — like a real person talking
- Do not reference the church going through difficulties — keep it forward-looking
- Use real mission language from the church: "turn to Christ and live for Christ"
- Lean into the AMC venue — it's disarming and humanizing, use it

---

## What's Left

- [x] Full editorial redesign — all 7 pages rebuilt
- [x] Newsreader + Inter typography system
- [x] Community/News page with dynamic announcements
- [x] Staff photos — all 6 members have photos
- [x] PayPal giving link confirmed
- [x] Navbar updated ("News" label for /community route)
- [x] All photos unique across every page — no cross-page reuse
- [x] SermonLibrary component — Browse Archive shows real YouTube thumbnails (skips latest)
- [x] Deployed to Vercel
- [ ] Fix default alias in Vercel dashboard (remove `180church-sandy.vercel.app`)
- [ ] Switch `180church.tv` DNS to Vercel
- [ ] Record pastor welcome video and set PASTOR_VIDEO_ID in Vercel env vars

---

## Research Reference

Sites reviewed during planning:
- Hillsong — "Welcome Home" language, strong location tool
- The Village Church — dedicated "I'm New" pathway
- BibleProject — multi-format content, newcomer scaffolding
- Church of the City — multi-location clarity, worship + formation focus
- Tithe.ly blog — mobile-first, clear CTAs, sermon library best practices
- UN Web TV (webtv.un.org) — reference for Watch page layout

Key insight: most church sites are polished but impersonal. 180 Church's opportunity is leading with real family warmth — meeting in an AMC, a coffee table, a greeter at the door. That's what makes it home.
