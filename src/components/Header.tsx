import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { MobileMenu } from "./MobileMenu";
import { DesktopNav } from "./NavLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-cocoa-100 bg-glaze/90 backdrop-blur-md">
      <nav aria-label="Main" className="container-site flex h-[4.75rem] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${BUSINESS.name} — home`}>
          <Image src="/images/logo.png" alt="" width={68} height={56} priority className="h-14 w-auto" />
          <span className="hidden font-display text-lg leading-tight font-bold text-cocoa-950 sm:block">
            The Hole Thing
            <span className="block text-xs font-medium tracking-[0.2em] text-pink-700 uppercase">Donuts · Since 2011</span>
          </span>
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-2">
          <Link href="/order" className="btn-primary hidden min-h-11 px-5 text-base sm:inline-flex">
            Pre-order
          </Link>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
