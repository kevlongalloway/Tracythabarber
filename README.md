# Tracy Tha Barber

Website for Tracy Tha Barber — *the essence of cutting*.

A static site: plain HTML, CSS and JavaScript. No build step, no framework,
no dependencies to install. Open `index.html` and it runs.

## Shop details

Nothing is left to fill in — every detail on the site is real:

| What | Value |
|---|---|
| Phone | (229) 410-1355 |
| Shop | Wesley Chapel Crossing, 2446 Wesley Chapel Rd, Suite A, Decatur, GA 30035 |
| Hours | Mon – Sat, 9am – 7pm · Sunday, 9am – 6pm |
| Instagram | [@wennonali](https://instagram.com/wennonali) |

The address links out to Google Maps, and all of these details are repeated
in a `BarberShop` structured-data block in the page head — that is what
Google reads to show the shop, its hours and its map pin in local results.
**If any detail changes, update both places** — the visible text near the
foot of `index.html` and the JSON block near the top.

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

## The logo

`assets/img/logo.png` is the badge with the white background cut away, so it
sits on the site's near-black. Everything else is generated from it:

| File | Used for |
|---|---|
| `logo.png` | the seal that closes the page, and the logo in the structured data |
| `favicon-32.png`, `favicon-192.png` | the browser tab icon |
| `apple-touch-icon.png` | the icon when someone saves the site to a phone home screen |
| `share-card.jpg` | the picture that appears when the link is pasted into a text, Instagram or Facebook |

The badge is **not** in the top bar. It is a circular seal with four tiers of
type inside it, and the bar is 74px tall — shrunk to fit, the words become
unreadable smudges. The gold also fights a palette that is deliberately two
colours. The typographic wordmark carries the top of the page; the badge
signs off the bottom, on black, where its own background disappears into the
page and the gold reads as intended.

If you want the badge up top, the fix is a simplified mark — just the TB
monogram and the razor, no ring, no small type — which would hold at that
size.

## Getting the logo onto Google

The logo on a Google listing does **not** come from the website. It comes
from the Google Business Profile, and only the profile owner can change it:

1. Sign in at [business.google.com](https://business.google.com) with the
   account that manages the listing.
2. Open the profile → **Edit profile** → **Photos** → **Logo**.
3. Upload the badge — square, at least 720×720. `favicon-512.png` works, or
   the original file.

It usually appears within a few days.

Publishing this site helps in a second way: the page carries a `logo` field
in its structured data pointing at `logo.png`. **Once the site is on a real
domain, change the paths in that block from relative to absolute** (for
example `https://yourdomain.com/assets/img/logo.png`) — Google is much more
reliable about reading absolute URLs there.

## The hero slideshow

The header cycles through five cuts, crossfading every six seconds with a
slow drift in on each new frame.

The slides are `assets/img/hero-1.jpg` … `hero-5.jpg`, each with a smaller
`@900` version for phones. They live in `.hero__slides` in `index.html`.

Each slide carries its own framing, because a wide header crops a tall photo
hard and every cut sits differently in frame:

```html
style="--pos:46% 40%; --pos-d:46% 38%"
```

`--pos` is the crop on phones, `--pos-d` on desktop — the same values
`object-position` takes. Lower the second number to show more of the top of
the head, raise it to show more of the face. Adjust these by eye after
swapping a photo.

Only the first slide loads with the page; the rest are fetched afterwards,
spaced out, so the header paints fast. Anyone browsing with reduced motion
sees the first frame only and the other four are never downloaded.

To change the pace, edit the `6000` in the hero block of `main.js` — keep the
`drift` animation in `style.css` shorter than that interval, or the zoom will
jump when a slide swaps.

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
