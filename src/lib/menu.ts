/**
 * Menu categories. Item names come from the shop's own public listings
 * (Yelp owner blurb, DoorDash / Grubhub category names). No prices on purpose:
 * prices change and differ in-store vs. delivery. Confirm the full lineup with the owner.
 */
export type MenuCategory = { id: string; name: string; emoji: string; blurb: string; items: string[] };

export const MENU: MenuCategory[] = [
  {
    id: "classic",
    name: "Classic Donuts",
    emoji: "🍩",
    blurb: "The everyday favorites, made fresh before the sun comes up.",
    items: ["Glazed", "Chocolate", "Chocolate Sprinkle", "Strawberry Sprinkle", "Vanilla Sprinkle", "Half glazed / half chocolate dozens"],
  },
  {
    id: "gourmet",
    name: "Gourmet Specialties",
    emoji: "✨",
    blurb: "The fun stuff — dessert-inspired donuts you won't find at a chain.",
    items: ["Maple Bacon Bar", "Crème Brûlée", "Sopapilla Cheesecake", "Banana Pudding", "Key Lime Pie"],
  },
  {
    id: "cake",
    name: "Cake Donuts",
    emoji: "🎂",
    blurb: "Dense, tender cake donuts in rotating flavors.",
    items: ["Double Chocolate Cake", "Rotating cake flavors"],
  },
  {
    id: "character",
    name: "Character & Seasonal",
    emoji: "🎃",
    blurb: "Character donuts and boutique seasonal designs — kids love these.",
    items: ["Character donuts", "Boutique / seasonal donuts", "Holiday designs"],
  },
  {
    id: "twists",
    name: "Twists, Éclairs, Rolls & Fritters",
    emoji: "🥐",
    blurb: "Something for everyone who wants a little more than a ring.",
    items: ["Twists", "Éclairs", "Cinnamon rolls", "Fritters"],
  },
  {
    id: "kolaches",
    name: "Kolaches & Savory Breakfast",
    emoji: "🌭",
    blurb: "Texas-style kolaches for the savory side of breakfast.",
    items: ["Small plain kolache", "Large cheese kolache", "Large jalapeño & cheese kolache", "Kolache dozens"],
  },
  {
    id: "drinks",
    name: "Drinks",
    emoji: "☕",
    blurb: "Something to wash it all down.",
    items: ["Coffee", "Assorted cold drinks"],
  },
  {
    id: "catering",
    name: "Dozens & Catering",
    emoji: "📦",
    blurb: "Boxes by the dozen for the office, school, church or team.",
    items: ["Dozen boxes", "Mixed assortments", "Kolache dozens", "Large pre-orders — call ahead"],
  },
];
