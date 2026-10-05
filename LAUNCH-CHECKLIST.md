# Earnova public-launch checklist

## Required before publishing

- Replace `support@your-earnova-domain.example` in `site.js` with a monitored support mailbox.
- Set the live site URL in the Open Graph `og:image` metadata (use an absolute HTTPS image URL after deployment).
- Configure the host to serve `404.html` for unknown routes.
- Review Supabase Authentication settings: correct production site URL, allowed redirect URLs, email-confirmation policy, and rate limits.
- Enable and test Row Level Security for every public table, especially `users`, offers, earnings, and withdrawals. The browser must never be able to read or modify another user’s records or administrative data.
- Confirm the `users` profile insert policy only permits an authenticated user to create a profile for their own `auth_id`; privileged operations belong in protected server-side code.
- Test registration with email confirmation enabled, login, logout, expired session, blocked account, and account-deletion support flow using non-production test accounts.
- Confirm the published domain has HTTPS, a valid social preview image, and no console errors.

## Scope intentionally unchanged

Offer, referral, commission, earnings, and withdrawal logic were not changed. This update only adds public-launch pages, disclosures, navigation, and non-financial account safeguards.
