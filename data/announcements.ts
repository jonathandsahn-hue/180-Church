export type Announcement = {
  id: string;
  title: string;
  date: string;       // e.g. "March 23, 2026"
  body: string;
  tag?: string;       // e.g. "Events", "Prayer", "Small Groups"
  link?: {
    label: string;
    href: string;
  };
};

// ─── ADD NEW ANNOUNCEMENTS HERE ──────────────────────────────────────────────
// Most recent first. The top 3 will appear on the homepage (if you add that).
// All will appear on /community.

export const announcements: Announcement[] = [
  {
    id: "1",
    title: "Welcome to the new 180 Church website",
    date: "March 23, 2026",
    tag: "General",
    body: "We've rebuilt our site from the ground up. If you have questions or feedback, reach out at info@180church.tv.",
  },
  {
    id: "2",
    title: "Small Groups — Spring Sign-Ups Open",
    date: "March 23, 2026",
    tag: "Small Groups",
    body: "New small groups are forming for spring. Some meet in person around the city, some meet on Zoom. Sign up below or email us to find the right fit for you.",
    link: {
      label: "Sign Up",
      href: "mailto:info@180church.tv?subject=Small Group Sign-Up",
    },
  },
  {
    id: "3",
    title: "Sunday Service — Easter at AMC Union Square",
    date: "March 23, 2026",
    tag: "Events",
    body: "Join us Easter Sunday at 12:00 PM inside AMC 25 Union Square. Bring a friend. All are welcome.",
  },
];
