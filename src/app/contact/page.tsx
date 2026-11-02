import type { Metadata } from "next";
import { BallerOffer } from "@/components/BallerOffer";
import { FacebookIcon, MailIcon } from "@/components/icons";
import { LocationCard } from "@/components/LocationCard";
import { PageHero } from "@/components/ui";
import { BUSINESS, LOCATIONS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact — Call Forney or Rockwall",
  description: "Contact The Hole Thing Donuts. Forney: (972) 552-5000, thtforney@gmail.com. Rockwall: (469) 314-1081, thtrockwall@gmail.com. General: theholethingdonut@gmail.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Say hi, <span className="text-pink-600">place an order</span>, ask a question.</>}>
        The fastest way to reach us is to call your shop. For everything else, email works great.
      </PageHero>
      <section className="py-12 sm:py-16">
        <div className="container-site grid gap-8 md:grid-cols-2">
          {LOCATIONS.map((l) => <LocationCard key={l.slug} l={l} />)}
        </div>
        <div className="container-site mt-8 grid gap-8 md:grid-cols-2">
          <div className="card">
            <h2 className="h-display text-2xl">General questions</h2>
            <p className="mt-2 text-cocoa-700">Not sure which shop? Email the main inbox.</p>
            <div className="mt-4 grid gap-3 sm:flex sm:flex-wrap">
              <a href={`mailto:${BUSINESS.email}`} className="btn-outline"><MailIcon className="h-5 w-5" /> {BUSINESS.email}</a>
              <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="btn-outline"><FacebookIcon className="h-5 w-5" /> Facebook</a>
            </div>
          </div>
          <BallerOffer variant="card" />
        </div>
      </section>
    </>
  );
}
