# ID Access — Website

A responsive, one-page editorial website for ID Access, built from the supplied external company profile.

## Files
- `index.html` — page structure and SEO metadata
- `styles.css` — responsive design and visual system
- `script.js` — navigation, scroll progress and animations
- `assets/indonesia-port.jpg` — cover image extracted from the supplied company profile
- `assets/id-access-support.jpg` — additional embedded visual from the supplied company profile

## Before publishing
1. Open `index.html` and replace `YOUR_EMAIL_ADDRESS` in the contact link with the preferred ID Access business email address.
2. Review the I-EU CEPA wording and company claims before publication.
3. Optional: replace or add images in `assets/` with approved, high-resolution ID Access photography.

## Preview locally
Open `index.html` in a browser. For best results, use a local development server (for example, VS Code Live Server).

## Deploy with GitHub + Vercel
1. Create a new GitHub repository, e.g. `id-access-website`.
2. Upload the contents of this folder (not the parent folder) to the repository root. Keep the `assets` folder intact.
3. In Vercel, choose **Add New → Project**, import the GitHub repository.
4. Framework preset: **Other**. Build command: leave blank. Output directory: `.`.
5. Deploy. Future GitHub commits will trigger automatic Vercel deployments.

## Animation and external dependencies
The site uses GSAP + ScrollTrigger and Lenis via CDN, and Google Fonts. These require an internet connection. If those libraries fail to load, the page remains readable and responsive with basic styling.
