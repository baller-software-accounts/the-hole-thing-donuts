"use client";

import { useSyncExternalStore } from "react";
import { HOURS, HOURS_WEEK_ORDER, TIME_ZONE, formatDayHours, formatMinutes } from "@/lib/business";

/*
 * Open/closed status computed in the browser for America/Chicago. The server
 * snapshot is null, so prerender shows a neutral hint and hydration never mismatches.
 */
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let formatter: Intl.DateTimeFormat | null = null;

function getSnapshot(): string {
  formatter ??= new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  const parts = formatter.formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = WEEKDAYS.indexOf(get("weekday"));
  const minutes = (Number(get("hour")) % 24) * 60 + Number(get("minute"));
  return `${day}:${minutes}`;
}
const getServerSnapshot = () => null;
function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  document.addEventListener("visibilitychange", onChange);
  return () => {
    window.clearInterval(id);
    document.removeEventListener("visibilitychange", onChange);
  };
}
function useShopClock() {
  const snap = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!snap) return null;
  const [day, minutes] = snap.split(":").map(Number);
  return day >= 0 ? { day, minutes } : null;
}

function computeStatus(day: number, minutes: number) {
  const today = HOURS[day];
  if (today.open !== null && today.close !== null) {
    if (minutes >= today.open && minutes < today.close) {
      return { open: true, soon: today.close - minutes <= 60, detail: `Closes at ${formatMinutes(today.close)}` };
    }
    if (minutes < today.open) return { open: false, soon: false, detail: `Opens today at ${formatMinutes(today.open)}` };
  }
  for (let o = 1; o <= 7; o++) {
    const next = HOURS[(day + o) % 7];
    if (next.open !== null) {
      return { open: false, soon: false, detail: `Opens ${o === 1 ? "tomorrow" : next.name} at ${formatMinutes(next.open)}` };
    }
  }
  return { open: false, soon: false, detail: "" };
}

export function OpenStatusBadge({ tone = "light" }: { tone?: "light" | "dark" }) {
  const clock = useShopClock();
  const base = "inline-flex min-h-9 items-center gap-2 rounded-full px-3.5 py-1 text-sm font-semibold";
  if (!clock) {
    return (
      <span className={`${base} ${tone === "dark" ? "bg-white/10 text-white/90" : "bg-white text-cocoa-800 ring-2 ring-cocoa-100"}`}>
        <span className="h-2 w-2 rounded-full bg-cocoa-300" aria-hidden="true" />
        Open daily from 5 AM
      </span>
    );
  }
  const s = computeStatus(clock.day, clock.minutes);
  const style = s.open
    ? "bg-emerald-50 text-emerald-800 ring-2 ring-emerald-200"
    : tone === "dark"
      ? "bg-white/10 text-white/90"
      : "bg-white text-cocoa-800 ring-2 ring-cocoa-100";
  const dot = s.open ? (s.soon ? "bg-amber-500" : "bg-emerald-500") : "bg-pink-500";
  return (
    <span className={`${base} ${style}`} role="status">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        {s.open ? <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${dot}`} /> : null}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${dot}`} />
      </span>
      <span>
        {s.open ? (s.soon ? "Closing soon" : "Open now") : "Closed now"}
        {s.detail ? <span className="font-medium opacity-80"> · {s.detail}</span> : null}
      </span>
    </span>
  );
}

export function HoursTable({ className = "" }: { className?: string }) {
  const clock = useShopClock();
  return (
    <table className={`w-full text-left ${className}`}>
      <caption className="sr-only">Hours, both shops (Central Time)</caption>
      <tbody>
        {HOURS_WEEK_ORDER.map((d) => {
          const today = clock?.day === d.index;
          return (
            <tr
              key={d.index}
              aria-current={today ? "date" : undefined}
              className={`border-b-2 border-dashed border-cocoa-100 last:border-0 ${today ? "bg-pink-50" : ""}`}
            >
              <th scope="row" className="py-2.5 pr-3 pl-3 font-semibold text-cocoa-900">
                {d.name}
                {today ? (
                  <span className="ml-2 rounded-full bg-pink-500 px-2 py-0.5 text-[0.7rem] font-bold tracking-wide text-white uppercase">Today</span>
                ) : null}
              </th>
              <td className="py-2.5 pr-3 text-right font-medium tabular-nums text-cocoa-800">{formatDayHours(d)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
