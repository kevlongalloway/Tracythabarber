# Tracy Tha Barber

Website for Tracy Tha Barber — *the essence of cutting*.

A static site: plain HTML, CSS and JavaScript. No build step, no framework,
no dependencies to install. Open `index.html` and it runs.

## What you have to fill in

**Opening hours are the only placeholder left.** They read
`Tue – Sat · 00:00 – 00:00` in the details block of the `#shop` section,
marked `[SET]` in `index.html`. Set them before the site goes live — or
replace that line with something like "Call or text for today's hours" if
they vary.

Everything else is live:

| What | Value |
|---|---|
| Phone | (229) 410-1355 |
| Shop | Wesley Chapel Crossing, 2440 Wesley Chapel Rd, Suite A, Decatur, GA 30035 |
| Instagram | [@wennonali](https://instagram.com/wennonali) |

The address links out to Google Maps, and the same details are repeated in a
`BarberShop` structured-data block in the page head so the shop can turn up
in local search. **If any of them change, update both places** — the visible
text and the JSON block near the top of `index.html`.

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

## Tracy's portrait

The photo of Tracy in The Barber section is `assets/img/tracy.jpg` (plus a
smaller `tracy@800.jpg` for phones). To swap it, save the replacement at those
two sizes under the same names — the section is built for a tall portrait,
roughly 2:3, with him full-length in the frame.

The copy in that section describes how he works. It makes no claims about
years in business, training or awards — add those yourself if you want them
in there.

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
Add the photo to the strip in The Shop section too if you want it there.

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

The site follows the CRISP (crispmtl.com) design system:

- **Two colours, no accent.** Paper `#F5F4F1` and ink `#09090B`, sampled from
  the reference. Column rules are `#E6E8E4`. Nothing else — the photography
  carries all the colour on the page.
- **Heavy uppercase grotesk headlines**, tight tracking (`-0.035em`), set in
  Archivo at weight 900, with a full stop closing each line: *The Essence. The
  Realness. The Cut.*
- **A serif eyebrow above every headline** — Instrument Serif, sentence case,
  never tracked out. This pairing (delicate serif over heavy grotesk) is the
  signature of the system.
- **Column rules** run the full height of the page behind the content: two
  columns on phones, four on desktop, aligned to the page gutter.
- **Square-cornered buttons**, solid ink on paper and solid paper on ink.
- **Hairline gutters** — the gallery and the photo strip use 1px gaps so the
  photographs read as a single block, the way the reference sets its grids.

Every value lives in the `:root` block at the top of `style.css`. Change it
there and it changes everywhere.

Fonts are self-hosted rather than loaded from Google Fonts, so the site works
on slow connections and doesn't depend on an outside service.

Motion respects `prefers-reduced-motion`; the banner stops scrolling and the
reveal animations are skipped for anyone who has that turned on.

## Photography

The cuts run in full colour in the gallery. The strip in The Shop section is
desaturated on purpose — it sits behind the headline as texture, echoing the
black-and-white portrait grid in the reference. If you want that in colour
too, remove `filter:grayscale(1)` from `.strip img`.
