import { BALLER } from "@/lib/business";

/** Baller Software trial offer — shown in the footer and on the Contact page. */
export function BallerOffer({ variant = "footer" }: { variant?: "footer" | "card" }) {
  if (variant === "card") {
    return (
      <aside className="rounded-3xl border-2 border-dashed border-cocoa-300 bg-cocoa-50 p-6" aria-label="About this website">
        <p className="eyebrow text-cocoa-700">About this website</p>
        <h2 className="h-display mt-1 text-2xl">Like this site? Keep it.</h2>
        <p className="mt-2 text-cocoa-800">
          This site was built as a free preview by <strong>{BALLER.name}</strong>. Keep it live for{" "}
          <strong>{BALLER.offer}</strong>.
        </p>
        <p className="mt-3 text-cocoa-800">
          {BALLER.person} ·{" "}
          <a className="font-semibold text-pink-700 underline" href={`tel:${BALLER.phone.tel}`}>{BALLER.phone.display}</a> ·{" "}
          <a className="font-semibold text-pink-700 underline" href={`mailto:${BALLER.email}`}>{BALLER.email}</a> ·{" "}
          <a className="font-semibold text-pink-700 underline" href={BALLER.url} target="_blank" rel="noopener noreferrer">baller.software</a>
        </p>
      </aside>
    );
  }
  return (
    <p className="text-sm text-cocoa-200">
      Website by{" "}
      <a href={BALLER.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline-offset-2 hover:underline">{BALLER.name}</a>{" "}
      · {BALLER.offer} · {BALLER.person}{" "}
      <a href={`tel:${BALLER.phone.tel}`} className="text-white hover:underline">{BALLER.phone.display}</a> ·{" "}
      <a href={`mailto:${BALLER.email}`} className="text-white hover:underline">{BALLER.email}</a>
    </p>
  );
}
