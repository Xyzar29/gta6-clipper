# GTA 6 Clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/xyzar29/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/xyzar29/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

My entry for make.fun's **"Clip GTA 6 for the most YouTube views"** bounty
(`gta6-clipper-01`, $500 shared by the 20 most-watched valid videos).

## The clip

A 20-second vertical Short cut from Rockstar Games' official
**Grand Theft Auto VI Launch Trailer** (15 October 2026, captured in-game
on PlayStation 5).

The moment: a Vice City police chase that ends with a rider launching a
motorcycle off an elevated track, soaring through the air over a train, and
landing on the street below — pure GTA, three and a half seconds in, with
"GTA 6 IS OUT NOW" across the top. The game launched 19 November 2026, so
the hook is the news itself.

Then the clip turns to the viewer: over a slow zoom on Lucia and Jason
cruising Vice City in the red convertible, on-screen text says

> Make clips like this with AI
> and earn money on make.fun
> make.fun/bounty/gta6-clipper-01

The audio is the Launch Trailer's own soundtrack, kept running under the
whole clip. No views were bought or botted — the clip earns its views or it
doesn't.

## The video

`VIDEO.json` holds the public YouTube Short's address. Its description
carries the bounty's line and the entrant's play code, as the rules require.
Places go by the video's views at the deadline (2026-11-23T01:00:00Z).

## Run it

`main.ts` does one thing: it copies `VIDEO.json` from this repository to
the output directory. Node 22, standard library only, no network.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
