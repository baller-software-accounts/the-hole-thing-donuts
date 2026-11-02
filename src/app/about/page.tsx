import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import { BUSINESS, LOCATIONS } from "@/lib/business";

export const metadata: Metadata = {
  title: "About — Locally Owned Since 2011",
  description: "The Hole Thing Donuts has been locally owned since 2011 — not a franchise. Two hometown donut shops in Forney and Rockwall, Texas.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  { t: "Locally owned", d: `Serving our neighbors since ${BUSINESS.founded}. No corporate playbook — just us.`, e: "🏡" },
  { t: "Not a franchise", d: "Our flavors are our own, from classic glazed to Sopapilla Cheesecake.", e: "✋" },
  { t: "Fun first", d: "We're putting the FUN back into donuts with creative, dessert-inspired flavors.", e: "🎉" },
  { t: "Two shops", d: `${LOCATIONS.map((l) => l.city).join(" and ")} — same donuts, same early hours.`, e: "📍" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our story" title={<>Hometown donuts <span className="text-pink-600">since 2011</span>.</>}>
        The Hole Thing is a locally owned donut shop — not a franchise — with two locations serving Forney and Rockwall, Texas.
      </PageHero>
      <section className="py-12 sm:py-16">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-lg text-cocoa-800">
            <p>
              Since {BUSINESS.founded}, The Hole Thing has been the early-morning stop for families, commuters, teachers and teams. Doors open at 5 AM so the case is full when you need it most.
            </p>
            <p>
              Alongside the classics, we love getting creative — Maple Bacon Bars, Sopapilla Cheesecake, Banana Pudding, Key Lime Pie and Crème Brûlée donuts, plus Texas kolaches for the savory side of breakfast.
            </p>
            <p>Whether it&rsquo;s one glazed on the way to work or ten dozen for the office, we&rsquo;re glad you&rsquo;re here.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/locations" className="btn-primary">Find a shop</Link>
              <Link href="/menu" className="btn-outline">See the menu</Link>
            </div>
          </div>
          <Image src="/images/hero.jpg" alt="Box of assorted gourmet donuts" width={1024} height={576} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
        </div>
        <ul className="container-site mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <li key={v.t} className="card">
              <span className="text-3xl" aria-hidden="true">{v.e}</span>
              <h2 className="h-display mt-2 text-2xl">{v.t}</h2>
              <p className="mt-1 text-cocoa-700">{v.d}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
