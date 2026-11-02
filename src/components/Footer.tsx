import Image from "next/image";
import Link from "next/link";
import { BUSINESS, HOURS_SUMMARY, LOCATIONS, NAV_LINKS } from "@/lib/business";
import { BallerOffer } from "./BallerOffer";
import { FacebookIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-cocoa-950 pb-24 text-cocoa-100 sm:pb-0">
      <div className="h-3 bg-pink-500 sprinkles" aria-hidden="true" />
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="inline-flex rounded-3xl bg-white p-3">
            <Image src="/images/logo.png" alt={BUSINESS.name} width={120} height={98} className="h-20 w-auto" />
          </div>
          <p className="mt-4 max-w-xs text-cocoa-200">
            Locally owned since {BUSINESS.founded}. Not a franchise — just fresh donuts, kolaches and good mornings in Forney and Rockwall.
          </p>
          <div className="mt-4 flex gap-3 text-sm">
            <a href={`mailto:${BUSINESS.email}`} className="text-white hover:underline">{BUSINESS.email}</a>
          </div>
          <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-white hover:underline">
            <FacebookIcon className="h-5 w-5" /> Facebook
          </a>
        </div>
        {LOCATIONS.map((l) => (
          <div key={l.slug}>
            <h2 className="font-display text-xl font-semibold text-white">{l.city}</h2>
            <address className="mt-3 grid gap-1 not-italic text-cocoa-200">
              <a href={l.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {l.street}, {l.suite}
                <br />
                {l.locality}, {l.region} {l.postalCode}
              </a>
              <a href={`tel:${l.phone.tel}`} className="font-semibold text-white hover:underline">{l.phone.display}</a>
              <a href={`mailto:${l.email}`} className="break-all hover:text-white">{l.email}</a>
            </address>
          </div>
        ))}
        <div>
          <h2 className="font-display text-xl font-semibold text-white">Hours</h2>
          <ul className="mt-3 grid gap-1 text-cocoa-200">
            {HOURS_SUMMARY.map((r) => (
              <li key={r.days}><span className="text-white">{r.days}</span><br />{r.hours}</li>
            ))}
          </ul>
          <ul className="mt-5 grid gap-1 text-sm">
            {NAV_LINKS.slice(1).map((n) => (
              <li key={n.href}><Link href={n.href} className="text-cocoa-200 hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-cocoa-300">© {BUSINESS.founded}–2026 {BUSINESS.name}. Locally owned in Kaufman &amp; Rockwall counties.</p>
          <BallerOffer />
        </div>
      </div>
    </footer>
  );
}
