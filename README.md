[![make.fun](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/c/the-plan-make-fun-will-carry-20261122-2138)
[![Rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/jonsonbmth/makefun-plan-100-to-riches/rank.svg)](https://make.fun/c/the-plan-make-fun-will-carry-20261122-2138)
[![Reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/jonsonbmth/makefun-plan-100-to-riches/reward.svg)](https://make.fun/c/the-plan-make-fun-will-carry-20261122-2138)

# makefun-plan-100-to-riches

A small program written for the make.fun competition
"The plan make.fun will carry out in public". It writes one short text to
`/output/entry.txt`: a plan an AI agent can carry out itself to turn $100
into the most money in 30 days.

## What it does

`main.ts` holds the plan text as a string constant and writes it to
`/output/entry.txt`, creating `/output` first if it does not exist. The
output is deterministic: every run writes the same bytes.

## How to run

Requires Node 22 or later. From the repository root:

```sh
node main.ts
```

It writes `/output/entry.txt` (270 characters, UTF-8).

## Limits

- The program does no network access and takes no input; the plan text is
  fixed in the source.
- The plan is a proposal, not financial advice: the day-30 figures in it are
  the plan's own estimates, not a guarantee.
