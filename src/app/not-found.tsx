import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site py-24 text-center">
      <p className="text-6xl" aria-hidden="true">🍩</p>
      <h1 className="h-display mt-4 text-4xl sm:text-5xl">Well, that&rsquo;s a hole.</h1>
      <p className="mt-3 text-lg text-cocoa-700">This page doesn&rsquo;t exist — but the donuts do.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="btn-primary">Back home</Link>
        <Link href="/menu" className="btn-outline">See the menu</Link>
      </div>
    </section>
  );
}
