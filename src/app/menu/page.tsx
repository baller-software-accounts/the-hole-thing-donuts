import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import { LOCATIONS } from "@/lib/business";
import { MENU } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Menu — Donuts, Kolaches & Drinks",
  description: "Classic and gourmet donuts, cake donuts, character donuts, twists, éclairs, cinnamon rolls, fritters, kolaches and coffee at The Hole Thing in Forney and Rockwall, TX.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <PageHero eyebrow="Menu" title={<>Something for every <span className="text-pink-600">sweet tooth</span>.</>}>
        A taste of what&rsquo;s in the case. Flavors rotate and sell out — call your shop to check today&rsquo;s lineup or reserve a dozen.
      </PageHero>
      <nav aria-label="Menu categories" className="sticky top-[4.75rem] z-30 border-b-2 border-cocoa-100 bg-glaze/95 backdrop-blur">
        <ul className="container-site flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {MENU.map((c) => (
            <li key={c.id} className="shrink-0">
              <a href={`#${c.id}`} className="inline-flex min-h-10 items-center rounded-full border-2 border-cocoa-100 bg-white px-4 font-display font-semibold text-cocoa-800 hover:border-pink-300 hover:text-pink-700">
                {c.emoji} {c.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <section className="py-12 sm:py-16">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {MENU.map((c) => (
            <article key={c.id} id={c.id} className="card scroll-mt-40">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-2xl" aria-hidden="true">{c.emoji}</span>
                <h2 className="h-display text-2xl sm:text-3xl">{c.name}</h2>
              </div>
              <p className="mt-3 text-cocoa-700">{c.blurb}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.items.map((i) => (
                  <li key={i} className="rounded-full bg-cocoa-50 px-3 py-1 font-medium text-cocoa-900 ring-1 ring-cocoa-100">{i}</li>
                ))}
              </ul>
              {c.id === "catering" ? (
                <Link href="/order" className="btn-primary mt-5">Pre-order &amp; catering</Link>
              ) : null}
            </article>
          ))}
        </div>
        <div className="container-site mt-12 grid items-center gap-8 rounded-3xl bg-white p-6 ring-2 ring-cocoa-100 md:grid-cols-[1fr_1.2fr] sm:p-8">
          <Image src="/images/catering.jpg" alt="Boxes of assorted donuts, donut holes, cinnamon rolls and iced coffee" width={1024} height={768} sizes="(min-width: 768px) 40vw, 100vw" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          <div>
            <h2 className="h-display text-3xl">Prices &amp; today&rsquo;s flavors</h2>
            <p className="mt-3 text-cocoa-700">Prices and specials vary by day and by shop. Give us a call and we&rsquo;ll tell you what&rsquo;s fresh.</p>
            <div className="mt-5 grid gap-3 sm:flex sm:flex-wrap">
              {LOCATIONS.map((l, i) => (
                <a key={l.slug} href={`tel:${l.phone.tel}`} className={i === 0 ? "btn-primary" : "btn-dark"}>Call {l.city} · {l.phone.display}</a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
