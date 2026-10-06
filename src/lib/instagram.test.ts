import { test } from "node:test";
import assert from "node:assert/strict";
import { parseBeholdFeed } from "./instagram.ts";

const post = (extra: Record<string, unknown> = {}) => ({
  id: "1",
  permalink: "https://www.instagram.com/p/abc/",
  mediaType: "IMAGE",
  mediaUrl: "https://cdninstagram.com/origineel.jpg",
  sizes: {
    small: { mediaUrl: "https://behold.pictures/1/small.webp", width: 400, height: 400 },
    medium: { mediaUrl: "https://behold.pictures/1/medium.webp", width: 700, height: 700 },
  },
  altText: "Pomeranian na de trimbeurt",
  ...extra,
});

test("zet een post om naar link, middelgrote afbeelding en alt-tekst", () => {
  assert.deepEqual(parseBeholdFeed({ posts: [post()] }), [
    {
      id: "1",
      permalink: "https://www.instagram.com/p/abc/",
      src: "https://behold.pictures/1/medium.webp",
      alt: "Pomeranian na de trimbeurt",
    },
  ]);
});

test("gebruikt het bijschrift zonder hashtags als alt-tekst ontbreekt, ingekort", () => {
  const lang = "Max kwam vandaag voor zijn eerste trimbeurt en was zo braaf! ".repeat(4);
  const [p] = parseBeholdFeed({ posts: [post({ altText: undefined, prunedCaption: lang })] });
  assert.ok(p.alt.startsWith("Max kwam vandaag voor zijn eerste trimbeurt"));
  assert.ok(p.alt.length <= 120, `alt is ${p.alt.length} tekens`);
  assert.ok(p.alt.endsWith("…"));
});

test("valt terug op een vaste alt-tekst zonder alt-tekst of bijschrift", () => {
  const [p] = parseBeholdFeed({ posts: [post({ altText: "", prunedCaption: "" })] });
  assert.equal(p.alt, "Foto van Daffy's Trimsalon op Instagram");
});

test("valt terug op de kleine afbeelding als er geen middelgrote is", () => {
  const sizes = { small: { mediaUrl: "https://behold.pictures/1/small.webp" } };
  const [p] = parseBeholdFeed({ posts: [post({ sizes })] });
  assert.equal(p.src, "https://behold.pictures/1/small.webp");
});

test("gebruikt bij een video zonder sizes de thumbnail, nooit het videobestand", () => {
  const video = post({
    mediaType: "VIDEO",
    sizes: undefined,
    mediaUrl: "https://cdninstagram.com/video.mp4",
    thumbnailUrl: "https://cdninstagram.com/thumb.jpg",
  });
  const [p] = parseBeholdFeed({ posts: [video] });
  assert.equal(p.src, "https://cdninstagram.com/thumb.jpg");
});

test("slaat posts zonder afbeelding of link over", () => {
  const zonderBeeld = post({ id: "2", sizes: undefined, mediaType: "VIDEO", thumbnailUrl: undefined });
  const zonderLink = post({ id: "3", permalink: undefined });
  const ids = parseBeholdFeed({ posts: [zonderBeeld, post(), zonderLink] }).map((p) => p.id);
  assert.deepEqual(ids, ["1"]);
});

test("toont hoogstens 6 posts", () => {
  const posts = Array.from({ length: 9 }, (_, i) => post({ id: String(i) }));
  assert.equal(parseBeholdFeed({ posts }).length, 6);
});

test("geeft een lege lijst bij een ongeldige feed", () => {
  assert.deepEqual(parseBeholdFeed(null), []);
  assert.deepEqual(parseBeholdFeed({}), []);
  assert.deepEqual(parseBeholdFeed({ posts: "geen lijst" }), []);
});
