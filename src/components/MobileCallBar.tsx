import { LOCATIONS } from "@/lib/business";
import { PhoneIcon } from "./icons";

/** Sticky two-button tap-to-call bar on phones — one per shop. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-cocoa-100 bg-glaze/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-2 gap-2">
        {LOCATIONS.map((l, i) => (
          <a
            key={l.slug}
            href={`tel:${l.phone.tel}`}
            className={`flex min-h-12 items-center justify-center gap-2 rounded-full font-display text-base font-semibold ${
              i === 0 ? "bg-pink-600 text-white" : "bg-cocoa-900 text-glaze"
            }`}
          >
            <PhoneIcon className="h-4.5 w-4.5" />
            Call {l.city}
          </a>
        ))}
      </div>
    </div>
  );
}
