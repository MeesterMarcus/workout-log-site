## Workout Logger Site

Static marketing site for IronStack, deployed on Cloudflare Pages.

## Support Form (Formspree)

This repo now includes:

- `support/index.html`: user-facing support page with a Formspree contact form

### Setup

1. Create a form in Formspree.
2. Copy your Formspree endpoint (looks like `https://formspree.io/f/xxxx...`).
3. Replace the placeholder action in `support/index.html`:
   - `action="https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID"`
4. Deploy to Cloudflare Pages.
