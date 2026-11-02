/** Single source of truth for The Hole Thing Donuts site content. */

export const SITE_URL = "https://the-hole-thing-donuts.vercel.app";
export const TIME_ZONE = "America/Chicago";

export const BUSINESS = {
  name: "The Hole Thing Donuts",
  shortName: "The Hole Thing",
  founded: 2011,
  tagline: "Putting the FUN back into donuts.",
  description:
    "Locally owned donut shop serving Forney and Rockwall, Texas since 2011 — not a franchise. Classic glazed, gourmet specialties, character donuts, kolaches, cinnamon rolls and coffee, fresh every morning from 5 AM.",
  email: "theholethingdonut@gmail.com",
  facebook: "https://www.facebook.com/101344905388708",
};

export type DayHours = { index: number; name: string; short: string; open: number | null; close: number | null };

const h = (hr: number) => hr * 60;
const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** Mon–Thu 5 AM–12 PM, Fri–Sun 5 AM–1 PM (Google / Facebook / Yelp listings). Same at both shops. */
export const HOURS: DayHours[] = DAY_NAMES.map((name, index) => {
  const late = index === 0 || index === 5 || index === 6;
  return { index, name, short: name.slice(0, 3), open: h(5), close: late ? h(13) : h(12) };
});

/** Monday-first order for tables. */
export const HOURS_WEEK_ORDER = [...HOURS.slice(1), HOURS[0]];

export const HOURS_SUMMARY = [
  { days: "Mon – Thu", hours: "5:00 AM – 12:00 PM" },
  { days: "Fri – Sun", hours: "5:00 AM – 1:00 PM" },
];

export type Location = {
  slug: "forney" | "rockwall";
  city: string;
  street: string;
  suite: string;
  locality: string;
  region: string;
  postalCode: string;
  phone: { display: string; tel: string; schema: string };
  email: string;
  mapsUrl: string;
  mapEmbed: string;
  geo?: { lat: number; lng: number };
};

export const LOCATIONS: Location[] = [
  {
    slug: "forney",
    city: "Forney",
    street: "571 FM-548",
    suite: "Ste 128",
    locality: "Forney",
    region: "TX",
    postalCode: "75126",
    phone: { display: "(972) 552-5000", tel: "+19725525000", schema: "+1-972-552-5000" },
    email: "thtforney@gmail.com",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("The Hole Thing Donuts, 571 FM-548 Ste 128, Forney, TX 75126"),
    mapEmbed:
      "https://www.google.com/maps?output=embed&q=" +
      encodeURIComponent("The Hole Thing Donuts 571 FM-548 Ste 128 Forney TX 75126"),
  },
  {
    slug: "rockwall",
    city: "Rockwall",
    street: "3005 N Goliad St",
    suite: "Ste 120",
    locality: "Rockwall",
    region: "TX",
    postalCode: "75087",
    phone: { display: "(469) 314-1081", tel: "+14693141081", schema: "+1-469-314-1081" },
    email: "thtrockwall@gmail.com",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("The Hole Thing Donuts, 3005 N Goliad St Ste 120, Rockwall, TX 75087"),
    mapEmbed:
      "https://www.google.com/maps?output=embed&q=" +
      encodeURIComponent("The Hole Thing Donuts 3005 N Goliad St Ste 120 Rockwall TX 75087"),
    geo: { lat: 32.951892, lng: -96.463582 },
  },
];

/** Baller Software trial offer shown in the footer and on Contact. */
export const BALLER = {
  name: "Baller Software",
  person: "Greg Ball",
  phone: { display: "(214) 304-9621", tel: "+12143049621" },
  email: "greg@baller.software",
  url: "https://baller.software",
  offer: "$99/mo hosting + upkeep — first month free",
};

export function formatMinutes(m: number): string {
  const hr = Math.floor(m / 60);
  const min = m % 60;
  const suffix = hr >= 12 ? "PM" : "AM";
  const h12 = hr % 12 === 0 ? 12 : hr % 12;
  return `${h12}:${String(min).padStart(2, "0")} ${suffix}`;
}

export function formatDayHours(d: DayHours): string {
  if (d.open === null || d.close === null) return "Closed";
  return `${formatMinutes(d.open)} – ${formatMinutes(d.close)}`;
}

export function schemaTime(m: number): string {
  return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
}

export function mailto(to: string, subject: string, body: string): string {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations & Hours" },
  { href: "/order", label: "Pre-order & Catering" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
