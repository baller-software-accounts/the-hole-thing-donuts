import { BUSINESS, HOURS, LOCATIONS, SITE_URL, schemaTime } from "./business";

function hoursSpec() {
  const groups = new Map<string, string[]>();
  for (const d of HOURS) {
    if (d.open === null || d.close === null) continue;
    const key = `${d.open}-${d.close}`;
    groups.set(key, [...(groups.get(key) ?? []), d.name]);
  }
  return [...groups.entries()].map(([key, days]) => {
    const [open, close] = key.split("-").map(Number);
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: days.map((d) => `https://schema.org/${d}`),
      opens: schemaTime(open),
      closes: schemaTime(close),
    };
  });
}

/** Organization + one Bakery (LocalBusiness subtype) per shop. */
export function siteJsonLd() {
  const orgId = `${SITE_URL}/#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: BUSINESS.name,
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.png`,
        email: BUSINESS.email,
        foundingDate: String(BUSINESS.founded),
        sameAs: [BUSINESS.facebook],
      },
      ...LOCATIONS.map((l) => ({
        "@type": ["Bakery", "LocalBusiness"],
        "@id": `${SITE_URL}/#${l.slug}`,
        name: `${BUSINESS.name} — ${l.city}`,
        parentOrganization: { "@id": orgId },
        description: BUSINESS.description,
        url: `${SITE_URL}/locations#${l.slug}`,
        image: [`${SITE_URL}/images/hero.jpg`, `${SITE_URL}/images/logo.png`],
        telephone: l.phone.schema,
        email: l.email,
        priceRange: "$",
        servesCuisine: ["Donuts", "Kolaches", "Bakery", "Coffee"],
        address: {
          "@type": "PostalAddress",
          streetAddress: `${l.street}, ${l.suite}`,
          addressLocality: l.locality,
          addressRegion: l.region,
          postalCode: l.postalCode,
          addressCountry: "US",
        },
        ...(l.geo ? { geo: { "@type": "GeoCoordinates", latitude: l.geo.lat, longitude: l.geo.lng } } : {}),
        hasMap: l.mapsUrl,
        openingHoursSpecification: hoursSpec(),
        hasMenu: `${SITE_URL}/menu`,
      })),
    ],
  };
}
