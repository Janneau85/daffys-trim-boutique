// Leest een Behold JSON-feed (https://behold.so/docs/json-feeds) in.
export type InstaPost = {
  id: string;
  permalink: string;
  src: string;
  alt: string;
};

type BeholdPost = {
  id?: string;
  permalink?: string;
  mediaType?: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl?: string;
  thumbnailUrl?: string;
  sizes?: { small?: { mediaUrl?: string }; medium?: { mediaUrl?: string } };
  altText?: string;
  prunedCaption?: string;
};

export const MAX_POSTS = 6; // gratis Behold-plan levert er ook 6
const MAX_ALT = 120;
const STANDAARD_ALT = "Foto van Daffy's Trimsalon op Instagram";

function altTekst(p: BeholdPost): string {
  if (p.altText) return p.altText;
  const caption = p.prunedCaption?.trim();
  if (!caption) return STANDAARD_ALT;
  return caption.length <= MAX_ALT ? caption : caption.slice(0, MAX_ALT - 1).trimEnd() + "…";
}

// Behold's eigen, verkleinde webp-versies eerst. Bij een video is mediaUrl het
// videobestand zelf, dus dan alleen de thumbnail.
function afbeelding(p: BeholdPost): string | undefined {
  const verkleind = p.sizes?.medium?.mediaUrl ?? p.sizes?.small?.mediaUrl;
  if (verkleind) return verkleind;
  return p.mediaType === "VIDEO" ? p.thumbnailUrl : p.mediaUrl;
}

export function parseBeholdFeed(data: unknown): InstaPost[] {
  const posts = (data as { posts?: unknown } | null)?.posts;
  if (!Array.isArray(posts)) return [];
  return posts
    .map((p: BeholdPost) => ({
      id: String(p.id),
      permalink: p.permalink,
      src: afbeelding(p),
      alt: altTekst(p),
    }))
    .filter((p) => p.permalink && p.src)
    .slice(0, MAX_POSTS);
}
