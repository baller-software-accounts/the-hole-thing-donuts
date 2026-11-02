import type { Location } from "@/lib/business";
import { HOURS_SUMMARY } from "@/lib/business";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "./icons";

export function LocationCard({ l, map = false }: { l: Location; map?: boolean }) {
  return (
    <article id={l.slug} className="card flex scroll-mt-28 flex-col gap-5 overflow-hidden">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="eyebrow">The Hole Thing</p>
          <h3 className="h-display text-3xl sm:text-4xl">{l.city}</h3>
        </div>
        <span className="rounded-full bg-butter px-3 py-1 font-display text-sm font-semibold text-cocoa-900">{l.suite}</span>
      </div>
      <ul className="grid gap-3 text-[1.02rem]">
        <li className="flex gap-3">
          <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-pink-600" />
          <a href={l.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-700 hover:underline">
            {l.street}, {l.suite}
            <br />
            {l.locality}, {l.region} {l.postalCode}
          </a>
        </li>
        <li className="flex gap-3">
          <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-pink-600" />
          <a href={`tel:${l.phone.tel}`} className="font-semibold hover:text-pink-700 hover:underline">{l.phone.display}</a>
        </li>
        <li className="flex gap-3">
          <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-pink-600" />
          <a href={`mailto:${l.email}`} className="break-all hover:text-pink-700 hover:underline">{l.email}</a>
        </li>
        <li className="flex gap-3">
          <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-pink-600" />
          <span>
            {HOURS_SUMMARY.map((r) => (
              <span key={r.days} className="block">
                <span className="font-semibold">{r.days}</span> · {r.hours}
              </span>
            ))}
          </span>
        </li>
      </ul>
      {map ? (
        <iframe
          title={`Map to The Hole Thing Donuts ${l.city}`}
          src={l.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-[4/3] w-full rounded-2xl border-2 border-cocoa-100"
        />
      ) : null}
      <div className="mt-auto grid gap-3 sm:grid-cols-2">
        <a href={`tel:${l.phone.tel}`} className="btn-primary">
          <PhoneIcon className="h-5 w-5" /> Call {l.city}
        </a>
        <a href={l.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
          <PinIcon className="h-5 w-5" /> Directions
        </a>
      </div>
    </article>
  );
}
