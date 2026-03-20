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

| Page | Route | Purpose |
|------|-------|---------|
| Homepage | `/` | Hero, arrival strip, who we are, testimonial, photos, service times, latest sermon, I'm New CTA |
| I'm New | `/im-new` | Timeline first visit guide, FAQ accordion, contact form, directions |
| Watch | `/watch` | UN Web TV-style live stream embed, offline screen, schedule info |
| About | `/about` | Mission pull quote, story, values with icons, small groups, staff teaser |
| Give | `/give` | Giving methods with icons, stacked single-column layout |
| Staff | `/staff` | Lead pastors featured, rest of team in grid |

---

## File Structure

```
180church/
├── app/
│   ├── layout.tsx              # Root layout — loads Navbar + Footer
│   ├── globals.css             # Tailwind v4 config, brand colors
│   ├── page.tsx                # Homepage
│   ├── im-new/page.tsx         # I'm New page
│   ├── watch/page.tsx          # Watch page (UN Web TV style)
│   ├── about/page.tsx          # About page
│   ├── give/page.tsx           # Give page
│   ├── staff/page.tsx          # Meet the Staff page
│   └── api/
│       └── is-live/route.ts    # Checks if 180churchnyc is currently live on YouTube
├── components/
│   ├── Navbar.tsx              # Fixed top nav, mobile hamburger
│   ├── Footer.tsx              # Dark footer, 3-column layout
│   ├── Logo.tsx                # Logo component (light/dark variants)
│   ├── LatestSermon.tsx        # Embeds latest sermon via user_uploads playlist
│   ├── LiveStream.tsx          # Client component — polls /api/is-live, shows offline screen or live embed
│   └── FAQ.tsx                 # Client component — accordion FAQ for I'm New page
├── public/
│   ├── logo-transparent.png    # PRIMARY logo — transparent background
│   ├── logo-reference.png      # White background version
│   ├── photos/                 # DROP COMMUNITY PHOTOS HERE
│   └── photos/staff/           # DROP STAFF PHOTOS HERE (see Staff section below)
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
- **Font:** Inter (Google Fonts, loaded via `next/font/google`)
- **Headings:** Bold, tight tracking
- **Body:** Regular, relaxed line height

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

### Community Photos
Placeholders are in place. To replace:
1. Download from [facebook.com/180church/photos](https://www.facebook.com/180church/photos) (past 3 years)
2. Save to `/public/photos/` — name them `community-1.jpg`, `community-2.jpg`, etc.
3. In `app/page.tsx`, search for `PhotoPlaceholder` — each has a comment showing how to swap in a real image

### Staff Photos
Download from the old site and save to `/public/photos/staff/`:

| File | Source URL |
|------|-----------|
| `sam-kim.jpg` | https://www.180church.tv/images/samkim.jpg |
| `lydia-kim.jpg` | https://www.180church.tv/images/lydiakim.jpg |
| `sarah-bennett.jpg` | https://www.180church.tv/images/sarah-bennett.jpg |
| `stu-still.jpg` | https://www.180church.tv/images/stu-still.jpg |
| `paul-lee.jpg` | https://www.180church.tv/images/Paul.jpg |
| `grace-lee.jpg` | https://www.180church.tv/images/Grace.jpg |

Once photos are saved, uncomment the `<Image>` block inside `StaffPhoto` in `app/staff/page.tsx`.

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
> "I came to 180 Church looking for a community where I could grow my faith. What I didn't expect was finding a family that made me feel like I was coming home. I found people to do life with."

---

## Deploying to Vercel

1. Push the project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → Import project from GitHub
3. Deploy — Vercel gives a temporary URL like `180church.vercel.app`
4. When ready to go live: add `180church.tv` as a custom domain in Vercel
5. Update DNS records at your domain registrar to point to Vercel (instructions provided by Vercel)

The current WordPress site stays live until DNS is switched.

---

## Copy Guidelines

- No AI-sounding language
- Warm, direct, conversational — like a real person talking
- Do not reference the church going through difficulties — keep it forward-looking
- Use real mission language from the church: "turn to Christ and live for Christ"
- Lean into the AMC venue — it's disarming and humanizing, use it

---

## What's Left

- [ ] Download and add real community photos to `/public/photos/`
- [ ] Download and add staff photos to `/public/photos/staff/` — then uncomment `<Image>` in `app/staff/page.tsx`
- [ ] Pastor welcome section on homepage (pending approval from Sam/Lydia)
- [ ] Deploy to Vercel
- [ ] Switch `180church.tv` DNS to Vercel

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
