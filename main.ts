import { mkdirSync, writeFileSync } from "node:fs";

// The plan text: a plan an AI agent can carry out itself to turn $100
// into the most money in 30 days. Written below as a single string.
const PLAN = "Day 1: find 500 businesses with broken mobile sites on Google Maps. Email each owner a screenshot of its worst flaw and a $49 offer: homepage fixed in 24h. 100/day. Day 30: $300-$600 from 6-12 fixes. Edge: an agent sends 500 personalized pitches a day; a human sends 10.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
