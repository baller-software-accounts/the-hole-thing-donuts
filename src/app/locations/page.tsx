import type { Metadata } from "next";
import { LocationCard } from "@/components/LocationCard";
import { HoursTable, OpenStatusBadge } from "@/components/OpenStatus";
import { PageHero } from "@/components/ui";
import { LOCATIONS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Locations & Hours — Forney & Rockwall",
  description: "The Hole Thing Donuts: 571 FM-548 Ste 128, Forney, TX 75126 and 3005 N Goliad St Ste 120, Rockwall, TX 75087. Open Mon–Thu 5 AM–12 PM, Fri–Sun 5 AM–1 PM.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero eyebrow="Locations & hours" title={<>Open early, <span className="text-pink-600">7 days a week</span>.</>}>
        <OpenStatusBadge />
        <p className="mt-4">Both shops keep the same hours. Hours are Central Time.</p>
      </PageHero>
      <section className="py-12 sm:py-16">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_1fr_0.9fr]">
          {LOCATIONS.map((l) => <LocationCard key={l.slug} l={l} map />)}
          <div className="card h-fit lg:sticky lg:top-28">
            <h2 className="h-display text-2xl">Weekly hours</h2>
            <p className="text-sm text-cocoa-600">Forney &amp; Rockwall</p>
            <HoursTable className="mt-4" />
            <p className="mt-4 text-sm text-cocoa-600">Holiday hours may vary. Call your shop to confirm.</p>
          </div>
        </div>
      </section>
    </>
  );
}
