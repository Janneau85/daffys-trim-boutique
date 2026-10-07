// Bedragen die op meerdere plekken op de site staan, zodat ze overal hetzelfde zijn.
// De prijslijst per ras staat (nog) niet op de site maar in het boekingsportaal.

// Gebruikt in de sectie Behandelingen en in de algemene voorwaarden.
export const VLOOIENTOESLAG = 27.5;

export function formatPrijs(bedrag: number): string {
  return Number.isInteger(bedrag) ? `€${bedrag}` : `€${bedrag.toFixed(2).replace(".", ",")}`;
}
