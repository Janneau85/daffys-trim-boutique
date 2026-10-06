// Prijzen zoals ze in het boekingsportaal (Looppiness) staan.
// Wijzigt daar een prijs? Pas hem hier ook aan; de site leest alles uit dit bestand.
// Laatst overgenomen uit het portaal: 6 oktober 2026. "\u00a0" = harde spatie, zodat "1 cm" niet afbreekt.

export type Behandeling = {
  naam: string;
  omschrijving?: string;
  inbegrepen?: string[];
  vanaf: number;
};

export const POMERANIAN: Behandeling[] = [
  {
    naam: "Puppy Treatment",
    omschrijving: "Voor pups t/m 6 maanden. Dezelfde verzorging als de Basic Treatment.",
    vanaf: 55,
  },
  {
    naam: "Basic Treatment",
    inbegrepen: [
      "Wassen met shampoo en conditioner",
      "Uitföhnen",
      "Nagels knippen",
      "Voetjes in model",
      "Kontje vrijgemaakt",
      "Oortjes in model (indien gewenst)",
      "Luxe parfum",
    ],
    vanaf: 69,
  },
  {
    naam: "Luxe Treatment",
    omschrijving: "Basic Treatment plus de hele vacht in model geknipt.",
    vanaf: 79,
  },
];

export const RASSEN: Behandeling[] = [
  { naam: "Puppy Treatment (t/m 6 maanden)", vanaf: 55 },
  { naam: "Boomer – scheren (t/m 1\u00a0cm)", vanaf: 63 },
  { naam: "Boomer – modeltrim (vanaf 1\u00a0cm)", vanaf: 75 },
  { naam: "Chihuahua", vanaf: 63 },
  { naam: "Keeshond middenslag (tot 38\u00a0cm)", vanaf: 90 },
  { naam: "Kooiker", vanaf: 71 },
  { naam: "Maltezer – scheren (t/m 1\u00a0cm)", vanaf: 63 },
  { naam: "Maltezer – modeltrim (vanaf 1\u00a0cm)", vanaf: 75 },
  { naam: "Nova Scotia duck tolling retriever", vanaf: 80 },
  { naam: "Shiba inu", vanaf: 65 },
  { naam: "Shih tzu – scheren (t/m 1\u00a0cm)", vanaf: 63 },
  { naam: "Shih tzu – modeltrim (vanaf 1\u00a0cm)", vanaf: 75 },
  { naam: "Teckel langhaar", vanaf: 63 },
  { naam: "Vlinderhondje", vanaf: 63 },
  { naam: "Yorkshire terriër", vanaf: 65 },
];

export const POEDELS_DOODLES: Behandeling[] = [
  { naam: "Toy- of dwergpoedel (tot 35\u00a0cm)", vanaf: 90 },
  { naam: "Mini doodle (tot 43\u00a0cm)", vanaf: 80 },
];

// Ook gebruikt in de algemene voorwaarden, zodat beide plekken hetzelfde bedrag noemen.
export const VLOOIENTOESLAG = 27.5;

export function formatPrijs(bedrag: number): string {
  return Number.isInteger(bedrag) ? `€${bedrag}` : `€${bedrag.toFixed(2).replace(".", ",")}`;
}
