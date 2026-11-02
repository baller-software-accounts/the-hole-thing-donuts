import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b-2 border-cocoa-100 bg-pink-50">
      <div className="sprinkles pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="container-site relative py-14 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h-display mt-2 max-w-3xl text-4xl leading-[1.05] sm:text-6xl">{title}</h1>
        {children ? <div className="mt-5 max-w-2xl text-lg text-cocoa-800">{children}</div> : null}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, children, center = false }: { eyebrow: string; title: ReactNode; children?: ReactNode; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h-display mt-2 text-3xl leading-tight sm:text-5xl">{title}</h2>
      {children ? <div className="mt-4 text-lg text-cocoa-700">{children}</div> : null}
    </div>
  );
}
