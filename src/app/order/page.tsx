import type { Metadata } from "next";
import Image from "next/image";
import { BoxIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { PageHero } from "@/components/ui";
import { LOCATIONS, mailto } from "@/lib/business";

export const metadata: Metadata = {
  title: "Pre-order & Catering — Donut Dozens for Any Crowd",
  description: "Pre-order donut and kolache dozens or catering for offices, schools, churches, teams and parties from The Hole Thing in Forney or Rockwall, TX. Call or email your shop.",
  alternates: { canonical: "/order" },
};

const ORDER_BODY = `Hi! I'd like to place a pre-order.

Name:
Phone:
Pickup date & time:
What I'd like (e.g. 2 dozen assorted donuts, 1 dozen jalapeño & cheese kolaches):
Anything else:
`;

const CATERING_BODY = `Hi! I'm interested in catering.

Name:
Phone:
Event date & time:
Event type (office, school, church, team, party...):
Approx. headcount:
Pickup or delivery question:
Notes:
`;

const STEPS = [
  { n: "1", t: "Pick your shop", d: "Forney or Rockwall — whichever is closer to your pickup." },
  { n: "2", t: "Call or email", d: "Tell us what you need, how many and when. Larger orders: give us a day or more notice." },
  { n: "3", t: "Grab & go", d: "We'll have it boxed and ready. Just swing by at your pickup time." },
];

export default function OrderPage() {
  return (
    <>
      <PageHero eyebrow="Pre-order & catering" title={<>Dozens for the <span className="text-pink-600">whole crew</span>.</>}>
        Office breakfasts, teacher appreciation, church mornings, team snacks, birthdays and showers. Order ahead and skip the wait.
      </PageHero>
      <section className="py-12 sm:py-16">
        <div className="container-site">
          <ol className="grid gap-4 sm:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.n} className="card">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-500 font-display text-xl font-bold text-white">{s.n}</span>
                <h2 className="h-display mt-3 text-2xl">{s.t}</h2>
                <p className="mt-1 text-cocoa-700">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {LOCATIONS.map((l) => (
              <article key={l.slug} className="card flex flex-col">
                <p className="eyebrow">Order from</p>
                <h2 className="h-display text-3xl">{l.city}</h2>
                <p className="mt-1 text-cocoa-700">{l.street}, {l.suite}, {l.locality}</p>
                <div className="mt-5 grid gap-3">
                  <a href={`tel:${l.phone.tel}`} className="btn-primary"><PhoneIcon className="h-5 w-5" /> Call {l.phone.display}</a>
                  <a href={mailto(l.email, `Pre-order — The Hole Thing ${l.city}`, ORDER_BODY)} className="btn-outline"><MailIcon className="h-5 w-5" /> Email a pre-order</a>
                  <a href={mailto(l.email, `Catering request — The Hole Thing ${l.city}`, CATERING_BODY)} className="btn-outline"><BoxIcon className="h-5 w-5" /> Request catering</a>
                </div>
                <p className="mt-4 text-sm text-cocoa-600">Email goes to <span className="font-semibold">{l.email}</span>. For same-day orders, please call.</p>
              </article>
            ))}
          </div>
          <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
            <Image src="/images/catering.jpg" alt="Catering spread of donut boxes, donut holes, cinnamon rolls and iced coffee" width={1024} height={768} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
            <div>
              <h2 className="h-display text-3xl sm:text-4xl">Popular for groups</h2>
              <ul className="mt-4 grid gap-2 text-lg text-cocoa-800">
                <li>🍩 Assorted donut dozens — classic, gourmet or a mix</li>
                <li>🌭 Kolache dozens — cheese or jalapeño &amp; cheese</li>
                <li>🎉 Character &amp; seasonal donuts for parties</li>
                <li>🥐 Cinnamon rolls, twists &amp; fritters</li>
              </ul>
              <p className="mt-4 text-cocoa-600">Ask your shop about availability and pricing for large orders.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
