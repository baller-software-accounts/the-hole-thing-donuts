"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/business";

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <ul className="hidden items-center gap-1 lg:flex">
      {NAV_LINKS.map((link) => {
        const active = isActive(pathname, link.href);
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 font-display text-[1.02rem] font-medium transition-colors ${
                active ? "bg-pink-100 text-pink-800" : "text-cocoa-800 hover:bg-cocoa-50 hover:text-cocoa-950"
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
