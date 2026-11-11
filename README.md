# Odiscom Construction website

Public marketing website for Odiscom Construction LLC, hosted by the existing Vercel project `odiscom-construction` and connected to `www.odiscomconstruction.com`.

## Build

Run `python3 scripts/build.py`. The generator uses only Python's standard library and writes the public site to `dist/`, including a copy of `assets/`.

For local preview, install the pinned development dependency with `npm ci`, then run `npm run dev`. The production site requires no client framework or backend service. Its only client JavaScript controls the responsive navigation.

## Content

Edit service and page content in `scripts/build.py`, styles in `assets/site.css`, and navigation behavior in `assets/site.js`.

Construction services are presented under Odiscom Construction LLC. Engineering experience and professional engineering services belong to Odiscom LLC and link to that company's website. No A&E project has been relabeled as construction experience. Contact links use Bret's previously verified Odiscom business-development details. No inquiry-form delivery test was conducted.

The trench and tower photographs and logo were reused from existing Odiscom website assets. They are used as capability imagery, without attributing them to a particular construction engagement or customer.

## Domain note — November 11, 2026

Vercel reported `www.odiscomconstruction.com` correctly configured. The bare domain was misconfigured, with conflicting AAAA record `2a02:4780:84::32`, external nameservers `athena.dns-parking.com` and `apollo.dns-parking.com`, and A record `216.198.79.1`. The recommended Vercel A values were `216.150.1.1` and `216.150.16.1`. DNS was not changed: Hostinger restricts sign-in from the cloud browser. The site configuration redirects the bare domain to `www` when the request reaches Vercel.
