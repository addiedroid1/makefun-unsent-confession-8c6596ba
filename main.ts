import { mkdirSync, writeFileSync } from "node:fs";

// Unsent: The Micro-Confession Sprint — one two-part micro-confession.
// Blind pick of 7 candidates: named person (Gran), exact object (her biscuit
// tin) and time (the day she died), two physical actions (ate the last
// biscuit, still lifts the lid), twist (like it might be full again). The
// reason it stayed unsent is felt, never stated: she is gone, so it is too
// late forever — and only Gran's tin makes the message what it is.
// To: Gran — 149 chars total (limit 260), message 140 chars (limit 200).
const text =
  "To: Gran\n" +
  "I ate the last biscuit from your tin the day you died and never told anyone. I still lift the lid when I visit, like it might be full again.";

const chars = [...text].length;
if (chars < 1 || chars > 260 || !text.trim()) {
  throw new Error("entry must be 1-260 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
