## NorthBound — Bold Streetwear Static Site

A full static clone of the Cuts Clothing site's structure and content (rewritten in our own voice), rebranded as **NorthBound** with a bold streetwear UI — high contrast, oversized typography, gritty texture, urban energy.

### Brand identity
- **Name:** NorthBound
- **Logo:** Custom wordmark + compass-arrow mark (generated as SVG/PNG, transparent)
- **Palette:** Off-black `#0B0B0B`, bone white `#F4F1EA`, concrete gray `#8A8A8A`, signal orange accent `#FF4A1C`
- **Type:** Heavy condensed display (e.g. Bebas Neue / Archivo Black) for headlines, clean sans (Inter) for body
- **Texture:** Subtle grain overlay, sharp dividers, ticker marquees, oversized numerals as section markers

### Pages (TanStack Start routes)
1. `/` — Home: full-bleed hero video/image, marquee ticker, category grid (Tees, Henleys, Polos, Hoodies, Pants), featured drop, "Engineered for everything" story strip, press logos, newsletter
2. `/shop` — Collection grid with category filter chips, sort dropdown, product cards (hover swap image)
3. `/shop/$productId` — PDP: image gallery, size selector, color swatches, fabric/spec accordion, "Complete the fit" recommendations
4. `/about` — Brand story (rewritten), founder note, manufacturing principles, sustainability
5. `/contact` — Contact form (static, toast on submit), FAQ accordion, store locator placeholder

### Content approach
- Pull category names, product types, and section themes from the reference site (premium basics: tees, henleys, polos, hoodies, joggers)
- Rewrite all copy in NorthBound's voice — no verbatim text from source
- Product names and descriptions invented to fit the brand (e.g. "Ridgeline Tee", "Summit Henley")
- ~12 products across categories with placeholder data in `src/data/products.ts`

### Imagery
- Hero + lifestyle: AI-generated streetwear editorial photography (urban, moody, high contrast)
- Product shots: generated flat-lay / on-model images per product
- Logo: generated as transparent PNG via imagegen
- All assets stored in `src/assets/` and pushed to CDN via `lovable-assets`

### Components
Reusable: `Navbar` (sticky, transparent → solid on scroll), `Marquee`, `ProductCard`, `CategoryTile`, `SectionHeader`, `Footer`, `NewsletterForm`, `Accordion`

### Tech
- Pure frontend, no Cloud/DB — products are a static TS array
- Tailwind tokens defined in `src/styles.css` (override existing oklch palette)
- Framer Motion for hero reveal + scroll-triggered text
- SEO: per-route `head()` with unique title/description/og tags

### Out of scope
- Real cart / checkout / payments
- Auth or user accounts
- CMS / admin

Ready to build on your go-ahead.