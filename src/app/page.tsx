import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, BoxIcon, HeartIcon, PhoneIcon } from "@/components/icons";
import { LocationCard } from "@/components/LocationCard";
import { HoursTable, OpenStatusBadge } from "@/components/OpenStatus";
import { SectionHeading } from "@/components/ui";
import { BUSINESS, LOCATIONS } from "@/lib/business";

const FAVORITES = [
  { name: "Maple Bacon Bar", color: "bg-butter" },
  { name: "Crème Brûlée", color: "bg-pink-200" },
  { name: "Sopapilla Cheesecake", color: "bg-mint" },
  { name: "Banana Pudding", color: "bg-butter" },
  { name: "Key Lime Pie", color: "bg-mint" },
  { name: "Classic Glazed", color: "bg-sky" },
  { name: "Jalapeño & Cheese Kolache", color: "bg-pink-200" },
  { name: "Cinnamon Rolls", color: "bg-sky" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-pink-50">
        <div className="sprinkles pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="container-site relative grid items-center gap-10 py-10 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:py-20">
          <div>
            <OpenStatusBadge />
            <h1 className="h-display mt-5 text-[2.75rem] leading-[1] sm:text-7xl">
              Fresh donuts.
              <br />
              <span className="text-pink-600">Two hometown</span> shops.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-cocoa-800 sm:text-xl">
              Locally owned since {BUSINESS.founded} — <strong>not a franchise</strong>. Classic glazed, wild gourmet flavors, Texas kolaches and coffee, made fresh in{" "}
              <strong>Forney</strong> and <strong>Rockwall</strong> every morning from 5 AM.
            </p>
            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
              {LOCATIONS.map((l, i) => (
                <a key={l.slug} href={`tel:${l.phone.tel}`} className={i === 0 ? "btn-primary" : "btn-dark"}>
                  <PhoneIcon className="h-5 w-5" /> Call {l.city} · {l.phone.display}
                </a>
              ))}
            </div>
            <Link href="/order" className="mt-4 inline-flex items-center gap-2 font-display text-lg font-semibold text-pink-700 hover:underline">
              Pre-order dozens or catering <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rotate-2 rounded-[2.5rem] bg-pink-500" aria-hidden="true" />
            <Image
              src="/images/hero.jpg"
              alt="An open pink box of assorted gourmet donuts — glazed, chocolate, maple bacon, crème brûlée and key lime"
              width={1024}
              height={576}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="relative aspect-[4/3] w-full rounded-[2rem] border-4 border-white object-cover shadow-xl sm:aspect-[16/11]"
            />
            <div className="absolute -bottom-5 -left-3 rotate-[-4deg] rounded-2xl bg-butter px-4 py-2 font-display text-lg font-bold text-cocoa-950 shadow-lg sm:-left-6">
              Since 2011 🍩
            </div>
          </div>
        </div>
      </section>

      {/* Ticker of favorites */}
      <section aria-label="Fan favorites" className="border-y-2 border-cocoa-100 bg-white py-5">
        <ul className="container-site flex flex-wrap justify-center gap-2.5">
          {FAVORITES.map((f) => (
            <li key={f.name} className={`rounded-full ${f.color} px-4 py-1.5 font-display font-semibold text-cocoa-950`}>{f.name}</li>
          ))}
        </ul>
      </section>

      {/* Locations */}
      <section className="py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Two locations" title="Pick your shop. Tap to call." center>
            Same donuts, same hours — just pick the one closer to you.
          </SectionHeading>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {LOCATIONS.map((l) => <LocationCard key={l.slug} l={l} />)}
          </div>
        </div>
      </section>

      {/* Menu teaser */}
      <section className="bg-cocoa-950 py-16 text-glaze sm:py-24">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <Image src="/images/kolaches.jpg" alt="Tray of golden sausage kolaches and jalapeño cheese kolaches" width={1024} height={768} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
          <div>
            <p className="eyebrow text-pink-300">Putting the fun back into donuts</p>
            <h2 className="mt-2 font-display text-3xl leading-tight font-bold text-white sm:text-5xl">Classic, gourmet &amp; a little bit wild.</h2>
            <p className="mt-4 text-lg text-cocoa-100">
              From a perfect glazed to Maple Bacon Bars, Sopapilla Cheesecake and Crème Brûlée — plus character donuts for the kids and Texas kolaches for the savory crowd.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/menu" className="btn-primary">See the menu <ArrowIcon className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hours + Pre-order */}
      <section className="py-16 sm:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div className="card">
            <p className="eyebrow">Hours · both shops</p>
            <h2 className="h-display mt-1 text-3xl">Early birds welcome.</h2>
            <HoursTable className="mt-5" />
            <p className="mt-4 text-sm text-cocoa-600">Holiday hours may vary — call your shop if you&rsquo;re cutting it close.</p>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-pink-600 p-6 text-white sm:p-8">
            <div className="sprinkles pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative">
              <BoxIcon className="h-10 w-10" />
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Feeding a crowd?</h2>
              <p className="mt-3 text-lg text-white/95">
                Office mornings, teacher appreciation, church, team snacks, birthdays. Pre-order dozens of donuts and kolaches and we&rsquo;ll have them boxed and ready.
              </p>
              <div className="mt-6 grid gap-3 sm:flex">
                <Link href="/order" className="btn bg-white text-pink-700 shadow-[0_6px_0_0_var(--color-pink-800)] hover:translate-y-0.5">
                  Pre-order &amp; catering
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t-2 border-cocoa-100 bg-white py-16 sm:py-20">
        <div className="container-site grid items-center gap-8 md:grid-cols-[auto_1fr]">
          <HeartIcon className="h-14 w-14 text-pink-500" />
          <div>
            <h2 className="h-display text-3xl sm:text-4xl">Hometown since 2011. Not a franchise.</h2>
            <p className="mt-3 max-w-3xl text-lg text-cocoa-700">
              The Hole Thing is locally owned and run right here — with two shops serving Forney and Rockwall. Every box is made by neighbors, for neighbors.
            </p>
            <Link href="/about" className="mt-4 inline-flex items-center gap-2 font-display text-lg font-semibold text-pink-700 hover:underline">
              Our story <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
