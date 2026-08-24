# Tracy Tha Barber

Website for Tracy Tha Barber — *the essence of cutting*.

A static site: plain HTML, CSS and JavaScript. No build step, no framework,
no dependencies to install. Open `index.html` and it runs.

## What you have to fill in

Three things are still placeholders. Open `index.html` and search for `[SET]` —
every spot is marked with a comment.

| What | Where | Placeholder now |
|---|---|---|
| Shop address | `#book` section, "Shop" | `000 Street Name` |
| Opening hours | `#book` section, "Hours" | `Tue – Sat · 00:00 – 00:00` |
| Instagram | `#book` section, "Instagram" | `href="#"` |

## The phone number

**(229) 410-1355** is wired into five places: the header button, the hero
button, the **Call** and **Text** buttons in The Shop, and the number listed
under "Phone". If it ever changes, search `index.html` for `2294101355` and
`(229) 410-1355` — the links use `tel:+12294101355` and `sms:+12294101355`,
so update both the `href` and the visible text.

On a phone, tapping any of them starts the call or opens a text.

## Pricing

Prices live in the `#pricing` section of `index.html`, in the `<ol class="rates">`
list. Each entry is a name, a price and a one-line description — edit the text
directly.

Currently listed:

- Haircut, 17 & under — **$25**
- Haircut, 21 & up — **$40**
- Line-up only — **$20**
- Beard trim only — **$20**
- Shampoo added to a cut — **+$5**

> Note: the two haircut tiers as given leave ages 18–20 unlisted. Decide which
> tier they fall into and adjust the labels.

## Adding photos

1. Drop the new photo in `assets/img/`. Save two sizes with the same name:
   `my-cut.jpg` (about 1200px wide) and `my-cut@800.jpg` (600px wide).
2. Copy an existing `<figure class="shot">` block in the `#gallery` section and
   point it at the new files.
3. Update `alt` (describe the cut — this is what screen readers and Google
   read) and `data-caption` (the line shown in the full-size view).

The gallery is built for **five** photos: two across the top, three below.
If you add more, keep them in multiples that fill the rows — the grid is six
columns wide, where a top-row photo spans 3 and a bottom-row photo spans 2.

Photos are served at two sizes so phones don't download the large files.
Strip location data from photos before publishing them; the ones already here
have had it removed.

## Publishing

Any static host works — GitHub Pages, Netlify, Cloudflare Pages, or plain
shared hosting. There is nothing to compile: upload the whole folder.

For GitHub Pages: repository **Settings → Pages**, set the source to this
branch, root folder. The site is live a minute later.

## Files

```
index.html            the whole page
assets/css/style.css  design system — colours, type and layout live at the top
assets/js/main.js     menu, scroll reveals, photo lightbox
assets/fonts/         Archivo (self-hosted, so the site loads without a CDN)
assets/img/           the cuts, plus the favicon
```

## Design notes

The colour and type system is defined once, in the `:root` block at the top of
`style.css`. Change a value there and it updates everywhere:

- `--ink` `#0E0D0C` — near-black, used for text and the dark sections
- `--bone` `#F2EEE5` — warm off-white paper
- `--gold` `#C08A2E` — the single accent; prices, numbers, highlights
- `--sans` — Archivo, set in heavy uppercase with tight letter-spacing

Layout follows an editorial grid: oversized headlines, hairline rules,
numbered sections and full-bleed photography. The barber-pole stripe between
sections and the scrolling banner are the only decorative elements — the
photos do the rest of the work.

Fonts are self-hosted rather than loaded from Google Fonts, so the site works
on slow connections and doesn't depend on an outside service.

Motion respects `prefers-reduced-motion`; the banner stops scrolling and the
reveal animations are skipped for anyone who has that turned on.
