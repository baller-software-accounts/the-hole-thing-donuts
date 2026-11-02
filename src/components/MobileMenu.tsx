"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LOCATIONS, NAV_LINKS } from "@/lib/business";
import { MenuIcon, PhoneIcon, XIcon } from "./icons";
import { isActive } from "./NavLinks";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-cocoa-100 bg-white text-cocoa-900 hover:bg-cocoa-50"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>
      {open ? (
        <>
          <div className="fixed inset-x-0 top-[4.75rem] bottom-0 z-40 bg-cocoa-950/40 backdrop-blur-[2px]" onClick={close} aria-hidden="true" />
          <div
            ref={panelRef}
            id="mobile-menu"
            className="fixed inset-x-0 top-[4.75rem] z-50 max-h-[calc(100dvh-4.75rem)] overflow-y-auto rounded-b-3xl border-t-2 border-cocoa-100 bg-glaze px-5 pt-3 pb-6 shadow-xl"
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={close}
                        aria-current={active ? "page" : undefined}
                        className={`flex min-h-12 items-center justify-between rounded-2xl px-3 font-display text-xl font-semibold ${
                          active ? "bg-pink-100 text-pink-800" : "text-cocoa-900 hover:bg-cocoa-50"
                        }`}
                      >
                        {link.label}
                        {active ? <span className="h-2.5 w-2.5 rounded-full bg-pink-500" aria-hidden="true" /> : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-4 grid gap-3">
              {LOCATIONS.map((l) => (
                <a key={l.slug} href={`tel:${l.phone.tel}`} className="btn-primary w-full">
                  <PhoneIcon className="h-5 w-5" />
                  Call {l.city} · {l.phone.display}
                </a>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
